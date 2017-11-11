import React from 'react';
import TimePicker from 'material-ui/TimePicker';

class TimeInput extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <TimePicker
         format="ampm"
         hintText="Pick a time"
         value={this.props.value}
         onChange={this.props.handleChangeTimePicker12}
       />
      </div>
    )
  }
}

export default TimeInput;
