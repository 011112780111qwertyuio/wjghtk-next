"use client";
import React, { useState } from "react";
import './style.scss';
import { useSelector } from "react-redux";
import axios from "axios";
function ModalBookDates({ shoemodal, itemDt, funubdate }) {
  const [loading, setloading] = useState(false);
  const myvalue = useSelector((state) => state.counter);
  const [alldata, setdata] = useState({
    "stDt": itemDt.startTime,
    "enDt": itemDt.endTime,
    "state": itemDt.state,
    "maxFrind": itemDt.Max_guest,
    "number_tickets": itemDt.number_tickets,

  });
  const funhandedInputs = (event) => {
    if (event.target.type === "checkbox") {

      if (event.target.checked) {

        const opj = { ...alldata, [event.target.name]: event.target.value };
        setdata(opj);
      }
      else {
        const opj = { ...alldata, [event.target.name]: "of" };
        setdata(opj);
      }
    }
    if (event.target.type === "date") {
      const date = new Date(event.target.value);
      const obj = { ...alldata, [event.target.name]: date.getFullYear() + "-" + Number(date.getMonth() + 1) + "-" + date.getDate() };
      setdata(obj);
    }
    if (event.target.type === "number") {
      const obj = { ...alldata, [event.target.name]: event.target.value };
      setdata(obj);
    }
  }
  const funubdateFormation = async () => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_UPDARETOURAVAILABILIYCALENDAR}`;
    const obj = new FormData();
    obj.append('id', itemDt.id_tour_availability_calendar)
    obj.append('std', alldata.stDt)
    obj.append('etd', alldata.enDt)
    obj.append('state', alldata.state)
    obj.append('maxFrind', alldata.maxFrind)
    obj.append('number_tickets', alldata.number_tickets)
    if (alldata.stDt === "") {
      alert("ادخل التاريخ");
    }
    if (alldata.enDt === "") {
      alert("ادخل التاربخ");
    }
    if (alldata.maxFrind === "") {
      alert("عدد الاشخاص");
    }
    if (alldata.number_tickets <= 0) {
      alert("ادخل عدد التذاكر");
    }
    if (alldata.stDt !== "" && alldata.enDt !== "" && alldata.maxFrind !== "" && alldata.number_tickets > 0) {
      await axios.post(url, obj).then((res) => {
        if (res.data === "okubdate") {
          alert("تم الحفظ بنجاح");
          funubdate();
        }
        else {
          alert("حدث خطا ")
        }
      })
    }



    setloading(false);

  }



  return (
    <div className="modal-Book-dates">
      <div className="box">
        <div className="top">
          <p>معلومات التاريخ</p>
          <span onClick={shoemodal}>x</span>
        </div>
        <div className="form">
          <div className="flex-space">
            <label>نطاقات التاريخ</label>
            <input className="edit" name="number_tickets" onChange={funhandedInputs} defaultValue={itemDt.number_tickets} type="number" placeholder="عدد التذاكر" />
          </div>
          <br></br>
          <br></br>
          <input className="edit" onChange={funhandedInputs} name="stDt" value={alldata.stDt.split('-')[0] + "-" + alldata.stDt.split('-')[1].padStart(2, '0') + "-" + alldata.stDt.split('-')[2].padStart(2, '0')} type="date" />
          <br></br>
          <br></br>
          <input className="edit" onChange={funhandedInputs} name="enDt" defaultValue={alldata.enDt.split('-')[0] + "-" + alldata.enDt.split('-')[1].padStart(2, '0') + "-" + alldata.enDt.split('-')[2].padStart(2, '0')} type="date" />
          <br></br>
          <br></br>

          <div className="show-times">
            <label>جميع الاوقات المتاحة</label>
            <br></br>
            <br></br>
            <div className="wrap-items">
              {
                JSON.parse(itemDt.all_Times).map((item, index) => (
                  <div key={index} className="row-flex">
                    <input defaultChecked type="radio" id={index} /><label htmlFor={index}>{item}.00</label>
                  </div>
                ))

              }



            </div>
          </div>


          <br></br>
          <label>حالة</label>
          <br></br>
          <br></br>
          <input className="edit" onChange={funhandedInputs} name="state" defaultChecked={alldata.state === "on" ? true : false} type="checkbox" id="4" /><label htmlFor="4">متاح للحجز؟</label>
          <br></br>
          <br></br>
          <label>ماكس ضيوف</label>
          <br></br>
          <input className="edit" onChange={funhandedInputs} name="maxFrind" value={alldata.maxFrind} type="number" placeholder="13" />
          <br></br>
          <br></br>
          <br></br>

          {JSON.parse(itemDt.Personal_information).map((item, index) => (
            <div key={index}>
              <label>الاسم</label>
              <br></br>
              <br></br>
              <input readOnly type="text" placeholder="adult" defaultValue={item.name} />
              <br></br>
              <br></br>
              <label>الحد الادنى</label>
              <br></br>
              <br></br>
              <input readOnly type="text" placeholder="1" defaultValue={item.min} />
              <br></br>
              <label>الاعلى</label>
              <br></br>
              <br></br>
              <input readOnly type="text" placeholder="10" defaultValue={item.max} />
              <br></br>
              <label>سعر</label>
              <br></br>
              <br></br>
              <input readOnly type="text" placeholder="1000" defaultValue={item.price} />
              <br></br>
              <br></br>

            </div>
          ))}



        </div>

        <div className="fotter">
          <p onClick={shoemodal} className="close">يغلق</p>
          {loading === true ?
            <p className="loading" >جارى الحفظ</p>
            :
            <p onClick={funubdateFormation} className="save" >حفظ التغيرات</p>

          }
        </div>

      </div>

    </div>
  );

}
export default React.memo(ModalBookDates);