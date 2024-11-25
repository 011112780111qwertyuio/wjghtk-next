"use client";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import './style.scss';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faCalendar } from "@fortawesome/free-solid-svg-icons";
import LoadingBtn from "../loading-btn/loading-btn";
function Datetime({ funItems, uid, local, funDataFormation, clearAllData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [savedDt, setSavedDt] = useState([]);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  /* show date */
  const [isloading, setloading] = useState(true);
  const [data, setmydata] = useState(null);
  const [selectedDay, setselectedDay] = useState([]);
  const funselected = (index) => {
    clearAllData();
    var arr = [];
    year.toString().padStart('0', 2);
    let res = data.find(person => person.startTime === year + "-" + month + "-" + index);
    if (data.find(person => person.startTime === year + "-" + month + "-" + index && person.state === "on") !== undefined) {
      funItems(res);
      funDataFormation(data.find(person => person.startTime === year + "-" + month + "-" + index).Personal_information);
      var mystar = res.startTime.split('-')[2];
      var stop = res.endTime.split('-')[2];
      for (let r = +mystar; r <= +stop; r++) {
        arr.push(+r);
      }
      const edit = {
        "startTime": mystar.toString().padStart(2, '0') + "/" + month.toString().padStart(2, '0') + "/" + year,
        "endTime": stop.toString().padStart(2, '0') + "/" + month.toString().padStart(2, '0') + "/" + year,

      }
      setSavedDt([edit]);
      setselectedDay(arr);
      toggleDropdown();
    }
    else {
      setSavedDt([]);
      setselectedDay([]);
      clearAllData();
    }
  }
  /* show date */
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
    setselectedDay([]);
    setSavedDt([]);
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
              <input onClick={(eo) => { funselected(eo.target.value) }} className={data.find(person => person.startTime === year + "-" + month + "-" + i && person.state === "on") !== undefined && selectedDay.find(person => person === i) === undefined ? "active" : selectedDay.length === 0 && data.find(person => person.startTime === year + "-" + month + "-" + i) === undefined ? "disble" : selectedDay.find(person => person === i) !== undefined && data[0].startTime.split('-')[0] == year && data[0].startTime.split('-')[1] == month ? "selected" : "disble"} type="text" readOnly value={i} />
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
    setloading(true);
    const edit = year + "-" + month + "-";
    const url = await `${local}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTOURAVAILABILITYCALENDAR}`;
    const obj = new FormData();
    obj.append("uidtour", uid)
    obj.append("search", edit)
    await axios.post(url, obj).then((res) => {
      if (res.data.state === "ok") {
        setmydata(res.data.data);
      }
      else {
        setmydata(null);
        clearAllData();
      }
    })
    setloading(false);

  }
  /* ---------------------------- */
  const [startX, setStartX] = useState(0);
  // Handling swipe events
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX; // Get starting touch position
    setStartX(touchStart);
  }
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX; // Get ending touch position
    const distance = touchEnd - startX; // Calculate distance moved

    if (distance > 50) {
      // Swipe right
      funButton("left");
    } else if (distance < -50) {
      // Swipe left
      funButton("right");
    }
  }

  // Fetch data for the selected date



  return (

    <div className="dateTime">
      <div onClick={toggleDropdown} className="show-time">
        <FontAwesomeIcon icon={faCalendar} />
        {savedDt.length === 0 ?
          <p>تحديد التاريخ</p>
          :
          <p>{savedDt[0].startTime}</p>
        }
      </div>
      {
        isOpen &&
        <div ref={dropdownRef} className="parent-time show">
          <div className="top-parent">
            <span onClick={() => { funButton("left") }}> <FontAwesomeIcon icon={faAngleRight} /></span>
            <p>{formation.monthAr[month] + " " + year}</p>
            <span onClick={() => { funButton("right") }}><FontAwesomeIcon icon={faAngleLeft} /></span>
          </div>
          <div onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart} className="my-table">
            {isloading === true && data === null &&
              <div className="loading">
                <LoadingBtn />
              </div>
            }
            <table>
              <thead>
                <tr>
                  {formation?.daysAr?.map((item, index) => (
                    <th key={index} scope="col">{item}</th>
                  ))}
                </tr>

              </thead>
              <tbody>


                {rows()}

              </tbody>
            </table>
          </div>
        </div>
      }
    </div>



  );

}
export default React.memo(Datetime);
