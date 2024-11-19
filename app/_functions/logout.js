"use client";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useSelector } from "react-redux";
export const Logout = async (funloading) => {
  const myvalue = useSelector((state) => state.counter);
  funloading(true);
  const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_LOGOUT}`;
  await axios.post(url, {withCredentials: true }).then(async (res) => {
    window.location.replace("/");
  })
  await funloading(false);
}