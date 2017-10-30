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
        {this.props.location} - {this.props.meal_type}
      </div>
    )
  }
}

export default EventsIndexContainer
