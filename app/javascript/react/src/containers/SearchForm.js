import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    // this.onChange = (address) => this.setState({ address })
    // this.handleFormSbumit = this.handleFormSbumit.bind(this)
  }

  handleFormSbumit(event) {
    event.preventDefault()
    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const inputProps = {
      value: this.props.value,
      name: this.props.name,
      onChange: this.props.handleInputChange,
    }

    return(
      <label>{this.props.label}
          <PlacesAutocomplete
            inputProps={inputProps}
          />
      </label>
    )
  }
}

export default SearchForm
