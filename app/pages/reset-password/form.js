"use client";
import React, { useState, useEffect } from "react";
import Loading from "@/app/_components/loading/loading";
import { useParams, useRouter } from "next/navigation";
import Validation from "@/app/_functions/validation";
import axios from "axios";
axios.defaults.withCredentials = true;
import AlertPopup from "@/app/_components/alert-popup/alert-popup";
import {counterSlice} from '../../redux/counterSlice';
const myvalue = counterSlice.getInitialState().nameLocal;
function Form() {
  const router = useRouter();
  const param = useParams();
  const [toggleMessage, settoggleMessage] = useState(false);
  const [message, setmessage] = useState('');
  const funToggleMessage = () => {
    settoggleMessage(toggleMessage === false ? true : false);
  }
  const decodedEmail = decodeURIComponent(param?.slug[1]);
  const decodeToken = decodeURIComponent(param?.slug[0]);
  const [isloading, setloading] = useState(false);
  const [error, setError] = useState('');
  const [values, setvalues] = useState({
    pass: "",
    respass: ""
  });
  useEffect(() => {
    setError(Validation(values));
  }, [values])
  const handleInput = (event) => {
    const opnj = { ...values, [event.target.name]: event.target.value };
    setvalues(opnj);

  }

  const pushdata = async (eo) => {
    setloading(true);
    eo.preventDefault();
    const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_RESETPASSWORD}`;
    const obj = new FormData();
    if (error.pass === undefined && values.pass === values.respass && values.respass !== "" && values.pass !== "") {
      obj.append("email", decodedEmail);
      obj.append("token", decodeToken);
      obj.append("pass", values.pass);
      await axios.post(url, obj).then(async (res) => {

        if (res.data === "error-network") {
          setmessage("حدث خطأ في الاتصال بالإنترنت. يرجى التحقق من اتصالك والمحاولة مرة أخرى.");
          settoggleMessage(true);
        }
        else if (res.data === "code-not-foune") {
          setmessage("الكود قد انتهت صلاحيته");
          settoggleMessage(true);

        }
        else if (res.data === "not-fount") {
          setmessage("هذا البريد الإلكتروني غير متوفر");
          settoggleMessage(true);


        }
        else if (res.data === "ok-code") {
          chenage_login();
          settoggleMessage(false);
        }
        else {
          setmessage("حدث خطأ في الاتصال بالإنترنت. يرجى التحقق من اتصالك والمحاولة مرة أخرى.");
          settoggleMessage(true);
        }



      })





    }
    else if (values.pass !== values.respass) {
      setmessage("كلمة المرور غير متطابقة");
      settoggleMessage(true);

    }
    else if (values.pass === "" || values.respass === "") {
      setmessage("أدخل كلمة المرور");
      settoggleMessage(true);
    }


    setloading(false);

  }
  const chenage_login = async () => {
    setloading(true);
    const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_LOGIN}`;
    const opj = new FormData();
    opj.append('email', decodedEmail);
    opj.append('pass', values.pass);
    await axios.post(url, opj, { withCredentials: true }).then(async (res) => {
      if (res.data.checkEmail === "ok-auh") {
        router.replace("/");
      }
      else {
        setmessage("هذا الحساب غير صحيح");
        settoggleMessage(true);
      }
    })
    setloading(false);
  }
  return (
    <>
      {isloading === true &&
        <Loading />
      }
      {toggleMessage &&
        <AlertPopup funPopup={funToggleMessage} val={message} />
      }
      <div className="div-form">
        <form method="post">
          <p className="title">إنشاء كلمة مرور جديدة</p>
          <p className="sub-tile">استخدم حد أدنى من 7 أحرف، بما في ذلك الحروف الكبيرة، والحروف الصغيرة، والأرقام.</p>
          <br></br>
          <label>كلمة المرور</label>
          <br></br>
          <input value={values.pass} required onChange={handleInput} type="password" name="pass" />
          <br></br>
          <p className="error">{error.pass}</p>
          <label>تأكيد كلمة المرور</label>
          <br></br>
          <input value={values.respass} required onChange={handleInput} type="password" name="respass" />
          <br></br>
          <p className="error">{error.pass}</p>

          <input onClick={pushdata} id="btn-push" type="submit" value="تعيين كلمة مرور جديدة" name="push-data" />


        </form>
      </div>
    </>
  );

}
export default React.memo(Form);