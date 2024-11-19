import React from "react";
import './style.scss';
function AlertPopPup({ funPopup, val }) {
  return (
    <div className="alert-popup">
      <div dir="rtl" className="padding-alert">
        <div className="box">
          <p className="my-tile">ملاحظات مهمة</p>
          <p className="myditls">{val}</p>
          <p onClick={funPopup} className="btn">اغلاق</p>
        </div>
      </div>
    </div>
  );

}
export default React.memo(AlertPopPup);