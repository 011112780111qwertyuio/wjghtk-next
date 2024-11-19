import React from "react";
import axios from "axios";
import { cookies } from "next/headers";
import Replace from "@/app/_functions/replace";
import { counterSlice } from "@/app/redux/counterSlice";
import Loading from "@/app/_components/loading/loading";
import '../style.scss';
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import Confirmation_Child from "../_sections/child-confirmation/confirmation";
import FormationConfirmation from "../_sections/child-formation-confirmation/formation-confirmation";
import ChildDetails from "../_sections/child-details/details";
import DetalisRoom from "../_sections/child-details-room/details-room";
import DetalisSalre from "../_sections/child-detalis-salre/detalis-salre";
import PayInformation from "../_sections/child-pay-information/pay-information";
import ChildContent from "../_sections/child-content/content";
import NavLeft from "../_sections/nav-left/navLeft";
import FotterHome from "@/app/_components/fotter-home/fotter-home";
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
const myvalue = counterSlice.getInitialState().nameLocal; // ضع هنا القيمة المناسبة لك
export const metadata = {
  title: "تفاصيل الحجز | WJHTK.COM - تفاصيل رحلتك السياحية في مصر",
  description: "اكتشف تفاصيل حجز رحلتك السياحية في مصر. راجع الوجهات، المواعيد، الأسعار، والمزيد على WJHTK.COM. تأكد من تفاصيل الحجز قبل مغامرتك القادمة.",
  keywords: "تفاصيل الحجز, رحلات سياحية, حجز رحلات, مصر, سياحة, سعر الرحلة, تأكيد الحجز, حجز رحلة سياحية, WJHTK",
  openGraph: {
    title: "تفاصيل الحجز | WJHTK.COM - تفاصيل رحلتك السياحية في مصر",
    description: "راجع تفاصيل حجز رحلتك السياحية في مصر، بما في ذلك الوجهات، التواريخ، والأسعار، على WJHTK.COM. تأكد من جميع تفاصيل رحلتك قبل انطلاقها.",
    image: "https://wjhtk.com/images/booking-details.jpg", // صورة تعبيرية حول الحجز أو الرحلة السياحية
    url: "https://wjhtk.com/booking-details", // رابط صفحة تفاصيل الحجز
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تفاصيل الحجز | WJHTK.COM - تفاصيل رحلتك السياحية في مصر",
    description: "راجع تفاصيل حجز رحلتك السياحية في مصر من تواريخ، أسعار، وجهات. تأكد من كل التفاصيل على WJHTK.COM قبل الانطلاق في مغامرتك.",
    image: "https://wjhtk.com/images/booking-details.jpg", // رابط صورة مميزة
  },
};
const Confirmation = async (context) => {
  const nameCookie = cookies().get('token_user_server');
  const promiseB = await CheckApiTokenServer();
  let order = context?.params?.slug;
  let allData = null;
  const url = await `${myvalue}/${process.env.API_VIEWTOURDETAILS}`;
  const obj = new FormData();
  obj.append('mynumber_order', order)
  obj.append('token_user_server', nameCookie.value)
  await axios.post(url, obj).then((res) => {
    if (res.data.state === "ok") {
      allData = res.data.data;
    }
    else if (res.data.state === "not-found-travels") {
      allData = null;
    }
    else if (res.data.state === "error-network") {
      allData = null;
    }
    else {
      allData = null;
    }
  })
  return (
    <>
      <NavBarControl />
      <NavBarHome />
      {promiseB === null || promiseB?.data?.stateUser === "error-network" ?
        <Loading />
        :
        promiseB?.data?.stateUser === "ok-auth" ?
          <>
            <div className="confirmation">
              <div className="content">
                <div className="flex-between">
                  <div className="left">
                    <NavLeft allData={allData} />
                  </div>
                  <div className="right">
                    <Confirmation_Child data={allData} />
                    <FormationConfirmation />
                    <ChildDetails data={allData} local={myvalue} />
                    <DetalisRoom data={allData} />
                    <DetalisSalre data={allData} />
                    <PayInformation />
                    <br></br>
                    <br></br>
                    <ChildContent />
                  </div>
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
export default Confirmation;