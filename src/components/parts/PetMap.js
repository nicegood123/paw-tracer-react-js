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

const samplePets = [
  
  {
      id:1,
      pet_name:'Sky',
      longitude: 7.053506026220152 ,
      latitude: 125.56282560206422,
      collar_status: 1,
  },
 
  {
      id:2,
      pet_name:'Leo',
      longitude: 7.053446671928238,
      latitude: 125.56285032225432,
      collar_status: 1,
  },
  {
      id:3,
      pet_name:'Mr. Biggles',
      longitude: 7.053434801068953 ,
      latitude: 125.56295319014205,
      collar_status: 1,
  },
  
]

const PetMap = () => {
  return (
    <MapContainer style={{height:'88vh', width:'100%'}} center={[7.053365137465563, 125.56270541921515]} zoom={60} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          samplePets.map(({id, pet_name, longitude, latitude})=>{
              return(
                <Marker key={id} position={[longitude, latitude]}>
                  <Popup>
                      {pet_name}
                  </Popup>
                </Marker>
              );
          })
        }
    </MapContainer>
  )
}

export default PetMap