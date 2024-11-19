"use client"
import React from "react";
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
function ModalStateMessage({ valueState, fundialog, numberOrder }) {
  const router = useRouter();
  const getPageDitls = async () => {
    await router.replace(`/pages/confirmation/${numberOrder}`);
    fundialog();
  }
  return (
    <div className="modal-state-message">
      <div className="padding">
        <div className="form">
          <div onClick={fundialog} className="close">
            <span><FontAwesomeIcon icon={faClose} /></span>
          </div>
          <br></br>
          <br></br>
          <div className="message">
            <div style={{ background: valueState.typeState === "ok" ? '#2eb885' : '#E92026' }} className="state">
              {
                valueState.typeState === "ok" ?
                  <span>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  :
                  <span>?</span>

              }
            </div>
            {valueState.typeState === "ok" ?
              <p style={{ color: valueState.typeState === "ok" && '#2eb885' }} className="title">تم تأكيد حجزك</p>
              :
              <p className="title">error</p>
            }
            <p dir="rtl" className="subtile">{valueState.message}</p>
          </div>
          <br></br>
          <br></br>

          {valueState.typeState === "ok" ?
            <p style={{ background: valueState.typeState === "ok" ? '#2eb885' : '#E92026' }} onClick={getPageDitls} className="btn-modal">
              تفاصيل الحجز
            </p>
            :
            <p style={{ background: valueState.typeState === "ok" ? '#2eb885' : '#E92026' }} onClick={fundialog} className="btn-modal">
              يكمل
            </p>
          }
        </div>
      </div>
    </div>
  );

}
export default React.memo(ModalStateMessage);