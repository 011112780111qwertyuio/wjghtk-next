import LoadingCard from './loading-card/loading-card';
import './style.scss';
import axios from "axios";
import React from "react";
import SectionAlboumMain from "@/app/_components/section-alboum-main/section-alboum-main";
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import FotterHome from "@/app/_components/fotter-home/fotter-home";
import BosterExplore from "@/app/_components/boster-explore/boster-explore";
import { counterSlice } from '../../redux/counterSlice';
import Card from './card-magazines/card-magazines';
const local = counterSlice.getInitialState().nameLocal;
import Pagination from '@/app/_components/Pagination/Pagination';
const ITEMS_PER_PAGE = 10;
export const metadata = {
  title: "أخبار السياحة في مصر | WJHTK.COM - آخر الأخبار والعروض السياحية",
  description: "تابع آخر أخبار السياحة في مصر واكتشف أهم العروض السياحية في الأهرامات، الأقصر، أسوان، البحر الأحمر، وأكثر. ابقَ على اطلاع بأحدث الأحداث والعروض عبر WJHTK.COM.",
  keywords: "أخبار سياحية, مصر, سياحة, الأهرامات, الأقصر, أسوان, البحر الأحمر, معالم سياحية, عروض سياحية, أخبار السفر, أخبار السياحة في مصر, WJHTK, حجز رحلات, أخبار السياحة",
  openGraph: {
    title: "أخبار السياحة في مصر | أحدث العروض والأحداث | WJHTK.COM",
    description: "اكتشف أحدث أخبار السياحة في مصر، بالإضافة إلى العروض السياحية المميزة للوجهات الشهيرة مثل الأهرامات، الأقصر، البحر الأحمر، وغيرها. تابع آخر المستجدات عبر WJHTK.COM.",
    image: "https://wjhtk.com/images/egypt-travel-news.jpg", // رابط صورة مميزة تمثل الأخبار السياحية
    url: "https://wjhtk.com/news", // رابط صفحة الأخبار
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "أخبار السياحة في مصر | أحدث العروض والأحداث | WJHTK.COM",
    description: "تابع آخر أخبار السياحة في مصر مع العروض السياحية لأشهر الوجهات. اقرأ أحدث الأخبار حول السياحة في مصر عبر WJHTK.COM.",
    image: "https://wjhtk.com/images/egypt-travel-news.jpg", // رابط صورة مميزة للأخبار السياحية
  },
};
const Magazines = async ({ searchParams }) => {
  const page = Number(searchParams?.page) || 1; // الحصول على رقم الصفحة من الاستعلام
  let loading = true;
  let allData = [];
  const url = local + "/" + process.env.API__SHOWTOPIC;
  const obj = new FormData();
  obj.append("namePage", "showsShare")
  await axios.post(url, obj).then(async (res) => {
    if (res.data.state === "ok-auth") {
      allData = await res.data.mydata;
    }
    else {
      allData = [];
    }
  })
  /* order pages */
  let totalPages = Math.ceil(allData?.length / ITEMS_PER_PAGE);
  let displayedItems = allData?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  loading = false;
  /* order pages stop*/
  return (
    <>
      <NavBarControl />
      <NavBarHome />
      <SectionAlboumMain title={"المجلات"} subitel={"مجلات"} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div dir='rtl' className="magazines">
        <div className="flex-items content">
          {displayedItems?.length > 0 ?
            displayedItems?.map((item, index) => (
              <Card key={index} data={item} local={local} />
            ))
            :
            <>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />

            </>
          }
        </div>
        <div className='content'>
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <BosterExplore />
      <FotterHome />
    </>

  );

}
export default Magazines;