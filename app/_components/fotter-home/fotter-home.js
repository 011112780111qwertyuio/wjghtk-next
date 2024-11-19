import React from "react";
import './fotter-home.scss';
import Link from "next/link";
function FotterHome() {

  return (
    <div dir="rtl" className="fotter-home">
      <div className="content">
        <div className="flex-cards">

          <div className="section-1">
            <p className="title-section">تحتاج مساعدة ?</p>
            <div className="list-tile">
              <p className="sub-tile">اتصل بنا</p>
              <p className="title">+2000050505</p>
            </div>
            <div className="list-tile">
              <p className="sub-tile">البريد الاكترونى لنا</p>
              <p className="title"> hello@yoursite.com </p>
            </div>

            <div className="list-tile">
              <p className="sub-tile">تابعنا</p>
              <span><i className="fa-brands fa-facebook"></i></span>
              <span><i className="fa-brands fa-twitter"></i></span>
              <span><i className="fa-brands fa-youtube"></i></span>
            </div>

          </div>

          <div className="section-const">
            <p className="title-section">شركة</p>
            <div className="list-tile">
              <Link className="title" href="">معلومات عنا</Link>
            </div>
            <div className="list-tile">
              <Link className="title" href="">مدونة المجتمع</Link>
            </div>
            <div className="list-tile">
              <Link className="title" href="">المكافآت</Link>
            </div>
            <div className="list-tile">
              <Link className="title" href="">العمل معنا</Link>
            </div>
            <div className="list-tile">
              <Link className="title" href="">تعرف على الفريق</Link>
            </div>
          </div>


          <div className="section-const">
            <p className="title-section">يدعم</p>
            <div className="list-tile">
              <Link className="title" href="">حساب</Link>
            </div>
            <div className="list-tile">
              <Link className="title" href="">قانوني</Link>
            </div>
            <div className="list-tile">
              <Link className="title" href="">تواصل</Link>
            </div>
            <div className="list-tile">
              <Link className="title" href="">البرنامج التابع</Link>
            </div>
            <div className="list-tile">
              <Link className="title" href="">سياسة الخصوصية</Link>
            </div>
          </div>
          <div className="section-const">
            <p className="title-section">اعدادات 1</p>
            <div className="list-tile">
              <Link className="title" href="">اعدادات 1</Link>
            </div>
            <div className="list-tile">
              <Link className="title" href="">اعدادات 3</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FotterHome;


