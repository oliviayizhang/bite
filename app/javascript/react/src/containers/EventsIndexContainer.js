import React from 'react'

class EventsIndexContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: props.rsvp
    }
    this.toggleButton = this.toggleButton.bind(this)
    this.handleRsvpSubmit = this.handleRsvpSubmit.bind(this)
    this.handleRsvpDelete = this.handleRsvpDelete.bind(this)
  }

  toggleButton() {
    this.setState({active: !this.state.active})
  }

  handleRsvpSubmit() {
    let formPayLoad = {
      user_id: this.props.current_user.id,
      event_id: this.props.id
    }
    this.props.addRsvp(formPayLoad)
  }

  handleRsvpDelete() {
    fetch(`/api/v1/rsvps/${this.props.id}`, {
      method: 'DELETE'}
    )
  }

  render() {
    console.log(this.state.active);
    let button
    let joinButton =  <button onClick={() => (
      this.toggleButton(),
      this.handleRsvpSubmit()
    )}>Join</button>

    let leaveButton =
      <button onClick={() => (this.toggleButton(), this.handleRsvpDelete)}>Leave</button>

    button = this.state.active? leaveButton : joinButton

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
