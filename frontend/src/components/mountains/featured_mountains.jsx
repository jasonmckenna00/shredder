import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { INDEX } from '../../utils/mountain_util'
import MountainCard from './mountain_card'
// import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMountains } from '../../actions/mountain_actions';
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper";

// import 'swiper/css'
// import 'react-multi-carousel/lib/styles.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import no_image from '../../assets/images/video-not-working.png'
// import mountain_default from '../../assets/images/mountain-default.jpg'
// import Carousel from "react-multi-carousel";

const FeaturedMountains = () => {
  const mountains = useSelector(state => Object.values(state.mountains))
  const dispatch = useDispatch()

  // const getLocation = useCallback(() =>{
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition, showError);
  //   } else { 
  //     console.error("Geolocation is not supported by this browser.")
  //   }
  // },[navigator.geolocation])


  useEffect(() => {
    
    if (mountains.length === 0){
      navigator.geolocation.getCurrentPosition(function(position){
        // const [lat, long] = [position.coords.latitude, position.coords.longitude]
        console.log('featured-mountains')
        

      })
      dispatch(getAllMountains())
    }
    
  }, [mountains, dispatch])

  

  // function showError(error) {
  //   switch(error.code) {
  //     case error.PERMISSION_DENIED:
  //       console.error("User denied the request for Geolocation.")
  //       break;
  //     case error.POSITION_UNAVAILABLE:
  //       console.error("Location information is unavailable.")
  //       break;
  //     case error.TIMEOUT:
  //       console.error("The request to get user location timed out.")
  //       break;
  //     case error.UNKNOWN_ERROR:
  //       console.error("An unknown error occurred.")
  //       break;
  //   }
  // }


  const mountList = mountains.map((mount,i) =>{
    return(
      <SwiperSlide key={i}>
        <MountainCard 
            key={mount.id}
            mountain={mount}
            type={INDEX}
            className='swiper-slide'
          />
      </SwiperSlide>
            

    )
  })
  

  
  
  return (
    <div className='featured-mountains-container'>
      <h3>Featured Mountains</h3>
      
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 10000,
          disableOnInteraction: false
        }}
        navigation={true}
        // modules={[Pagination, Navigation, Autoplay]}
        modules={[Pagination, Navigation, Autoplay]}

        style={{width: "66%"}}
      >
        {mountList}
      </Swiper>

    </div> 
  )
}


export default withRouter(FeaturedMountains)