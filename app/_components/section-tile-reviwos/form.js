"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaHeart, FaShare, FaTwitter } from "react-icons/fa";
function Form() {
  const [togglereviow, settogglereviow] = useState('hidden');
  const funtogglereviow = () => {
    settogglereviow(togglereviow === "hidden" ? "" : "hidden");
  }
  return (
    <div className="right">
      <div className="mycard">
        <div onClick={funtogglereviow} className="flex">
          <span><FontAwesomeIcon icon={faShare} /></span>
          <label>مشاركة</label>
        </div>
        <div className={`pop-menue ${togglereviow}`}>
          <div>
            <span><FaFacebook /></span>
          </div>
          <div>
            <span><FaTwitter /></span>
          </div>
          <div>
            <p>in</p>
          </div>
          <div>
            <p>t</p>
          </div>
        </div>
      </div>
      <div className="mycard">
        <div className="flex">
          <span><FaShare /></span>
          <label>التقييمات</label>
        </div>
      </div>
      <div className="mycard">
        <div className="flex">
          <span><FaHeart /></span>
          <p>قائمة الرغبات</p>
        </div>

      </div>
    </div>
  );
}
export default React.memo(Form);