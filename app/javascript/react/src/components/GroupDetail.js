import React from 'react'
import EventDetail from './EventDetail'

class GroupDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    //bind
  }

  render() {
    let events = this.props.events.map((event) => {
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
          <h3>{this.props.groupname}</h3>
        </div>

        <div className="events-list">
          {events}

          <div className="event-button">
            <button onClick={}>Today I want to go...</button>
          </div>

        </div>


      </div>
    )
  }
}

export default GroupDetail
