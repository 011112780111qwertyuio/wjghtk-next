import React from "react";
import './style.scss';
import FotterHome from "@/app/_components/fotter-home/fotter-home";
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import Cards from "./cards/cards";
import Replace from "@/app/_functions/replace";
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
export const metadata = {
  title: "حجوزاتك | WJHTK.COM - استعرض رحلاتك السياحية القادمة والسابقة",
  description: "استعرض تفاصيل حجوزاتك السياحية السابقة والقادمة على موقع WJHTK.COM. احصل على تفاصيل الرحلة، الوجهات، التواريخ، والأسعار بكل سهولة.",
  keywords: "حجوزات, رحلات سياحية, مصر, الأهرامات, الأقصر, البحر الأحمر, تاريخ الحجز, السفر, WJHTK",
  openGraph: {
    title: "حجوزاتك | WJHTK.COM - استعرض رحلاتك السياحية القادمة والسابقة",
    description: "استعرض تفاصيل حجوزاتك السياحية السابقة والقادمة. من الأهرامات إلى البحر الأحمر، كل ما تحتاجه في مكان واحد.",
    image: "https://wjhtk.com/images/bookings.jpg", // صورة تعبيرية للحجوزات
    url: "https://wjhtk.com/bookings", // رابط صفحة الحجوزات
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "حجوزاتك | WJHTK.COM - استعرض رحلاتك السياحية القادمة والسابقة",
    description: "استعرض تفاصيل حجوزاتك السابقة والقادمة، واحصل على جميع المعلومات التي تحتاجها حول رحلاتك السياحية في مصر.",
    image: "https://wjhtk.com/images/bookings.jpg", // رابط صورة مميزة
  },
};
const Reservations_trips = async () => {
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
            <div className="reservations-trips">
              <Cards />
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
export default Reservations_trips;