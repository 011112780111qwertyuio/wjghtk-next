import React from "react";
import './card-money.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHardDrive, faMoneyCheckDollar, faTowerObservation } from "@fortawesome/free-solid-svg-icons";
function CardMoney() {
  return (
    <div className="card-money">
      <div className="flex-cards">
        <div style={{ backgroundColor: "#8892d6" }} className="card">
          <div className="flex-top">
            <p>ربح</p>
            <span><FontAwesomeIcon icon={faCartShopping}/></span>
          </div>
          <p className="salry">11.778 دولار</p>
          <p className="sub-tile">اجمالى الايرادات</p>
        </div>
        <div style={{ backgroundColor: "#f06292" }} className="card">
          <div className="flex-top">
            <p>كسب</p>
            <span><FontAwesomeIcon icon={faMoneyCheckDollar}/></span>
          </div>
          <p className="salry">11.78 دولار</p>
          <p className="sub-tile">مجموع الارباح</p>
        </div>

        <div style={{ backgroundColor: "#45bbe0" }} className="card">
          <div className="flex-top">
            <p>الحجوزات</p>
            <span><FontAwesomeIcon icon={faTowerObservation}/></span>
          </div>
          <p className="salry">11.778 دولار</p>
          <p className="sub-tile">مجموع حجوزات</p>
        </div>
        <div style={{ backgroundColor: "#45bbe0" }} className="card">
          <div className="flex-top">
            <p>خدمات</p>
            <span><FontAwesomeIcon icon={faHardDrive}/></span>
          </div>
          <p className="salry">11.778 دولار</p>
          <p className="sub-tile">اجمالى الخدمات القابلة للحجز</p>
        </div>


      </div>
    </div>
  );
}
export default CardMoney;