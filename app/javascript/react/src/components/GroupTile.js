import React from 'react'
import GroupDetail from './GroupDetail'

class GroupTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      group: {},
      events: [],
      current_user: null
    }
    //bind
    this.fetchGroup = this.fetchGroup.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/users`, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({current_user: data.user })
    })
    .then(this.fetchGroup())
  }

  fetchGroup() {
    let groupId = this.props.params.id
    fetch(`/api/v1/groups/${groupId}`, {
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ group: data.group, events: data.events})
    })
  }

  render() {
    let groupdetail;
    if (this.state.current_user) {
      groupdetail = <GroupDetail
                      groupname={this.state.group.name}
                      events={this.state.events}
                   />
    }
    return(
      <div>
        {groupdetail}
      </div>
    )
  }
}

export default GroupTile
