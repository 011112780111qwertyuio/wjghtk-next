import React from "react";
import './section-tile.scss';
function SectionTitle() {
  return (

    <div dir="rtl" className="section-title content">
      <div className="title-card">
        <div className="left-card">
          <p className="mytitle">تعرف مدينتك؟</p>
          <span>انضم إلى أكثر من 2000 من السكان المحليين و1200 مساهم من 3000 مدينة.</span>
        </div>
        <div className="right-card">
          <p>كن خبيرًا محليًا</p>
        </div>
      </div>
    </div>


  )
}
export default SectionTitle;