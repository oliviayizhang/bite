import React from 'react'

class EventDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    //bind
  }

  render() {
    return(
      <div>
        <h3>{this.props.location}</h3>
        {this.props.meal_type} at {this.props.time}
      </div>
    )
  }
}

export default EventDetail
