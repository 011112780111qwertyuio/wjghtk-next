"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalNavHome from "../Modal-nav-home/Modal-nav-home";
import {  faBars } from "@fortawesome/free-solid-svg-icons";
function Items({promiseB,countre}) {
  const [modalnav, setmodalnav] = useState(false);
  const showModal = () => {
    setmodalnav(modalnav === false ? true : false);
  }
  return (<>
    {/* start modal pop */}
    {modalnav &&
      <ModalNavHome showmodal={showModal} promiseB={promiseB} countre={countre}/>
    }
    {/* stop modal pop */}
    <div className="right">
      <div onClick={showModal} className='button-menue'>
        <FontAwesomeIcon icon={faBars} />
      </div>

    </div>
  </>);

}
export default Items;