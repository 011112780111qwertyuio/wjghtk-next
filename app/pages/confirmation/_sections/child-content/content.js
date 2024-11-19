import React from "react";
import './style.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
function ChildContent() {
  return (
    <div dir="rtl" className="child-content">
      <p>ما المشكلة التي تحتاج إلى مساعدة فريق الدعم بشأنها؟</p>
      <span>نود أن نعبر عن شكرنا لكونكم جزءًا من مجتمعنا. نحن هنا لضمان أن تجربتكم معنا تكون سلسة وممتعة.</span>
      <br></br>
      <br></br>
      <div className="child-concat">
        <span><FontAwesomeIcon icon={faEnvelope} /></span>
        <div>
          <strong>راسل  فريق الدعم عبر البريد الإلكتروني</strong>
          <br></br>
          <span>عزيزي المستخدم،

            نشكرك على زيارتك لموقعنا الخاص بالرحلات! إذا كان لديك أي استفسارات أو أسئلة، فلا تتردد في التواصل معنا. نحن هنا لمساعدتك وتقديم الدعم اللازم لك.

            تفضل بطرح سؤالك، وسنكون سعداء بالرد عليك في أقرب وقت ممكن.

            مع أطيب التحيات،
            فريق عمل موقع [WJHTK]

          </span>
          <br></br>
          <Link href="#">ارسل رسالة الكترونية</Link>
        </div>
      </div>
      <div className="child-concat">
        <span><FontAwesomeIcon icon={faPhone} /></span>
        <div>
          <strong>الخط الساخن</strong>
          <br></br>
          <strong>+2001155618864</strong>
          <br></br>
        </div>
      </div>
    </div>
  );
}
export default ChildContent;