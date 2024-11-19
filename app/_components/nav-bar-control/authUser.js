"use client";
import axios from "axios";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { counterSlice } from "@/app/redux/counterSlice";
import Loading from "../loading/loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import LoadingBtn from "../loading-btn/loading-btn";
//import Notifications from "./notifications/notifications";
const myvalue = counterSlice.getInitialState().nameLocal; // ضع هنا القيمة المناسبة لك
function AusUser({ promiseB }) {
  const [isloading, setloading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const funToggle = (nameToggle) => {
    setToggle(toggle === false ? nameToggle : false);
  }
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
      {promiseB?.stateUser === "error-network" ?
        <div className="padding-load">
          <LoadingBtn />
        </div> :
        promiseB?.stateUser === "ok-auth" ?
          <>
            {/*
        <Notifications />
  */}
            <div className="auth-token">
              <div onClick={() => { funToggle("poup-user") }} className="btn btn-acount">
                <label>أهلاً,{promiseB?.userData?.first_name + " " + promiseB?.userData?.last_name}</label>
                <span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
                {
                  toggle === "poup-user" &&
                  <div className="sub-menue-user">
                    <ul>
                      <li><Link href="#"><span><i className="fa-regular fa-credit-card"></i></span>ائتمان</Link></li>
                      <li><Link href="/pages/profile-stings/"><span><i className="fa-solid fa-user"></i></span>ملفي الشخصي</Link></li>
                      <li><Link href="/pages/reservations-and-trips/"><span><i className="fa-solid fa-right-from-bracket"></i></span>الحجوزات والرحلات</Link></li>
                      <li><Link href="/pages/user-security/"><span><i className="fa-solid fa-lock"></i></span>تغيير كلمة المرور</Link></li>
                      <li><Link onClick={Logout} href="#"><span><i className="fa-solid fa-right-from-bracket"></i></span>تسجيل الخروج</Link></li>
                    </ul>
                  </div>
                }

              </div>
            </div>
          </>
          :
          <div className="default">
            <div className="btn">
              <Link href="/pages/login/">تسجيل الدخول</Link>
            </div>
            <div className="btn">
              <Link href="/pages/sign-up/">سجل الان</Link>
            </div>
          </div>
      }



    </>
  );
}

export default React.memo(AusUser);