"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalDeleted from "../modal-deleted/modal-deleted";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
function PopSubMenue({ id, index,valueToken }) {
  const [toggle, setToggle] = useState(null);
  const funToggle = () => {
    setToggle(toggle === null ? index : null);
  }
  const [myid, setmyid] = useState('');
  const [ToggleDelet, setToggleDelet] = useState(false);
  const funToggleDeleted = () => {
    setToggleDelet(ToggleDelet === false ? true : false);
    setToggle(null);
  }

  return (
    <>
      {ToggleDelet &&
        <ModalDeleted valueToken={valueToken} funToggleDelted={funToggleDeleted} myid={myid} />
      }
      <div className="sub-menue">
        <FontAwesomeIcon onClick={() => { funToggle(index) }} icon={faEllipsisVertical} />
        {toggle === index &&
          <div dir="rtl" className="pop">
            <p>تواصل مع خدمة العملاء</p>
            <p onClick={() => { funToggleDeleted(); setmyid(id) }}>حذف</p>
          </div>
        }
      </div>
    </>

  );

}
export default PopSubMenue;