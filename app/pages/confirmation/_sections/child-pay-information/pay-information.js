import React from "react";
import './style.scss';
function PayInformation() {

  return (
    <div dir="rtl" className="pay-information">
      <p className="tile-pay">معلومات الدفع</p>
      <br></br>
      <span>لقد ضمنت حجزك باستخدام بطاقة ائتمانية.</span>
      <br></br>
      <br></br>
      <div className="row-card-pay">
        5652... icon visa
      </div>
      <p className="btn-pay">
        تحديث بيانات البطاقة
      </p>
    </div>)
}
export default PayInformation;