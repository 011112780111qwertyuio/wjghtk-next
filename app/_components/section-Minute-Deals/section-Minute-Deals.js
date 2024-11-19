import React from "react";
import './section-minute-deals.scss';
import Review_start from "../review_start/review_start";
import PriceComponent from "@/app/_functions/getCountry.js";
import Link from "next/link";
import axios from "axios";
const SectionMinuteDeals = async ({ local }) => {
  let data = [];
  const obj2 = new FormData();
  obj2.append("val_order", "dataTime");
  obj2.append("type_order", "desc");
  const url2 = await `${local}/${process.env.API_ALLTOURS}`;
  await axios.post(url2, obj2).then((res) => {
    if (res.data.length > 0) {
      data = res.data.slice(0, 50);
    }

  });
  return (
    <div className="section-minute-deals">
      <p className="title-add">عروض اللحظة الأخيرة</p>
      <br></br>
      {data.length >= 1 ?
        <>
          {data.map((item, index) => (

            <div key={index} className="flex-add">
              <div className="avtar">
                <Link href={`/pages/open-card-tour-page?id=${item.id}`}>
                  <img src={local + "/" + process.env.API_PATHIMAGES + "/" + item.Featured_image} alt="" />
                </Link>
              </div>
              <div className="flex-cont">
                <Review_start idTour={item.id} typeTrafel={"tour"} local={local} showsum={false} />

                <Link href={`/pages/open-card-tour-page?id=${item.id}`} className="mytile">{item.title}</Link>
                <p className="sub-tile">
                  من <label><PriceComponent price={item.price} /></label>
                  {
                    +item.selling_price < +item.price &&
                    <label className="of"> <PriceComponent price={+item.selling_price} /></label>

                  }
                </p>
              </div>
            </div>

          ))}
        </>
        :
        <div className="container">
          <div className="box">
            <div className="skeleton">
              <div className="skeleton-left flex1">
                <div className="square"></div>
              </div>
              <div className="skeleton-right flex2">
                <div className="line h17 w40 m10"></div>
                <div className="line"></div>
                <div className="line h8 w50"></div>
                <div className="line  w75"></div>
              </div>
            </div>
            <div className="skeleton">
              <div className="skeleton-left flex1">
                <div className="square"></div>
              </div>
              <div className="skeleton-right flex2">
                <div className="line h17 w40 m10"></div>
                <div className="line"></div>
                <div className="line h8 w50"></div>
                <div className="line  w75"></div>
              </div>
            </div>
            <div className="skeleton">
              <div className="skeleton-left flex1">
                <div className="square"></div>
              </div>
              <div className="skeleton-right flex2">
                <div className="line h17 w40 m10"></div>
                <div className="line"></div>
                <div className="line h8 w50"></div>
                <div className="line  w75"></div>
              </div>
            </div>
          </div>
        </div>
      }


    </div>

  );

}
export default React.memo(SectionMinuteDeals);