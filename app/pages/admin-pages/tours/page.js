"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import './Tours.scss';
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavparTopContent from "@/app/_components/admin-components/nav-content/nav-content";
import NavparControlSearch from "@/app/_components/admin-components/navpar-control-content/navpar-control-content";
import TableAllItems from "@/app/_components/admin-components/table-all-items/table-all-items";
import { CheckApiTokenAdmin } from "@/app/_functions/check-api-token-admin";
import Loading from "@/app/_components/loading/loading";

function Tours() {
  let promiseB = CheckApiTokenAdmin();

  const [toogle, setToggle] = useState(false);
  const funcloseToggle = () => {
    setToggle(toogle === true ? false : true);
  }
  const [countItems, setCountItems] = useState(0);
  const funCountItems = (val) => {
    setCountItems(val)
  }



  if (promiseB === null || promiseB.data.stateUser === "error-network") {
    return (
      <Loading />
    )
  }

  if (promiseB.data.stateUser === "ok-auth") {
    return (
      <div className="tours">
        <div className="navpar">
          <Navpar funtogglebarleft={funcloseToggle} />
        </div>
        <div className="flex-betwen">
          {toogle &&
            <div className="nav-left">
              <div>
                <NavLeft myactive={"AdministratorControlPanelTours"} />

              </div>
            </div>
          }
          <div className="right-content">
            <div className="content-from">
              <NavparTopContent t1={"جولات"} t2={"ألجميع"} t3={""} />
              <br></br>
              <div className="padding">
                <br></br>
                <NavparControlSearch countItems={countItems} title={"كل الجولات"} nameBtn={"اضافة جولة جديدة"} link={"/pages/admin-pages/addTour/"} />
                <TableAllItems funCountItems={funCountItems} stateEditHotel={false} stateEditTour={true} />
              </div>
            </div>
          </div>



        </div>
      </div>
    );
  }
  if (promiseB.data.stateUser === "no-auth" || promiseB.data.stateUser === "not-found-cookie-network") {
    redirect('/');

  }

}
export default Tours;