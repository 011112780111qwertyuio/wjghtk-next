import React from "react";
import './style.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
function Confirmation_Child({ data }) {

  return (
    <>
      {data !== null ?
        <div dir="rtl" className="confirmation">
          <span>تم التاكيد</span>
          <p>تم تاكيد حجزك فى <span>{data.Tour_name}</span>  .</p>
          <ul>
            <li><span><FontAwesomeIcon icon={faCheck} /></span><Link href="#">تعديل</Link> أنت جاهز الآن! لقد أرسلنا رسالة التأكيد الإلكترونية الخاصة بك إلى {data.myemail}</li>
            <li><span><FontAwesomeIcon icon={faCheck} /></span> احصل على رسالة تأكيد الحجز بدون أي أوراق عند<Link href="#">تحميل اللتطبيق</Link></li>
            <li className="my-row">
              <div className="btn"><span><FontAwesomeIcon icon={faDownload} /></span>حفظ تاكيد الحجز على الهاتف</div>
              <div className="btn"><span><FontAwesomeIcon icon={faPrint} /></span>اطبع تاكيد الحجز</div>
            </li>
          </ul>
        </div>
        :
        <div className="skeleton-loader">
          <div className="skeleton-title"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-list">
            <div className="skeleton-item"></div>
            <div className="skeleton-item"></div>
            <div className="skeleton-item"></div>
          </div>
        </div>
      }
    </>

  );

}
export default Confirmation_Child;