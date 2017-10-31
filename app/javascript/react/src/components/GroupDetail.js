import React from 'react'
import EventDetail from './EventDetail'
import EventFormContainer from '../containers/EventFormContainer'

class GroupDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: props.events
    }
    //bind
    this.addNewEvent = this.addNewEvent.bind(this)
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
    let events = this.state.events.map((event) => {
      return <EventDetail
                key={event.id}
                id={event.id}
                location={event.location}
                meal_type={event.meal_type}
                time={event.time}
             />
    })

    return(
      <div className="wrapper">

        <div className="group-title">
          <h3>{this.props.group.name}</h3>
        </div>

        <div className="events-list">
          {events}

          <div className="event-form">
            <h4>Today I want to go..</h4>
            <EventFormContainer
              groupId={this.props.group.id}
              addNewEvent={this.addNewEvent}
            />
          </div>

        </div>


      </div>
    )
  }
}

export default GroupDetail
