import React from "react";
import Replace from "@/app/_functions/replace";
import './user-security.scss';
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import NavStings from "@/app/_components/nav-stings/nav-stings";
import Loading from "@/app/_components/loading/loading";
import axios from "axios";
axios.defaults.withCredentials = true;
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
import Form from "./form";
import FotterHome from "@/app/_components/fotter-home/fotter-home";
export const metadata = {
  title: "إعدادات الأمان | WJHTK.COM - حماية حسابك الشخصي",
  description: "قم بتحديث إعدادات الأمان لحسابك على WJHTK.COM. يمكنك تغيير كلمة المرور، تفعيل المصادقة الثنائية، وإدارة جلسات التسجيل لحماية بياناتك.",
  keywords: "إعدادات الأمان, تغيير كلمة المرور, المصادقة الثنائية, أمان الحساب, حماية الحساب, WJHTK",
  openGraph: {
    title: "إعدادات الأمان | WJHTK.COM - حماية حسابك الشخصي",
    description: "قم بتحديث إعدادات الأمان لحسابك على WJHTK.COM. حافظ على أمان حسابك عن طريق تغيير كلمة المرور وتفعيل المصادقة الثنائية.",
    image: "https://wjhtk.com/images/security-settings.jpg", // صورة تعبيرية للإعدادات الأمنية
    url: "https://wjhtk.com/security-settings", // رابط صفحة إعدادات الأمان
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "إعدادات الأمان | WJHTK.COM - حماية حسابك الشخصي",
    description: "حافظ على أمان حسابك على WJHTK.COM من خلال تغيير كلمة المرور، تفعيل المصادقة الثنائية، وإدارة جلساتك. قم بتحديث الإعدادات الآن.",
    image: "https://wjhtk.com/images/security-settings.jpg", // رابط صورة مميزة
  },
};
const UserSecurity = async () => {
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
            <div dir="rtl" className="user-security content">
              <div className="flex">
                <div className="left">
                  <NavStings namePage={"security"} />
                </div>
                <div className="right">
                  <div className="nav-title">
                    <p className="tile">الأمان</p>
                    <span>لتغيير إعدادات الأمان الخاصة بك، قم بزيارة إعدادات الأمان الآمنة، أو احذف إعدادات الأمان الخاصة بك.</span>
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
export default UserSecurity;