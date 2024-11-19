import React from "react";
import './style.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCreditCard, faEye } from "@fortawesome/free-solid-svg-icons";
function NavLeft({allData }) {
/*
  const [showModalDelete, setshowModalDelete] = useState(false);
    const funModalDelete = () => {
      setshowModalDelete(showModalDelete === false ? true : false);
    }
    {
      /*
    showModalDelete &&
      <CancellationReservation funshowModal={funModalDelete} />
      */
    

  return (
    <div className="nav-left">
      <div dir="rtl" className="child-1 padding">
        <ul className="skeleton">
          <li>
            <span className={`${allData !== null ? "" : "skeleton-text"}`}>رقم تاكيد الحجز : </span>
            <p className={`${allData !== null ? "" : "skeleton-text"}`}>{allData !== null && allData.number_order}</p>
            <FontAwesomeIcon icon={faCopy} />
          </li>
        </ul>
      </div>
      <div dir="rtl" className="child-2 padding skeleton">
        <p>هل كل شئ صحيح؟</p>
        <span >يمكنك دائما عرض او تعديل حجزك عبر الانترنت بدون الحاجة للتحميل</span>
        <ul>
          <li>
            <span><FontAwesomeIcon icon={faCreditCard} /></span>
            <Link href="#" >تحديث البطاقة</Link>
          </li>
          <li>
            <span><FontAwesomeIcon icon={faEye} /></span>
            <Link href={`/pages/View-my-reservation/${allData !== null && allData.number_order}`} className={`${allData !== null ? "" : "skeleton-text"}`}>شاهد الحجز</Link>
          </li>
        </ul>
        <br />
        <hr />
        <br />
        <p>تواصل مع الدعم الفنى </p>
        <span className="sub-phone">رقم الهاتف +20693661773 </span>
        <br />
        <Link href="#" >ارسال رسالة</Link>
        <br />
        <Link href="#" >ارسال رسالة بالبريد الاكترونى</Link>
      </div>
    </div>



  );
}
export default NavLeft;