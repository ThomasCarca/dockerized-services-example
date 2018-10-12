import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
} from 'react-leaflet'
const { BaseLayer, Overlay } = LayersControl
import AireJeux from './airejeux/markers'
import Bancs from './banc/markers'
import Bars from './bar/markers'
import ParkingVelos from './parkingvelo/markers'
import Bus from './bus/multiLines'

const pau = [43.3, -0.37]
const markers = [[43.4, -0.39], [43.35, -0.379], [43.25, -0.365], [43.2, -0.375]]

export default class LeafletMap extends Component {
  render() {

    return (
      <Map center={pau} zoom={13} style={{height:"800px",width:"100%",position:"relative"}}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
    
          <Overlay name="Aires de jeux">
          <AireJeux />
          </Overlay>

          <Overlay name="Bancs">
          <Bancs />
          </Overlay>

          <Overlay name="Bars">
          <Bars />
          </Overlay>

          <Overlay name="Parking à velos">
          <ParkingVelos />
          </Overlay>

          <Overlay name="Lignes de bus">
          <Bus />
          </Overlay>

        </LayersControl>
      </Map>
    )
  }
}