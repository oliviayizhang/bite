import React from 'react'

class GroupTile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div>
          <h3>{this.props.group.name}</h3>
      </div>
    )
  }
}

export default GroupTile
