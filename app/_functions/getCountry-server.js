"use server";
import { counterSlice } from '../redux/counterSlice';
const local = counterSlice.getInitialState().nameLocal;
import axios from 'axios';
export const GetCountryServer = async () => {
  let res = "";
  try {
    const response = await axios.post(`${local}/${process.env.API_KEY_REVEALINGTHENAMEOFTHECOUNTRY}`);
    response.data;
    if (response?.data === "egypt") {
      res = "EGP";
    }
    else {
      res = "USD";
    }
  }
  catch (error) {
    res = "USD";
  }

  return res === "" ? "انتظر.." : res;
}
