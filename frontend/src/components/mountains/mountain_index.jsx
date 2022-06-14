import React, { useEffect} from 'react'
import { withRouter } from 'react-router'
import { INDEX } from '../../utils/mountain_util'
import MountainCardContainer from '../mountains/mountain_card_container'
// import no_image from '../../assets/images/video-not-working.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import mountain_default from '../../assets/images/mountain-default.jpg'
// import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };

const MountainIndex = (props) => {
  
  useEffect(() => {
    if (props.mountains.length === 0){
      props.getAllMountains()
    }
    
  }, [props.mountains])

  const mountList = props.mountains.map((mount,i) =>{
    // console.log(mount)
    return<MountainCardContainer 
      key={i}
      mountain={mount}
      type={INDEX}
      // className="legend"
      />
  })
  
  return (
    <div className='featured-mountains'>
      <h3>Featured Mountains</h3>
      {/* <div className='card-deck mountain-index'> 
        {mountList}
      </div> */}
      {/* <Carousel responsive={responsive}>
        {mountList}
      </Carousel> */}
      <Carousel showArrows={true} showThumbs={false}>
          {mountList}
      </Carousel>
    
    
    
    </div> 
  )

}


export default withRouter(MountainIndex)