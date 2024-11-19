import NavBarControl from "./_components/nav-bar-control/nav-bar-control";
import NavBarHome from "./_components/Nav-Bar-Home/Nav-Bar-Home";
import SectionHome from "./_components/section-home/section-home";
import SectionServes from "./_components/section-serves/section-serves";
import BestsellerListing from "./_components/bestseller-listing/bestseller-listing";
import SectionSeae from "./_components/section-seae/section-seae";
import SectionTitle from "./_components/section-title/section-title";
import SectionUser from "./_components/section-user/section-user";
import FotterHome from "./_components/fotter-home/fotter-home";
import SectionSendInpox from "./_components/section-send-inpox/section-send-inpox";
import ReadTheLatestFromBlog from "./_components/read-the-latest-from-blog/read-the-latest-from-blog";
import SectionBoatListing from "./_components/section-boat-listing/section-boat-listing";
import SectionOurBestBromotionTours from "./_components/section-ourbest-promotion-tours/section-ourbest-promotion-tours";
export const metadata = {
  title: "WJHTK.COM | رحلات سياحية في مصر | استمتع بأفضل العروض لأهم الوجهات السياحية ",
  description: "اكتشف أجمل الأماكن السياحية في مصر مثل الأهرامات، الأقصر، أسوان، البحر الأحمر وأكثر. احجز رحلتك الآن لأفضل العروض السياحية على موقع WJHTK.COM.",
  keywords: "رحلات سياحية, مصر, سياحة, الأهرامات, الأقصر, أسوان, البحر الأحمر, جولات سياحية, حجز رحلات, معالم سياحية في مصر, WJHTK",
  /*
  openGraph: {
    title: "WJHTK.COM رحلات سياحية في مصر | أفضل العروض ",
    description: "استمتع بجولات سياحية مميزة في مصر. احجز رحلتك إلى الأهرامات، الأقصر، أسوان، البحر الأحمر وأكثر على WJHTK.COM.",
    image: "https://wjhtk.com/images/egypt-tourism.jpg", // رابط الصورة المميزة
    url: "https://wjhtk.com", // رابط الموقع
    type: "website",
  },
  */
  /*twitter: {
    card: "summary_large_image",
    title: "رحلات سياحية في مصر | أفضل العروض | WJHTK.COM",
    description: "احجز الآن واستمتع بأفضل العروض لرحلات سياحية في مصر، من الأهرامات إلى البحر الأحمر. جولات سياحية رائعة على WJHTK.COM.",
    image: "https://wjhtk.com/images/egypt-tourism.jpg", // رابط الصورة المميزة
  },
  */
};
export const Home = async () => {
  const dataimages = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"
  ];
  return (
    <div className="layout head">
      <NavBarControl />
      <NavBarHome />
      <SectionHome dataimages={dataimages} typePage="layout" />
      <SectionServes />
      <BestsellerListing />
      <SectionOurBestBromotionTours />
      <SectionBoatListing />
      <SectionSeae />
      <ReadTheLatestFromBlog />
      <SectionTitle />
      <SectionUser />
      <SectionSendInpox />
      <FotterHome />
    </div>
  );
};
export default Home;





