import { useState, useEffect, useRef } from 'react'
import {
  GoogleMapProvider,
  usePlacesService,
} from '@ubilabs/google-maps-react-hooks'

const mapOptions = {
  zoom: 12,
  center: {
    lat: 40.59,
    lng: -122.39,
  },
}

export default function App() {
  const [mapContainer, setMapContainer] = useState(null)
  const placesService = usePlacesService()

  return (
    <GoogleMapProvider
      googleMapsAPIKey={process.env.NEXT_PUBLIC_API_KEY}
      options={mapOptions}
      mapContainer={mapContainer}
    >
      {/* <div ref={(node) => setMapContainer(node)} style={{ height: '100vh' }} /> */}
      <button onClick={() => console.log(placesService)}>Log</button>
    </GoogleMapProvider>
  )
}
