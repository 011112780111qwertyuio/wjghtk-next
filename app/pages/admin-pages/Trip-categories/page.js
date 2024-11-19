"use client";
import React, { useEffect, useState } from "react";
import './style.scss';
import axios from "axios";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavparTopContent from "@/app/_components/admin-components/nav-content/nav-content";
import NavparControlSearch from "@/app/_components/admin-components/navpar-control-content/navpar-control-content";
import Loading from "@/app/_components/loading/loading";
import { CheckApiTokenAdmin } from "@/app/_functions/check-api-token-admin";
function TripCategories() {
  let promiseB = CheckApiTokenAdmin();
  const myvalue = useSelector((state) => state.counter);
  const [isloading, setloading] = useState(false);
  const [alldata, setalldata] = useState([]);
  const [toogle, setToggle] = useState(false);
  const funcloseToggle = () => {
    setToggle(toogle === true ? false : true);
  }
  const [countItems, setCountItems] = useState(0);
  const [values, setvalues] = useState(null);
  const handelValues = (event) => {
    setvalues(event.target.value);
  }
  const getData = async () => {
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SENDTRIPCATEGORIES}`;
    setloading(true);
    if (values !== null && values !== "-- الرجاء التحديد ---") {

      const obj = new FormData();
      obj.append("name", values);
      await axios.post(url, obj).then((res) => {
        if (res.data === "ok") {
          alert("تم الاضافة")
          showData();
        }
        else {
          alert("لم يتم الاضافة")
        }

      })
    }
    else {
      alert("حدد نوع الرحلة");
    }

    setloading(false);


  }
  const dlelte = async (val) => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_DELETETTRIPCATEGORIES}`;
    const obj = new FormData();
    obj.append("myid", val);
    await axios.post(url, obj).then((res) => {
      if (res.data === "ok") {
        showData();
      }
      else {
        alert("اعد المحاولة")
      }

    })

    setloading(false);


  }
  const showData = async () => {
    setloading(true)
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTRIPCATEGORIES}`;
    await axios.post(url).then((res) => {
      if (res.data !== "not-foune") {
        setalldata(res.data);
      }
      else {
        setalldata([]);
      }
    })
    setloading(false);
  }
  useEffect(() => {
    showData();
  }, [])
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
        <div className="Trip-categories">
          <div className="navpar">
            <Navpar funtogglebarleft={funcloseToggle} />
          </div>
          <div className="flex-betwen">
            {toogle &&
              <div className="nav-left">
                <div>
                  <NavLeft myactive={"AdministratorControlPanelTours"} />

                </div>
              </div>
            }
            <div className="right-content">
              <div className="content-from">
                <NavparTopContent t1={"رحلة"} t2={"فئة"} t3={""} />
                <br></br>
                <div className="padding">
                  <NavparControlSearch countItems={countItems} title={"فئات الجولة"} nameBtn={"معطل"} link={""} />
                  <div className="flex-space-between">
                    <div className="left-from">
                      <div className="top-form">
                        <p>اضافة فئة</p>
                      </div>
                      <br></br>
                      <div className="padd">
                        <label>نوع الرحلة</label>
                        <br></br>
                        <select onChange={handelValues} name="myselected" defaultValue="npt-found">
                          <option>-- الرجاء التحديد ---</option>
                          <option value="السياحة البيئية">السياحة البيئية</option>
                          <option value="سياحة داخلية">سياحة داخلية</option>
                          <option value="رحلة مصحوبة بمرشد">رحلة مصحوبة بمرشد</option>
                          <option value="ِشرم الشيخ">شرم الشيخ</option>
                        </select>
                        <br></br>
                        <br></br>
                        <p onClick={getData} className="add-btn">اضف جديدا</p>

                      </div>
                    </div>
                    <div className="right-form">

                      <div className="form-table">
                        <table>
                          <thead>
                            <tr>
                              <th>اسم</th>
                              <th>تاريخ</th>
                              <th>حذف</th>
                            </tr>
                          </thead>
                          <tbody>

                            {alldata.map((item, index) => (
                              <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.mydt}</td>
                                <td onClick={() => { dlelte(item.id) }} className="delete">حذف</td>
                              </tr>


                            ))}


                          </tbody>
                        </table>
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
export default TripCategories;