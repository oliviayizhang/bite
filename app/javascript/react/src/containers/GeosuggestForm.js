import React from 'react'
import Geosuggest from 'react-geosuggest'
import EventInputField from '../components/EventInputField'
import DropDownInput from '../components/DropDownInput'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TimeInput from '../components/TimeInput'
/* global google */

class GeosuggestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      address: '',
      meal_type: '',
      time: null,
      latitude: null,
      longitude: null
    }
    this.onSuggestSelect = this.onSuggestSelect.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.initMap = this.initMap.bind(this)
    this.handleChangeTimePicker12 = this.handleChangeTimePicker12.bind(this)
  }

  handleInputChange(event) {
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]: value})
  }

  onSuggestSelect(suggest) {
    this.setState({
      address: suggest.gmaps.formatted_address,
      name: suggest.description,
      latitude: suggest.location.lat,
      longitude: suggest.location.lng
    })
    this.initMap({ lat: this.state.latitude, lng: this.state.longitude })
  }

  // getPlaceDetail(placeId) {
  //   fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyB_V74R4zGTdA3CQh5dOFUGrPDuB5zVEV8`, {
  //     credentials: 'same-origin',
  //     method: "GET",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({rating: data.rating})
  //   })
  // }

  initMap(location) {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 18,
    })
    let marker = new google.maps.Marker({
      position: location,
      map: map
    })
  }

  handleChangeTimePicker12 = (event, date) => {
    let time = new Date(date)
    let hours = time.getHours()
    let minutes = time.getMinutes()

    this.setState( { time: `${hours}:${minutes}` } );
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayLoad = {
      name: this.state.name,
      address: this.state.address,
      meal_type: this.state.meal_type,
      time: this.state.time,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      group_id: this.props.groupId,
      user_id: this.props.userId.id
    }
    this.props.addNewEvent(formPayLoad)
  }

  render() {
    console.log(this.state.time);
    let restaurantDetail
    if (this.state.name) {
      restaurantDetail =
      <div class="group-show-map-container">
        <p id="geosuggest-address">Address: {this.state.address}</p>
        <div id="map"></div>
      </div>
    }

    return(
      <form onSubmit={this.handleSubmit} id="geo-form">
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Where do you want to go today..."
          initialValue=""
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(42.3601, 71.0589)}
          radius="20"
          country="us"
          />

        {restaurantDetail}

        <br />
        <DropDownInput
          label=''
          name='meal_type'
          value={this.state.meal_type}
          handleInputChange={this.handleInputChange}
        />
        <br />
        <MuiThemeProvider>
          <TimeInput
            label='Time:'
            name='time'
            value={this.state.time}
            handleChangeTimePicker12={this.handleChangeTimePicker12}
          />
        </MuiThemeProvider>
        <input type='submit' value='post to the group' id="geo-form-button" />
      </form>
    )
  }
}
function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}
export default GeosuggestForm
