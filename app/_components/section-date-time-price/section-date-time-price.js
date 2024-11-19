import React from "react";
import './section-date-time-price.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
function SectionDateTimePrice() {


  return (
    <div className="section-date-time-price">
      <p className="title-price">Calendar & Price</p>
      <div className="form-date">
        <div className="nav">
          <div>
            <p>man</p>
          </div>
          <div>
            <p>tue</p>
          </div>
          <div>
            <p>wed</p>
          </div>
          <div>
            <p>thu</p>
          </div>
          <div>
            <p>fri</p>
          </div>
          <div>
            <p>sat</p>
          </div>
          <div>
            <p>sun</p>
          </div>
        </div>
        <div className="flex-between">
          <span><FontAwesomeIcon icon={faAngleLeft} /></span>
          <p>welcome</p>
          <span><FontAwesomeIcon icon={faAngleRight} /></span>

        </div>
        <div className="flex-btns">

        </div>


      </div>
    </div>
  )

}
export default React.memo(SectionDateTimePrice);