"use client";
import React from "react";
import { useState, useEffect } from "react";
import Validation from "@/app/_functions/validation";
import { counterSlice } from "@/app/redux/counterSlice";
import AlertPopup from "@/app/_components/alert-popup/alert-popup";
import Loading from "@/app/_components/loading/loading";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
const name_Local_FrontEnd = counterSlice.getInitialState().name_Local_FrontEnd; // ضع هنا القيمة المناسبة لك
const myvalue = counterSlice.getInitialState().nameLocal; // ضع هنا القيمة المناسبة لك
function Form() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isloading, setloading] = useState(false);
  const [values, setvalues] = useState({
    email: "",
    pass: "",
    fname: "ahmed",
    lname: "ahmed",
    pass: "ahmedphafhfr16-8",
    phone: "011234343",
    resEmail: ""
  });
  useEffect(() => {
    setError(Validation(values));
  }, [values])
  const handleInput = (event) => {
    const opnj = { ...values, [event.target.name]: event.target.value === "" ? " " : event.target.value, "resEmail": event.target.name === "email" ? event.target.value : values.email };
    setvalues(opnj);
  }
  const pushdata = async (event) => {
    event.preventDefault();
    setloading(true);
    if (values.email !== "" && values.pass !== "" && error.notError === "not-error") {
      const url = `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_LOGIN}`;
      const opj = new FormData();
      opj.append('email', values.email);
      opj.append('pass', values.pass);
      await axios.post(url, opj).then(async (res) => {
        if (res.data.checkEmail === "ok-auh") {
          try {
            const response = await fetch(`${name_Local_FrontEnd}/api/set-cookie`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ token: res.data.token }),
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
        else if (res.data.checkEmail === "not-foune") {
          fundialog("نود إبلاغك أنه يجب عليك إنشاء حساب للاستفادة من جميع ميزات موقعنا. إذا لم تكن مسجلاً بعد، يمكنك زيارة صفحة التسجيل وإكمال العملية بسهولة.");
        }
        else if (res.data.checkEmail === "error-network") {
          fundialog("نود إبلاغك أنه قد حدث خطأ أثناء محاولة إنشاء حسابك، وذلك بسبب ضعف اتصال الإنترنت. نوصي بإعادة المحاولة عندما يكون لديك اتصال أكثر استقرارًا.");
        }
        else {
          fundialog("نود إبلاغك أنه قد حدث خطأ أثناء محاولة إنشاء حسابك، وذلك بسبب ضعف اتصال الإنترنت. نوصي بإعادة المحاولة عندما يكون لديك اتصال أكثر استقرارًا.");
        }
      })


    }
    setloading(false);

  }
  const [isdialog, setdialog] = useState({ "state": false, "val": "" });
  const fundialog = (myval) => {
    setdialog({ "state": isdialog.state === false ? true : false, "val": myval })
  }
  useEffect(() => {
    return () => {
      setvalues({
        email: "",
        pass: "",
        fname: "ahmed",
        lname: "ahmed",
        pass: "ahmedphafhfr16-8",
        phone: "011234343",
        resEmail: ""
      })
    }
  }, [])
  return (
    <>
      {isdialog.state &&
        <AlertPopup funPopup={fundialog} val={isdialog.val} />
      }
      {isloading && <Loading />}
      <div className="myform-input">
        <div className="form-div">
          <form method="POST">
            <p>تسجيل الدخول</p>
            <div className="form">
              <div className="flex">
                <label>بريد إلكتروني</label>
                <br></br>
                <input type="text" onChange={handleInput} name="email" />
                <span>{error.email}</span>
              </div>
              <div className="flex">
                <label>كلمة المرور</label>
                <br></br>
                <input type="password" onChange={handleInput} name="pass" />
                <span>{error.pass}</span>

              </div>
              <div className="forget">
                <Link href="/pages/forgot-password/">هل نسيت كلمة المرور؟</Link>
              </div>
              <div className="flex-btn">
                <button onClick={pushdata}>تسجيل الدخول</button>
                <div className="flex">
                  <p>ليس لديك حساب</p>
                  <Link href="/pages/sign-up">نشاء حساب</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  );


}
export default React.memo(Form);