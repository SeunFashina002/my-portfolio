import React, { useEffect,  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";


import "../DetailsComponent/slidestyle.css"


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SlideShow() {
    let [slideshows, setSlideshows] = useState([])

    useEffect(() => {
        getSlideShows()
    }, [])

    let getSlideShows = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/projects/detail/slideshows')
        let data = await response.json()
        setSlideshows(data);
    }



  return (
    <div className="container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={'fade'}
        speed={800}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slideshows.map((slideshow, index) => (
          <SwiperSlide>
            <img key={index} src={slideshow.image} alt={slideshow.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

