import React from 'react'
import TextInputField from '../components/TextInputField'

class GroupFormContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      group: {},
      current_user: null
    }
    //bind
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addNewGroup = this.addNewGroup.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ current_user: data.user });
    })
  }

  handleInputChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayLoad;
    if (this.state.current_user) {
      formPayLoad = {
        name: this.state.name
      }
    }
    this.addNewGroup(formPayLoad)
    window.location.href="/"
  }

  addNewGroup(formPayLoad) {
    fetch('/api/v1/groups', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify(formPayLoad)
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ group: data})
    })
  }

  render() {
    console.log(this.state.current_user);
    return(
      <form onSubmit={this.handleSubmit}>
        <h3>Create a new group here:</h3>
        <TextInputField
          label='Group Name:'
          name='name'
          value={this.state.name}
          handleInputChange={this.handleInputChange}
        />
      <input type='submit' value='create' />
      </form>
    )
  }
}

export default GroupFormContainer
