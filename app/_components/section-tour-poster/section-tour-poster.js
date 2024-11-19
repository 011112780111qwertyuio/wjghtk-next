import React from "react";
import './section-tour-poster.scss';
import Image from "next/image";
function SectionTourPoster() {
  return (
    <div dir="rtl" className="section-tour-poster head">
      <div className="content flex">
        <div className="img">
          <Image width={1000} priority height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src="/images/img1.jpg" alt="" />
          <p>تقدم وجهتك أفضل الحلول من خلال خبرائنا.</p>
        </div>

        <div className="right">
          <p className="top-butn">مقدمة الشركة</p>
          <p className="larg-tile">فرصة رائعة لـ</p>
          <p className="larg-tile">مغامرة وسفر</p>
          <p className="subitle">
            ملتزمون بتقديم خدمة استثنائية لعملائنا.
          </p>
          <p className="sub-content">
            رؤيتنا: نسعى لتحقيق أعلى مستويات رضا العملاء من خلال تقديم خدمات مبتكرة وعالية الجودة.

            خدماتنا: نقدم مجموعة متنوعة من الخدمات التي تلبي احتياجات العملاء، مع التركيز على الجودة والاحترافية.

            فريق العمل: يضم فريقنا مجموعة من الخبراء المدربين تدريباً عالياً، الذين يسعون دائمًا لتقديم الدعم والمساعدة.

            قيمنا: نؤمن بأهمية الشفافية، والنزاهة، والالتزام، ونسعى دائمًا لتحسين خدماتنا بناءً على ملاحظات العملاء.

          </p>

          <div className="progres">
            <div className="flex-title">
              <p className="tile">عملاء راضون</p>
              <p className="num">82%</p>
            </div>
            <div className="myprog">
              <div></div>
            </div>
          </div>

          <div className="avatar-content">
            <div className="left">
              <Image width={1000} height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src="/images/img1.jpg" alt="" />
            </div>
            <div className="right-content">
              <div className="cont">
                <p className="title">احمد البحر</p>
                <p className="sub-tile">الرئيس التنفيذي و المؤسس المشارك</p>
              </div>
              <div className="btn">
                <p>اكتشف المزيد</p>
              </div>

            </div>

          </div>


        </div>

      </div>

    </div>
  );
}

export default SectionTourPoster;