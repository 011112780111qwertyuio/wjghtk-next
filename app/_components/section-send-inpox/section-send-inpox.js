import React from "react";
import Mylogo from "../Logo/Logo";
import './section-send-inpox.scss';
function SectionSendInpox() {


  return (
    <div dir="rtl" className="section-send-inpox">


      <div className="content">

        <div className="card">

          <div className="card-flex-left">
            <div className="left">
              <Mylogo />
            </div>
            <div className="right">
              <p className="title">احصل على التحديثات والمزيد</p>
              <p className="sub-tile">أفكار مدروسة الى صندوق الوارد الخاص بك</p>
            </div>
          </div>

          <div className="flex-search">
            <input type="text" placeholder="البريد الاكترونى الخاص بك" />
            <p>يشترك</p>
          </div>


        </div>

      </div>




    </div>
  )


}
export default SectionSendInpox;