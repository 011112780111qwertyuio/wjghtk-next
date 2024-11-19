"use client";
import React, { useRef, useState } from "react";
import './modal-view-images.scss';
import { faCamera, faAngleLeft, faAngleRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ModalViewImages({ local, data, outicon }) {
  const [toggle, settoggle] = useState(false);
  const funToggle = () => {
    settoggle(toggle === false ? true : false);
  }
  const sliderImages = useRef();
  const myToggle = (val) => {
    const diraction = val === "left" ? -1 : 1;
    const scrollAmount = sliderImages.current.clientWidth * diraction;
    sliderImages.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
  return (
    <>
      {outicon &&
        <span className="camira" onClick={funToggle}><FontAwesomeIcon icon={faCamera} /></span>
      }
      {toggle &&
        <div className="modal-view-images">
          <div className="top">
            <span onClick={funToggle}><FontAwesomeIcon icon={faClose} /></span>
          </div>
          <div className="fit-content">
            <div className="flex-between">
              <div className="l-icon larg">
                <span onClick={() => { myToggle("left") }} className="left-icon">
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </div>
              <div className="view">

                <div ref={sliderImages} className="slider">
                  {data.map((item, index) => (
                    <img key={index} alt="it" src={local + "/" + process.env.NEXT_PUBLIC_API_KEY_PATHIMAGES + "/" + item} />
                  ))}
                </div>


                <div className="btn-mobile">
                  <div className="l-icon">
                    <span onClick={() => { myToggle("left") }} className="left-icon">
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                  </div>
                  <div className="r-icon">
                    <span onClick={() => { myToggle("right") }} className="right-icon">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="r-icon larg">
                <span onClick={() => { myToggle("right") }} className="right-icon">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </span>
              </div>
            </div>
          </div>

        </div>
      }
    </>

  );
}
export default React.memo(ModalViewImages);