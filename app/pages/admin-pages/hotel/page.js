"use client";
import React, { useState } from "react";
import NavContent from "@/app/_components/admin-components/nav-content/nav-content";
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import './hotel.scss';
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavparControlContent from "@/app/_components/admin-components/navpar-control-content/navpar-control-content";
import TableAllItems from "@/app/_components/admin-components/table-all-items/table-all-items";
function Hotel() {
  const funtogglebarleft = () => {
    setToggle(toggle === true ? false : true);
  }

  const [toggle, setToggle] = useState(true);
  return (
    <div className="hotel">
      <div className="nav-top">
        <Navpar funtogglebarleft={funtogglebarleft} />
      </div>
      <div className="flex-hotel">
        {toggle &&
          <div className="left-nav">
            <div>
              <NavLeft myactive={"hotel-administrator-control-panel"} />

            </div>
          </div>
        }
        <div className="right-nav">
          <NavContent t1={"الفنادق"} t2={"جميع الفنادق"} t3={""} />
          <div className="content-from">
            <NavparControlContent title={"جميع الفنادق"} nameBtn={"اضف فندق جديد"} link={"/pages/admin-pages/add-hotel/"} />
            <TableAllItems stateEditHotel={true} stateEditTour={false} />
          </div>
        </div>
      </div>
    </div>
  );

}
export default Hotel;