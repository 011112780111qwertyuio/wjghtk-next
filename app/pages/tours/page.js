import React from "react";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import FotterHome from "@/app/_components/fotter-home/fotter-home";
import SectionHome from "@/app/_components/section-home/section-home";
import SectionCardTour from "@/app/_components/section-card-tour/section-card-tour";
import SectionTourPoster from "@/app/_components/section-tour-poster/section-tour-poster";
export const metadata = {
  title: "الرحلات السياحية في مصر | WJHTK.COM - احجز أفضل العروض السياحية في مصر",
  description: "استمتع بأفضل الرحلات السياحية في مصر مع عروض مميزة لأهم الوجهات مثل الأهرامات، الأقصر، أسوان، البحر الأحمر، وغيرها. احجز رحلتك الآن عبر WJHTK.COM.",
  keywords: "رحلات سياحية, مصر, سياحة, الأهرامات, الأقصر, أسوان, البحر الأحمر, رحلات بحرية, حجز رحلات, جولات سياحية, معالم سياحية في مصر, WJHTK",
  openGraph: {
    title: "الرحلات السياحية في مصر | أفضل العروض | WJHTK.COM",
    description: "اكتشف أفضل الرحلات السياحية في مصر، من جولات للأهرامات إلى استكشاف أسوان والبحر الأحمر. احجز الآن عبر WJHTK.COM لأفضل العروض.",
    image: "https://wjhtk.com/images/egypt-travel.jpg", // رابط صورة مميزة تمثل الرحلات السياحية
    url: "https://wjhtk.com/trips", // رابط صفحة الرحلات
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "الرحلات السياحية في مصر | أفضل العروض | WJHTK.COM",
    description: "احجز رحلاتك السياحية في مصر مع أفضل العروض لأشهر الوجهات السياحية، مثل الأهرامات، البحر الأحمر، والأقصر. احجز الآن عبر WJHTK.COM.",
    image: "https://wjhtk.com/images/egypt-travel.jpg", // رابط صورة مميزة للرحلات
  },
};

function ToursPage({ searchParams }) {
  const page = Number(searchParams?.page) || 1; // الحصول على رقم الصفحة من الاستعلام
  const Ranking = searchParams?.Ranking;
  const According = searchParams?.According;
  const search = searchParams?.search;
  const location = searchParams?.location;
  const typeTravel = searchParams?.typeTravel;
  const startDate = searchParams?.startDate;
  const dataimages = [
    "tour1.jpg",
    "tour2.jpg",
    "tour3.jpg",
    "tour4.jpg",
    "tour5.jpg",
  ];
  return (
    <div className="head tours">
      <NavBarControl />
      <NavBarHome typepage={"tours"} />
      <SectionHome location={location} typeTour={typeTravel} dataTime={startDate} dataimages={dataimages} typePage={"tours"} />
      <SectionCardTour page={page} Ranking={Ranking} According={According} startDate={startDate} search={search} location={location} typeTravel={typeTravel} />
      <SectionTourPoster />
      <FotterHome />
    </div>
  );

}
export default ToursPage;