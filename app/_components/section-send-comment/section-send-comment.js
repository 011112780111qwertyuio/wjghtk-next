"use client";
import React, { useState } from "react";
import Link from "next/link";
import './section-send-comment.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import LoadingElement from "../loadingElement/loadingElement";
import axios from "axios";
import AlertPopup from "../alert-popup/alert-popup";
import { useRouter } from "next/navigation";
function SectionSendComment({ local, idTour, typetrafel, promiseB, Token }) {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(null);
  const [ratinglocation, setratinglocation] = useState(5);
  const [hoverLocation, setHoverLocation] = useState(null);
  const [ratingAmenities, setratingAmenities] = useState(5);
  const [hoverAmenities, setHoverAmenities] = useState(null);
  const [ratingServices, setratingServices] = useState(5);
  const [hoverServices, setHoverServices] = useState(null);
  const [ratingPrice, setratingPrice] = useState(5);
  const [hoverPrice, setHoverPrice] = useState(null);
  const [content, setcontent] = useState('');
  const pushdata = async () => {
    setloading(true);
    const url = await `${local}/${process.env.NEXT_PUBLIC_API_KEY_SENDCOMMENT}`;
    const obj = new FormData();
    if (content.trim().length > 1) {

      obj.append("name_user", promiseB?.userData?.first_name + " " + promiseB?.userData?.last_name)
      obj.append("content", content);
      obj.append("type_trafel", typetrafel);
      obj.append("Quality", rating);
      obj.append("Location", ratinglocation);
      obj.append("Amenities", ratingAmenities);
      obj.append("Services", ratingServices);
      obj.append("Price", ratingPrice);
      obj.append("uid_Tour", idTour);
      obj.append("uid_user", promiseB?.userData?.ID_user);
      obj.append("token_user_server", !Token || !Token?.value ? "ew" : Token.value);
      await axios.post(url, obj).then((res) => {
        if (res?.data?.state_send === "ok") {
          fundialog("أود أن أؤكد أن التعليق قد تم إرساله بنجاح. أشكرك على تعاونك واهتمامك.");
          setcontent("");
        }
        else if (res?.data?.state_send === "error-ensert-book") {
          fundialog("نود إبلاغك بأنه لا يمكن للمستخدمين تقديم التعليقات إلا بعد حجز رحلة عبر موقعنا. نرجو منك إتمام عملية الحجز أولاً، وسنكون سعداء بتلقي تعليقاتك بعد ذلك.");
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
  if (promiseB === null || promiseB?.stateUser === "error-network") {
    return (
      <LoadingElement />
    );
  }

  return (
    <>
      {
        isdialog.state &&
        <AlertPopup val={isdialog.val} funPopup={fundialog} />
      }
      <div className="conatiner-section-send-comment">
        {promiseB?.stateUser === "ok-auth" ?
          <div className="section-send-comment">
            <p className="title">
              <span> أضف</span>
              تعليق
            </p>
            <p className="sub-tile">لن يتم نشر عنوان بريدك الإلكتروني.</p>
            <div className="flex-cards">
              <div className="le">
                <div>
                  <p>جودة</p>
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setRating(currentRating)}
                        />
                        <FontAwesomeIcon className="star"
                          icon={faStar}
                          color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                          onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(null)}
                        />

                      </label>

                    );
                  })}
                </div>
                <div>
                  <p>موقع</p>
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setratinglocation(currentRating)}
                        />
                        <FontAwesomeIcon className="star"
                          icon={faStar}
                          color={currentRating <= (hoverLocation || ratinglocation) ? "#ffc107" : "#e4e5e9"}
                          onMouseEnter={() => setHoverLocation(currentRating)}
                          onMouseLeave={() => setHoverLocation(null)}
                        />

                      </label>

                    );
                  })}
                </div>

                <div>
                  <p>التسهيلات</p>
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setratingAmenities(currentRating)}
                        />
                        <FontAwesomeIcon className="star"
                          icon={faStar}
                          color={currentRating <= (hoverAmenities || ratingAmenities) ? "#ffc107" : "#e4e5e9"}
                          onMouseEnter={() => setHoverAmenities(currentRating)}
                          onMouseLeave={() => setHoverAmenities(null)}
                        />

                      </label>

                    );
                  })}
                </div>

                <div>
                  <p>
                    الخدمات
                  </p>
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setratingServices(currentRating)}
                        />
                        <FontAwesomeIcon className="star"
                          icon={faStar}
                          color={currentRating <= (hoverServices || ratingServices) ? "#ffc107" : "#e4e5e9"}
                          onMouseEnter={() => setHoverServices(currentRating)}
                          onMouseLeave={() => setHoverServices(null)}
                        />

                      </label>

                    );
                  })}
                </div>

                <div>
                  <p>
                    سعر
                  </p>
                  {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                      <label key={index}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setratingPrice(currentRating)}
                        />
                        <FontAwesomeIcon className="star"
                          icon={faStar}
                          color={currentRating <= (hoverPrice || ratingPrice) ? "#ffc107" : "#e4e5e9"}
                          onMouseEnter={() => setHoverPrice(currentRating)}
                          onMouseLeave={() => setHoverPrice(null)}
                        />

                      </label>

                    );
                  })}
                </div>

              </div>
            </div>
            <div className="from-input">
              <div className="flex-input">
              </div>
              <div className="area">
                <textarea value={content} onChange={(eo) => { setcontent(eo.target.value) }} placeholder="اكتب تعليقك"></textarea>
              </div>
              {loading === true ?
                <p style={{ backgroundColor: "#b1c5cd" }} className="btn">جارٍ التحميل ...</p>
                :
                <p onClick={pushdata} className="btn">نشر التعليق</p>
              }
            </div>





          </div>
          :
          <div className="comment-default">
            <div>
              <p>يجب عليك</p>
              <Link href="/pages/login/">تسجيل الدخول</Link>
              <p>كتابة مراجعة</p>
            </div>
          </div>
        }

      </div>
    </>
  )

}
export default React.memo(SectionSendComment);