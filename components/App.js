import { useState, useEffect, useRef } from 'react'
import {
  GoogleMapProvider,
  useGoogleMap,
} from '@ubilabs/google-maps-react-hooks'

const mapOptions = {
  zoom: 12,
  center: {
    lat: 43.68,
    lng: -79.43,
  },
}

export default function App() {
  const [mapContainer, setMapContainer] = useState(null)
  return (
    <GoogleMapProvider
      googleMapsAPIKey={process.env.NEXT_PUBLIC_API_KEY}
      options={mapOptions}
      mapContainer={mapContainer}
    >
      <div ref={(node) => setMapContainer(node)} style={{ height: '100vh' }} />
    </GoogleMapProvider>
  )
}
