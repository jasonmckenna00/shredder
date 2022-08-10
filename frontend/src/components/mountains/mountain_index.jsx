import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { INDEX } from '../../utils/mountain_util'
import MountainCard from '../mountains/mountain_card'
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMountains } from '../../actions/mountain_actions';
import 'react-multi-carousel/lib/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import no_image from '../../assets/images/video-not-working.png'
// import mountain_default from '../../assets/images/mountain-default.jpg'
// import Carousel from "react-multi-carousel";

const MountainIndex = () => {
  const mountains = useSelector(state => Object.values(state.mountains))
  const dispatch = useDispatch()

  useEffect(() => {
    if (mountains.length === 0){
      dispatch(getAllMountains())
    }
    
  }, [mountains, dispatch])

  const mountList = mountains.map((mount,i) =>{
    return<MountainCard 
      key={i}
      mountain={mount}
      type={INDEX}
      />
  })
  
  return (
    <div className='featured-mountains'>
      <h3>Featured Mountains</h3>
      <Carousel showArrows={true} showThumbs={false}>
          {mountList}
      </Carousel>
    </div> 
  )
}


export default withRouter(MountainIndex)