import React from 'react'

class EventsIndexContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    //bind
  }

  render() {
    return(
      <div>
        <div className="events-detail">
          {this.props.location} - {this.props.meal_type}
        </div>
        <div className="events-group">
          ----- {this.props.group.name} -----
        </div>
      </div>
    )
  }
}

export default EventsIndexContainer
