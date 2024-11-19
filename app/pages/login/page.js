import React from "react";
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import './login.scss';
import SectionFotter from "@/app/_components/fotter-home/fotter-home";
import Form from "./form";
import Replace from "@/app/_functions/replace";
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
export const metadata = {
  title: "تسجيل الدخول | WJHTK.COM - الوصول إلى حسابك السياحي",
  description: "قم بتسجيل الدخول إلى حسابك على WJHTK.COM لتتمكن من حجز الرحلات السياحية، متابعة حجوزاتك، والاستفادة من العروض الحصرية.",
  keywords: "تسجيل الدخول, حساب, سياحة في مصر, رحلات سياحية, تسجيل الدخول في WJHTK, WJHTK",
  openGraph: {
    title: "تسجيل الدخول | WJHTK.COM - الوصول إلى حسابك السياحي",
    description: "قم بتسجيل الدخول إلى حسابك على WJHTK.COM لتتمكن من حجز الرحلات السياحية في مصر والاستمتاع بتجربة مميزة.",
    image: "https://wjhtk.com/images/login.jpg", // صورة تعبيرية لتسجيل الدخول
    url: "https://wjhtk.com/login", // رابط صفحة تسجيل الدخول
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تسجيل الدخول | WJHTK.COM - الوصول إلى حسابك السياحي",
    description: "قم بتسجيل الدخول إلى حسابك على WJHTK.COM لمتابعة حجوزاتك، والتخطيط لرحلاتك السياحية المقبلة في مصر.",
    image: "https://wjhtk.com/images/login.jpg", // صورة مميزة لتسجيل الدخول
  },
};
const Login = async () => {
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
          <div dir="rtl" className="login head">
            <Form />
            <SectionFotter />
          </div>
      }
    </>
  )






}
export default Login;