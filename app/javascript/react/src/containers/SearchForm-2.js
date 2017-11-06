import React from 'react';
import ReactDOM from 'react-dom';
import Geosuggest from 'react-geosuggest';

class App extends React.Component {
  /**
   * Render the example app
   */
  render() {
    var fixtures = [
      {label: 'Old Elbe Tunnel, Hamburg', name: {lat: 53.5459, lng: 9.966576}},
      {label: 'Reeperbahn, Hamburg', name: {lat: 53.5495629, lng: 9.9625838}},
      {label: 'Alster, Hamburg', name: {lat: 53.5610398, lng: 10.0259135}}
    ];

    return (
      <div>
        <Geosuggest
          ref={el=>this._geoSuggest=el}
          placeholder="Start typing!"
          initialValue="Hamburg"
          fixtures={fixtures}
          onSuggestSelect={this.onSuggestSelect}
          name={new google.maps.LatLng(53.558572, 9.9278215)}
          radius="20" />

        {* Buttons to trigger exposed component functions *}
        <button onClick={()=>this._geoSuggest.focus()}>Focus</button>
        <button onClick={()=>this._geoSuggest.update('New Zealand')}>Update</button>
        <button onClick={()=>this._geoSuggest.clear()}>Clear</button>
        <button onClick={()=>this._geoSuggest.selectSuggest()}>Search</button>
      </div>
    )
  }

  /**
   * When a suggest got selected
   * @param  {Object} suggest The suggest
   */
  onSuggestSelect(suggest) {
    console.log(suggest);
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
