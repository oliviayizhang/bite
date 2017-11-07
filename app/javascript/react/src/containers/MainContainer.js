import React from 'react'
import GroupIndexContainer from './GroupIndexContainer'
import EventTile from './EventTile'

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
    this.handleRsvpDelete = this.handleRsvpDelete.bind(this)
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
      this.fetchEvents()
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
      this.fetchRsvps()
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
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({rsvps: data.rsvps})
    })
  }

  handleRsvpDelete(id) {
    fetch(`/api/v1/rsvps/${id}.json`, {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      this.setState({rsvps: data.rsvps})
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

    // let rsvp_ids = this.state.rsvps.map(rsvp => rsvp.event_id)
    let events = this.state.events.map((event) => {
      return(
        <EventTile
          key={event.id}
          id={event.id}
          rsvp={this.state.rsvps.find(rsvp => rsvp.event_id == event.id) || null}
          name={event.name}
          address={event.address}
          meal_type={event.meal_type}
          time={event.time}
          group={event.group}
          current_user={this.state.current_user}
          creator={event.user}
          addRsvp={this.addRsvp}
          handleRsvpDelete={this.handleRsvpDelete}
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
