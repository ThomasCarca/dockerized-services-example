import React, { Component } from 'react'
import { Marker, Popup, LayerGroup } from 'react-leaflet'
import { marker_purple } from '../../public/icon_renderer/icons'
import { REST_URI } from '../config'

const GET_ALL_QUERY = 'banc';

export default class LeafletMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      banc: [],
    };
  }

  componentDidMount() {
    fetch(REST_URI + GET_ALL_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ banc: data }));
  }

  renderFirst() {
    var result = [];
    this.state.banc.forEach(b => {
      result.push(
        <Marker position={b.geometry.coordinates.reverse()} icon={marker_purple}/>
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