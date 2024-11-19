import React from "react";
import './section-serves.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCannabis, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function SectionServes() {
  return (
    <div dir="rtl" className="section-serves content">

      <div className="flex-cards">

        <div className="card">
          <p className="butn">تخفيضات العطلة</p>
          <div className="content-card">
            <p className="title">عروض خاصة</p>
            <p className="content-text">ابحث عن رحلات المثالية
              احصل على أفضل الأسعار لأكثر من 20,000 رحلة</p>
            <p className="btn-dealis">عرض الصفقات</p>
          </div>
        </div>


        <div className="card-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <div className="content-card">
            <p className="title">النشرات الإخبارية</p>
            <p className="content-text">
              انضم مجانًا واحصل على النشرات الإخبارية المخصصة لنا والمليئة بعروض السفر الرائعة.
            </p>
            <Link href="/pages/sign-up/" className="btn-dealis">سجل الان</Link>
          </div>
        </div>



        <div className="card-3">
          <FontAwesomeIcon icon={faCannabis} />
          <div className="content-card">
            <p className="title">نصائح السفر</p>
            <p className="content-text">نصائح من خبراء السفر لدينا لجعل رحلتك القادمة أفضل.</p>
            <p className="btn-dealis">عرض الصفقات</p>
          </div>
        </div>





      </div>
    </div>


  )
}
export default React.memo(SectionServes);