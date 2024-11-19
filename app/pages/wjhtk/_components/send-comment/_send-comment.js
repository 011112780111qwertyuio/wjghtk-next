"use client";
import React from 'react';
import { useState } from 'react';
import './style.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import AlertPopup from '@/app/_components/alert-popup/alert-popup';
function SendComment({ local, idTopic, Token, logded }) {
  const router = useRouter();
  const [isloading, setloading] = useState(false);
  const [content, setcontent] = useState("");
  const pushData = async () => {
    if (content !== "" && content.trim().length > 1) {
      const obj = new FormData();
      obj.append("idTopic", idTopic);
      obj.append("token_user_server", Token);
      obj.append("content", content);
      const url = local + "/" + process.env.NEXT_PUBLIC_API_KEY_SENDCOMMENTTOPIC;
      await axios.post(url, obj).then((res) => {
        if (res?.data === "ok-send-comment") {
          fundialog("أود أن أؤكد أن التعليق قد تم إرساله بنجاح. أشكرك على تعاونك واهتمامك.");
          setcontent("");
        }
        else {
          fundialog('أود إبلاغكم أنه قد حدث خطأ عند محاولة إرسال التعليق. نعتذر عن أي إزعاج قد يسببه ذلك.');
        }
      })
    }
    else {
      fundialog("أود تذكيرك بأنه يجب عدم إرسال التعليقات إلا عند الانتهاء من كتابتها")
    }
    setloading(false);
  }
  const [isdialog, setdialog] = useState({ "state": false, "val": "" });
  const fundialog = (myval) => {
    setdialog({ "state": isdialog.state === false ? true : false, "val": myval })
    if (isdialog.state === true) {
      router.refresh();
    }
  }

  return (
    <>
      {
        isdialog.state &&
        <AlertPopup val={isdialog.val} funPopup={fundialog} />
      }
      <div dir='rtl' className="send-comment">
        <p className='name-comment'>اضف تعليق</p>
        {logded === "ok-auth" ?
          <div className='form-send-comment'>
            <div className='area'>
              <textarea onChange={(event) => { setcontent(event.target.value) }} placeholder='أكتب تعليق'></textarea>
            </div>
            <br></br>
            {isloading === true ?
              <p className='send-loading'>جاري الآن الارسال .. </p>
              :
              <p onClick={pushData} className='send-comment'>ارسل التعليق</p>
            }
          </div>
          :
          <p className='name-noauh'>يجب عليك <Link href="/pages/login/">تسجيل الدخول </Link>لتتمكن من ارسال التعليق </p>
        }
      </div>
    </>
  );
}
export default React.memo(SendComment);