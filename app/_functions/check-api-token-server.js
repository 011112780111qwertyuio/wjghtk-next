"use server";
import { counterSlice } from "../redux/counterSlice";
import axios from "axios";
const myValue = counterSlice.getInitialState().nameLocal;
import { cookies } from "next/headers";
export async function CheckApiTokenServer() {
  let url = `${myValue}/${process.env.API_CHECKINGAPITOKENSERVER}`;
  let valueCookie = cookies().get('token_user_server');
  let res = null;
  // تحقق من وجود الكوكيز
  if (!valueCookie || !valueCookie?.value) {
    res = "kklkl"  // أو أي رد مناسب
  }
  else {
    const obj = new FormData();
    obj.append("token_user_server", valueCookie?.value);
    try {
      const response = await axios.post(url, obj);
      res = response;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return res;
};
