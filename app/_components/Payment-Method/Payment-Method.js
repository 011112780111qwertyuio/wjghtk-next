"use client";
import React, { useState } from "react";
import './style.scss';
function PaymentMethod() {
  const [Toggle, setToggle] = useState("1");
  const funToggle = (val) => {
    setToggle(val);
  }
  return (
    <div className="payment-method">
      <div className="flex-btn">
        <div className="btn-1">
          <div onClick={() => { funToggle("1") }} className={`icon ${Toggle === "1" && "active"}`}>
            <img src="/images/visa.svg" alt="" />
          </div>

        </div>
        <div className="btn-2">
          <div onClick={() => { funToggle("2") }} className={`icon ${Toggle === "2" && "active"}`}>
            <img src="/images/discover.svg" alt="" />
          </div>

        </div>
        <div className="btn-3">
          <div onClick={() => { funToggle("3") }} className={`icon ${Toggle === "3" && "active"}`}>
            <img src="/images/mc.svg" alt="" />
          </div>

        </div>
      </div>
      {Toggle === "1" &&
        <div className="view-btn">
          visa
        </div>
      }
      {Toggle === "2" &&
        <div className="view-btn">
          mastr
        </div>
      }
      {Toggle === "3" &&
        <div className="view-btn">
          mc
        </div>
      }
    </div>
  );
}
export default React.memo(PaymentMethod);

