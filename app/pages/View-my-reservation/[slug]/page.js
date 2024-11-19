import React from "react";
import { cookies } from "next/headers";
import axios from "axios";
import Loading from "@/app/_components/loading/loading";
import './style.scss';
import Replace from "@/app/_functions/replace";
import FotterHome from "@/app/_components/fotter-home/fotter-home";
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import FormContent from "../componds/form-content";
import { counterSlice } from '../../../redux/counterSlice';
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
const myvalue = counterSlice.getInitialState().nameLocal;
export const metadata = {
  title: "تفاصيل الحجز المؤكد | WJHTK.COM - رحلتك السياحية إلى مصر",
  description: "تم تأكيد حجز رحلتك السياحية في مصر بنجاح! راجع تفاصيل الرحلة، الدفع، والمواعيد على WJHTK.COM. استعد لمغامرتك القادمة بأمان وراحة.",
  keywords: "تفاصيل الحجز المؤكد, حجز رحلة سياحية, مصر, سياحة, تأكيد الحجز, تفاصيل الرحلة, تأكيد الدفع, WJHTK",
  openGraph: {
    title: "تفاصيل الحجز المؤكد | WJHTK.COM - رحلتك السياحية إلى مصر",
    description: "تم تأكيد حجز رحلتك بنجاح. راجع تفاصيل الرحلة والمواعيد والأسعار، وتأكد من جميع المعلومات المهمة قبل مغامرتك في مصر.",
    image: "https://wjhtk.com/images/confirmed-booking.jpg", // صورة تعبيرية حول تأكيد الحجز أو الوجهة السياحية
    url: "https://wjhtk.com/confirmed-booking", // رابط صفحة الحجز المؤكد
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تفاصيل الحجز المؤكد | WJHTK.COM - رحلتك السياحية إلى مصر",
    description: "تم تأكيد حجز رحلتك السياحية في مصر. راجع تفاصيل الحجز مثل التاريخ، الوجهات، والأسعار على WJHTK.COM.",
    image: "https://wjhtk.com/images/confirmed-booking.jpg", // رابط صورة مميزة
  },
};
const ViewMyReservation = async (context) => {
  const nameCookie = cookies().get('token_user_server');
  const promiseB = await CheckApiTokenServer();
  let allData = null;
  const url = await `${myvalue}/${process.env.API_VIEWTOURDETAILS}`;
  const obj = new FormData();
  obj.append('mynumber_order', context?.params?.slug);
  obj.append('token_user_server', nameCookie?.value)
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
            <FormContent data={allData} />
            <br></br>
            <br></br>
            <FotterHome />
          </>
          :
          <Replace get={"/pages/login/"} />
      }
    </>
  )
}
export default ViewMyReservation;