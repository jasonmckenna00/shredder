import React from "react";
import { SEARCH } from '../../utils/mountain_util';
import MountainCard from '../mountains/mountain_card';

import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const MountainSearchResults = () => {
  const searchResults = useSelector(state => Object.values(state.searchMountains)) //coming from welcome page container
  // const { height, width } = useWindowDimensions();
  const mountainSearchList = searchResults.map( (mount, i)=>{
    // console.log(mount)
    return (
      <SwiperSlide key={i}>
        <MountainCard 
          key={mount.id}
          mountain={mount}
          type={SEARCH}
          />
      </SwiperSlide>
    )
    
    
  })
  // console.log(mountainSearchList.length)
  const mountCount = mountainSearchList.length
  const numSlidesPerView = mountCount < 5 ? mountCount : 5
  
  return(
    <div className="featured-mountains-container mountain-search-results-container">
      <h3>Search Results</h3>
      <div className="featured-mountains">
        <Swiper 
          slidesPerView={numSlidesPerView}
          breakpoints = {{
            0:{
              slidesPerView:1
            },

            650:{
              slidesPerView: mountCount < 3 ? mountCount : 3
            }
            ,
            1100:{
              slidesPerView: mountCount < 4 ? mountCount : 4,
            },
            1400: {
              slidesPerView: mountCount < 5 ? mountCount : 5,
            }
          }}
          modules={[Pagination]}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          loop={false}
          loopFillGroupWithBlank={true}

        >
          {mountainSearchList}  

        </Swiper>

      </div>
    </div> 
  )

}

export default withRouter(MountainSearchResults)