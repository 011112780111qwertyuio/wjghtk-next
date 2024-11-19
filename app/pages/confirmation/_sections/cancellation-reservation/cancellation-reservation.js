"use client";
import React, { useState } from "react";
import './style.scss';
function CancellationReservation({ funshowModal }) {
  const [modalStart, setmodalStart] = useState(true);
  const [modalEnd, setmodalEnd] = useState(false);
  const [modalFinsh, setModalFinsh] = useState(false);
  const funtoModal = () => {
    setmodalEnd(true);
    setmodalStart(false);
  }
  const funModalFinsh = () => {
    setmodalEnd(false);
    setmodalStart(false);
    setModalFinsh(true);
  }






  return (
    <div className="cancellation-reservation">
      {/* start modal start */}
      {modalStart &&
        <div className="modal-start">
          <div className="box">
            <div className="top-box">
              <span onClick={funshowModal}>x</span>
              <p>الغاء حجزك</p>
            </div>
            <div dir="rtl" className="content-box">
              <p className="tile">هل يمكننى الالغاء مقابل تكلفة اقل؟</p>
              <p className="sub-tile">
                ربما يكون مكان الإقامة على استعداد للتنازل عن كل أو بعض الرسوم المتعلقة بإلغاء حجزك.

                سنرسل طلبك بإلغاء الحجز إلى مكان الإقامة. سيبقى حجزك سارياً وستطبق رسوم الإلغاء، في حال لم يقبلوا طلبك.

                يستغرق تلقي الرد على طلبك من مكان الإقامة ما يصل إلى 48 ساعة، وسنرسل لك رسالة إلكترونية فور تلقي ردهم.

                قد ترتفع رسوم الإلغاء في غضون الـ 48 ساعة القادمة، لذلك يرجى مراجعة شروط حجزك

                لماذا ترغب في الإلغاء؟
                اخبر مكان الإقامة عن سبب إلغاء حجزك، فعلى الأغلب سيقومون بمساعدتك!

              </p>
              <textarea placeholder="اكتب رسالتك هنا ...">

              </textarea>
              <br></br>
              <div className="row-btn">
                <p onClick={funtoModal} className="btn-active">الغاء حجزك</p>
              </div>
            </div>
          </div>
        </div>
      }
      {/* stop modal start */}
      {/* start modal end */}
      {modalEnd &&
        <div className="modal-end">
          <div className="box">
            {false &&
              <div className="loading-delete">
                <div className="loader"></div>
                <p>جارى التحميل ...</p>
              </div>
            }
            <div className="top-box">
              <span onClick={funshowModal}>x</span>
              <p>الغاء حجزك</p>
            </div>
            <div dir="rtl" className="content-box">
              <p className="tile">ٍسياسة الالغاء</p>
              <br></br>
              <div className="row-sumation">
                <p>المجموع</p>
                <span>us$36.62</span>
              </div>
              <div className="list-radio">
                <p>أخبرنا عن سبب إلغائك</p>
                <span>هذا مطلوب لإتمام الإلغاء</span>
                <br></br>
                <ul>
                  <li>
                    <input name="d" type="radio" id="1" />
                    <label htmlFor="1"> أجريت حجوزات في نفس التواريخ وأود إلغاء التي لا أحتاجها</label>
                  </li>
                  <li>
                    <input name="d" type="radio" id="2" />
                    <label htmlFor="2"> تغيير في عدد الضيوف أو في احتياجاتهم</label>
                  </li>
                  <li>
                    <input name="d" type="radio" id="3" />
                    <label htmlFor="3"> تغيير التواريخ أو الوجهة</label>
                  </li>
                  <li>
                    <input name="d" type="radio" id="4" />
                    <label htmlFor="4"> غير قادر على السفر نتيجة القيود المتعلقة بفيروس كورونا (كوفيد - 19)</label>
                  </li>
                  <li>
                    <input name="d" type="radio" id="5" />
                    <label htmlFor="5"> طلبَ مكان الإقامة منّي الإلغاء</label>
                  </li>
                  <li>
                    <input name="d" type="radio" id="6" />
                    <label htmlFor="6"> أسباب خاصة / تم إلغاء الرحلة</label>
                  </li>

                  <li>
                    <input name="d" type="radio" id="7" />
                    <label htmlFor="7">ليس مما سبق</label>
                  </li>
                </ul>
              </div>
              <div className="row-btn">
                <p onClick={funModalFinsh} className="btn-delete">الغاء الحجز تماما</p>
              </div>
            </div>
          </div>
        </div>
      }
      {/* stop modal end */}
      {/* start modal finsh */}
      {modalFinsh &&
        <div className="modal-start">
          <div className="box">
            <div className="top-box">
              <span onClick={funshowModal}>x</span>
              <p>الغاء حجزك</p>
            </div>
            <div dir="rtl" className="content-box">
              <p className="tile">تم التحديث: لقد قمنا بإلغاء حجزك.</p>
              <p className="sub-tile">
                الرجاء مراجعة بريدك الإلكتروني حيث ستجد تأكيد للإلغاء.


              </p>

              <br></br>
              <div className="row-btn-finsh">
                <p onClick={funshowModal} className="btn-ok">موافقة</p>
              </div>
            </div>
          </div>
        </div>
      }
      {/* stop modal finsh */}


    </div>
  );

}
export default React.memo(CancellationReservation);