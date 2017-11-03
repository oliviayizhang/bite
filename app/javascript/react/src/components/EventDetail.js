import React from 'react'

class EventDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: {},
      users: []
    }
    //bind
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
    })
  }

  render() {
    let users = this.state.users.map((user) => {
      return <li key={user.id}>{user.username}</li>
    })

    return(
      <div className="event-detail">
        <h2>{this.state.event.location}</h2>
        <p>{this.state.event.meal_type} at {this.state.event.time}</p>
        <ul>
          <h4>These people are going..</h4>
          {users}
        </ul>
      </div>
    )
  }
}

export default EventDetail
