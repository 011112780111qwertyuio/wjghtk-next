"use client";
import React, { useState } from "react";
import './style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { counterSlice } from '../../../redux/counterSlice';
const myvalue = counterSlice.getInitialState().nameLocal;
import { useRouter } from "next/navigation";
function ModalDeleted({ funToggleDelted, myid, valueToken }) {
  const router = useRouter();
  const [isloading, setloading] = useState(false)
  const funDbDelete = async () => {
    setloading(true);
    const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_DELETETHETOUR}`;
    const obj = new FormData();
    obj.append('myidItem', myid);
    obj.append("token_user_server", !valueToken || !valueToken.value ? "fd" : valueToken.value);
    await axios.post(url, obj).then((res) => {
      if (res.data.state === "ok-update") {
        funToggleDelted();
        router.refresh();
      }
      else {
        alert("اعد تحميل الصفحة من فضلك");
      }
    })

    setloading(false);

  }
  return (
    <div className="modal-deleted">
      <div className="padding">
        <div className="box">
          <div className="between-top-flex">
            {isloading === false ?
              <FontAwesomeIcon onClick={funToggleDelted} icon={faClose} />
              :
              <FontAwesomeIcon icon={faClose} />
            }
            <p>هل تريد الحذف</p>
          </div>
          <div dir="rtl" className="ditls">
            <p>نود إعلامك أنك على وشك حذف الرحلة، وهذا الإجراء سيكون نهائيًا. يرجى أخذ الحذر</p>

          </div>
          <div dir="trl" className="flex-btn">
            {isloading === false &&
              <p onClick={funToggleDelted} className="btn">الغاء</p>
            }
            {isloading === false ?
              <p onClick={funDbDelete} className="btn-active">حذف</p>
              :
              <p className="btn-loading">جارٍ التحميل...</p>

            }
          </div>
        </div>
      </div>
    </div>
  );

}
export default React.memo(ModalDeleted);