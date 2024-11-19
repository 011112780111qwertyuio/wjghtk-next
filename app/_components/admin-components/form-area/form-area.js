"use client";
import React, {  useEffect, useState } from "react";
import './form-area.scss';
import Tiptap from "../../Tiptap/Tiptap";
function FormArea({ handel, ditels }) {
  const [content, setcontent] = useState(ditels || "");
  const handelContentChange = (reson) => {
    setcontent(reson);
    handel(reson);
  } 


  

  return (
    <div className="form-area">
      <br></br>
      <form className="max-w-3xl w-full grid place-items-center max-auto pt-10-mb-auto pt-10 mb-10">
        <div className="text-3x1 text-center text-sky-300 mb-10">
        </div>
        <Tiptap
          content={content}
          ditls={ditels}
          onChange={(newContent) => { handelContentChange(newContent) }}
        />
      </form>



    </div>
  )
}
export default React.memo(FormArea);