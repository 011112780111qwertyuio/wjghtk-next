"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryData } from "../redux/counterSlice";
export default function GetCountry({ price }) {
  const dispatch = useDispatch(); // الحصول على الدالة dispatch  
  const countryData = useSelector((state) => state.counter.CountryData); // استخرج بيانات الدولة من المتجر
  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);
  const [res, setres] = useState(0);
  const showData = async () => {
    if (countryData === "egypt") {
      var d = new Intl.NumberFormat('en-EG', {
        style: 'currency',
        currency: 'EGP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(price);
      setres(d);
    }
    else {
      var d = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(price / 50);
      setres(d);
    }

  }
  useEffect(() => {
    showData();
  }, [price, countryData])

  return res === "" ? "انتظر.." : res;
}
