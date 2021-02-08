// import React from 'react';
// import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// var new Map = () => {
//     const libraries = ["places"]

//     const mapContainerStyle = {
//         width: "40vw",
//         height: "20vh"
//     };

//     const center = {lat: 33.872760, lng: 151.205340}

//     const {isLoaded, loadError} = useLoadScript({
//         googleMapsApiKey: process.env.REACT_APP_GOOGLLE_MAPS_API_KEY, libraries
//     });

//     if (loadError) return("Error loading map");
//     if (!isLoaded) return("Loading map");

//     return 
// <div className="location">
//     <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}/>
// </div>

// }

// export default Map;

import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
    lat: 33.872760, 
    lng: 151.205340
}

function Locution() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}>
      </GoogleMap>
  ) : <></>
}

export default Locution;