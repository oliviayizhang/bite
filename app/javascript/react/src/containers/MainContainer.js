import React from 'react'
import GroupTile from '../components/GroupTile'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: []
    }
    //bind
  }

  componentDidMount() {
    fetch('api/v1/groups')
    .then(response => response.json())
    .then(body => {
      console.log(body)
      this.setState( { groups: body.groups })
    })
  }

  render() {
    console.log(this.state.groups)
    let groups = this.state.groups.map((group) => {
      return (
        <GroupTile
          key={group.id}
          id={group.id}
          name={group.name}
        />
      )
    })
    return(
      <div>
        <h3>Your Groups:</h3>
        {groups}
      </div>
    )
  }
}

export default MainContainer
