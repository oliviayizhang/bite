import React from 'react'

class GroupShowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
    }
    //bind
  }

  render() {
    return(
      <div>
        <a href={`/groups/${this.props.id}`}>{this.props.name}</a>
      </div>
    )
  }
}

export default GroupShowContainer
