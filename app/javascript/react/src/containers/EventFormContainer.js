import React from 'react'
import EventInputField from '../components/EventInputField'

class EventFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      meal_type: '',
      time: ''
    }
    //bind
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayLoad = {
      location: this.state.location,
      meal_type: this.state.meal_type,
      time: this.state.time,
      group_id: this.props.groupId
    }
    this.props.addNewEvent(formPayLoad)
    // window.location.href=`/groups/${this.props.groupId}`
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <EventInputField
          label='Where:'
          name='location'
          value={this.state.location}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <EventInputField
          label='For:'
          name='meal_type'
          value={this.state.meal_type}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <EventInputField
          label='Time:'
          name='time'
          value={this.state.time}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <input type='submit' value='post to the group' />
      </form>
    )
  }
}

export default EventFormContainer
