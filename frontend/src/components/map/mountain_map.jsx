import { useState, useCallback, useEffect } from "react"
import { GoogleMap, Marker, useJsApiLoader  } from '@react-google-maps/api';
const MountainMap = (props) => {

    const [location, setLocation] = useState({
      lat: 40.6514,
      lng: -111.5080
    })

    useEffect(()=> {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);

      });
    },[location])
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    const [map, setMap] = useState(null)
    const containerStyle = {
      width: '400px',
      height: '400px'
    };

  const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(location);
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
        center={location}
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