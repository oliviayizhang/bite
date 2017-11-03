import React from 'react'
import GroupIndexContainer from './GroupIndexContainer'
import EventsIndexContainer from './EventsIndexContainer'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
      current_user: null,
      events: [],
      rsvps: []
    }
    this.fetchGroups = this.fetchGroups.bind(this)
    this.fetchEvents = this.fetchEvents.bind(this)
    this.addRsvp = this.addRsvp.bind(this)
    this.fetchRsvps = this.fetchRsvps.bind(this)
  }

  componentDidMount() {
    fetch('api/v1/users.json', {
      credentials: 'same-origin',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState ({current_user: data.user})
      this.fetchGroups()
      this.fetchEvents()
      this.fetchRsvps()
    })
  }

  fetchGroups() {
    fetch('/api/v1/groups', {
      credentials: 'same-origin',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({groups: data.groups})
    })
  }

  fetchEvents() {
    fetch('/api/v1/events', {
      credentials: 'same-origin',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({events: data})
    })
  }

  fetchRsvps() {
    fetch('/api/v1/rsvps', {
      credentials: 'same-origin',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({rsvps: data.rsvps})
    })
  }

  addRsvp(formPayLoad) {
    fetch('/api/v1/rsvps', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(formPayLoad)
    })
  }

  render() {
    let groups = this.state.groups.map((group) => {
      return (
        <GroupIndexContainer
          key={group.id}
          id={group.id}
          name={group.name}
        />
      )
    })

    let rsvp_ids = this.state.rsvps.map(rsvp => rsvp.event_id)
    let events = this.state.events.map((event) => {
      return(
        <EventsIndexContainer
          key={event.id}
          id={event.id}
          rsvp={rsvp_ids.some(rsvp_id => rsvp_id == event.id) ? true : false}
          location={event.location}
          meal_type={event.meal_type}
          time={event.time}
          group={event.group}
          current_user={this.state.current_user}
          user={event.user}
          addRsvp={this.addRsvp}
          handleSelect={() => this.handleSelect(event.id)}
        />
      )
    })

    return(
      <div className="wrapper">

        <div className="groups-index">
          <h3>Your Groups:</h3>
          {groups}
        </div>

        <div className="events-index">
          <h3>What's happening today...</h3>
          {events}
        </div>

      </div>
    )
  }
}

export default MainContainer
