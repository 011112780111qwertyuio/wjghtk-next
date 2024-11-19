"use client";
import React from "react";
import LogoWeb from "@/app/_components/Logo/Logo";
import './login-admin.scss';
import { useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useSelector } from "react-redux";
import { useRouter, redirect } from "next/navigation";
import Loading from "@/app/_components/loading/loading";
import { CheckApiTokenAdmin } from "@/app/_functions/check-api-token-admin";
function LoginInAdmin() {
  let promiseB = CheckApiTokenAdmin();
  const router = useRouter();
  const myvalue = useSelector((state) => state.counter);
  const [isloading, setloading] = useState(false);
  const [vales, setvales] = useState({
    email: "",
    pass: ""
  });




  const handelInput = (event) => {
    const obj = { ...vales, [event.target.name]: event.target.value };
    setvales(obj);
  }
  const getdata = async () => {

    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_LOGINADMIN}`;
    const obj = new FormData();
    obj.append('email', vales.email);
    obj.append('pass', vales.pass);
    await axios.post(url, obj, { withCredentials: true }).then((res) => {

      if (res.data.checkEmail === "ok-auh") {
        router.replace("/pages/admin-pages/dathboard/");
      }
      else {
        alert("not fount acount");
      }


    })



    setloading(false);
  }
  if (promiseB === null || promiseB.data.stateUser === "error-network") {
    return (
      <Loading />
    )
  }
  if (promiseB.data.stateUser === "ok-auth") {
    redirect('/pages/admin-pages/dathboard/');
  }

  if (promiseB.data.stateUser === "no-auth" || promiseB.data.stateUser === "not-found-cookie-network") {

    return (
      <>
        {isloading && <Loading />}
        <div className="login-admin head">

          <div className="form">

            <div className="content-form">
              <div className="logo">
                <LogoWeb />
              </div>
              <div className="myform">
                <p className="title">تسجيل دخول لوحة تحكم</p>
                <input onChange={handelInput} type="text" placeholder="الايميل" name="email" />
                <br></br>
                <input onChange={handelInput} type="password" placeholder="الباسورد" name="pass" />
                <br></br>
                <button onClick={getdata} className="btn-in">تسجيل دخول</button>
                <div className="or">
                  <p>or</p>
                </div>

              </div>
            </div>



          </div>
        </div>
      </>
    );
  }
}
export default LoginInAdmin;