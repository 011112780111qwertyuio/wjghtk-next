"use client";
import axios from "axios";
import Moment from 'react-moment';
import ModalViewImages from "../modal-view-images/modal-view-images";
import ModalViewVideo from "../modal-view-video/modal-view-video";
import React, { useState, useEffect, useCallback } from "react";
import './slider-cards-tour.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import { faStar, faArrowRight, faClock, faHandHoldingDollar, faHeart, faLocationDot, faVideo } from "@fortawesome/free-solid-svg-icons";
const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });
import "react-multi-carousel/lib/styles.css";
import PriceComponent from "@/app/_functions/getCountry.js";
import Link from "next/link";
import LoadingElement from "../loadingElement/loadingElement";
function SliderCardsTour({ local }) {

  /* start show data */
  const [alldata, sedata] = useState([]);
  const [isloading, setisloading] = useState(true);
  const showdata = async () => {
    setisloading(true);
    const obj2 = new FormData();
    obj2.append("val_order", "dataTime");
    obj2.append("type_order", "desc");
    const url = `${local}/${process.env.NEXT_PUBLIC_API_KEY_ALLTOURS}`;
    await axios.post(url, obj2).then((res) => {
      if (res.data.length > 0) {
        sedata(res.data);
      }
      else {
        setisloading(true);
      }
    });
    setisloading(false);
  }
  useEffect(() => {
    showdata();
  }, [])
  /* stop show data */
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1105 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1105, min: 870 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 870, min: 644 },
      items: 2
    },
    mobileSmall: {
      breakpoint: { max: 644, min: 0 },
      items: 1
    }
  };
  const count = [1, 2, 3, 4, 5];
  const Reviws =useCallback(async(idTour, typeTrafel)=>{
      let loading = true;
      let data = 1;
      const url = `${local}/${process.env.NEXT_PUBLIC_API_KEY_SHOWCOMMENTS}`;
      const obj = new FormData();
      obj.append("idTour", idTour);
      obj.append("typetrafel", typeTrafel);
      await axios.post(url, obj).then((res) => {
        if (res?.data?.state === "ok") {
          let _5star = res.data.data.filter(r => r.Quality == 5).length;
          let _4star = res.data.data.filter(r => r.Quality == 4).length;
          let _3star = res.data.data.filter(r => r.Quality == 3).length;
          let _2star = res.data.data.filter(r => r.Quality == 2).length;
          let _1star = res.data.data.filter(r => r.Quality == 1).length;
          let _5starLoc = res.data.data.filter(r => r.Location_comment == 5).length;
          let _4starLoc = res.data.data.filter(r => r.Location_comment == 4).length;
          let _3starLoc = res.data.data.filter(r => r.Location_comment == 3).length;
          let _2starLoc = res.data.data.filter(r => r.Location_comment == 2).length;
          let _1starLoc = res.data.data.filter(r => r.Location_comment == 1).length;
          let _5starAmenities = res.data.data.filter(r => r.Amenities == 5).length;
          let _4starAmenities = res.data.data.filter(r => r.Amenities == 4).length;
          let _3starAmenities = res.data.data.filter(r => r.Amenities == 3).length;
          let _2starAmenities = res.data.data.filter(r => r.Amenities == 2).length;
          let _1starAmenities = res.data.data.filter(r => r.Amenities == 1).length;
          let _5starServices = res.data.data.filter(r => r.Services == 5).length;
          let _4starServices = res.data.data.filter(r => r.Services == 4).length;
          let _3starServices = res.data.data.filter(r => r.Services == 3).length;
          let _2starServices = res.data.data.filter(r => r.Services == 2).length;
          let _1starServices = res.data.data.filter(r => r.Services == 1).length;
          let _5starPrice = res.data.data.filter(r => r.Price_comment == 5).length;
          let _4starPrice = res.data.data.filter(r => r.Price_comment == 4).length;
          let _3starPrice = res.data.data.filter(r => r.Price_comment == 3).length;
          let _2starPrice = res.data.data.filter(r => r.Price_comment == 2).length;
          let _1starPrice = res.data.data.filter(r => r.Price_comment == 1).length;
          //Sum of individual star.
          let sumOfRating = parseInt(_5star + _4star + _3star + _2star + _1star + _5starLoc + _4starLoc + _3starLoc + _2starLoc + _1starLoc + _5starAmenities + _4starAmenities + _3starAmenities + _2starAmenities + _1starAmenities + _5starServices + _4starServices + _3starServices + _2starServices + _1starServices + _5starPrice + _4starPrice + _3starPrice + _2starPrice + _1starPrice);
          //Total number of rating
          let overallRating = parseInt(5 * _5star + 4 * _4star + 3 * _3star + 2 * _2star + 1 * _1star + 5 * _5starLoc + 4 * _4starLoc + 3 * _3starLoc + 2 * _2starLoc + 1 * _1starLoc + 5 * _5starAmenities + 4 * _4starAmenities + 3 * _3starAmenities + 2 * _2starAmenities + 1 * _1starAmenities + 5 * _5starServices + 4 * _4starServices + 3 * _3starServices + 2 * _2starServices + 1 * _1starServices + 5 * _5starPrice + 4 * _4starPrice + 3 * _3starPrice + 2 * _2starPrice + 1 * _1starPrice);
          //Average of all rating
          let averageRating = parseFloat(overallRating / sumOfRating);
          //Percentage of each star rating
          data = averageRating.toFixed(1)
        }
        else {
          data = 1;
        }
        loading = false;
      })
      return (
        <div className="review-start">
          {loading === false ? <>
            <div className="stars">
              {[...Array(5)].map((star, indexx) => {
                const currentRating = indexx + 1;
                return (
                  <label key={indexx}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                    />
                    <FontAwesomeIcon className="star"
                      icon={faStar}
                      color={currentRating <= (data) ? "#ffc107" : "#e4e5e9"}
                    />
  
                  </label>
  
                );
              })}
  
  
            </div>
          </> : <LoadingElement />
          }
        </div>
  
      );
    




  }) 
  return (
    <div className="slider-cards-tour">
      <div className="slider-cards">
        {isloading === false && alldata.length > 0 ?
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
            {alldata?.map((item, index) => (
              <div dir="rtl" key={index} className="mycard">
                <Link href={`/pages/open-card-tour-page/?id=${item.id}`} className="myimg">
                  <div className="flex">
                    <div>
                      {
                        +item.selling_price < +item.price &&
                        <p className="off">{Math.floor((+item.price - +item.selling_price) / (+item.price) * (100)) + "% "}خصم</p>
                      }
                      {item.Enable_the_feature === "on" &&
                        <p>مميز</p>
                      }
                    </div>
                    <span>
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                  </div>
                  <img priority="true" src={local + "/" + process.env.NEXT_PUBLIC_API_KEY_PATHIMAGES + "/" + item.Featured_image} alt="" />
                </Link>
                <div className="content">
                  <div className="flex-top">
                    <div className="left">

                      {Reviws(item?.id, "tour")}
                    </div>
                    {false &&
                      <div className="right">
                        <ModalViewImages outicon={true} local={local} data={JSON.parse(item?.show_room)} />
                        <ModalViewVideo link={item?.linkType} showcamira={true} />
                      </div>
                    }
                  </div>
                  <div className="secnd-title">
                    <p>{item?.title}</p>
                    <div className="flex-location">
                      <span><FontAwesomeIcon icon={faLocationDot} /></span>
                      <p>{item?.location}</p>
                    </div>
                    <div className="flex-from">
                      <span><FontAwesomeIcon icon={faHandHoldingDollar} /></span>
                      <p>من</p>
                      <label><PriceComponent price={+item?.price} /></label>
                      {
                        +item?.selling_price < +item?.price &&
                        <label className="of"><PriceComponent price={+item?.selling_price} /></label>
                      }
                    </div>
                    <div className="flex-fotter">
                      <div className="left">
                        <span><FontAwesomeIcon icon={faClock} /></span>
                        <p><Moment fromNow date={item?.dataTime} /></p>

                      </div>
                      <Link href={`/pages/open-card-tour-page/?id=${item?.id}`} className="right">
                        <p>استكشف</p>
                        <span><FontAwesomeIcon icon={faArrowRight} /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          :
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
            {count.map((item, index) => (
              <div key={index} className="card">
                <div className="view"></div>
                <div className="padding">
                  <div className="tile"></div>
                  <div className="tile2"></div>
                  <div className="tile3"></div>
                  <div className="title4"></div>
                </div>
              </div>


            ))}
          </Carousel>
        }
      </div>
    </div>
  )
}




export default React.memo(SliderCardsTour)