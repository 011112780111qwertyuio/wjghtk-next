"use client";
import React, { useState } from "react";
import AlertPopup from "../alert-popup/alert-popup";
import axios from "axios";
import { useRouter } from "next/navigation";
import './style-modal-nav.scss';
import Link from "next/link";
import Loading from "../loading/loading";
import LoadingBtn from "../loading-btn/loading-btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faAngleLeft, faArrowRightFromBracket, faCircleXmark, faIdBadge, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { counterSlice } from '../../redux/counterSlice';
const myvalue = counterSlice.getInitialState().nameLocal;
function ModalNavHome({ showmodal, promiseB, countre }) {
  const [message, setmessage] = useState('');
  const [toggle, setToggle] = useState(false);
  const funToggle = () => {
    setToggle(toggle === false ? true : false);
  }
  const router = useRouter();
  const [showSubMenue, setShowSubMenu] = useState(false);
  const funshowmenue = (index) => {
    setShowSubMenu(showSubMenue === false ? index : false);
  }
  const [isloading, setloading] = useState(false);
  const Logout = async () => {
    setloading(true);
    //deleted cookies
    try {
      const response = await fetch('/api/delet-cookie', {
        method: 'POST',  // تحديد أن الطلب هو POST
        headers: {
          'Content-Type': 'application/json',  // تعيين رأس المحتوى كـ JSON
        },
        body: JSON.stringify({
          token: 'your-token-value',  // إرسال الـ token الذي تريد حذفه
        }),
      });

      if (!response.ok) {
        // إذا كان هناك خطأ في الاستجابة (حالة غير 200)
        const data = await response.json();
        console.error('Error deleting cookie:', data.error);
        return;
      }
      const data = await response.json();
      /* ------- delete db ---------*/
      const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_LOGOUT}`;
      const obj = new FormData();
      obj.append("token_user_server", data?.valueToken);
      await axios.post(url, obj).then(async (res) => {
        if (res.data.stataDelete === "ok-delete") {
          window.location.replace("/pages/login/");

        }
        else {
          alert("No internet connection");
        }
      })
      /* stop delete db */

    } catch (error) {
      console.error('Request failed:', error);

    }
    setloading(false);
  }


  return (
    <>
      {isloading &&
        <Loading />
      }
      {toggle &&
        <AlertPopup val={message} funPopup={funToggle} />
      }
      <div className='modal-nav-home'>

        <div onClick={showmodal} className="pop"></div>
        <div className='absolute'>
          <div className="close">
            <FontAwesomeIcon onClick={showmodal} icon={faCircleXmark} />
          </div>
          <div className="buttons">
            {promiseB?.stateUser === "error-network" ?
              <>
                <br></br>
                <LoadingBtn />
              </>
              :
              promiseB?.stateUser === "ok-auth" ?
                <div className="butn-auth-mobile">
                  <Link href="/pages/user-security/">
                    <span><FontAwesomeIcon icon={faUser} /></span>
                    <p>Hi, {promiseB?.userData?.first_name + " " + promiseB?.userData?.last_name}</p>
                  </Link>
                  <Link href="/pages/profile-stings/">
                    <span><FontAwesomeIcon icon={faIdBadge} /></span>
                    <p onClick={() => { }}>ملفي الشخصي</p>
                  </Link>

                  <Link href="/pages/reservations-and-trips/">
                    <span><FontAwesomeIcon icon={faSuitcase} /></span>
                    <p>الحجوزات والرحلات</p>
                  </Link>
                  <div onClick={Logout}>
                    <span><FontAwesomeIcon icon={faArrowRightFromBracket} /></span>
                    <p>سجيل الخروج</p>
                  </div>
                </div>
                :
                <div className="list-tile-top">
                  <Link href="/pages/login/">تسجيل الدخول</Link>
                  <br></br>
                  <br></br>
                  <Link href="/pages/sign-up/">إنشاء حساب</Link>
                </div>
            }

            <div className="list-tile">
              <div className="title">
                <Link href="#">{countre}</Link>
              </div>
            </div>
            <div className="list-tile">
              <div className="title">
                <Link className="flag" href="">
                  <Image width={27} height={27} src={countre === "EGP" ? "/images/egypt.webp" : "/images/pngwing.png"} alt="flag" />
                  <span>عربى</span>
                </Link>
              </div>


            </div>
            <div className={`list-tiel-btn ${showSubMenue !== "home-page" && "close-pop"}`}>
              <div className="list">
                <div className="flex">
                  <p onClick={() => { router.push("/") }}>الرئيسية</p>
                  <FontAwesomeIcon className={`${showSubMenue === "home-page" && "rotate"}`} onClick={() => { funshowmenue("home-page") }} icon={faAngleLeft} />
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
              </div>
            </div>
            <div className={`list-tiel-btn ${showSubMenue !== "tours-page" && "close-pop"}`}>
              <div className="list">
                <div className="flex">
                  <p onClick={() => { router.push("/pages/tours?page=1&Ranking=desc&According=dataTime") }}>رحلات</p>
                  <FontAwesomeIcon className={`fa-solid fa-angle-left ${showSubMenue === "tours-page" && "rotate"}`} onClick={() => { funshowmenue("tours-page") }} icon={faAngleLeft} />
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
              </div>
            </div>
            <div className={`list-tiel-btn ${showSubMenue !== "destination-page" && "close-pop"}`}>
              <div className="list">
                <div className="flex">
                  <p>وجهة</p>
                  <FontAwesomeIcon icon={faAngleLeft} className={`${showSubMenue === "destination-page" && "rotate"}`} onClick={() => { funshowmenue("destination-page") }} />
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
              </div>
            </div>
            <div className={`list-tiel-btn ${showSubMenue !== "magazines-page" && "close-pop"}`}>
              <div className="list">
                <div className="flex">
                  <p onClick={() => { router.push("/pages/magazines?page=1") }}>مجلات</p>
                  <FontAwesomeIcon icon={faAngleLeft} onClick={() => { funshowmenue("magazines-page") }} className={`${showSubMenue === "magazines-page" && "rotate"}`} />
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
              </div>
            </div>
            <div className={`list-tiel-btn ${showSubMenue !== "concat-page" && "close-pop"}`}>
              <div className="list">
                <div className="flex">
                  <p onClick={() => { router.push("/pages/contact/") }}>تواصل</p>
                  <i onClick={() => { funshowmenue("concat-page") }} className={`fa-solid fa-angle-left ${showSubMenue === "concat-page" && "rotate"}`}></i>
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
                <div className="pop-menue">
                  <p>home page</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default React.memo(ModalNavHome);