import React from 'react'

class EventDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: {},
      users: []
    }
    this.initMap = this.initMap.bind(this)
  }

  componentDidMount() {
    let eventId = this.props.params.id;
    fetch(`/api/v1/events/${eventId}`, {
      credentials: 'same-origin',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({event: data.event, users: data.users})
      this.initMap()
    })
  }

  initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: this.state.event.latitude, lng: this.state.event.longitude },
      zoom: 18,
    })
    let marker = new google.maps.Marker({
      position: { lat: this.state.event.latitude, lng: this.state.event.longitude },
      map: map
    })
  }

  render() {
    let users = this.state.users.map((user) => {
      return <li key={user.id}><i className="material-icons material-icons-face">face</i>{user.first_name}</li>
    })

    return(
      <div className="event-detail">
        <h2>{this.state.event.name}</h2>
        <h3 id="event-time">{this.state.event.meal_type} at {this.state.event.time}</h3>
        <i className="material-icons material-icons-react">location_on</i><p>We'll meet here: {this.state.event.address}</p>
        <div id="map"></div>

        <ul className="rsvps">
          <h4>Rsvps</h4>
          {users}
        </ul>
      </div>
    )
  }
}

export default EventDetail
