"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
function ShowAvatar({ iduser, local }) {
  const [data, setdata] = useState('');
  const showdata = async () => {
    const url = await `${local}/${process.env.NEXT_PUBLIC_API_KEY_SHOWAVATAR}`;
    const obj = new FormData();
    obj.append("iduser", iduser);
    await axios.post(url, obj).then((res) => {
      setdata(res.data.data[0].avatar);
    })
  }
  useEffect(() => {
    showdata();
  }, [])


  return (
    <>
      {data !== "" ?
        <img priority="true" src={local + "/" + process.env.NEXT_PUBLIC_API_KEY_PATHIMAGES + "/" + data} alt="" />
        :
        <div className="center-defaylt">
          <FontAwesomeIcon icon={faUserTie} />
        </div>
      }
    </>
  );



}
export default React.memo(ShowAvatar);