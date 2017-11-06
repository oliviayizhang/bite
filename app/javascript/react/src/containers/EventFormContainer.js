import React from 'react'
import EventInputField from '../components/EventInputField'
import GeosuggestForm from './GeosuggestForm'

class EventFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      meal_type: '',
      time: ''
    }
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
      name: this.state.name,
      address: this.state.address,
      meal_type: this.state.meal_type,
      time: this.state.time,
      group_id: this.props.groupId,
      user_id: this.props.userId.id
    }
    this.props.addNewEvent(formPayLoad)
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        {/* <EventInputField
          label='Where:'
          name='name'
          value={this.state.name}
          handleInputChange={this.handleInputChange}
        /> */}
        <br />
        <GeosuggestForm/>
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
