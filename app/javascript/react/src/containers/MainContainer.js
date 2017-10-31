import React from 'react'
import GroupIndexContainer from './GroupIndexContainer'
import EventsIndexContainer from './EventsIndexContainer'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [],
      current_user: null,
      events: []
    }
    this.fetchGroups = this.fetchGroups.bind(this)
    this.fetchEvents = this.fetchEvents.bind(this)
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
    })
    .then(this.fetchGroups())
    .then(this.fetchEvents())
  }

  fetchGroups() {
    fetch('api/v1/groups', {
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
    fetch('api/v1/events', {
      credentials: 'same-origin',
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({events: data.events})
    })
  }

  render() {
    console.log(this.state.events);
    let groups = this.state.groups.map((group) => {
      return (
        <GroupIndexContainer
          key={group.id}
          id={group.id}
          name={group.name}
        />
      )
    })

    let events = this.state.events.map((event) => {
      return(
        <EventsIndexContainer
          key={event.id}
          id={event.id}
          location={event.location}
          meal_type={event.meal_type}
          time={event.time}
          group={event.group_id}
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
