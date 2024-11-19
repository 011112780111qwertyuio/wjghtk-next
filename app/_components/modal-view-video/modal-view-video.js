"use client";
import React, { useState } from "react";
import './modal-view-video.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
function ModalViewVideo({ link, showcamira }) {
  const [dialog, setdialog] = useState(false);
  const funDialog = () => {
    setdialog(dialog === false ? true : false);
  }

  return (
    <>
      {showcamira &&
        <span onClick={funDialog} className="my-icon-tip"><FontAwesomeIcon icon={faVideo} /></span>
      }
      {dialog &&
        <div className="pop-vedio">
          <p onClick={funDialog}>x</p>
          <div className="form-video">
            <iframe
              src={link === "" && link === undefined ? "" : link}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ width: '100%', height: '315px' }} // Adjust the dimensions as needed
            ></iframe>
          </div>
        </div>
      }
    </>
  );
}
export default React.memo(ModalViewVideo);