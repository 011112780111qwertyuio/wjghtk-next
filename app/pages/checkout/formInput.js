"use client";
import React, { useEffect, useState } from "react";
import PaymentMethod from "@/app/_components/Payment-Method/Payment-Method";
import Validation from "@/app/_functions/validation";
import axios from "axios";
import ModalStateMessage from "@/app/_components/modal-state-message/modal-state-message";
import { counterSlice } from '../../redux/counterSlice';
const myvalue = counterSlice.getInitialState().nameLocal;
function FormInput({ dataTour, token }) {
  const [error, setError] = useState('');
  const [stateModal, setStateModal] = useState({
    "dialog": false,
    "message": "testing",
    "typeState": "no"
  });
  const fnModalState = (val, typeState) => {
    setStateModal({
      "dialog": stateModal.dialog === true ? false : true,
      "message": val,
      "typeState": typeState
    })
  }
  const [vlues, setValues] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "ahmedphafhfr16-8",
    phone: "",
    resEmail: "",
    numberOrder: dataTour.numberOrder,
    title: dataTour.title,
    idTour: +dataTour.idTour,
    allSelectServec: dataTour.allSelectServec,
    allSumation: dataTour.allSumation,
    allGust: dataTour.allGust,
    Facilities: dataTour.Facilities,
    Includes: dataTour.Includes,
  });
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setError(Validation(vlues));
  }, [vlues])
  function handleInput(event) {
    const newObj = { ...vlues, [event.target.name]: event.target.value.trim() };
    setValues(newObj);
  }
  const pushData = async () => {
    const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_ORDERTHEBOOKINGTOUR}`;
    var newObj = "";
    newObj = {
      ...vlues, "fname": vlues.fname === "" ? " " : vlues.fname,
      "lname": vlues.lname === "" ? " " : vlues.lname,
      "email": vlues.email === "" ? " " : vlues.email,
      "resEmail": vlues.resEmail === "" ? " " : vlues.resEmail,
      "phone": vlues.phone === "" ? " " : vlues.phone
    };
    setValues(newObj);
    if (error.notError === "not-error") {
      setLoading(true);
      const obj = new FormData();
      obj.append('fname', vlues.fname)
      obj.append('lname', vlues.lname)
      obj.append('idTour', dataTour.idTour)
      obj.append('numOrder', vlues.numberOrder)
      obj.append('phone', vlues.phone)
      obj.append('allgust', JSON.stringify(vlues.allGust))
      obj.append('allSeleServec', JSON.stringify(vlues.allSelectServec))
      obj.append('AllSumation', vlues.allSumation)
      obj.append('email', vlues.email)
      obj.append('Includes', vlues.Includes)
      obj.append('Facilities', vlues.Facilities)
      obj.append('token_user_server', !token || !token?.value ? "rre" : token.value)
      await axios.post(url, obj).then((res) => {
        if (res.data.stateByOrder === "ok-order-by") {
          fnModalState("يسعدنا أن نؤكد لك أن حجز رحلتك   قد تم بنجاح. شكراً لاختيارك لنا!", 'ok');
        }
        else if (res.data.stateByOrder === "error-delete-Tekit") {
          fnModalState("عذرًا، حدثت مشكلة غير متوقعة يرجى التواصل معنا لمزيد من المساعدة", 'no')
        }
        else if (res.data.stateByOrder === "error-insert-tekit" || res.data.stateByOrder === "error-tam-order") {
          fnModalState('عذرًا، هناك مشكلة في الاتصال بالإنترنت', 'no');
        }
        else {
          fnModalState('عذرًا، هناك مشكلة في الاتصال بالإنترنت', 'no');
        }
      })
    }
    setLoading(false);
  }
  return (
    <>
      {isLoading &&
        <div className="modal-loading">
          <div className="padding">
            <div className="form">
              <div className="spinner"></div>
              <br></br>
              <p>جاري تأكيد حجزك</p>
            </div>
          </div>
        </div>
      }
      {stateModal.dialog === true &&
        <ModalStateMessage numberOrder={vlues.numberOrder} valueState={stateModal} fundialog={fnModalState} />
      }

      <div className="checkout">

        <div>
          <div className="title">معلومات الاتصال</div>
          <div className="myform">
            <div>
              <label>الاسم الأول </label>
              <br></br>
              <input value={vlues.fname} name="fname" onChange={handleInput} type="text" />
              <h5>{error.fname}</h5>

            </div>
            <div>
              <label>اسم العائلة </label>
              <br></br>
              <input name="lname" value={vlues.lname} onChange={handleInput} type="text" />
              <h5>{error.lname}</h5>

            </div>
            <div>
              <label>إيميل</label>
              <br></br>
              <input value={vlues.email} name="email" onChange={handleInput} type="text" />
              <h5>{error.email}</h5>

            </div>
            <div>
              <label>إعادة كتابة البريد الإلكتروني </label>
              <br></br>
              <input value={vlues.resEmail} name="resEmail" onChange={handleInput} type="text" />
              <h5>{error.resEmail}</h5>
            </div>
            <div>
              <label>رقم الهاتف للتواصل </label>
              <br></br>
              <input value={vlues.phone} name="phone" onChange={handleInput} type="text" />
              <h5>{error.phone}</h5>
            </div>
            <div className="myfit">
              <div><p>المبلغ المراد دفعه:</p></div>
              <div>
                <input defaultChecked type="radio" id="f" />
                <label htmlFor="f">$129.00</label>
              </div>
            </div>
          </div>
          <div className="box">
            <p className="mytile-box">طريقة الدفع</p>
            <PaymentMethod />
            <div className="flex-radio">
              <input type="checkbox" id="e" />
              <label htmlFor="e">قرأت وأوافق على الشروط والأحكام</label>
            </div>
            <div className="content-text">
              عليك تعديل صفحة 'الشروط والأحكام' لاستبدال هذا المحتوى الابتدائي بمحتواك الخاص.            </div>
            <button onClick={pushData}>أكمل طلبي</button>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );

}
export default React.memo(FormInput);