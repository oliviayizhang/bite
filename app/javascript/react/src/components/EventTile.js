import React from 'react'
import EventFormContainer from '../containers/EventFormContainer'

class EventTile extends React.Component {
  render() {
    return(
      <div>
        <h3>{this.props.name}</h3>
        {this.props.meal_type} at {this.props.time}
      </div>
    )
  }
}

export default EventTile
