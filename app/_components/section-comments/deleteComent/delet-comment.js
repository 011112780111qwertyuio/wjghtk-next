"use client"
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import LoadingBtn from "../../loading-btn/loading-btn";
function DeletComment({ local, item, Token }) {
  const [loading, setloading] = useState(false);
  const router = useRouter();
  const DeleteComment = async (ID) => {
    setloading(true);
    const url = await `${local}/${process.env.NEXT_PUBLIC_API_KEY_DELETECOMMENT}`;
    const obj = new FormData();
    obj.append('idComment', ID);
    obj.append('token_user_server', !Token || !Token?.value ? "ew" : Token.value);
    await axios.post(url, obj).then((res) => {
      if (res.data.state_send === "ok-delete-comment") {
        router.refresh();
      }
    })
    setloading(false);

  }
  return (
    <>
      {
        loading === true ?
          <LoadingBtn />
          :
          <p onClick={() => { DeleteComment(item) }} className="delet-comment">حذف</p>

      }
    </>

  );

}
export default DeletComment;