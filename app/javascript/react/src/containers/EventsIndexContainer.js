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
    let button
    let joinButton =  <button onClick={() => (this.handleRsvpSubmit())}>Join</button>

    let leaveButton = <button onClick={() => (this.handleDelete())}>Leave</button>

    button = this.props.rsvp? leaveButton : joinButton

    return(
        <div>
            {this.props.creator.username} is going to:
            <a href={`/events/${this.props.id}`}><h4>{this.props.name}</h4></a>
            {this.props.meal_type} at {this.props.time}
            <p>- {this.props.group.name}</p>
            {button}

            <button>See who is going</button>
        </div>

    )
  }
}

export default EventsIndexContainer
