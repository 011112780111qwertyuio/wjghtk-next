"use client";
import Loading from "@/app/_components/loading/loading";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faCity, faEnvelope, faFloppyDisk, faLocationArrow, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaCodepen } from "react-icons/fa";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'
import axios from "axios";
import { counterSlice } from '../../../redux/counterSlice';
const myvalue = counterSlice.getInitialState().nameLocal;
import AlertPopup from "@/app/_components/alert-popup/alert-popup";
function Form({ datauser }) {
  const router = useRouter();
  const [isloading, setloading] = useState(false);
  const [fileimg, setfileimg] = useState(null);
  const [ispathimg, setpathimg] = useState(null);
  const [myavtar, setmyavtar] = useState("");
  const cuurenfile = useRef(null);
  const ublodeAvatar = async (event) => {
    const reader = new FileReader();
    if (event.target.files.length === 0) {
      setfileimg(null)
      setpathimg(null);
    }
    else {
      setpathimg(event.target.files[0].name);
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (eo) {
        setfileimg(reader.result);
        setmyavtar(event.target.files[0]);
      }

    }

  }
  const [values, setValues] = useState({
    country: datauser?.country || '',
    fname: datauser?.first_name || '',
    lname: datauser?.last_name || '',
    city: datauser?.city || '',
    state: datauser?.state || '',
    zipcode: datauser?.zipcode || '',
    phone: datauser?.phone || '',
    email: datauser?.email || '',
    address: datauser?.adress || '',
  });
  const handelInput = (event) => {
    const object = { ...values, [event.target.name]: event.target.value };
    setValues(object);
  }
  const pushdata = async () => {
    let stateInputs = "";
    setloading(true);
    const urlAvata = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_UPLOAD}`;
    const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_UPDATEUSERINFORMATION}`;
    if (values.email !== undefined && values.email !== "" && values.email !== datauser?.email) {
      const obj = new FormData();
      obj.append("newemail", values.email.trim().length === 0 ? datauser?.email : values.email);
      obj.append("isemail", datauser?.email);
      obj.append("userid", datauser?.ID_user);
      obj.append("pass", datauser?.pass_user);
      await axios.post(url, obj).then(async (res) => {
        if (res.data.email === "ok-update-email") {
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
              stateInputs = "ود أن نعلمك أنه حدث خطأ أثناء محاولتك إتمام العملية، وذلك بسبب ضعف الاتصال بالإنترنت في الوقت الحالي. نوصي بإعادة المحاولة بعد التأكد من استقرار الاتصال.";
              return;
            }
            window.location.replace("/pages/login/");
            stateInputs = "";

          } catch (error) {
            console.error('Request failed:', error);
          }
        }
        if (res.data.email === "error-ubdate-email") {
          stateInputs = "ود أن نعلمك أنه حدث خطأ أثناء محاولتك إتمام العملية، وذلك بسبب ضعف الاتصال بالإنترنت في الوقت الحالي. نوصي بإعادة المحاولة بعد التأكد من استقرار الاتصال.";
        }
        if (res.data.email === "error-email") {
          stateInputs = "ود أن نعلمك أنه حدث خطأ أثناء محاولتك إتمام العملية، وذلك بسبب ضعف الاتصال بالإنترنت في الوقت الحالي. نوصي بإعادة المحاولة بعد التأكد من استقرار الاتصال.";
        }
        if (res.data.email === "Enter a valid email, for example cutedoglover4@gmail.com") {
          stateInputs = "أدخل بريدًا إلكترونيًا صالحًا، مثل: cutedoglover4@gmail.com";
        }
        if (res.data.email === "ok-email") {
          stateInputs = 'نود إعلامك أن عنوان البريد الإلكتروني الذي أدخلته قد تم استخدامه بالفعل في حساب آخر لدينا.';
        }
      })
    }
    if (values.fname !== undefined && values.fname !== "" && values.fname !== datauser?.first_name) {
      const obj = new FormData();
      obj.append("fname", values.fname.trim().length === 0 ? datauser?.first_name : values.fname);
      obj.append("email", datauser?.email);
      await axios.post(url, obj).then((res) => {
        /*
        if (res.data.fname === "ok-ubdate-fname") {
          stateInputs = "";
        }
        if (res.data.fname === "The first name must not exceed 10 characters") {
          stateInputs = "يجب ألا يتجاوز الاسم الأول 10 أحرف";
        }
        else {
          stateInputs = "يجب ألا يتجاوز الاسم الأول 10 أحرف";

        }
*/

      })
    }
    if (values.lname !== undefined && values.lname !== "" && datauser?.last_name !== values.lname) {
      const obj = new FormData();
      obj.append("lname", values.lname.trim().length === 0 ? datauser?.last_name : values.lname);
      obj.append("email", datauser?.email);
      await axios.post(url, obj).then((res) => {
        /*
        if (res.data.lname === "ok-ubdate-lname") {
          stateInputs = "";
        }
        if (res.data.lname === "error-ubdate-lname") {
          stateInputs = "يجب ألا يتجاوز الاسم الثاني 10 أحرف";
        }
        if (res.data.lname === "The second  name must not exceed 10 characters") {
          stateInputs = "يجب ألا يتجاوز الاسم الثاني 10 أحرف";

        }
        else {
          stateInputs = "يجب ألا يتجاوز الاسم الثاني 10 أحرف";

        }
        */
      })



    }
    if (values.phone !== undefined && values.phone !== "" && datauser?.phone !== values.phone) {
      const obj = new FormData();
      obj.append("phone", values.phone.trim().length === 0 ? datauser?.phone : values.phone);
      obj.append("email", datauser?.email);
      await axios.post(url, obj).then((res) => {
        /*
        if (res.data.phone === "ok-ubdate-phone") {
          stateInputs = "";
        }
        if (res.data.phone === "The phone must not exceed 25 characters") {
          stateInputs = "يجب ألا يتجاوز الهاتف 25 رقم";
        }
        else {
          stateInputs = "يجب ألا يتجاوز الهاتف 25 رقم";

        }
*/

      })



    }
    if (values.zipcode !== '' && datauser?.zipcode !== values.zipcode) {
      const obj = new FormData();
      obj.append("zipcode", values.zipcode.trim().length === 0 ? datauser?.zipcode : values.zipcode);
      obj.append("email", datauser?.email);
      await axios.post(url, obj).then((res) => {
        /*
        if (res.data.zipcode === "ok-ubdate-zipcode") {
          stateInputs = "";
        }
        if (res.data.zipcode === "error-ubdate-zipcode") {
          stateInputs = "من فضلك، أدخل رمز zipcode (الرمز البريدي) بشكل صالح.";
        }
        else {
          stateInputs = "من فضلك، أدخل رمز zipcode (الرمز البريدي) بشكل صالح.";

        }
*/

      })
    }
    if (values.address !== '' && datauser?.address !== values.address) {
      const objAdress = new FormData();
      objAdress.append("adress", values.trim().length === 0 ? datauser?.address : values.address);
      objAdress.append("email", datauser?.email);
      await axios.post(url, objAdress).then((res) => {
        /*

        if (res.data.adress === "ok-ubdate-adress") {
          stateInputs = "";
        }

        if (res.data.adress === "error-adress") {
          stateInputs = "من فضلك، أدخل عنوانًا صالحًا وصحيحًا.";
        }
        else {
          stateInputs = "من فضلك، أدخل عنوانًا صالحًا وصحيحًا.";

        }
*/
      })
    }
    if (values.city !== "" && datauser?.city !== values.city) {
      const obj = new FormData();
      obj.append("city", values.city.trim().length === 0 ? datauser?.city : values.city);
      obj.append("email", datauser?.email);
      await axios.post(url, obj).then((res) => {
        /*
        if (res.data.city === "ok-ubdate-city") {
          stateInputs = "";
        }
        else {
          stateInputs = "من فضلك، أدخل اسم المدينة بشكل صالح وصحيح.";
        }
*/

      })



    }
    if (values.state !== "" && datauser?.state !== values.state) {
      const obj = new FormData();
      obj.append("state", values.state.trim().length === 0 ? datauser?.state : values.state);
      obj.append("email", datauser?.email);
      await axios.post(url, obj).then((res) => {
        /*
        if (res.data.state === "ok-ubdate-state") {
          stateInputs = "";
        }
        if (res.data.state === "error-ubdate-state") {
          stateInputs = "من فضلك، أدخل اسم المحافظة بشكل صحيح.";
        }
        else {
          stateInputs = "من فضلك، أدخل اسم المحافظة بشكل صحيح.";

        }
*/
      })
    }
    if (values.country !== "" && datauser?.country !== values.country) {
      const obj = new FormData();
      obj.append("country", values.country.trim().length === 0 ? datauser?.country : values.country);
      obj.append("email", datauser?.email);
      await axios.post(url, obj).then((res) => {
        /*
        if (res.data.country === "ok-ubdate-country") {
          stateInputs = "";
        }
        else {
          stateInputs = "حدث خطأ أثناء تحديد الدولة. من فضلك، حاول مرة أخرى.";
        }
        */

      })



    }
    if (myavtar !== "" && myavtar !== undefined) {
      const obj = new FormData();
      obj.append("id", datauser?.ID_user);
      obj.append("fileToUpload", myavtar);
      await axios.post(urlAvata, obj).then((res) => {
        console.log(res);
      })
    }
    setloading(false);
    if (stateInputs === "") {
      fundialog("تم تحديث بياناتك بنجاح!");
      router.refresh();
    }
    else {
      fundialog(stateInputs);
    }
  }
  /* modal  */
  const [isdialog, setdialog] = useState({ "state": false, "val": "" });
  const fundialog = (myval) => {
    setdialog({ "state": isdialog.state === false ? true : false, "val": myval })
  }
  /* stop modal */
  return (
    <>
      {isloading &&
        <Loading />
      }
      {isdialog.state &&
        <AlertPopup funPopup={fundialog} val={isdialog.val} />

      }
      <div className="flex-inputs">
        <div className="l-inputs">
          <p className="title-inputs">المعلومات الشخصية</p>
          <br></br>
          <label>البريد الإلكتروني <span>*</span></label>
          <br></br>
          <br></br>
          <div className="input">
            <span><FontAwesomeIcon icon={faEnvelope} /></span>
            <input value={values.email} onChange={handelInput} name="email" type="text" placeholder="البريد الإلكتروني" />
          </div>
          <br></br>
          <div className="row">
            <div className="act">
              <label>الاسم الأول</label>
              <br></br>
              <br></br>
              <div className="input">
                <span><FontAwesomeIcon icon={faUser} /></span>
                <input value={values?.fname} onChange={handelInput} name="fname" type="text" placeholder="الاسم الأول" />
              </div>

            </div>
            <br></br>
            <div className="act">
              <label>الاسم الأخير</label>
              <br></br>
              <br></br>
              <div className="input">
                <span><FontAwesomeIcon icon={faUser} /></span>
                <input value={values?.lname} name="lname" type="text" onChange={handelInput} placeholder="الاسم الأخير" />
              </div>
            </div>
          </div>
          <br></br>
          <label>رقم الهاتف</label>
          <br></br>
          <br></br>
          <div className="input">
            <span><FontAwesomeIcon icon={faPhone} /></span>
            <input value={values?.phone} onChange={handelInput} name="phone" type="text" placeholder="رقم الهاتف" />
          </div>
          <br></br>
          <label>الرمز البريدي</label>
          <br></br>
          <br></br>
          <div className="input">
            <span><FaCodepen /></span>
            <input value={values?.zipcode} onChange={handelInput} name="zipcode" type="text" placeholder="الرمز البريدي" />
          </div>
          <div className="ublode-avatar">
            <br></br>
            <label>الصورة الرمزية</label>
            <br></br>
            <div className="row-ublode">
              <input type="file" hidden ref={cuurenfile} accept="image/*" onChange={(event) => { ublodeAvatar(event) }} />
              <p onClick={() => { cuurenfile.current.click() }} className="btn">تصفح...</p>
              <div className="link"><p>{ispathimg === null ? "جارٍ التحميل..." : ispathimg}</p></div>
            </div>
            <div className="image">
              {fileimg === null ?
                <>
                  {datauser?.avatar !== "" ?
                    <img src={`${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_PATHIMAGES + "/" + datauser?.avatar}`} alt="img" />
                    :
                    <span><FontAwesomeIcon icon={faUser} /></span>
                  }
                </>
                :
                <Image width={1000} height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src={fileimg} alt="img" />
              }
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="div-save-left">
            <p onClick={pushdata} className="btn-save">
              <span><FontAwesomeIcon icon={faFloppyDisk} /></span>
              حفظ التغييرات</p>
          </div>
        </div>
        <div className="r-inputs">
          <p className="title-inputs">معلومات الموقع</p>
          <br></br>
          <label>عنوان</label>
          <br></br>
          <br></br>
          <div className="input">
            <span><FontAwesomeIcon icon={faLocationArrow} /></span>
            <input value={values?.address} onChange={handelInput} name="address" type="text" placeholder="2040/1, Sector 37-C" />
          </div>
          <br></br>
          <label>مدينة</label>
          <br></br>
          <br></br>
          <div className="input">
            <span><i className="fa-solid fa-city"></i></span>
            <span><FontAwesomeIcon icon={faCity} /></span>
            <input value={values?.city} onChange={handelInput} name="city" type="text" placeholder="القاهرة" />
          </div>
          <br></br>
          <label>المحافظة</label>
          <br></br>
          <br></br>
          <div className="input">
            <span><FontAwesomeIcon icon={faChartSimple} /></span>
            <input value={values?.state} name="state" type="text" onChange={handelInput} placeholder="القاهرة" />
          </div>
          <br></br>
          <label>دولة</label>
          <br></br>
          <br></br>
          <div className="input">
            <select defaultValue={values.country} onChange={handelInput} name="country">
              <option value="">-- اختر --</option>
              <option value="Saudi Arabia">السعودية</option>
              <option value="Egypt">مصر</option>
              <option value="United Arab Emirates">الإمارات العربية المتحدة</option>
              <option value="Jordan">الأردن</option>
              <option value="Iraq">العراق</option>
              <option value="Lebanon">لبنان</option>
              <option value="Syria">سوريا</option>
              <option value="Palestine">فلسطين</option>
              <option value="Kuwait">الكويت</option>
              <option value="Oman">عمان</option>
              <option value="Qatar">قطر</option>
              <option value="Bahrain">البحرين</option>
              <option value="Tunisia">تونس</option>
              <option value="Algeria">الجزائر</option>
              <option value="Morocco">المغرب</option>
              <option value="Libya">ليبيا</option>
              <option value="Mauritania">موريتانيا</option>
              <option value="Somalia">الصومال</option>
              <option value="Djibouti">جيبوتي</option>
              <option value="Sudan">السودان</option>
              <option value="Comoros">جزر القمر</option>
              <option value="Mauritius">موريشيوس</option>
            </select>

          </div>
          <br></br>
          <div className="div-save-right">
            <p onClick={pushdata} className="btn-save">
              <span><FontAwesomeIcon icon={faFloppyDisk} /></span>
              حفظ التغييرات</p>
          </div>
        </div>
      </div>
    </>
  );

}
export default Form;