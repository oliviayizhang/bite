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
        {this.props.location} - {this.props.meal_type} - {this.props.group}
      </div>
    )
  }
}

export default EventsIndexContainer
