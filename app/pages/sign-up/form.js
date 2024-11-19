"use client";
import React, { useState, useEffect } from "react";
import { counterSlice } from '../../redux/counterSlice';
import FotterHome from "@/app/_components/fotter-home/fotter-home";
import Loading from "@/app/_components/loading/loading";
import LoginAuthGoogle from "@/app/_functions/loginAuthGoogle";
import Link from "next/link";
import Image from "next/image";
import AlertPopup from "@/app/_components/alert-popup/alert-popup";
import axios from 'axios';
import Validation from "@/app/_functions/validation";
const myvalue = counterSlice.getInitialState().nameLocal;
const name_Local_FrontEnd = counterSlice.getInitialState().name_Local_FrontEnd;
function Form() {
  const [error, setError] = useState('');
  const [isloadingDb, setloadingDb] = useState(false);
  const [vlues, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    phone: "",
    resEmail: ""
  });
  useEffect(() => {
    setError(Validation(vlues));
  }, [vlues])

  const handleInput = (event) => {
    let newObj = {
      ...vlues, [event.target.name]: event.target.value,
      "resEmail": event.target.name === "email" ? event.target.value : vlues.email
    };
    setValues(newObj);
  }
  const funPushData = async (e) => {
    setloadingDb(true);
    if (error.notError === "not-error") {
      const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_LOGINUP}`;
      const getfData = new FormData();
      getfData.append('email', vlues.email);
      getfData.append('pass', vlues.pass);
      getfData.append('fname', vlues.fname);
      getfData.append('lname', vlues.lname);
      getfData.append('phone', vlues.phone);
      await axios.post(url, getfData).then(async (res) => {
        if (await res.data.checkEmail === "create-acount") {
          const urlLogin = `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_LOGIN}`;
          const getfDataLogin = new FormData();
          getfDataLogin.append('email', vlues.email);
          getfDataLogin.append("pass", vlues.pass);
          await axios.post(urlLogin, getfDataLogin).then(async (resAush) => {
            if (resAush.data.checkEmail === "ok-auh") {
              setloadingDb(true);
              try {
                const response = await fetch(`${name_Local_FrontEnd}/api/set-cookie`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ token: resAush.data.token }),
                });
                if (response.ok) {
                  // إذا تم تعيين الكوكيز بنجاح، قم بإعادة التوجيه
                  window.location.replace("/");
                } else {
                  fundialog("نود إبلاغك أنه قد حدث خطأ أثناء محاولة إنشاء حسابك، وذلك بسبب ضعف اتصال الإنترنت. نوصي بإعادة المحاولة عندما يكون لديك اتصال أكثر استقرارًا.");
                }
              } catch (error) {
                fundialog("نود إبلاغك أنه قد حدث خطأ أثناء محاولة إنشاء حسابك، وذلك بسبب ضعف اتصال الإنترنت. نوصي بإعادة المحاولة عندما يكون لديك اتصال أكثر استقرارًا.");
              }


            }
            else {
              fundialog("نود إبلاغك أنه قد حدث خطأ أثناء محاولة إنشاء حسابك، وذلك بسبب ضعف اتصال الإنترنت. نوصي بإعادة المحاولة عندما يكون لديك اتصال أكثر استقرارًا.");
            }
          }
          )
        }
        else if (await res.data.checkEmail === "is-exist-email") {
          fundialog("نود إبلاغك بأن البريد الإلكتروني الذي قمت بإدخاله قد تم استخدامه بالفعل لإنشاء حساب");
        }
        else {
          fundialog("نود إبلاغك أنه قد حدث خطأ أثناء محاولة إنشاء حسابك، وذلك بسبب ضعف اتصال الإنترنت. نوصي بإعادة المحاولة عندما يكون لديك اتصال أكثر استقرارًا.");
        }
      })


    }
    const newObj = {
      ...vlues, "email": vlues.email === "" ? " " : vlues.email,
      "resEmail": vlues.email,
      "pass": vlues.pass === "" ? " " : vlues.pass,
      "fname": vlues.fname === "" ? " " : vlues.fname,
      "lname": vlues.lname === "" ? " " : vlues.lname,
      "phone": vlues.phone === "" ? " " : vlues.phone
    };
    setValues(newObj);
    setloadingDb(false);
  }
  const GoogleAush = (data) => {
    if (typeof (data) === "object") {
      const fname = data.given_name;
      const lname = data.family_name;
      const email = data.email;
      const newObj = {
        ...vlues,
        fname: fname,
        lname: lname,
        email: email,
        pass: "",
        phone: ""
      };
      setValues(newObj);
    }
    else {
      fundialog("نود إبلاغك أنه قد حدث خطأ أثناء محاولة إنشاء حسابك، وذلك بسبب ضعف اتصال الإنترنت. نوصي بإعادة المحاولة عندما يكون لديك اتصال أكثر استقرارًا.");

    }
  }

  useEffect(() => {

    return () => {
      setValues({
        fname: "",
        lname: "",
        email: "",
        pass: "",
        phone: "",
        resEmail: ""
      });
    }
  }, [])
  const [isdialog, setdialog] = useState({ "state": false, "val": "" });
  const fundialog = (myval) => {
    setdialog({ "state": isdialog.state === false ? true : false, "val": myval })
  }
  return (
    <>
      {isdialog.state &&
        <AlertPopup funPopup={fundialog} val={isdialog.val} />

      }

      {
        isloadingDb &&
        <Loading />

      }

      <div dir="rtl" className="login-up head">
        <div className="flex-content content">
          <div className="left">
            <Image width={1000} height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" priority src="/images/userr.jpg" alt="" />
            <div className="flex-btn">
              <p className="title">أنت بالفعل عضو</p>
              <Link href="/pages/login/" className="btn">تسجيل الدخول</Link>
            </div>
          </div>
          <div className="right">
            <div className="myform">
              <p className="title">إنشاء حساب مجاني</p>
              <p className="sub-tile"> بضع نقرات تفصلك عن إنشاء حسابك.</p>
              <div className="flex">
                <div className="leftt">

                  <label>الاسم الأول </label>
                  <br></br>
                  <input required type="text" value={vlues.fname} name="fname" onChange={handleInput} />
                  <br></br>
                  <p className="out-error">{error.fname}</p>
                  <br></br>
                  <label>بريدك الإلكتروني</label>
                  <br></br>
                  <input required type="text" value={vlues.email} name="email" onChange={handleInput} />
                  <p className="out-error">{error.email}</p>
                </div>
                <div className="rightt">
                  <label> الاسم الأخير</label>
                  <br></br>
                  <input required type="text" name="lname" value={vlues.lname} onChange={handleInput} />
                  <br></br>
                  <p className="out-error">{error.lname}</p>

                  <br></br>
                  <label>كلمة المرور</label>
                  <br></br>
                  <input required type="password" value={vlues.pass} name="pass" onChange={handleInput} />
                  <br></br>
                  <p className="out-error">{error.pass}</p>

                  <br></br>
                  <label>رقم الهاتف</label>
                  <br></br>
                  <input required type="text" value={vlues.phone} name="phone" onChange={handleInput} />
                  <p className="out-error">{error.phone}</p>

                </div>
              </div>
              <div className="column">
                <div className="center-btn">
                  <p>تسجيلنا مع</p>
                  <div className="row">
                    <LoginAuthGoogle funAuth={GoogleAush} />
                  </div>
                </div>
                <p className="btn-get" onClick={funPushData}>إنشاء حساب</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FotterHome />
    </>
  )



}
export default React.memo(Form);