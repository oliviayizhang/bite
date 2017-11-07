import React from 'react'

class EventTile extends React.Component {
  constructor(props) {
    super(props)
    this.handleRsvpSubmit = this.handleRsvpSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

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
    let joinButton =  <button onClick={() => (this.handleRsvpSubmit())}>I'm going</button>

    let leaveButton = <button onClick={() => (this.handleDelete(this.props.rsvp.id))}>Change my mind</button>

    button = this.props.rsvp ? leaveButton : joinButton

    return(
        <div>
            {this.props.creator.username} is going to:
            <a href={`/events/${this.props.id}`}><h4>{this.props.name}</h4></a>
            {this.props.meal_type} at {this.props.time}
            <p>- {this.props.group.name}</p>
            {button}
        </div>

    )
  }
}

export default EventTile
