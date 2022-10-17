import React from 'react'
import { MapContainer,Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
});

const TrackMe = ({longitude, latitude, name}) => {
  return (
    <MapContainer style={{height:'88vh', width:'100%'}} center={[7.053365137465563, 125.56270541921515]} zoom={60} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker  position={[longitude, latitude]}>
            <Popup>
                {name}
            </Popup>
        </Marker>
              
    </MapContainer>
  )
}

export default TrackMe