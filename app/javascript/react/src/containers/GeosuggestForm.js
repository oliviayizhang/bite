import React from 'react'
import Geosuggest from 'react-geosuggest'
import EventInputField from '../components/EventInputField'

class GeosuggestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      address: '',
      meal_type: '',
      time:'',
      rating: '',
      map: {}
    }
    this.onSuggestSelect = this.onSuggestSelect.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getPlaceDetail = this.getPlaceDetail.bind(this)
    this.initMap = this.initMap.bind(this)
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
      map: suggest.location
    })
    this.getPlaceDetail(suggest.placeId)
    // this.initMap()
    console.log(suggest);
    console.log(this.state.map);
    // console.log(suggest.location);
    // console.log(this.state.rating);
  }

  getPlaceDetail(placeId) {
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyB_V74R4zGTdA3CQh5dOFUGrPDuB5zVEV8`, {
      credentials: 'same-origin',
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({rating: data.rating})
    })
  }

  initMap() {
    map = new Google.maps.Map(document.getElementById('map'), {
      center: this.state.map,
      zoom: 15,
    })
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
    let restaurantDetail
    if (this.state.name) {
      restaurantDetail =
      <div>
        <li>Address: {this.state.address}</li>
      </div>
    }

    return(
      <form onSubmit={this.handleSubmit}>
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Where do you want to go today..."
          initialValue=""
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(42.3601, 71.0589)}
          radius="20"
          country="us"
          />
        {/* <button onClick={()=>this._geoSuggest.selectSuggest()}>Search</button> */}
        {/* <button onClick={()=>this._geoSuggest.clear()}>Clear</button> */}
        {restaurantDetail}
        <br />
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
export default GeosuggestForm
