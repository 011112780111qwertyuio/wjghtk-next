"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
axios.defaults.withCredentials = true;
export const CheckApiTokenAdmin = () => {
  const [value, setvalue] = useState(null);
  const myvalue = useSelector((state) => state.counter);
  const start = async () => {
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_CHECKINGTOKENADMIN}`;
    await axios.post(url, { withCredentials: true }).then((res) => {
      setvalue(res);
    })
  }
  useEffect(() => {
    start();
  }, [])
  return value;

}


