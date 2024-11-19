"use client";
import React from "react";
import './navpar-control-content.scss';
import { useRouter } from "next/navigation";
function NavparControlContent({ countItems, title, nameBtn, link }) {
  const router = useRouter();

  return (
    <div className="navpar-control-content">
      <div className="nav-ditels">
        <div className="top-flex">
          <p className="tile">{title}</p>
          <p onClick={() => { router.push(link) }} className="btn">{nameBtn}</p>
        </div>
        {false &&
          <div className="space-between">
            <div className="left-flex">
              <select>
                <option>اجرائات جملة</option>
                <option>استنساخ</option>
                <option>ينشر</option>
                <option>الانتقال الى المسودة</option>
                <option>الانتقال الى"معلق"</option>
                <option>يمسح</option>


              </select>
              <p>يتقدم</p>
            </div>
            <div className="right-flex">
              <input type="search" placeholder="البحث عن طريق الاسم" />
              <select>
                <option>متقدم</option>
              </select>
              <p>بحث</p>
            </div>
          </div>
        }
      </div>
      <br></br>
      <p className="right-tile">تم العثور على {countItems} عنصر</p>

    </div>
  );

}
export default React.memo(NavparControlContent);