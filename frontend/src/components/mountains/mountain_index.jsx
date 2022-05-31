import React, { useEffect} from 'react'
import { withRouter } from 'react-router'
import { INDEX } from '../../utils/mountain_util'
import MountainCardContainer from '../mountains/mountain_card_container'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MountainIndex = (props) => {
  
  useEffect(() => {
    const fetchMountains = () => {
      props.getAllMountains()
    } 

    fetchMountains()
  }, [])

  const mountList = props.mountains.map((mount,i) =>{
    // console.log(mount)
    return<MountainCardContainer 
      key={i}
      mountain={mount}
      type={INDEX}
      />
  })

  return (
    <div className='featured-mountains'>
      <h3>Featured Mountains</h3>
      <div className='card-deck mountain-index'> 
        {mountList}
      </div>
      <Carousel responsive={responsive}>
        {mountList}
      </Carousel>
    </div> 
  )

}


export default withRouter(MountainIndex)