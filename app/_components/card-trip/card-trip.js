import React from "react";
import './card-trip.scss';
import Review_start from "../review_start/review_start";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PriceComponent from "@/app/_functions/getCountry.js";
import { faArrowRight, faClock, faHandHoldingDollar, faHeart, faLocationDot, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import ModalViewImages from "../modal-view-images/modal-view-images";
import ModalViewVideo from "../modal-view-video/modal-view-video";
import Link from "next/link";
import Image from "next/image";
function CardTrip({ item, local }) {
  const ubdate = false;
  var num_selling_price = parseFloat(item?.selling_price);
  var num_price = parseFloat(item?.price);
  return (
    <>
      <div className="card-trip">
        <Link href={`/pages/open-card-tour-page/?id=${item?.id}`}>
          <div className="myimg">

            <div className="flex">
              <div>
                {
                  num_selling_price < num_price &&
                  <p className="off">{Math.floor((num_price - num_selling_price) / (num_price) * (100)) + "% "}خصم</p>
                }
                {item.Enable_the_feature === "on" &&
                  <p>مميز</p>
                }
              </div>
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
            </div>
            <img src={local + "/" + process.env.API_PATHIMAGES + "/" + item.Featured_image} alt="Image description" />
          </div>
        </Link>
        <div className="content">
          <div className="flex-top">
            <div className="left">
              <Review_start idTour={item?.id} typeTrafel={"tour"} local={local} ubdate={ubdate} showsum={false} />
            </div>
            <div className="right">
              <ModalViewImages outicon={true} local={local} data={JSON.parse(item?.show_room)} />
              <ModalViewVideo showcamira={true} link={item?.linkType} />
            </div>
          </div>
          <div className="secnd-title">
            <p>{item?.title}</p>
            <div className="flex-location">
              <span><FontAwesomeIcon icon={faLocationDot} /></span>
              <p>{item?.location}</p>
            </div>
            <div className="flex-from">
              <span><FontAwesomeIcon icon={faHandHoldingDollar} /></span>
              <p>سعر</p>
              <label><PriceComponent price={num_selling_price} /></label>
              {
                num_selling_price < num_price &&
                <label className="of"><PriceComponent price={num_price} /></label>
              }
            </div>
            <div className="flex-fotter">
              <div className="left">
                <span><FontAwesomeIcon icon={faClock} /></span>
                <p>datatimw</p>
                {
                  false &&
                  <span><FontAwesomeIcon icon={faUserGroup} /></span>

                }
                {false &&
                  <label>{item.viewFrind}</label>
                }
              </div>
              <div className="right">
                <p>استكشف</p>
                <span><FontAwesomeIcon icon={faArrowRight} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default React.memo(CardTrip);