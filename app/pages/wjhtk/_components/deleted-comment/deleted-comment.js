"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
function DletedComment({ local, Token, IDComment }) {
  const router = useRouter();
  const [isloading, setloading] = useState(false);
  const url = local + "/" + process.env.NEXT_PUBLIC_API_KEY_DELETEDCOMMENTTOPIC;
  const funDeleted = async () => {
    setloading(true);
    const obj = new FormData();
    obj.append("token_user_server", Token);
    obj.append("idComment", IDComment)
    await axios.post(url, obj).then((res) => {
      if (res?.data?.state_send === "ok-delete-comment") {
        router.refresh();
        setloading(false);
      }
      else {
        setloading(true);
      }

    })
  }

  return (
    <>
      {isloading === false ?
        <p onClick={funDeleted} className='deleted'>حذف</p>
        :
        <p className='deleted'>حارى الحذف ..</p>
      }
    </>
  );

}
export default React.memo(DletedComment);