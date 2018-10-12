import React, { Component } from 'react'
import { Marker, Popup, LayerGroup } from 'react-leaflet'
import { marker_red } from '../../public/icon_renderer/icons'
import { REST_URI } from '../config'

const GET_ALL_QUERY = 'bar';

export default class LeafletMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bar: [],
    };
  }

  componentDidMount() {
    fetch(REST_URI + GET_ALL_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ bar: data }));
  }

  renderFirst() {
    var result = [];
    this.state.bar.forEach(b => {
      result.push(
        <Marker position={b.geometry.coordinates.reverse()} icon={marker_red}>
        {b.properties.name && b.properties.address &&
          <Popup>
            <span>{b.properties.name} <br/> {b.properties.address}</span>
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