import React, { Component } from 'react'
import { Marker, Popup, LayerGroup, GeoJSON } from 'react-leaflet'
import { marker_lightblue } from '../../public/icon_renderer/icons'
import { REST_URI } from '../config'

const GET_ALL_QUERY = 'bus';

export default class LeafletMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bus: [],
    };
  }

  componentDidMount() {
    console.log(process.env)
    fetch(REST_URI + GET_ALL_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ bus: data }));
  }

  render() {

    return (
      <LayerGroup>
      <GeoJSON key={Math.random()} data={this.state.bus} />
      </LayerGroup>
    )
  }
}
