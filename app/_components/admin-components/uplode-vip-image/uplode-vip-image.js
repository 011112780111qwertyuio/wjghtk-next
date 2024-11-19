"use client";
import React, { useRef } from "react";
import './uplode-vip-image.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
function UplodeVipImage({ src, myfile }) {
  const myvalue = useSelector((state) => state.counter);

  const myfileImgVip = useRef(null);
  const funDeleteImgVip = () => {
    myfile(null)
    const obj = {
      "ublode": "false",
      "out": '',
      "src": ''
    };
    myfile(obj)
  }
  const funUblode = async (event) => {
    const reader = new FileReader();
    if (event.target.files.length === 0) {
      myfile(null)
      const obj = {
        "ublode": "false",
        "out": '',
        "src": ''
      };
      myfile(obj)

    }
    else {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (eo) {
        const obj = {
          "ublode": "true",
          "out": reader.result,
          "src": event.target.files[0]
        };
        myfile(obj)




      }

    }

  }



  return (

    <div className="uplode-vip-image-paner">
      <div className="card">
        <div className="img">
          {src.ublode === "default" ?
            <img priority="true" src={myvalue.nameLocal + "/" + process.env.NEXT_PUBLIC_API_KEY_PATHIMAGES + "/" + src.out} alt="" />
            :
            <p></p>
          }
          {src.ublode === 'true' ?
            <img src={src.out} alt="img" />
            :
            <div className="flex-ublode-control">
              <input hidden ref={myfileImgVip} onChange={(event) => { funUblode(event) }} name="paner" accept="image/*" type="file" />
              <button onClick={() => myfileImgVip.current.click()}>
                <p>تحديد الصور</p>
              </button>
            </div>
          }
        </div>


        {
          src.ublode === 'true' &&
          <span onClick={funDeleteImgVip} className="delete">
            <FontAwesomeIcon icon={faTrash} />
          </span>

        }

      </div>
    </div>
  );

}
export default UplodeVipImage;