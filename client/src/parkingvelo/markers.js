import React, { Component } from 'react'
import { Marker, Popup, LayerGroup } from 'react-leaflet'
import { marker_lightblue } from '../../public/icon_renderer/icons'
import { REST_URI } from '../config'

const GET_ALL_QUERY = 'parkingvelo';

export default class LeafletMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parkingvelo: [],
    };
  }

  componentDidMount() {
    fetch(REST_URI + GET_ALL_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ parkingvelo: data }));
  }

  renderFirst() {
    var result = [];
    this.state.parkingvelo.forEach(b => {
      result.push(
        <Marker position={b.geometry.coordinates.reverse()} icon={marker_lightblue}>
        {b.properties.COMMUNE &&
          <Popup>
            <span>{b.properties.COMMUNE}</span>
          </Popup>
        }
        </Marker>
      )        
    });
    return result;
  }

  render() {
    
    return (
      <LayerGroup>
      {this.renderFirst()}
      </LayerGroup>
    )
  }
}