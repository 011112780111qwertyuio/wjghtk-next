import React from "react";
import './section-user.scss';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function SectionUser() {
  return (
    <div dir="rtl" className="section-user">

      <div className="content">

        <p className="title">عملائنا السعداء</p>

        <div className="flex-cards">
          <div className="card">
            <div className="flex-top">
              <div className="img">
                <Image width={1000} loading="lazy" height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src="/images/avatar1.jpg" alt="" />
              </div>
              <div className="flex-ditls">
                <p>ahmedTohame</p>
                <div className="flex-starts">

                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />

                </div>
              </div>
            </div>
            <p className="myditls">
              أود أن أعبر عن امتناني العميق للخدمات الرائعة التي قدمتموها خلال رحلتي. لقد كانت تجربتي في العين السخنة تجربة مدهشة بفضل المعلومات القيمة والاقتراحات الرائعة التي وجدتها على موقعكم.  </p>
          </div>
          <div className="card">
            <div className="flex-top">
              <div className="img">
                <Image width={1000} loading="lazy" height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src="/images/avatar2.jpg" alt="" />
              </div>
              <div className="flex-ditls">
                <p>aslam fathi</p>
                <div className="flex-starts">

                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />

                </div>
              </div>
            </div>
            <p className="myditls">أقدر جهدكم واحترافيتكم، وأتطلع لمزيد من الرحلات المستقبلية معكم.

              شكرًا مرة أخرى!</p>

          </div>
          <div className="card">
            <div className="flex-top">
              <div className="img">
                <Image width={1000} loading="lazy" height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src="/images/avatar3.jpg" alt="" />
              </div>
              <div className="flex-ditls">
                <p>حمزة فتحى</p>
                <div className="flex-starts">

                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />

                </div>
              </div>
            </div>
            <p className="myditls">أود أن أتقدم بخالص الشكر والتقدير لكل ما بذلتموه من جهود في تنظيم رحلتي الأخيرة إلى شرم الشيخ . لقد كانت تجربة لا تُنسى بفضل المعلومات الدقيقة والمساعدة القيمة التي قدمتموها.</p>

          </div>

        </div>


      </div>


    </div>
  )


}
export default React.memo(SectionUser);