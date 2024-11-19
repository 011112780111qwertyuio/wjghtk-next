"use client";
import React, { useState } from "react";
import NavparDashborad from "@/app/_components/admin-components/navpar/navpar";
import './dashboard.scss';
import ModalLeftBar from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import CardMoney from "@/app/_components/admin-components/card-money/card-money";
import TableDashboard from "@/app/_components/admin-components/table-dashboard/table-dashboard";
import { CheckApiTokenAdmin } from "@/app/_functions/check-api-token-admin";
import { useRouter, redirect } from "next/navigation";
import Loading from "@/app/_components/loading/loading";
function Dashboard() {

  let promiseB = CheckApiTokenAdmin();

  const [toggleLeftBar, settoggleLeftBar] = useState(false);
  const funtogglebar = () => {
    settoggleLeftBar(toggleLeftBar === true ? false : true);
  }




  if (promiseB === null || promiseB.data.stateUser === "error-network") {
    return (
      <Loading />
    )
  }

  if (promiseB.data.stateUser === "ok-auth") {
    return (
      <div className="dashboard-control-banal">
        <div className="nav-top">
          <NavparDashborad funtogglebarleft={funtogglebar} />
        </div>
        <div className="flex-row">
          {toggleLeftBar &&
            <div className="nav-left">
              <div>
                <ModalLeftBar myactive={"administrator-control-panel"} />

              </div>
            </div>
          }

          <div className="content-dash">
            <p className="title">مرحبا بالنظام</p>
            <CardMoney />
            <div className="padding">

              <TableDashboard />


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
export default Dashboard;