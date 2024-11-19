"use client";
import React, { useState } from "react";
import './section-tour-plan.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function SectionTourPlan({ data }) {
  const [togglecard, settogglecard] = useState(false);
  const funToggleCard = (index) => {
    settogglecard(togglecard === false ? index : false);
  }

  return (
    <div className="section-tour-plan">
      <p className="title-plan">خطة الرحلة</p>
      <div className="flex-items">
        {data.state === "ok" ? JSON.parse(data.data.Itinerary).map((item, index) => (
          <div key={index} className={`${togglecard === index && "open-card"} mycard`}>
            <div onClick={() => { funToggleCard(index) }} className="flex-tile">
              <p>{item.tile}</p>
              <span><FontAwesomeIcon icon={faChevronDown} /></span>
            </div>
            <div className="mycontent">
              <p>{item.contentItinerary}</p>
            </div>
          </div>))
          :
          <>
            <div className="card-body">
              <h2 className="card-title skeleton">
              </h2>
            </div>
            <div className="card-body">
              <h2 className="card-title skeleton">
              </h2>
            </div>
          </>


        }
      </div>
    </div>
  )
}
export default React.memo(SectionTourPlan);