"use client";
import React, { useState } from "react";
import axios from "axios";
import Validation from "@/app/_functions/validation";
import AlertPopup from "@/app/_components/alert-popup/alert-popup";
import { counterSlice } from '../../redux/counterSlice';
const myvalue = counterSlice.getInitialState().nameLocal;
function Form() {
  const [toggle, setToggole] = useState(false);
  const funTogle = () => {
    setToggole(toggle === false ? true : false);
  }
  const [statebutton, setstatebutn] = useState(true);
  const [error, seterror] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [checksend, setchecksend] = useState(false);
  const pushdata = async (event) => {
    if (email.trim().length > 0) {
      setstatebutn(false);
      const value = {};
      value.email = email;
      seterror((Validation(value)));
      if (error.email === undefined && email !== "") {
        const url = `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_PASSRESETSEND}`;
        const obj = new FormData();
        obj.append('isemail', email);
        await axios.post(url, obj).then((res) => {
          if (res.data.checkSend === "ok-send") {
            seterror(null);
            setstatebutn(true);
            setchecksend(true);
          } else if (res.data.checkSend === "email-not-found" || res.data.checkSend === undefined) {
            seterror("l address.");
            setchecksend(false);
            setstatebutn(true);
            setToggole(true);
            setmessage("لا يمكننا العثور على مستخدم بعنوان البريد الإلكتروني هذا.");
          }
          else if (res.data.checkSend === "error-send") {
            seterror("قم بتحديث الصفحة ");
            setchecksend(false);
            setstatebutn(true);
            setToggole(true)
            setmessage('يرجى تحديث الصفحة نظرًا لضعف اتصال الإنترنت.')
          }
          else {
            seterror("قم بتحديث الصفحة ");
            setchecksend(false);
            setstatebutn(true);
            setToggole(true)
            setmessage('يرجى تحديث الصفحة نظرًا لضعف اتصال الإنترنت.')
          }



        })




      }
    }
    else {
      setToggole(true);
      setmessage('يرجى إدخال عنوان البريد الإلكتروني. هذا الحقل مطلوب لإكمال العملية.');
    }

  }


  return (
    <>
      {toggle &&
        <AlertPopup funPopup={funTogle} val={message} />
      }
      <div className="padding">
        {checksend === false &&
          <>
            <label>عنوان البريد الإلكتروني</label>
            <br></br>
            <input type="text" onChange={(eo) => { setemail(eo.target.value) }} />
            <p className="error">{error.email}</p>
            {statebutton === false &&
              <p style={{ background: "#b1c5cd" }} className="btn" >جارٍ الإرسال ..</p>

            }
            {statebutton === true &&
              <p onClick={pushdata} className="btn" >إرسال رابط إعادة تعيين كلمة المرور</p>

            }

          </>
        }



        {error === null &&
          <label>
            لقد أرسلنا للتو رابط التحقق إلى {email}. بمجرد وصوله، سيكون صالحًا لمدة 10 دقائق.
          </label>


        }


      </div>
    </>
  );

}
export default Form;