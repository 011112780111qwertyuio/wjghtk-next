import React from "react";
import './forgot-password.scss';
import Loading from "@/app/_components/loading/loading";
import NavparControl from "@/app/_components/nav-bar-control/nav-bar-control";
import NavparHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import FotterHome from "@/app/_components/fotter-home/fotter-home";
import SectionSendInpox from "@/app/_components/section-send-inpox/section-send-inpox";
import Form from "./form";
import Replace from "@/app/_functions/replace";
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
export const metadata = {
  title: "استعادة كلمة المرور - WJHTK.COM",
  description: "نسيت كلمة السر؟ لا تقلق، يمكنك استعادة الوصول إلى حسابك بسرعة عبر هذه الصفحة. قم بإدخال بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور.",
  keywords: "استعادة كلمة المرور, نسيت كلمة السر, استرجاع الحساب, WJHTK, استرجاع كلمة المرور, إعادة تعيين كلمة المرور, إعادة كلمة السر",
  openGraph: {
    title: "استعادة كلمة المرور - WJHTK.COM",
    description: "نسيت كلمة السر؟ قم بإدخال بريدك الإلكتروني لتلقي رابط استعادة كلمة المرور واسترجاع حسابك في WJHTK.COM.",
    image: "https://wjhtk.com/images/forgot-password.jpg", // صورة تمثل الصفحة أو شعار الموقع
    url: "https://wjhtk.com/forgot-password", // رابط صفحة نسيت كلمة السر
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "استعادة كلمة المرور - WJHTK.COM",
    description: "قم باستعادة كلمة مرور حسابك في WJHTK.COM عبر إدخال بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور.",
    image: "https://wjhtk.com/images/forgot-password.jpg", // نفس صورة الـOpen Graph
  },
};
const ForgotPassword = async () => {
  let promiseB = await CheckApiTokenServer();
  return (
    <>
      <NavparControl />
      <NavparHome />
      {promiseB === null || promiseB?.data?.stateUser === "error-network" ?
        <Loading />
        :
        promiseB?.data?.stateUser === "ok-auth" ?
          <Replace get={"/"} />
          :
          <>
            <div dir="rtl" className="forgot-password head">
              <div className="content">
                <div className="center">
                  <div className="form">
                    <div className="top">
                      <p>إعادة تعيين كلمة المرور</p>
                    </div>
                    <Form />
                  </div>
                </div>
              </div>


            </div>
            <SectionSendInpox />
            <FotterHome />
          </>
      }
    </>
  )



}
export default ForgotPassword;