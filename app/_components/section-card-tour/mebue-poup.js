"use client";
import React from "react";
import { useRouter } from "next/navigation";
function MebuePoup({ selected }) {
  const router = useRouter();
  const handelChange = async (event) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('According', event.target.value);
    router.push(currentUrl.toString());
  }
  return (
    <select defaultValue={selected !== undefined ? selected : "ٍسعر"} onChange={handelChange}>
      <option value="price">ٍسعر</option>
      <option value="price">تقييم</option>
      <option value="dataTime">تاريخ التوفر</option>
    </select>
  );


}
export default React.memo(MebuePoup);