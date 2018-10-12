import React, { Component } from 'react'
import { Marker, Popup, LayerGroup } from 'react-leaflet'
import { marker_green } from '../../public/icon_renderer/icons'
import { REST_URI } from '../config'

const GET_ALL_QUERY = 'airejeux';

export default class LeafletMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airejeux: [],
    };
  }

  componentDidMount() {
    fetch(REST_URI + GET_ALL_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ airejeux: data }));
  }

  renderFirst() {
    var result = [];
    this.state.airejeux.forEach(aire => {
      result.push(
        <Marker position={aire.geometry.coordinates.reverse()} icon={marker_green}>
        {aire.properties.NOM && aire.properties.TYPE &&
          <Popup>
            <span>{aire.properties.NOM} <br/> {aire.properties.TYPE}</span>
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