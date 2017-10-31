import React from 'react'
import GroupTile from './GroupTile'
import EventTile from './EventTile'
import EventFormContainer from '../containers/EventFormContainer'

class GroupShowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group: {},
      events: [],
      current_user: null,
      group_users: []
    }
    //bind
    this.fetchGroupAndEvents = this.fetchGroupAndEvents.bind(this)
    this.addNewEvent = this.addNewEvent.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/users`, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({current_user: data.user })
    })
    .then(this.fetchGroupAndEvents())
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

  render() {
    console.log(this.state.group_users);
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
                  location={event.location}
                  meal_type={event.meal_type}
                  time={event.time}
                  addNewEvent={this.addNewEvent}
               />
      })
    }
    return(
      <div className="wrapper">

          {grouptile}

          <div className="events-list">
            {eventtile}

            <h4>Today I want to go..</h4>
            <EventFormContainer
              groupId={this.state.group.id}
              addNewEvent={this.addNewEvent}
            />
          </div>

      </div>
    )
  }
}

export default GroupShowContainer
