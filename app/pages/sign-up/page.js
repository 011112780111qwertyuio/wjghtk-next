import React from "react";
import './login-up.scss';
import Replace from "@/app/_functions/replace";
import Form from "./form";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
export const metadata = {
  title: "إنشاء حساب جديد | WJHTK.COM - ابدأ مغامرتك السياحية في مصر",
  description: "قم بإنشاء حساب جديد على WJHTK.COM لتتمكن من حجز رحلاتك السياحية في مصر، تتبع حجوزاتك، واحصل على أفضل العروض على الرحلات.",
  keywords: "إنشاء حساب, تسجيل, سياحة في مصر, رحلات سياحية, حجز رحلات, WJHTK, مصر",
  openGraph: {
    title: "إنشاء حساب جديد | WJHTK.COM - ابدأ مغامرتك السياحية في مصر",
    description: "انضم إلى WJHTK.COM الآن، قم بإنشاء حسابك الجديد لتتمكن من حجز رحلات سياحية إلى أفضل الوجهات في مصر.",
    image: "https://wjhtk.com/images/signup.jpg", // صورة تعبيرية لإنشاء الحساب
    url: "https://wjhtk.com/signup", // رابط صفحة التسجيل
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "إنشاء حساب جديد | WJHTK.COM - ابدأ مغامرتك السياحية في مصر",
    description: "قم بإنشاء حساب جديد على WJHTK.COM لتتمكن من حجز رحلاتك السياحية في مصر وتتبع حجوزاتك وتلقي أفضل العروض.",
    image: "https://wjhtk.com/images/signup.jpg", // رابط صورة مميزة
  },
};
const LoginUp = async () => {
  const promiseB = await CheckApiTokenServer();
  return (
    <>
      <NavBarControl />
      <NavBarHome />
      {promiseB === null || promiseB?.data?.stateUser === "error-network" ?
        <Loading />
        :
        promiseB?.data?.stateUser === "ok-auth" ?
          <Replace get={"/"} />
          :
          <Form />
      }
    </>
  )



}
export default LoginUp;
