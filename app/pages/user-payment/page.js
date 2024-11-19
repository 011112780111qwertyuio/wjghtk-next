"use server";
import React from "react";
import './user-payment.scss';
import Loading from "@/app/_components/loading/loading";
import NavStings from "@/app/_components/nav-stings/nav-stings";
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
import Replace from "@/app/_functions/replace";
import FotterHome from "@/app/_components/fotter-home/fotter-home";
const UserPayment = async () => {
  const promiseB = await CheckApiTokenServer();
  return (
    <>
      <NavBarControl />
      <NavBarHome />
      {promiseB === null || promiseB?.data?.stateUser === "error-network" ?
        <Loading />
        :
        promiseB?.data?.stateUser === "ok-auth" ?
          <>
            <div dir="rtl" className="user-payment content">
              <div className="flex">
                <div className="left">
                  <NavStings namePage={"payment-details"} />
                </div>
                <div className="right">
                  <div className="nav-title">
                    <p className="tile">تفاصيل الدفع</p>
                    <span>أضف أو أزل طرق الدفع بأمان لتسهيل عملية الحجز.</span>
                  </div>
                  <input type="text" name="expirationDate" placeholder="MM/YY" maxlength="5" autocomplete="cc-exp" inputmode="numeric" aria-required="true" aria-invalid="false" id="pc-card-expiration-date-ce4ad422" class="wQubVIJbUjRrkPsqqTBH" />
                </div>
              </div>
            </div>
            <br></br>
            <FotterHome />
          </>
          :
          <Replace get={"/pages/login/"} />
      }
    </>
  )


}
export default UserPayment;