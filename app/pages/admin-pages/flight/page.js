import React from "react";
import './flight.scss';
import NavparHome from "@/app/_components/admin-components/navpar/navpar";
function Flight() {


  return (
    <div className="flight">
      <div className="nav-top">
        <NavparHome />
      </div>
      <div className="flex-flight">
        <div className="nav-left-flight">
          <div className="fixed">

          </div>
        </div>
        <div className="rgiht-content-flight"></div>
      </div>
    </div>
  );

}
export default Flight;