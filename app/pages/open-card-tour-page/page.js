import React from "react";
import './style-open-card-tour-page.scss';
import dynamic from "next/dynamic";
const SectionLocation = dynamic(() => import('@/app/_components/section-location/section-location'), { ssr: false });
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import SliderImages from "@/app/_components/slider-images/slider-images";
import SectionTileOpenCardTour from "@/app/_components/section-tile-open-card-tour/section-tile-open-card-tour";
import SectionTileReviwos from "@/app/_components/section-tile-reviwos/section-tile-reviwos";
import DitelsOpenCardTour from "@/app/_components/ditels-open-card-tour/ditels-open-card-tour";
import BookingForm from "@/app/_components/boking-form/boking-form";
import SectionMinuteDeals from "@/app/_components/section-Minute-Deals/section-Minute-Deals";
import SectionTourPlan from "@/app/_components/section-tour-plan/section-tour-plan";
import SliderCardsTour from "@/app/_components/slider-cards-tour/slider-cards-tour";
import FotterHome from "@/app/_components/fotter-home/fotter-home";
import axios from "axios";
import Loading from "@/app/_components/loading/loading";
import { counterSlice } from "@/app/redux/counterSlice";
import SectionComments from "@/app/_components/section-comments/section-comments";
import SectionReviewScores from "@/app/_components/section-review-scores/section-review-scores";
import SectionSendComment from "@/app/_components/section-send-comment/section-send-comment";
const myvalue = counterSlice.getInitialState().nameLocal;
const localFront = counterSlice.getInitialState().name_Local_FrontEnd // ضع هنا القيمة المناسبة لك
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
import { cookies } from "next/headers";
export const metadata = {
  title: "رحلة إلى الأهرامات | WJHTK.COM - حجز رحلة سياحية في مصر",
  description: "اكتشف رحلة سياحية لا تنسى إلى الأهرامات في مصر مع WJHTK.COM. تعرف على تفاصيل الرحلة، المواعيد المتاحة، الأسعار، وخدمات إضافية. احجز الآن لرحلة مميزة إلى المعالم السياحية في مصر.",
  keywords: "رحلة الأهرامات, سياحة في مصر, رحلة سياحية, معالم سياحية في مصر, حجز رحلات, مصر, جولات سياحية, رحلة إلى الأهرامات, WJHTK",
  openGraph: {
    title: "رحلة إلى الأهرامات | WJHTK.COM - حجز رحلة سياحية في مصر",
    description: "احجز رحلتك إلى الأهرامات الآن عبر WJHTK.COM. تعرف على تفاصيل الرحلة، العروض المتاحة، والأسعار. استمتع بتجربة سياحية رائعة في مصر.",
    image: "https://wjhtk.com/images/pyramids-tour.jpg", // رابط صورة مميزة للرحلة
    url: "https://wjhtk.com/trip/pyramids-tour", // رابط صفحة تفاصيل الرحلة
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "رحلة إلى الأهرامات | WJHTK.COM - حجز رحلة سياحية في مصر",
    description: "احجز الآن رحلة سياحية مميزة إلى الأهرامات عبر WJHTK.COM. استمتع بجولة سياحية رائعة في واحدة من عجائب العالم السبع.",
    image: "https://wjhtk.com/images/pyramids-tour.jpg", // رابط صورة مميزة للرحلة
  },
};
const OpenCardTourPage = async ({ searchParams }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token_user_server');
  const promiseB = await CheckApiTokenServer();
  const myid = Number(searchParams?.id); // الحصول على رقم الصفحة من الاستعلام
  let data = "";
  const url = await `${myvalue}/${process.env.API_SHOWDITLSTOURS}`;
  const obj = new FormData();
  obj.append("idtour", myid);
  await axios.post(url, obj).then((res) => {
    if (res.data.state === "error-data") {
      data = "error-data";
    }
    else if (res.data.state === "ok") {
      data = res.data;
    }
    else {
      data = "error-data";
    }
  })
  if (data === "error-data") {
    return (
      <Loading />
    );
  }


  return (
    <>
      <NavBarControl />
      <NavBarHome />
      <div dir="rtl" className="head open-card-tour">
        <SliderImages data={data} local={myvalue} />
        <SectionTileOpenCardTour data={data} />
        <SectionTileReviwos idTour={data} typeTrafel={"tour"} local={myvalue} />
        <div className="border"></div>
        <div className="content">
          <div className="flex-sections">
            <div className="left">
              <DitelsOpenCardTour data={data} local={myvalue} />
              <br></br>
              <br></br>
              <SectionTourPlan data={data} />
              <p className="title-location">موقع</p>
              {
                data.state === "ok" &&
                <div className="sized-location">
                  <SectionLocation position={data.data.map_Location.split('-').map(Number)} />
                </div>
              }
              <br></br>
              <br></br>
              <br></br>
              <SliderCardsTour local={myvalue} />
              <br></br>
              <>
                {
                  data?.state === "ok" &&
                  <SectionReviewScores idTour={data?.data?.id} typeTrafel={"tour"} local={myvalue} />
                }
                <SectionComments localFront={localFront} idTour={data} typeTrafel={"tour"} local={myvalue} promiseB={promiseB?.data} />
                {
                  data.state === "ok" &&
                  <SectionSendComment Token={token} promiseB={promiseB?.data} local={myvalue} idTour={data.data.id} typetrafel={"tour"} />
                }
              </>
            </div>
            <div className="right">
              <BookingForm local={myvalue} data={data} promiseB={promiseB?.data} />
              <SectionMinuteDeals local={myvalue} />
            </div>
          </div>
        </div>
        <FotterHome />
      </div>
    </>

  );

}



export default OpenCardTourPage;