import React from "react";
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
function FormationConfirmation() {


  return (
    <div dir="rtl" className="formation-confirmation">
      <div className="item-1">
        <span><FontAwesomeIcon icon={faClock} /></span>
        <div>
          <p>وقت الوصول-تم التاكيد</p>
          <span>طلبت تسجيل الوصول في الساعة 17:00 - 18:00.</span>
          <br></br>
        </div>
      </div>
    </div>
  );

}
export default FormationConfirmation;