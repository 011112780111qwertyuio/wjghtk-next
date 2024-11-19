import React from "react";
import './boster-explore.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJetFighter } from "@fortawesome/free-solid-svg-icons";
function BosterExplore() {


  return (
    <div  className="boster-explore head">
      <div className="boster content">
        <div className="left">
          <div className="mycard">
            <div className="img">
              <FontAwesomeIcon icon={faJetFighter} />
            </div>
            <div className="content">
              <p className="sun-tile">ما هي الأنشطة التي تفضل القيام بها عند الاستمتاع بالطبيعة؟</p>
              <p className="title"> مستعد للمغامرة والاستمتاع بالطبيعة </p>
            </div>
          </div>
          <div className="right-btn">
            <p>استكشف المزيد</p>
          </div>
        </div>

      </div>  </div>
  );

}
export default BosterExplore;