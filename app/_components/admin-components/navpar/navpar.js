"use client";
import React, { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import './navpar.scss';
import Loading from "../../loading/loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faBars, faBell, faChevronDown, faHouse } from "@fortawesome/free-solid-svg-icons";
function Navpar({ funtogglebarleft }) {
  const myvalue = useSelector((state) => state.counter);
  const [isloading, setloading] = useState(false);
  const router = useRouter();
  const [toggleMenue, setToggleMenue] = useState(false);
  const funToggleMenue = () => {
    setToggleMenue(toggleMenue === false ? true : false);
  }
  const [toggleNot, setToggleNot] = useState(false);
  const funToggleNot = () => {
    setToggleNot(toggleNot === false ? true : false);
  }


  const logout = async () => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_LOGOUTADMIN}`;
    await axios.post(url, { withCredentials: true }).then(async (res) => {
      router.replace('/');

    })
    await setloading(false);



  }







  return (
    <>
      {isloading && <Loading />}
      <div className="navpar">
        <div className="flex">
          <div className="left">
            <p onClick={() => { router.push("/pages/admin-pages/dathboard/") }}>الحجز الاساسى</p>
            <span onClick={funtogglebarleft}><FontAwesomeIcon icon={faBars} /></span>
            <span onClick={() => { window.location.href = "/" }}><FontAwesomeIcon icon={faHouse} /></span>
          </div>
          <div className="right">
            <div className="nota">
              <span onClick={funToggleNot}><FontAwesomeIcon icon={faBell} /></span>
              <p>5</p>
              {toggleNot &&
                <div className="pop-nota">
                  <div className="header">
                    <div className="left-header">
                      <span>(5) الاخطارات</span>
                    </div>
                    <div className="right-header">
                      <span>انشر عليها بانها قرات</span>
                    </div>
                  </div>
                  <div className="flex-cards">
                    <div className="mycard">
                      <div className="avatr">
                        <img src="/images/myuser.png" alt="" />
                      </div>
                      <div className="ditls">
                        <p className="tile">تم تسجيل علامة الفين</p>
                        <p className="sub-tile">15 ثانية 41  </p>
                      </div>
                    </div>
                    <div className="mycard">
                      <div className="avatr">
                        <img src="/images/myuser.png" alt="" />
                      </div>
                      <div className="ditls">
                        <p className="tile">تم حجز رحلة جديدة الى شرم الشيخ </p>
                        <p className="sub-tile">15 ثانية 41  </p>
                      </div>
                    </div>
                  </div>
                  <div className="bottm-nots">
                    <p>عرض المذيد</p>
                  </div>

                </div>
              }
            </div>
            <div className="flex-card">
              <div className="img-content">
                <div className="img">
                  <img src="/images/myuser.png" alt="" />
                </div>
                <div className="content-user">
                  <p>مسئول النظام</p>
                  <span>مدير</span>
                </div>
              </div>
              <span onClick={funToggleMenue}><FontAwesomeIcon icon={faChevronDown} /></span>
              {toggleMenue === true &&

                <div className="sub-menue">
                  <div className="top-btn">
                    <p>تعديل الملف الشخصى</p>
                    <p>تغيير كلمة المرور</p>
                  </div>

                  <div className="top-btn">
                    <p>لوحة تحكم البائع</p>
                    <p>لوحة القيادة</p>
                  </div>
                  <div className="top-btn">
                    <p><span><FontAwesomeIcon icon={faHouse} /></span>الصفحة الرئيسية</p>
                  </div>
                  <div onClick={logout} className="top-btn">
                    <p><span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>تسجيل خروج</p>
                  </div>

                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default React.memo(Navpar);