"use client";
import React, { useEffect, useState } from "react";
import './style.scss';
import axios from "axios";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
function DateTimeTableSection({ funtoggle, funSaveDt, dtpush }) {
  const myvalue = useSelector((state) => state.counter);
  const [isloading, setloading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  const [data, setmydata] = useState(null);
  const [selectedDay, setselectedDay] = useState(0);
  const funselected = (index) => {
    year.toString().padStart('0', 2);
    let res = data.find(person => person.startTime === year + "-" + month + "-" + index);
    if (data.find(person => person.startTime === year + "-" + month + "-" + index && person.state === "on") !== undefined) {
      var mystar = res.startTime.split('-')[2];
      setselectedDay(index);
      funSaveDt(mystar.toString().padStart(2, '0') + "/" + month.toString().padStart(2, '0') + "/" + year);
      dtpush(year + "-" + month + "-" + mystar);
    }
    else {
      setselectedDay(0);
      funSaveDt(null)
      dtpush('')

    }
  }
  const formation = {
    monthEn: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAr: ["", "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    daysAr: [
      "س", "أ", "اث", "ث", "أرب", "خ", "ج"
    ]
  }
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
      setselectedDay(0)
    }
    if (btn === "left") {
      setselectedDay(0)
      if (month === 1) {
        setmonth(12);
        setyear(year - 1);
      }
      else {
        setmonth(month - 1);
      }
    }
    fundays(year, month);
    funSaveDt(null);
    dtpush('');

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
    let f = + i;
    var element = [];
    if (i <= allDayes) {
      for (let y = 0; y <= 6; y++) {
        if (i <= allDayes) {
          element.push(<td key={y} >

            {data == null ?
              <input type="text" readOnly className="disble" value={i} />
              :
              <input onClick={(eo) => { funselected(eo.target.value) }} className={data.find(person => person.startTime === year + "-" + month + "-" + i) !== undefined && selectedDay === 0 ? "active" : selectedDay >= 1 && data.find(person => person.startTime === year + "-" + month + "-" + i) === undefined ? "disble" : selectedDay >= 1 && selectedDay == i ? "selected" : data.find(person => person.startTime === year + "-" + month + "-" + i) !== undefined ? "active" : "disble"} type="text" readOnly value={i} />
            }
            <input type="text" defaultValue={i++} hidden />





          </td>)
        }
      }
    }
    return element;
  }

  useEffect(() => {
    showdata();
  }, [year, month])
  const showdata = async () => {
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTABLETOURAVAILABILITYCALENDAR}`;
    await axios.post(url).then((res) => {
      if (res.data.state === "ok") {
        setmydata(res.data.data);
      }
      else {
        setmydata(null);

      }
    })
    setloading(false);
  }



  return (

    <div className="dateTime-table-section">
      {
        isOpen &&
        <div className="parent-time show">
          <div className="top-parent">
            <span onClick={() => { funButton("left") }}><FontAwesomeIcon icon={faAngleRight} />  </span>
            <p>{formation.monthAr[month] + " " + year}</p>
            <span onClick={() => { funButton("right") }}><FontAwesomeIcon icon={faAngleLeft} /></span>
          </div>
          <div className="my-table">
            {isloading &&
              <div className="loading">   </div>
            }
            <table>
              <thead>
                <tr>
                  {formation.daysAr.map((item, index) => (
                    <th key={index} scope="col">{item}</th>
                  ))}
                </tr>

              </thead>
              <tbody>
                {rows()}
              </tbody>
            </table>
          </div>
          <br></br>
          <div className="flex-btn">
            <p onClick={funtoggle}>إلغاء</p>
            <p onClick={funtoggle}>تطبيق</p>
          </div>
        </div>
      }
    </div>



  );





}
export default React.memo(DateTimeTableSection);