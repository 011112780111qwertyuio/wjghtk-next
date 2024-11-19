import React from "react";
import NavparHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import NavparControl from "@/app/_components/nav-bar-control/nav-bar-control";
import './checkout.scss';
import FotterHome from "@/app/_components/fotter-home/fotter-home";
import SectionAlboum from "@/app/_components/section-alboum-main/section-alboum-main";
import Loading from "@/app/_components/loading/loading";
import Data_Decryption from "@/app/_functions/Data-Decryption";
import FormInput from "./formInput";
import PriceComponent from "@/app/_functions/getCountry.js";
import { counterSlice } from '@/app/redux/counterSlice';
const myvalue = counterSlice.getInitialState().nameLocal;
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
import Replace from "@/app/_functions/replace";
export const metadata = {
  title: "إتمام الدفع | WJHTK.COM - حجز رحلتك السياحية في مصر بأمان",
  description: "أكمل عملية حجز رحلتك السياحية في مصر بسهولة وأمان عبر WJHTK.COM. اختر طريقة الدفع المفضلة لديك وأتمم عملية الحجز الآن.",
  keywords: "إتمام الدفع, حجز رحلات سياحية, دفع آمن, سياحة في مصر, حجز رحلات, إتمام الحجز, طرق الدفع, WJHTK",
  openGraph: {
    title: "إتمام الدفع | WJHTK.COM - حجز رحلتك السياحية في مصر بأمان",
    description: "أتمم عملية الدفع لحجز رحلتك السياحية في مصر من خلال طرق الدفع الموثوقة. تأكد من اختيار طريقة الدفع المناسبة لك وأكمل الحجز بسهولة.",
    image: "https://wjhtk.com/images/payment.jpg", // صورة مميزة للعملية (مثلاً صورة معبرة عن الدفع الإلكتروني أو رحلات سياحية)
    url: "https://wjhtk.com/payment", // رابط صفحة إتمام الدفع
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "إتمام الدفع | WJHTK.COM - حجز رحلتك السياحية في مصر بأمان",
    description: "إتمام عملية الدفع لحجز رحلتك السياحية في مصر من خلال WJHTK.COM. اختر طريقة الدفع المناسبة واستمتع برحلتك القادمة.",
    image: "https://wjhtk.com/images/payment.jpg", // رابط صورة مميزة
  },
};
import { cookies } from "next/headers";
const Checkout = async ({ searchParams }) => {
  const order = searchParams?.order;
  const decode = searchParams?.decode;
  const cookiesStore = cookies();
  const token = cookiesStore.get("token_user_server")
  const promiseB = await CheckApiTokenServer();
  const defaultProps = {
    highlightDate: [new Date()],
    days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    calendarRows: 6,
    monthsArabic: ["", "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    monthsEng: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };
  const hasEn = await Data_Decryption(decode);
  return (
    <>
      <NavparControl />
      <NavparHome />
      {promiseB === null || promiseB?.data?.stateUser === "error-network" ?
        <Loading />
        :
        promiseB?.data?.stateUser === "ok-auth" ?
          <>
            {hasEn !== null ?
              <div dir="rtl" className="head checkout">
                <SectionAlboum title={"إتمام الدفع"} subitel={""} />
                <div className="flex-section content">
                  <div className="left">
                    <div className="top">
                      <p>طلب #{hasEn?.numberOrder}</p>
                    </div>
                    <div className="flex-card">
                      <div className="left-card">
                        <div className="hide-mobile">
                          <div className="img">
                            <img priority="true" src={myvalue + "/" + process.env.API_PATHIMAGES + "/" + hasEn?.avatarTour} alt="" />
                          </div>
                        </div>
                        <div className="content-card">
                          <p className="mytile">{hasEn.title}</p>
                          <p><span>تاريخ </span>{" " + 26 + " " + defaultProps.monthsArabic[parseInt(hasEn?.stDt?.split('-')[1].replace(/^0/, ''), 10)] + " " + hasEn?.stDt?.split('-')[0]}</p>
                          <p><span>مدة </span>{hasEn?.duration}</p>
                          <span>تذاكر</span>
                          {hasEn?.allGust?.map((item, index) => (
                            <p key={index}>{item}</p>
                          ))}
                          <span>إضافة إضافية</span>
                          {hasEn.allSelectServec.map((item, index) => (
                            <p key={index}>{item}</p>
                          ))}
                        </div>
                      </div>
                      <div className="right-card">
                        <p><PriceComponent price={hasEn?.allSumation} /></p>
                      </div>
                    </div>
                    <div className="table">
                      <div className="flex-table">
                        <div className="ma">المجموع الفرعي:</div>
                        <div><PriceComponent price={hasEn?.allSumation} /></div>
                      </div>
                      <div className="flex-table">
                        <div className="ma"> المجموع:</div>
                        <div><PriceComponent price={hasEn?.allSumation} /></div>
                      </div>
                      <div className="flex-table">
                        <div className="ma"> المبلغ المدفوع:</div>
                        <div><PriceComponent price={0} /></div>
                      </div>
                      <div className="flex-table">
                        <div className="ma"> المبلغ المستحق\شئئش:</div>
                        <div className="active"><PriceComponent price={hasEn?.allSumation} /></div>
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <FormInput dataTour={hasEn} token={token} />
                  </div>
                </div>
              </div>
              : <Loading />}
            <br></br>
            <FotterHome />
          </>
          :
          <Replace get={"/pages/login/"} />
      }
    </>
  )



}
export default Checkout;