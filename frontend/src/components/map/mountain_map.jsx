import { useState, useCallback } from "react"
import { GoogleMap, Marker, useJsApiLoader  } from '@react-google-maps/api';
const MountainMap = (props) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD3UjB3WEylKqqr9rnOYJwEiaOYL8tNqT4"
    })
    const [map, setMap] = useState(null)
    const containerStyle = {
      width: '400px',
      height: '400px'
    };
    
    const center = {
      lat: 40.6514,
      lng: -111.5080
    };

  const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
    
    const onUnmount = useCallback(function callback(map) {
    setMap(null)
    }, [])

    const handleMouseOver = (mountain) => {
      console.log(mountain.name)
    }

    //https://console.cloud.google.com/google/maps-apis/build/locator-plus?project=shredder-352722
    const markers = props.mountains.map( (mountain, i) => {
      const {name, location: {latitude, longitude}} = mountain
      const cords = {lat: parseFloat(latitude), lng: parseFloat(longitude)}
      return <Marker position={cords} key={i} onMouseOver={()=>handleMouseOver(mountain)}/>
    })
    return isLoaded ? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
        { 
          markers
        } 
        <></>
        </GoogleMap>
    ) : <></>
}


export default MountainMap