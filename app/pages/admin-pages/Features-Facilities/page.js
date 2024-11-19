"use client";
import React, { useState,useEffect } from "react";
import './style.scss';
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavparTopContent from "@/app/_components/admin-components/nav-content/nav-content";
import NavparControlSearch from "@/app/_components/admin-components/navpar-control-content/navpar-control-content";
import { CheckApiTokenAdmin } from "@/app/_functions/check-api-token-admin";
import Loading from "@/app/_components/loading/loading";
import axios from "axios";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
function FeaturesFacilities() {
  let promiseB = CheckApiTokenAdmin();
  const myvalue = useSelector((state) => state.counter);
  const [isloading, setloading] = useState(false);
  const [alldata, setalldata] = useState([]);
  const [toogle, setToggle] = useState(false);
  const funcloseToggle = () => {
    setToggle(toogle === true ? false : true);
  }
  const [countItems, setCountItems] = useState(0);
  const [values, setvalues] = useState({
    myname: "",
  });
  const handelValues = (event) => {
    const obj = { ...values, [event.target.name]: event.target.value };
    setvalues(obj);
  }
  const getData = async () => {
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_ADDFACILILIESFEATURE}`;
    setloading(true);
    if (values.myname !== "") {
      const obj = new FormData();
      obj.append("name", values.myname);
      await axios.post(url, obj).then((res) => {
        if (res.data === "ok") {
          setvalues({
            myname: "",
          })
          showData();

          alert("تم الاضافة")
        }
        else {
          alert("لم يتم الاضافة")
        }

      })
    }
    else if (values.myname === "") {
      alert("ادخل اسم السمة");
    }
  
    else {
      alert('لا تترك الحقول فارغة');
    }
    setloading(false);
  }
  const dlelte = async (val) => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_DELETEFACILITIESFEATURE}`;
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
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOW_FACILITIESFEATURE}`;
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
        <div className="features-facilities">
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
                <NavparTopContent t1={"رحلة"} t2={"سمات"} t3={"مرافق"} />
                <br></br>
                <div className="padding">
                  <NavparControlSearch countItems={countItems} title={"سمات الجولة"} nameBtn={"معطل"} link={""} />
                  <div className="flex-space-between">
                    <div className="left-from">
                      <div className="top-form">
                        <p>اضافة سمة</p>
                      </div>
                      <br></br>
                      <div className="padd">
                        <label>اسم</label>
                        <br></br>
                        <input name="myname" value={values.myname} onChange={handelValues} type="text" placeholder="اسم السمة مثال : واى فاى" />
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
                                <td>{item.name_feature}</td>
                                <td>{item.DtTime}</td>
                                <td onClick={() => { dlelte(item.ID_Facilities_feature) }} className="delete">حذف</td>
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
    );
  }
  if (promiseB.data.stateUser === "no-auth" || promiseB.data.stateUser === "not-found-cookie-network") {
    redirect('/');
  }

}
export default FeaturesFacilities;