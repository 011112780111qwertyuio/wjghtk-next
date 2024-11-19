"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useSelector } from "react-redux";
import { useRouter, redirect } from "next/navigation";
import './users.scss';
import { CheckApiTokenAdmin } from "@/app/_functions/check-api-token-admin";
import Loading from "@/app/_components/loading/loading";
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import Navbar from "@/app/_components/admin-components/navpar/navpar";
function Users() {
  let promiseB = CheckApiTokenAdmin();
  const myvalue = useSelector((state) => state.counter);
  const [toggle, settoggle] = useState(false);
  const [isloading, setloading] = useState(true);
  const [alldata, setdata] = useState(null);
  const funToggle = () => {
    settoggle(toggle === true ? false : true);
  }

  useEffect(() => {
    showdata();
  }, [])
  const showdata = async () => {

    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_ALLUSERSADMIN}`;
    await axios.post(url).then((res) => {
      if (res.data.stateAuth === "ok-auth") {
        setdata(res.data.data);

      }
      else {
        redirect('/');
      }

    })

    setloading(false)
  }




  if (promiseB === null || promiseB.data.stateUser === "error-network") {
    return (
      <Loading />
    )
  }
  if (promiseB.data.stateUser === "no-auth" || promiseB.data.stateUser === "not-found-cookie-network") {
    redirect('/');
  }
  if (promiseB.data.stateUser === "ok-auth" && isloading !== true) {
    return (
      <div className="users">
        <div className="nav-top">
          <Navbar funtogglebarleft={funToggle} />
        </div>
        <div className="flex-between">
          {
            toggle &&

            <div className="nav-left">
              <div>
                <NavLeft myactive={"AdministratorControlPanelUsers"} />
              </div>
            </div>
          }
          <div className={`from-right ${toggle === false && "fit-content"}`}>
            <div className="top-control">
              <div className="left">
                <p className="tile">جميع المستخدمين</p>
                <br></br>

              </div>
              <div className="right">
                <p className="btn">اضافة مستخدم جديد</p>
                <br></br>
                <div className="flex-div">
                  <select>
                    <option>-- يختار --</option>
                    <option> مدير </option>
                    <option>عميل </option>
                  </select>
                  <input type="text" placeholder="البحث عن طريق الاسم" />

                  <p className="btn">بحث المستخدم</p>

                </div>
                <br></br>
                <span>تم العثور على {alldata.length} مادة</span>
              </div>
            </div>
            <div className="child-table">
              <table>
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>اسم</th>
                    <th>بريد الكترونى</th>
                    <th>ائتمان</th>
                    <th>هاتف</th>
                    <th>دور</th>
                    <th>تاريخ</th>





                  </tr>
                </thead>
                <tbody>

                  {alldata.map((item) => (

                    <tr key={item.id}>
                      <td><input type="checkbox" /></td>
                      <td>{item.first_name + " " + item.last_name}</td>
                      <td>{item.email}</td>
                      <td>{item.card}</td>
                      <td>{item.phone}</td>
                      <td>عميل</td>
                      <td>{item.datetime}</td>
                      <td>
                        <select>
                          <option>تحرير</option>
                          <option>التحقق من البريد الاكترونى</option>
                          <option>تغيير كلمة المرور</option>
                          <option>اضافة رصيد</option>

                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Users;