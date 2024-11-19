import dynamic from "next/dynamic";
import React from "react";
import './myprofile-stings.scss';
import FotterHome from "@/app/_components/fotter-home/fotter-home";
const Replace = dynamic(() => import("@/app/_functions/replace"), { ssr: false });
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import NavStings from "@/app/_components/nav-stings/nav-stings";
import Loading from "@/app/_components/loading/loading";
const Form = dynamic(() => import('./form/form'), { ssr: false });
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
export const metadata = {
  title: "الملف الشخصي | WJHTK.COM - تحديث بياناتك وحجوزاتك السياحية",
  description: "قم بتحديث بياناتك الشخصية، راجع تاريخ حجوزاتك السابقة، واطلع على تفاصيل الحساب على WJHTK.COM. احصل على تجربة سياحية مخصصة وفقًا لاحتياجاتك.",
  keywords: "الملف الشخصي, تحديث البيانات, حساب المستخدم, تفاصيل الحساب, تاريخ الحجز, حجز الرحلات, WJHTK",
  openGraph: {
    title: "الملف الشخصي | WJHTK.COM - تحديث بياناتك وحجوزاتك السياحية",
    description: "تحديث بياناتك الشخصية وتفاصيل حسابك على WJHTK.COM. راجع حجوزاتك السابقة وتأكد من تفاصيل الحجز الحالية.",
    image: "https://wjhtk.com/images/profile.jpg", // صورة تعبيرية للملف الشخصي
    url: "https://wjhtk.com/profile", // رابط صفحة الملف الشخصي
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "الملف الشخصي | WJHTK.COM - تحديث بياناتك وحجوزاتك السياحية",
    description: "قم بتحديث بياناتك الشخصية وتفاصيل حسابك على WJHTK.COM. راجع حجوزاتك السابقة واستمتع بتجربة مخصصة.",
    image: "https://wjhtk.com/images/profile.jpg", // رابط صورة مميزة
  },
};
const MyprofileStings = async () => {
  let promiseB = await CheckApiTokenServer();
  return (
    <>
      <NavBarControl />
      <NavBarHome />
      {promiseB === null || promiseB?.data?.stateUser === "error-network" ?
        <Loading />
        :
        promiseB?.data?.stateUser === "ok-auth" ?
          <>
            <div dir="rtl" className="myprofile-stings content">
              <div className="flex">
                <div className="left">
                  <NavStings namePage={"personal-details"} />
                </div>
                <div className="right">
                  <div className="nav-title">
                    <p className="tile">الإعدادات</p>
                    <span>قم بتحديث معلوماتك واكتشف كيف تُستخدم.</span>
                  </div>
                  <Form datauser={promiseB?.data?.userData} />
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
export default MyprofileStings;