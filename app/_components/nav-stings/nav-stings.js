import React from "react";
import "./nav-stings.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faShieldHalved, faUser } from "@fortawesome/free-solid-svg-icons";
function NavStings({ namePage }) {

  return (
    <div className="nav-stings">
      <div className="flex-items">
        <Link href="/pages/profile-stings/" className={`card ${namePage === "personal-details" && "active-nav-stings"}`}>
          <span><FontAwesomeIcon icon={faUser}/></span>
          <p>التفاصيل الشخصية</p>
        </Link>

        <Link href="/pages/user-security/" className={`card  ${namePage === "security" && "active-nav-stings"}`}>
          <span><FontAwesomeIcon icon={faShieldHalved}/></span>
          <p>الأمان</p>
        </Link>

        <Link href="/pages/user-payment/" className={`card ${namePage === "payment-details" && "active-nav-stings"}`}>
          <span><FontAwesomeIcon icon={faCreditCard}/></span>
          <p>تفاصيل الدفع</p>
        </Link>
        
        <div className={`card ${namePage === "other" && "active-nav-stings"}`}>
          <span><FontAwesomeIcon icon={faUser}/></span>
          <p>مسافرون آخرون</p>
        </div>
      </div>
    </div>
  );

}
export default React.memo(NavStings);