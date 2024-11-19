"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
function CommentAdmin({ local, typeTrafel, idTour }) {
  const [sum, setsum] = useState(0);
  const showSumation = async () => {
    const obj = new FormData();
    obj.append("idTour", idTour);
    obj.append("typetrafel", typeTrafel);
    await axios.post(local, obj).then((res) => {
      if (res.data.state === "not-found-comment") {
        setsum(0);
      }
      else {
        setsum(res.data.data.length);
      }
    })


  }
  useEffect(() => {
    showSumation();
  }, [])




  return (
    <td className="comment"><span>{sum}</span></td>
  )

}
export default React.memo(CommentAdmin);