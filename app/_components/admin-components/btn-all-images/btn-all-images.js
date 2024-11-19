"use client";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './btn-all-images.scss';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function BtnAllImages({ val, allfiles }) {
  const ublode = useRef();
  const changeUplode = async (event) => {
    const reader = new FileReader();
    if (event.target.files.length === 0) {
      /*
      allfiles(
        {
          "ublode": "cansel",
          "out":[],
          "src":"",
          "delet":""
        }
      );
*/

    }


    else {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = function (eo) {

        allfiles({
          "ublode": "true",
          "out": [...val.out, reader.result],
          "src":event.target.files[0],
          "delet":''
        });

      }

    }

  }
  const deleteItem = (index) => {

    allfiles({
      "src":"",
      "delet":index,
      "ublode": "false",
      "out": [
        ...val.out.slice(0, index),
        ...val.out.slice(index + 1),
      ],
    
    });

    
  }


  return (
    <div className="btn-all-images">
      <div className="flex-images">


        {
          val.out.map((item, index) => (
            <div key={index} className="mycard">
              <span onClick={() => { deleteItem(index) }}><FontAwesomeIcon icon={faTrash} /></span>
              <img src={item} alt="" />
            </div>
          ))

        }

      </div>
      <input onChange={(event) => { changeUplode(event) }} hidden ref={ublode} type="file" accept="image/*" />
      <p onClick={() => { ublode.current.click() }}>+ حدد الصور</p>

    </div>
  );
}
export default React.memo(BtnAllImages);