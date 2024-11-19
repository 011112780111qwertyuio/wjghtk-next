"use client";
import React from "react";
import './slider-images.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ModalViewVideo from "../modal-view-video/modal-view-video";
import ModalViewImages from "../modal-view-images/modal-view-images";
function SliderImages({ data, local, datavideo }) {
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
  return (
    <div className="slider-images">
      {data?.state === "ok" ?
        <>
          <Carousel
            responsive={responsive}
            swipeable={true}
            infinite={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            autoPlay={true}
            slidesToSlide={1}
            transitionDuration={1000}
            customTransition="all 1s ease-in-out"
          >
            {JSON.parse(data?.data?.show_room).map((item, index) => (
              <div key={index}>
                <img priority="true" src={local + "/" + process.env.NEXT_PUBLIC_API_KEY_PATHIMAGES + "/" + item} alt="" />
              </div>

            ))}

          </Carousel>
          <div className="modal-slider">
            <div className="row-icon">
              <ModalViewImages outicon={true} local={local} data={JSON.parse(data?.data?.show_room)} />
              <ModalViewVideo showcamira={true} link={data?.data?.linkType} />
            </div>
          </div>
        </>
        :
        <div className="loading">
          <span className="loader"></span>
        </div>
      }





      {/* stop modal slider */}
    </div>


  )

}
export default React.memo(SliderImages);