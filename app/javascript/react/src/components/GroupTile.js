import React from 'react'

class GroupTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let users = this.props.group_users.map((group_user) => {
      return <li key={group_user.id}>{group_user.username}</li>
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
