import React from "react";
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faDollar, faLocationDot, faPlane } from "@fortawesome/free-solid-svg-icons";
import PriceComponent from "@/app/_functions/getCountry.js";
function SectionTileOpenCardTour({ data }) {
  return (
    <div dir="rtl" className="section-tile-open-card-tour">
      <div className="content flex">
        <div className="left">
          {data.state === "ok" ?
            <p className="title">{data.data.title}</p>

            :
            <div className="line line2 loading-animation"></div>

          }
          <div className="flex-text">
            <span><FontAwesomeIcon icon={faLocationDot} /></span>
            {data.state === "ok" ?
              <p>{data.data.Real_tour_title}</p>
              :
              <div className="line line1 loading-animation"></div>
            }
          </div>
        </div>
        <div className="right">
          <div className="mycard">
            <div>
              <FontAwesomeIcon icon={faDollar} />
            </div>
            <div className="column">
              <p className="sub-tile">من</p>
              {data.state === "ok" ?
                <>
                  <p className="price"><PriceComponent price={+data.data.selling_price} /></p>
                  {
                    +data.data.selling_price < +data.data.price &&
                    <label className="of"><PriceComponent price={+data.data.price} /></label>
                  }
                </>
                :
                <div className="line line4 loading-animation"></div>
              }
            </div>
          </div>
          <div className="mycard">
            <div>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="column">
              <p className="sub-tile">مدة</p>
              {data.state === "ok" ?
                <p className="price">{data.data.Duration + " " + data.data.typeDuration}</p>
                :
                <div className="line line4 loading-animation"></div>
              }
            </div>
          </div>
          <div className="mycard">
            <div>
              <FontAwesomeIcon icon={faPlane} />
            </div>
            <div className="column">
              <p className="sub-tile">نوع الرحلة</p>
              {data.state === "ok" ?
                <p className="price">{data.data.typeTour}</p>

                :
                <div className="line line4 loading-animation"></div>


              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
export default SectionTileOpenCardTour;