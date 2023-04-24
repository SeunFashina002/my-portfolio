import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import { NotFound } from "../pages/Error404";
import {Oval} from 'react-loader-spinner'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../DetailsComponent/slidestyle.css";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BASE_URL } from "../constants/Base_url";

export default function SlideShow({ id }) {
  const [slideshows, setSlideshows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getSlideShows() {
      try {
        let response = await fetch(
          `${BASE_URL}/projects/${id}/detail/slideshows`
        );
        const data = await response.json();
        setSlideshows(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setSlideshows("not found");
        setIsLoading(false);
      }
    }

    getSlideShows();
  }, [id]);


  if (slideshows === "not found") {
    return <NotFound />;
  }

  return (
    <div className="container">
      {isLoading === true ? (
        <div className="loader-container">
          <Oval
            height={80}
            width={80}
            color="#e5e7eb"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#e5e7eb"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
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
          effect={"fade"}
          speed={800}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          {slideshows.map((slideshow, index) => (
            <SwiperSlide key={index}>
              <img src={slideshow.image} alt={slideshow.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
