"use client";
import React, { useState } from "react";
import './modal-left-bar.scss';
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faChartLine, faHotel, faLocationDot, faNewspaper, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import {  FaAngleDown, FaAngleLeft, FaCalendar, FaPlaneDeparture, FaShip } from "react-icons/fa";
function ModalLeftBar({ myactive }) {
  const router = useRouter();
  const [toggle, settoggle] = useState(false);
  const funtoggle = (index) => {
    settoggle(toggle === false ? index : false);
  }
  return (
    <div className="modal-left-bar">
      <div className="card">
        <div onClick={() => { router.push("/pages/admin-pages/dathboard/") }} className="flex-card">
          <div className={`${myactive === "administrator-control-panel" && "active-btn"}`}>
            <span><FontAwesomeIcon icon={faChartLine} /></span>
            <p>لوحة التحكم</p>
          </div>

        </div>
      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><FontAwesomeIcon icon={faLocationDot} /></span>
            <p>موقع</p>
          </div>
          <span onClick={() => { funtoggle('location') }}><FontAwesomeIcon icon={faAngleLeft} /></span>
        </div>
        {toggle === "location" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <span><FontAwesomeIcon icon={faLocationDot} /></span>
              <p>كل المواقع</p>
            </div>
            <div className="flex-card-pup">
              <span><FontAwesomeIcon icon={faLocationDot} /></span>

              <p>جميع الفئات</p>
            </div>
          </div>
        }
      </div>
      <div className="card">
        <div className="flex-card">
          <div className={`${myactive === "hotel-administrator-control-panel" && "active-btn"}`} onClick={() => { router.push("/pages/admin-pages/hotel/") }}>
            <span><FontAwesomeIcon icon={faHotel} /></span>
            <p>الفندق</p>
          </div>

          <span onClick={() => { funtoggle("hotel") }}><FontAwesomeIcon icon={faAngleLeft} /></span>

        </div>

        {toggle === "hotel" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p onClick={() => { window.location.href = "/hotel-administrator-control-panel" }}>جميع الفنادق</p>
            </div>
            <div className="flex-card-pup">
              <p onClick={() => { window.location.href = "/add-hotel-administrator-control-panel" }}>اضافة فندق جديد</p>
            </div>
            <div className="flex-card-pup">
              <p>صفات</p>
            </div>
            <div className="flex-card-pup">
              <p>استعادة</p>
            </div>
          </div>
        }
      </div>
      <div className="card">
        <div className="flex-card">
          <div className={`${myactive === "AdministratorControlPanelTours" && "active-btn"}`} onClick={() => { router.push("/pages/admin-pages/tours/") }}>
            <span><FontAwesomeIcon icon={faSuitcase} /></span>
            <p>رحلة</p>
          </div>
          {toggle === "event" || myactive === "AdministratorControlPanelTours" ?
            <span onClick={() => { funtoggle("event") }}><FaAngleDown /></span>
            :
            <span onClick={() => { funtoggle("event") }}><FaAngleLeft /></span>
          }
        </div>
        {toggle === "event" || myactive === "AdministratorControlPanelTours" ?
          <div className="pop-menue">
            <div onClick={() => { router.push("/pages/admin-pages/tours/") }} className="flex-card-pup">
              <p>جميع الجولات</p>
            </div>
            <div onClick={() => { router.push("/pages/admin-pages/addTour/") }} className="flex-card-pup">
              <p>اضافة جولة</p>
            </div>
            <div onClick={() => { router.push("/pages/admin-pages/Trip-categories/") }} className="flex-card-pup">
              <p>فئات</p>
            </div>
            <div onClick={() => { router.push("/pages/admin-pages/Features-Facilities/") }} className="flex-card-pup">
              <p>سمات/المرافق</p>
            </div>
            <div onClick={() => { router.push("/pages/admin-pages/Travel-style-features/") }} className="flex-card-pup">
              <p>سمات/انماط السفر</p>
            </div>
            <div onClick={() => { router.push("/pages/admin-pages/Flight-availability-calendar/") }} className="flex-card-pup">
              <p>التوفر</p>
            </div>
            <div onClick={() => { router.push("/pages/admin-pages/add-location-tour/") }} className="flex-card-pup">
              <p>موقع</p>
            </div>
            <div className="flex-card-pup">
              <p>تقويم الحجز</p>
            </div>
            <div className="flex-card-pup">
              <p>استعادة</p>
            </div>
          </div>
          :
          <div></div>
        }
      </div>
      <div className="card">
        <div className="flex-card">
          <div onClick={() => { router.push("/pages/admin-pages/flight/") }}>
            <span><FaPlaneDeparture /></span>
            <p>رحلة جوية</p>
          </div>

          <span onClick={() => { funtoggle("event-flay") }}><FontAwesomeIcon icon={faAngleLeft} /></span>

        </div>

        {toggle === "event-flay" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p>جميع الرحلات الجوية</p>
            </div>
            <div className="flex-card-pup">
              <p>اضافة رحلة جديدة</p>
            </div>
            <div className="flex-card-pup">
              <p>شركة طيران</p>
            </div>
            <div className="flex-card-pup">
              <p>مطار</p>
            </div>
            <div className="flex-card-pup">
              <p>نوع المقعد</p>
            </div>
            <div className="flex-card-pup">
              <p>صفات</p>
            </div>
          </div>
        }
      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><FaShip /></span>
            <p>قارب</p>
          </div>

          <span onClick={() => { funtoggle("carp") }}><FontAwesomeIcon icon={faAngleLeft} /></span>

        </div>

        {toggle === "carp" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p>جميع القوارب</p>
            </div>
            <div className="flex-card-pup">
              <p>اضافة قارب جديد</p>
            </div>
            <div className="flex-card-pup">
              <p>صفات</p>
            </div>
            <div className="flex-card-pup">
              <p>التوفر</p>
            </div>
            <div className="flex-card-pup">
              <p>استعادة</p>
            </div>

          </div>
        }
      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><FaCalendar /></span>
            <p>حدث</p>
          </div>

          <span onClick={() => { funtoggle("event-2") }}><FontAwesomeIcon icon={faAngleLeft} /></span>

        </div>

        {toggle === "event-2" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p>صفات</p>
            </div>
            <div className="flex-card-pup">
              <p>التوفر</p>
            </div>
            <div className="flex-card-pup">
              <p>استعادة</p>
            </div>



          </div>
        }
      </div>
      <div className="card">
        <div className="flex-card">
          <div className={`${myactive === "AdministratorControlPanelCoupon" && "active-btn"}`} onClick={() => { router.push("/pages/admin-pages/coupon/") }}>
            <span><i className="fa-solid fa-ticket"></i></span>
            <p>قسيمة</p>
          </div>


        </div>



      </div>
      <div className="card">
        <div className="flex-card">
          <div className={`${myactive === "AdministratorControlPanelReviews" && "active-btn"}`} onClick={() => { router.push("/pages/admin-pages/reviews/") }}>
            <span><i className="fa-solid fa-comment"></i></span>
            <p>التعليقات</p>
          </div>


        </div>



      </div>
      <div className="tile-line">
        <p>محتوى</p>
      </div>
      <div className="card">
        <div className="flex-card">
          <div className={`${myactive === "AdministratorControlPanelNews" && "active-btn"}`} onClick={() => { router.push("/pages/admin-pages/news/") }}>
            <span><FontAwesomeIcon icon={faNewspaper} /></span>
            <p> الاخبار</p>
          </div>
          <span onClick={() => { funtoggle("status") }}><FontAwesomeIcon icon={faAngleLeft} /></span>
        </div>
        {toggle === "status" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p onClick={() => { router.push("/pages/admin-pages/news/") }}>جميع الاخبار</p>
            </div>
            <div className="flex-card-pup">
              <p onClick={() => { router.push("/pages/admin-pages/add-news/") }}>اضف اخبار</p>
            </div>
            <div className="flex-card-pup">
              <p>فئات</p>
            </div>
            <div className="flex-card-pup">
              <p>العلامات</p>
            </div>
          </div>}
      </div>











      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-regular fa-file"></i></span>
            <p>صفحة</p>
          </div>


        </div>



      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-solid fa-photo-film"></i></span>
            <p>وسائط</p>
          </div>


        </div>



      </div>
      <div className="tile-line">
        <p>مركز الدهم</p>
      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-solid fa-ticket-simple"></i></span>
            <p>التذاكر </p>
          </div>

          <span onClick={() => { funtoggle("tekit") }}><i className="fa-solid fa-angle-left"></i></span>

        </div>

        {toggle === "tekit" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p>جميع التذاكر</p>
            </div>
            <div className="flex-card-pup">
              <p>فئات</p>
            </div>
          </div>}
      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-brands fa-threads"></i></span>
            <p>المواضيع</p>
          </div>

          <span onClick={() => { funtoggle("shares") }}><i className="fa-solid fa-angle-left"></i></span>

        </div>

        {toggle === "shares" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p>جميع المواضيع</p>
            </div>
            <div className="flex-card-pup">
              <p>اضافة موضوع</p>
            </div>
            <div className="flex-card-pup">
              <p>فئات</p>
            </div>
            <div className="flex-card-pup">
              <p>العلامات</p>
            </div>
          </div>}
      </div>
      <div className="tile-line">
        <p>نظام</p>
      </div>
      <div className="card">
        <div className="flex-card">
          <div className={`${myactive === "AdministratorControlPanelUsers" && "active-btn"}`} onClick={() => { router.push("/pages/admin-pages/users/") }}>
            <span><i className="fa-regular fa-user"></i></span>
            <p>المستخدمين</p>
          </div>

          <span onClick={() => { funtoggle("allusers") }}><i className="fa-solid fa-angle-left"></i></span>

        </div>

        {toggle === "allusers" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <span><i className="fa-solid fa-users"></i></span>
              <p>جميع المستخدمين</p>
            </div>
            <div className="flex-card-pup">
              <span><i className="fa-solid fa-user-shield"></i></span>
              <p>مدير الدور</p>
            </div>
            <div className="flex-card-pup">
              <p>مشتركين</p>
            </div>
            <div className="flex-card-pup">
              <p>طلب الترقية</p>
            </div>
            <div className="flex-card-pup">
              <p>طلب التحقق</p>
            </div>
          </div>}
      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-solid fa-ruler-horizontal"></i></span>
            <p>خطط المستخدمين</p>
          </div>

          <span onClick={() => { funtoggle("table-users") }}><i className="fa-solid fa-angle-left"></i></span>

        </div>

        {toggle === "table-users" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <span><i className="fa-solid fa-location-dot"></i></span>
              <p>كل المواقع</p>
            </div>
            <div className="flex-card-pup">
              <span><i className="fa-solid fa-location-dot"></i></span>
              <p>جميع الفئات</p>
            </div>
          </div>}
      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-solid fa-wand-sparkles"></i></span>
            <p>يظهر فجاة</p>
          </div>


        </div>



      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-regular fa-credit-card"></i></span>
            <p>ألدفعات</p>
          </div>


        </div>



      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-solid fa-file-pen"></i></span>
            <p>المواضيع</p>
          </div>


        </div>



      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-solid fa-puzzle-piece"></i></span>
            <p>جلسة</p>
          </div>

          <span onClick={() => { funtoggle("section") }}><i className="fa-solid fa-angle-left"></i></span>

        </div>

        {toggle === "section" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p>الاعدادات العامة</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الفندق</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات المساحة</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الحدث</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الجولة</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الطيران</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات القارب</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات openAll</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الاخبار</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الحجز</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الاستعلام</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات المستخدم</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات المحفظة</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات البائع</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الدفع</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات النمط</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات متقدمة</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الوسائط</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات البريد الاكترونى</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات الرسائل القصيرة</p>
            </div>
            <div className="flex-card-pup">
              <p>اعدادات تطبيقات الجوال</p>
            </div>
            <div className="flex-card-pup">
              <p>مراجعة الاعدادات المتقدمة</p>
            </div>
          </div>}
      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-solid fa-screwdriver-wrench"></i></span>
            <p>ادوات</p>
          </div>

          <span onClick={() => { funtoggle("tools") }}><i className="fa-solid fa-angle-left"></i></span>

        </div>

        {toggle === "tools" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p>وحدات</p>
            </div>
            <div className="flex-card-pup">
              <p>اللغات</p>
            </div>
            <div className="flex-card-pup">
              <p>مدير الترجمة</p>
            </div>
            <div className="flex-card-pup">
              <p>سجلات النظام</p>
            </div>
          </div>}
      </div>
      <div className="card">
        <div className="flex-card">
          <div>
            <span><i className="fa-solid fa-toilet-paper-slash"></i></span>
            <p>التقارير</p>
          </div>

          <span onClick={() => { funtoggle("repots") }}><i className="fa-solid fa-angle-left"></i></span>

        </div>

        {toggle === "repots" &&
          <div className="pop-menue">
            <div className="flex-card-pup">
              <p>تقارير الاستفسار</p>
            </div>
            <div className="flex-card-pup">
              <p>تقارير الحجز</p>
            </div>
            <div className="flex-card-pup">
              <p>احصائيات الحجز</p>
            </div>
            <div className="flex-card-pup">
              <p>اتصل بنا</p>
            </div>
            <div className="flex-card-pup">
              <p>تقارير شراء الانتماء</p>
            </div>
          </div>}
      </div>
    </div>
  )

}
export default React.memo(ModalLeftBar);