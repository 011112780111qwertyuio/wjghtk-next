"use client";
import React, { useState } from "react";
import './style.scss';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ModalBookDates from "../modal-Book-dates/modal-Book-dates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function AvailabilityCalendar({ apiData, alldata, fundeleted ,funubdate}) {
  const defaultProps =
  {
    highlightDate: [new Date()],
    weekdayFormat: ["الجمعة", "الخميس", "الاربعاء", "الثلاثاء", "الاثنين", "الاحد", "السبت"],
    calendarRows: 6,
    monthsArabic: ["", "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    monthsEng: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };
  /* start show modal update */
  const [showmodal, setshowmodal] = useState(false);
  const [itemDt, setItemDt] = useState(null);
  const funshow = (item) => {
    setshowmodal(showmodal === false ? true : false);
    setItemDt(item);
  }
  /* stop show modal update */
  /* start delete date */



  const [dateTime, setdateTime] = useState(new Date());
  const [year, setyear] = useState(dateTime.getFullYear());
  const [month, setmonth] = useState(dateTime.getMonth() + 1);
  const [allDayes, setallDayes] = useState(new Date(year, month + 1, 0).getDate());
  const funButton = (btn) => {
    if (btn === "right") {
      if (month === 12) {
        setmonth(1);
        setyear(year + 1);
      }
      else {
        setmonth(month + 1);
      }
    }
    if (btn === "left") {
      if (month === 1) {
        setmonth(12);
        setyear(year - 1);
      }
      else {
        setmonth(month - 1);
      }
    }
    fundays(year, month);
  }
  const fundays = (isyear, ismonth) => {
    const dt = new Date(isyear, ismonth + 1, 0).getDate();
    setallDayes(dt);
  }
  var i = 1;
  var elementRows = [];

  const rows = () => {
    for (let c = 0; c <= 6; c++) {
      elementRows.push(
        <tr key={c}>
          {td()}
        </tr>
      )
    }
    return elementRows;
  }
  const td = () => {
    var element = [];
    if (i <= allDayes) {
      for (let y = 0; y <= 6; y++) {
        if (i <= allDayes) {
          element.push(<td key={y} >
            <span>{i}</span>

            <div>
              {alldata.map((item, index) => (

                <div key={index}>

                  {
                    item.state === "on" && Number(item.startTime.split('-')[0]) === year && Number(item.startTime.split('-')[1]) === month && Number(item.startTime.split('-')[2]) === i &&
                    <>

                      <br></br>
                      <span onClick={() => { fundeleted(item.id_tour_availability_calendar) }}><FontAwesomeIcon icon={faTrash} /></span>

                      <div onClick={() => { funshow(item) }} className="items">

                        <div>دولار </div>
                        <div>دولار امريكى</div>
                        <div>للضيوف 14</div>
                        <div className="abso-pop">
                          <p>ألبالغون:500 دولار امريكى</p>
                          <p>الحد الاقصى للضيوف:500 دولار امريكى</p>
                          <p>الاطفال:500 دولار امريكى</p>
                        </div>
                      </div>
                    </>
                  }

                  {
                    item.state === "of" && Number(item.startTime.split('-')[0]) === year && Number(item.startTime.split('-')[1]) === month && Number(item.startTime.split('-')[2]) === i &&
                    <p onClick={() => { funshow(item) }} className="block">محظور </p>

                  }


                </div>
              ))}



            </div>
            <input type="text" defaultValue={i++} hidden />

          </td>)
        }
      }
    }
    return element;
  }





  return (
    <>

      {showmodal &&
        <ModalBookDates itemDt={itemDt} shoemodal={funshow} funubdate={funubdate}/>
      }
      <div className="Availability-calendar-taple">
        <div className="my-table">

          <div style={{ display: "contents" }}>
            <div className="flex-between">
              <p className="title">{defaultProps.monthsArabic[month] + "" + year}</p>

              <div className="row">
                <p onClick={() => { funButton("") }} className="day">اليوم</p>
                <div className="btn">
                  <span onClick={() => { funButton("left") }}><FaAngleLeft /></span>
                  <span onClick={() => { funButton("right") }}><FaAngleRight /></span>
                </div>
              </div>
            </div>
            <br></br>
            <table id="calendartable">
              <thead>
                <tr>
                  {defaultProps.weekdayFormat.map((item, index) => (
                    <th key={index} scope="col">{item}</th>
                  ))}
                </tr>

              </thead>
              <tbody>
                {/*rows*/}
                {rows()}


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );

}
export default AvailabilityCalendar;