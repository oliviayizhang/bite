import React from 'react'

class EventsIndexContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // active: props.rsvp
    }
    this.handleRsvpSubmit = this.handleRsvpSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  // toggleButton() {
  //   this.setState({active: !this.state.active})
  // }

  handleRsvpSubmit() {
    let formPayLoad = {
      user_id: this.props.current_user.id,
      event_id: this.props.id
    }
    this.props.addRsvp(formPayLoad)
  }

  handleDelete(id) {
    this.props.handleRsvpDelete(id)
  }

  render() {
    console.log(this.props.rsvp);
    let button
    let joinButton =  <button onClick={() => (this.handleRsvpSubmit())}>Join</button>

    let leaveButton = <button onClick={() => (this.handleDelete())}>Leave</button>

    button = this.props.rsvp? leaveButton : joinButton

    return(
      <a href={`/events/${this.props.id}`}>
        <div>
            <h4>{this.props.location} - {this.props.meal_type} at {this.props.time}</h4>
            <p>{this.props.group.name}</p>
            {button}

            <button>See who is going</button>
        </div>
      </a>
    )
  }
}

export default EventsIndexContainer
