import React from 'react'
import GroupTile from './GroupTile'
import EventTile from '../containers/EventTile'
import GeosuggestForm from '../containers/GeosuggestForm'

class GroupShowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group: {},
      events: [],
      rsvps: [],
      current_user: null,
      group_users: []
    }
    this.fetchGroupAndEvents = this.fetchGroupAndEvents.bind(this)
    this.addNewEvent = this.addNewEvent.bind(this)
    this.fetchRsvps = this.fetchRsvps.bind(this)
    this.addRsvp = this.addRsvp.bind(this)
    this.handleRsvpDelete = this.handleRsvpDelete.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/users`, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({current_user: data.user })
      this.fetchGroupAndEvents()
      this.fetchRsvps()
    })
  }

  fetchGroupAndEvents() {
    let groupId = this.props.params.id
    fetch(`/api/v1/groups/${groupId}`, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ group: data.group, events: data.events, group_users: data.users})
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

  addNewEvent(formPayLoad) {
    fetch('/api/v1/events.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(formPayLoad)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ events: this.state.events.concat(data.event)})
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
    let grouptile;
    let eventtile
    if (this.state.current_user) {
      grouptile = <GroupTile
                      group={this.state.group}
                      group_users={this.state.group_users}
                   />
      eventtile = this.state.events.map((event) => {
        return <EventTile
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
      })
    }
    return(
      <div className="wrapper">

          {grouptile}

          <div className="events-list">
            {eventtile}

            <GeosuggestForm
              groupId={this.state.group.id}
              userId={this.state.current_user}
              addNewEvent={this.addNewEvent}
            />
          </div>
      </div>
    )
  }
}

export default GroupShowContainer
