"use client";
import { useState } from "react";
import { counterSlice } from '../../redux/counterSlice';
import Loading from "@/app/_components/loading/loading";
const myvalue = counterSlice.getInitialState().nameLocal;
function Form({ datauser }) {
  const [isloading, setloading] = useState(false);
  const [statesend, setsendstate] = useState(false);
  const [statelogout, setstatelogout] = useState(false);
  const sendEmail = async () => {
    setloading(true);
    const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_PASSRESETSEND}`;
    const obj = new FormData();
    obj.append('isemail', datauser?.email);
    await axios.post(url, obj).then((res) => {
      if (res.data.checkSend === "ok-send") {
        setsendstate(true);
      } if (res.data.checkSend === "email-not-found") {
      }
      if (res.data.checkSend === "error-send") {
      }
    })
    setloading(false);
  }
  const logoutAllAcounts = async () => {
    setloading(true);
    const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_LOGOUTALLACOUNTS}`;
    const obj = new FormData();
    obj.append('myid', datauser?.ID_user);
    await axios.post(url, obj, { withCredentials: true }).then((res) => {
      if (res.data === "ok-deleted") {
        setstatelogout(true);
      }
      else {
        alert("There are no registered accounts");
      }
    })

    setloading(false);

  }
  const deletedAcount = async () => {
    /*
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.REACT_APP_API_KEY_DELETEDACOUNT}`;
    const obj = new FormData();
    obj.append('myid', stateToken.userData[0].id);
    await axios.post(url, obj).then((res) => {
      if (res.data === "ok-delete") {
        window.location.href = "/";
      }
      else {
        alert("Try again");
      }
    })
    setloading(false);
*/
  }
  return (
    <>
      {isloading &&
        <Loading />
      }
      <div className="flex-options">

        <div className="mycard">
          <div className="child-left">
            <div className="child-1">كلمة المرور</div>
            {statesend === false ?
              <div className="child-2">لتغيير كلمة المرور الخاصة بك، نحتاج إلى إرسال رابط إعادة تعيين إلى عنوان بريدك الإلكتروني.</div>
              :
              <div className="child-2">لقد أرسلنا بريد إلكتروني لإعادة تعيين كلمة المرور إلى... <strong>{promiseB.data.userData[0].email}</strong>.</div>

            }


          </div>
          <div className="child-r">
            {statesend === false ?
              <p onClick={sendEmail}>إرسال بريد إلكتروني</p>
              :
              <p></p>
            }
          </div>
        </div>

        <div className="mycard">
          <div className="child-left">
            <div className="child-1">الجلسات النشطة</div>
            {statelogout == false ?
              <div className="child-2">اختيار 'تسجيل الخروج' سيقوم بتسجيل خروجك من جميع الأجهزة باستثناء هذا الجهاز. قد يستغرق ذلك ما يصل إلى 10 دقائق.</div>
              :
              <div className="child-2">لقد تم تسجيل خروجك الآن من جميع الأجهزة الأخرى.</div>
            }
          </div>
          <div className="child-r">
            {statelogout === false ?
              <p onClick={logoutAllAcounts}>خروج</p>
              :
              <p></p>

            }
          </div>




        </div>

        <div className="mycard">
          <div className="child-left">
            <div className="child-1">حذف الحساب</div>
            <div className="child-2">حذف حسابك بشكل نهائي</div>

          </div>
          <div className="child-r">
            <p onClick={deletedAcount}>حذف الحساب</p>
          </div>
        </div>

      </div>
    </>
  );

}
export default Form;