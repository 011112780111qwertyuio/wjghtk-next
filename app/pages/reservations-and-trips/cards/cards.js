import React from "react";
import axios from "axios";
import LoadingCard from "../loading-card/loading-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faComments, faDiamondTurnRight, faPen } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { counterSlice } from "@/app/redux/counterSlice";
import PopSubMenue from "../pop-sub-menue/pop-sub-menue";
import { cookies } from "next/headers";
const myvalue = counterSlice.getInitialState().nameLocal;
const Cards = async () => {
  const valueToken = cookies().get('token_user_server');
  const defaultProps =
  {
    highlightDate: [new Date()],
    days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    calendarRows: 6,
    monthsArabic: ["", "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    monthsEng: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };
  let allData = [];
  let isloading = true;
  isloading = true;
  let obj = new FormData();
  obj.append('token_user_server', !valueToken || !valueToken?.value ? "dsds" : valueToken.value);
  const url = await `${myvalue}/${process.env.API_VIEWRESERVATIONS}`;
  await axios.post(url, obj).then((res) => {
    if (res.data.state === "ok") {
      allData = res.data.data;
    }
    else if (res.data.state === "not-found-travels") {
      allData = [];
    }
    else if (res.data.state === "error-network") {
      allData = [];
    }
    else {
      allData = [];
    }
  })
  isloading = false;
  return (
    <div className="content">
      {isloading === false && allData.length > 0 ?
        <div className="flex-tile">
          <Link href="#">لاتستطيع العثور على حجزك؟</Link>
          <p>الحجوزات والرحلات</p>
        </div>
        :
        <></>
      }
      <div className="all-items">
        {isloading ?
          <LoadingCard />
          :
          allData.length > 0 ?
            allData.map((item, index) => (
              <div key={index} className="mycard">
                <div className="view-image">
                  <img priority="true" src={myvalue + "/" + process.env.API_PATHIMAGES + "/" + item.avatar_Tour} alt="" />
                  <p className="title-alboum">{item.Tour_name}</p>
                  <p dir="rtl" className="subtile-albom">{item.Check_in.split('-')[2] + " " + defaultProps.monthsArabic[item.Check_in.split('-')[1]] + "  -  " + item.Check_out.split('-')[2] + " " + defaultProps.monthsArabic[item.Check_out.split('-')[1]]}</p>
                </div>
                <div className="view-content">
                  <div className="flex-content">
                    <div className="left">
                      <PopSubMenue valueToken={valueToken} id={item.id_Trip_reservations} index={index} />
                      <p>EGP {item.salre}</p>
                    </div>
                    <Link href={`/pages/confirmation/${item.number_order}`} className="right">
                      <div className="child">
                        <div dir="rtl" className="left-child">
                          <p className="title">{item.Tour_name}</p>
                          <p dir="rtl" className="sub-tile">{item.Check_in.split('-')[2] + " " + defaultProps.monthsArabic[item.Check_in.split('-')[1]] + "  -  " + item.Check_out.split('-')[2] + " " + defaultProps.monthsArabic[item.Check_out.split('-')[1]] + " . egp " + item.salre}</p>
                          <p className="sub-active">تم التاكيد</p>
                          <p className="sub-tile">تسجيل الوصول:<span>{defaultProps.days[new Date(item.Check_in.split('-')[0] + "-" + item.Check_in.split('-')[1].padStart(2, '0') + "-" + item.Check_in.split('-')[2]).getDay()]}</span>,{item.Check_in.split('-')[2] + defaultProps.monthsArabic[item.Check_in.split('-')[1]]}  من الساعة 02:00 م</p>
                          <p className="sub-tile">تسجيل المغادرة:<span>{defaultProps.days[new Date(item.Check_out.split('-')[0] + "-" + item.Check_out.split('-')[1].padStart(2, '0') + "-" + item.Check_out.split('-')[2]).getDay()]}</span>,{item.Check_out.split('-')[2] + defaultProps.monthsArabic[item.Check_out.split('-')[1]]}  حتى الساعة 12:00 م</p>
                        </div>
                        <div className="right-child">
                          <img priority="true" src={myvalue + "/" + process.env.API_PATHIMAGES + "/" + item.avatar_Tour} alt="" />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {false &&
                    <>
                      <div className="child-column">
                        <span><FontAwesomeIcon icon={faAngleRight} /></span>
                        <div className="child-column-right">
                          <p>احصل على الاتجاهات</p>
                          <span><FontAwesomeIcon icon={faDiamondTurnRight} /></span>
                        </div>
                      </div>

                      <div className="child-column">
                        <span><FontAwesomeIcon icon={faAngleRight} /></span>
                        <div className="child-column-right">
                          <p>مراسلة مكان الاقامة</p>
                          <span><FontAwesomeIcon icon={faComments} /></span>
                        </div>
                      </div>

                      <div className="child-column">
                        <span><FontAwesomeIcon icon={faAngleRight} /></span>
                        <div className="child-column-right">
                          <p>قم بادارة حجزك</p>
                          <span><FontAwesomeIcon icon={faPen} /></span>
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
            ))
            :
            <div className="view-not-found-travel">
              <div className="column-center">
                <img src="/images/no-flight_2785833.png" />
                <br></br>
                <br></br>
                <p>يتم عرض رحلاتك في هذه الصفحة</p>
                <br></br>
                <span>يمكنك الاطلاع على جميع حجوزاتك في هذه الصفحة. إذا أجريت حجزًا </span>
              </div>
            </div>
        }
      </div>
    </div>
  );

}
export default Cards;