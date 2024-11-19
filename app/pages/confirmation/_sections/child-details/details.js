import React from "react";
import Link from "next/link";
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faList, faLocationDot } from "@fortawesome/free-solid-svg-icons";
function ChildDetails({ data, local }) {
  const defaultProps =
  {
    highlightDate: [new Date()],
    days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    calendarRows: 6,
    monthsArabic: ["", "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    monthsEng: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };
  return (
    <>
      {data !== null ?
        <div className="child-details">
          <div className="card">
            <div className="left-card">
              <img priority="true" src={local + "/" + process.env.API_PATHIMAGES + "/" + data.avatar_Tour} alt="" />
            </div>
            <div dir="rtl" className="right-card">
              <p className="tile">{data.Tour_name}</p>
              <ul>
                <li className="row-card">
                  <div>
                    <span><FontAwesomeIcon icon={faCalendar} /></span>
                    <div className="ditls">
                      <span>تسجيل الوصول</span>
                      <br></br>
                      <p>{defaultProps.days[new Date(data.Check_in.split('-')[0] + "-" + data.Check_in.split('-')[1].padStart(2, '0') + "-" + data.Check_in.split('-')[2]).getDay()]} , {data.Check_in.split('-')[2] + " " + defaultProps.monthsArabic[data.Check_in.split('-')[1]] + " " + data.Check_in.split('-')[0]}</p>
                      <span>من 14:00</span>
                    </div>
                  </div>
                  <div>
                    <div className="ditls edit">
                      <span>تسجيل المغادرة</span>
                      <p>{defaultProps.days[new Date(data.Check_out.split('-')[0] + "-" + data.Check_out.split('-')[1].padStart(2, '0') + "-" + data.Check_out.split('-')[2]).getDay()]} , {data.Check_out.split('-')[2] + " " + defaultProps.monthsArabic[data.Check_out.split('-')[1]] + " " + data.Check_out.split('-')[0]}</p>
                      <span>حتى 14:00</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <span><FontAwesomeIcon icon={faList} /></span>
                    <div className="ditls">
                      <span>تفاصبل الحجز</span>
                      {JSON.parse(data.allgust).map((item, index) => (
                        <p key={index}>{item.split('=')[1] + " = " + item.split('=')[0].split('x')[1] + " x " + item.split('=')[0].split('x')[0]}</p>
                      ))}
                      <Link href="#">خيارات اضافية لباقى الضيوف</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <span><FontAwesomeIcon icon={faLocationDot} /></span>
                    <div className="ditls">
                      <span>العنوان</span>
                      <p>{data.Tour_name + " , " + data.myAdress}</p>
                      <Link href="#">اعرض الاتجاهات</Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
        :
        <div className="child-details skeleton">
          <div className="card">
            <div className="left-card skeleton-img"></div>
            <div className="right-card">
              <div className="skeleton-title"></div>
              <ul>
                <li className="row-card">
                  <div>
                    <span className="skeleton-icon"></span>
                    <div className="details">
                      <span className="skeleton-text"></span>
                      <p className="skeleton-text"></p>
                      <span className="skeleton-text"></span>
                    </div>
                  </div>
                  <div>
                    <div className="details edit">
                      <span className="skeleton-text"></span>
                      <p className="skeleton-text"></p>
                      <span className="skeleton-text"></span>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="skeleton-icon"></span>
                    <div className="details">
                      <span className="skeleton-text"></span>
                      <p className="skeleton-text"></p>
                      <span className="skeleton-text"></span>
                    </div>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="skeleton-icon"></span>
                    <div className="details">
                      <span className="skeleton-text"></span>
                      <p className="skeleton-text"></p>
                      <span className="skeleton-text"></span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      }
    </>
  );
}
export default ChildDetails;