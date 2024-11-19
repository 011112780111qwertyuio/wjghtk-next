"use client";
import axios from "axios";
import { redirect } from "next/navigation";
import Loading from "@/app/_components/loading/loading";
import { useSelector } from "react-redux";
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavparLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavparContnet from "@/app/_components/admin-components/nav-content/nav-content";
import React, { useState, useEffect } from "react";
import ModalAddTripDate from "@/app/_components/admin-components/modal-Add-trip-date/modal-Add-trip-date";
import AvailabilityCalendar from "@/app/_components/admin-components/Availability-calendar/Availability-calendar";
import './style.scss';
import { CheckApiTokenAdmin } from "@/app/_functions/check-api-token-admin";
function FlightAvailabilityCalendar() {
  let promiseB = CheckApiTokenAdmin();

  const [ubdate, setubdate] = useState(false);
  const funubdate = () => {
    setubdate(ubdate === false ? true : false);

  }
  const [isloading, setloading] = useState(true);
  const [apiData, setApiData] = useState(null);
  const funApiData = (val) => {
    setApiData(val)
  }
  const myvalue = useSelector((state) => state.counter);
  const [toggle, setToogle] = useState(true);
  const funToggle = () => {
    setToogle(toggle === true ? false : true);
  }
  const [alldata, sedata] = useState([]);
  const showdata = async () => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_ALLTOURS}`;
    const obj = new FormData();
    obj.append("limit", 1000000);
    obj.append("offset", 0);
    obj.append("val_order", "dataTime");
    obj.append("type_order", "desc");
    await axios.post(url, obj).then((res) => {
      if (res.data.length > 0 && res.data !== "error-network") {
        sedata(res.data);
        setactive(active === null ? res.data[0].id : active);
        showTimeDate(active === null ? res.data[0].id : active);
      }
    });
    setloading(false);
  }
  useEffect(() => {
    showdata();
  }, [ubdate])
  const [active, setactive] = useState(null);
  const [showModalAddTripDate, setshowModalAddTripDate] = useState(false);
  const funshowModalAddTripDate = () => {
    setshowModalAddTripDate(showModalAddTripDate === false ? true : false);
  }
  /* show data time */
  const [allTime, setAlltime] = useState([]);
  const showTimeDate = async (id) => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTOURAVAILABILITYCALENDAR}`;
    const obj = new FormData();
    obj.append("uidtour", id),
      obj.append("search", '-');
    await axios.post(url, obj).then((res) => {
      if (res.data.state === "ok") {
        setAlltime(res.data.data);
      }
      if (res.data === "error") {
        setAlltime([]);
      }

    })


    setloading(false);
  }
  const funactive = (id) => {
    showTimeDate(id);
    setactive(id);
  }
  /* stop data time */

  const fundeleted = async (uid) => {

    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_DELETEDTOURAVAILABILIYCALENDAR}`;
    const obj = new FormData();
    obj.append("uid", uid);
    await axios.post(url, obj).then((res) => {
      funubdate();
    })
    setloading(false);

  }
  /* stop delete date */


  if (promiseB === null || promiseB.data.stateUser === "error-network") {
    return (
      <Loading />
    )
  }
  if (promiseB.data.stateUser === "ok-auth") {
    return (
      <>
        {isloading &&
          <Loading />
        }
        <div className="flight-availability-calendar">
          <ModalAddTripDate funubdate={funubdate} local={myvalue} date={apiData} uidTour={active} funshowModalAddTripDate={funshowModalAddTripDate} showModalAddTripDate={showModalAddTripDate} />
          <div className="add-tour">
            <div className="navpar-top">
              <Navpar funtogglebarleft={funToggle} />
            </div>
            <div className="flex-page">
              {toggle &&
                <div className="left-nav">
                  <div className="fixed-left">
                    <NavparLeft />

                  </div>
                </div>
              }
              <div className={`right-page ${toggle === false && "fit-content"}`}>
                <div className="padding">
                  <NavparContnet t1={"جولات"} t2={"التوفر"} t3={""} />
                  <p className="title">تقويم توفر الجولات</p>
                  <div className="from-content">
                    <div className="child-search">
                      <div className="search">
                        <input type="text" placeholder="البحث عن طريق الاسم" />
                        <p>يبحث</p>
                      </div>
                      <div className="r-tile">
                        <p>عرض 1 - 15 من 16 مساحة</p>
                        <p onClick={funshowModalAddTripDate} className="add">اضافة تاريخ</p>
                      </div>
                    </div>
                    <div className="chile-spacing">
                      <div className="tile">
                        <p>التوفر</p>
                      </div>
                      <div className="row">
                        <div className="items-tours-left">





                          {alldata.map((item, index) => (
                            <div onClick={() => { funactive(item.id) }} style={{ backgroundColor: active === item.id ? "white" : "transparent" }} key={index} className="child">
                              <p>#{item.id + " " + item.title}</p>
                            </div>

                          ))}
                        </div>
                        <div className="ditls-right">
                          <AvailabilityCalendar funubdate={funubdate} fundeleted={fundeleted} alldata={allTime} apiData={funApiData} />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>


        </div>
      </>
    )
  }
  if (promiseB.data.stateUser === "no-auth" || promiseB.data.stateUser === "not-found-cookie-network") {
    redirect('/');

  }

}
export default FlightAvailabilityCalendar;
