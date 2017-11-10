import React from 'react'

class GroupTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let users = this.props.group_users.map((group_user) => {
      return <li key={group_user.id}><i className="material-icons">face</i>   {group_user.first_name}</li>
    })

    return(
      <div className="group-title">
        <h3>{this.props.group.name}</h3>
        {users}
      </div>
    )
  }
}

export default GroupTile
