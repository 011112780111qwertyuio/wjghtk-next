"use client";
import React, { useState } from "react";
import './style.scss';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
function ModalAddTripDate({ funubdate, local, uidTour, funshowModalAddTripDate, showModalAddTripDate, date }) {
  const [isloading, setloading] = useState(false);
  const [alldata, setdata] = useState({
    "stDt": "",
    "enDt": "",
    "state": "",
    "maxFrind": "",
    "name": "",
    "min": "",
    "max": "",
    "price": "",
    "number_tickets": ""
  });
  const funhandel = (event) => {
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
    else {
      const obj = { ...alldata, [event.target.name]: event.target.value };
      setdata(obj);
    }
  }
  const [dataformation, setdataformation] = useState([]);
  const [ubdate, setubdate] = useState(false);
  const funpush = () => {

    if (alldata.max === "" || alldata.max == 0) {
      alert("الاعلى ؟");
    }
    if (alldata.min === "" || alldata.min == 0) {
      alert("الاقل ؟");
    }
    if (alldata.price === "" || alldata.price == 0) {
      alert("السعر ؟");
    }
    if (alldata.name === "") {
      alert("الاسم ؟");
    }

    if (alldata.max !== "" && alldata.max !== '0' && alldata.min !== "" && alldata.min !== '0' && alldata.price !== "" && alldata.price !== '0' && alldata.name !== "") {
      setdataformation([...dataformation, alldata]);

    }

  }
  const deletItem = (index) => {
    dataformation.splice(index, 1);
    setubdate(ubdate === false ? true : false);
  }
  const [myTime, setmyTime] = useState(null);
  const [allTimes, setAlltimes] = useState([]);
  const getmyTime = () => {
    if (myTime !== null) {
      const myedit = myTime.split(":");
      if (myedit[0] > 12) {
        setAlltimes([...allTimes, +myedit[0] - 12]);
      }
      else {
        setAlltimes([...allTimes, +myedit[0]]);
      }
    }
    else {
      alert("حدد التاريخ");
    }

  }
  const deleteTime = (indexItem) => {
    setAlltimes([
      ...allTimes.slice(0, indexItem),
      ...allTimes.slice(indexItem + 1),
    ])
  }
  const pushData = async () => {
    const newdtatStart = new Date(alldata.stDt);
    const newdtatEnd = new Date(alldata.enDt);
    setloading(true);
    const url = await `${local.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_ADDTOURAVAILABILITYCALENDAR}`;
    const obj = new FormData();
    if (alldata.enDt === "") {
      alert("التاريخ ؟");
    }
    if (alldata.stDt === "") {
      alert("التاريخ ؟");
    }
    if (alldata.maxFrind === "") {
      alert("ماكس ضيوف؟");
    }
    if (alldata.min === 0 || alldata.min === "") {
      alert("الحد الادنى؟");
    }
    if (alldata.max === 0 || alldata.max === "") {
      alert("الاعلى ؟");
    }
    if (alldata.price === 0 || alldata.price === "") {
      alert("السعر ؟");
    }
    if (alldata.name === "") {
      alert("الاسم ؟");
    }
    if (uidTour === null || uidTour === "" || uidTour === undefined) {
      alert("قم بتحديد الرحلة");
    }
    if (dataformation.length === 0) {
      alert("اضف اشخاص");
    }
    if (allTimes.length === 0) {
      alert("حدد الوقت");
    }
    if (alldata.number_tickets.length === 0 || alldata.number_tickets < 0 || alldata.number_tickets === 0) {
      alert("ادخل عدد التذاكر");
    }
    if (alldata.min !== "" && alldata.min !== '0' && alldata.number_tickets > 0 && alldata.number_tickets.length > 0 && alldata.name !== "" && alldata.price !== "" && alldata.price !== '0' && alldata.max !== '0' && alldata.max !== "" && alldata.maxFrind !== "" && alldata.stDt !== "" && alldata.enDt !== "" && uidTour !== null && uidTour !== "" && uidTour !== undefined && dataformation.length > 0 && allTimes.length > 0) {
      obj.append("date_calender", date);
      obj.append("uid_tour", uidTour);
      obj.append("startTime", newdtatStart.getFullYear() + "-" + Number(newdtatStart.getMonth() + 1) + "-" + newdtatStart.getDate());
      obj.append("endTime", newdtatEnd.getFullYear() + "-" + Number(newdtatEnd.getMonth() + 1) + "-" + newdtatEnd.getDate());
      obj.append("state", alldata.state);
      obj.append("Max_guest", alldata.maxFrind);
      obj.append("allItems", JSON.stringify(allTimes));
      obj.append("Personal_information", JSON.stringify(dataformation));
      obj.append("number_tickets", alldata.number_tickets);
      await axios.post(url, obj).then((res) => {
        if (res.data === "ok insert") {
          alert("تم الحفظ بنجاح");
          clearAllData();
        }
        else {
          alert("خطا غير متوقع");
        }




      })
    }

    setloading(false);

  }


  const clearAllData = () => {
    setdataformation([]);
    funubdate();
    setdata({
      "stDt": "",
      "enDt": "",
      "state": "",
      "maxFrind": "",
      "name": "",
      "min": "",
      "max": "",
      "price": ""
    });
    funshowModalAddTripDate();
    setAlltimes([]);
  }



  if (showModalAddTripDate) {
    return (
      <div className="modal-add-trip-date">
        <div className="padding">
          <div className="center">
            <div className="top-nav">
              <p>اضافة تاريخ</p>
              <span onClick={() => { funshowModalAddTripDate(); clearAllData(); }}>X</span>
            </div>
            <div className="my-content">
              <br></br>
              <div className="flex-space">
                <label>نطاقات التاريخ</label>
                <input name="number_tickets" defaultValue={alldata.number_tickets} onChange={funhandel} type="number" placeholder="عدد التذاكر" />
              </div>
              <br></br>
              <br></br>

              <div className="datatime">
                <input value={alldata.stDt} onChange={funhandel} name="stDt" type="date" />
                <input value={alldata.enDt} onChange={funhandel} name="enDt" type="date" />
              </div>
              <br></br>
              <br></br>
              <div className="form-online-time">
                <div className="row">
                  <input type="time" onChange={(eo) => { setmyTime(eo.target.value) }} defaultValue={alldata.mytime} />
                  <p className="btn" onClick={getmyTime}>اضافة الوقت المتاح</p>
                </div>
                <div className="show-times">



                  {allTimes.length === 0 ?
                    <p>لايوجد اوقات</p>
                    :
                    allTimes.map((item, index) => (
                      <div key={index} className="flex-row">
                        <span onClick={() => { deleteTime(index) }}><FontAwesomeIcon icon={faRemove} /></span>
                        <input type="radio" id={index} /><label htmlFor={index}>{item}</label>
                      </div>
                    ))
                  }




                </div>
              </div>
              <br></br>

              <label>حالة</label>
              <br></br>
              <br></br>
              <input defaultChecked={alldata.state === "on" ? true : false} name="state" onChange={funhandel} type="checkbox" id="11" /><label htmlFor="11">متاح للحجز</label>
              <br></br>
              <br></br>
              <label>ماكس ضيوف</label>
              <br></br>
              <br></br>
              <input name="maxFrind" onChange={funhandel} value={alldata.maxFrind} type="text" placeholder="10" />
              <br></br>
              <br></br>

              <div className="add-option">
                <div className="box">
                  <label>اسم</label>
                  <br></br>
                  <br></br>
                  <input value={alldata.name} onChange={funhandel} name="name" type="text" placeholder="اطفال" />
                  <br></br>
                  <label>الحد الادنى</label>
                  <br></br>
                  <br></br>
                  <input value={alldata.min} name="min" onChange={funhandel} type="number" placeholder="1" />
                  <br></br>
                  <br></br>
                  <label>الاعلى</label>
                  <br></br>
                  <br></br>
                  <input value={alldata.max} name="max" onChange={funhandel} type="number" placeholder="10" />
                  <br></br>
                  <br></br>
                  <label>سعر</label>
                  <br></br>
                  <br></br>
                  <input value={alldata.price} name="price" onChange={funhandel} type="number" placeholder="5000" />
                  <div className="top">
                    <p onClick={funpush}>اضافة</p>
                  </div>
                </div>
                <br></br>
                <div className="show-items">

                  {dataformation.map((item, index) => (
                    <div key={index}>
                      <label>اسم</label>
                      <br></br>
                      <br></br>
                      <input readOnly type="text" value={item.name} />
                      <br></br>
                      <label>الحد الادنى</label>
                      <br></br>
                      <br></br>
                      <input value={item.min} readOnly type="text" placeholder="1" />
                      <br></br>
                      <br></br>
                      <label>الاعلى</label>
                      <br></br>
                      <br></br>
                      <input value={item.max} readOnly type="text" placeholder="10" />
                      <br></br>
                      <br></br>
                      <label>سعر</label>
                      <br></br>
                      <br></br>
                      <input value={item.price} readOnly type="text" placeholder="5000" />
                      <br></br>
                      <br></br>

                      <p onClick={() => { deletItem(index) }} className="delet">حذف</p>
                      <br></br>
                      <br></br>

                      <hr></hr>
                      <br></br>
                    </div>
                  ))}

                </div>

                <div className="fotter">
                  <p onClick={() => { funshowModalAddTripDate(); clearAllData() }} className="btn-close">يغلق</p>
                  {isloading === false ? <p onClick={pushData} className="btn-save">حفظ التغيرات</p> :
                    <p style={{ backgroundColor: "rgb(159, 157, 157)" }} className="btn-save">جارى الحفظ ..</p>
                  }
                </div>

              </div>



            </div>




          </div>
        </div >


      </div >

    );
  }
}
export default ModalAddTripDate;