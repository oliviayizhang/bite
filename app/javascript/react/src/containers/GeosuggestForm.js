import React from 'react'
import Geosuggest from 'react-geosuggest'

class GeosuggestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: null
    }
    this.onSuggestSelect = this.onSuggestSelect.bind(this)
  }

  onSuggestSelect(suggest) {
    this.setState({address: suggest.gmaps.formatted_address
                  })

    console.log(suggest);
  }

  render() {
    console.log(this.state.address);
    let restaurantDetail
    if (this.state.address) {
      restaurantDetail =
      <div>
        <li>Address: {this.state.address}</li>
      </div>
    }

    return(
      <div>
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Where do you want to go today..."
          initialValue=""
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(42.3601, 71.0589)}
          radius="20"
          country="us"
          highlightMath="true"
          />
        {/* <button onClick={()=>this._geoSuggest.selectSuggest()}>Search</button> */}
        <button onClick={()=>this._geoSuggest.clear()}>Clear</button>

        {restaurantDetail}
      </div>
    )
  }
}
export default GeosuggestForm
