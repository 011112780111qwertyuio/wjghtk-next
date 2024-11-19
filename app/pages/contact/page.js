import './concat.scss';
import NavparControl from "@/app/_components/nav-bar-control/nav-bar-control";
import NavparHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import FotterHome from '@/app/_components/fotter-home/fotter-home';
import BosterExplore from "@/app/_components/boster-explore/boster-explore";
import SectionAlboumMain from "@/app/_components/section-alboum-main/section-alboum-main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebookSquare, FaTwitter, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
export const metadata = {
  title: "اتصل بنا | WJHTK.COM - رحلات سياحية في مصر",
  description: "هل لديك استفسار أو ترغب في حجز رحلة سياحية؟ تواصل معنا الآن عبر صفحة الاتصال على WJHTK.COM. نحن هنا لمساعدتك في ترتيب أفضل العروض السياحية في مصر.",
  keywords: "اتصل بنا, تواصل معنا, رحلات سياحية, مصر, استفسار سياحي, حجز رحلات, WJHTK",
  openGraph: {
    title: "اتصل بنا | WJHTK.COM - رحلات سياحية في مصر",
    description: "تواصل معنا على WJHTK.COM لحجز رحلتك السياحية في مصر أو لطرح أي استفسار. نحن هنا لمساعدتك في جميع احتياجاتك السياحية.",
    image: "https://wjhtk.com/images/contact-us.jpg", // صورة مميزة للصفحة
    url: "https://wjhtk.com/contact", // رابط صفحة الاتصال
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "اتصل بنا | WJHTK.COM - رحلات سياحية في مصر",
    description: "لأي استفسار أو لحجز رحلة سياحية في مصر، تواصل معنا على WJHTK.COM. نحن هنا لمساعدتك في أفضل العروض.",
    image: "https://wjhtk.com/images/contact-us.jpg", // صورة مميزة للصفحة
  },
};
function ConCat() {

  return (
    <div dir='rtl' className="concat head ">
      <NavparControl />
      <NavparHome typepage={"concat"} />
      {/* start sectio albom */}

      <SectionAlboumMain title={"تواصل"} subitel={"تواصل"} />
      {/* stop section albom */}
      {/* start section content */}
      <div className="section-cotnent content">
        <p className="btn">تواصل معنا</p>
        <p className="tile">مستعد للحصول على أفضل خدماتنا! لا تتردد في التواصل معنا.</p>
        <div className="flex-cards">
          <div className="mycard">
            <span><FontAwesomeIcon icon={faLocationDot} /></span>
            <p className="title"> موقع المكتب </p>
            <p className="sub-title"> 55 شارع الرئيسية</p>
            <p className="sub-title">الطابق الثاني، نيويورك </p>

          </div>

          <div className="mycard">
            <span> <FontAwesomeIcon icon={faEnvelope} /></span>
            <p className="title"> عنوان البريد الإلكتروني </p>
            <p className="sub-title"> contact@example.com</p>
            <p className="sub-title"> info@example.com </p>

          </div>

          <div className="mycard">
            <span><FontAwesomeIcon icon={faPhone} /></span>

            <p className="title">خط ساخن</p>
            <p className="sub-title"> +1 (307) 776-0608</p>
            <p className="sub-title"> 666 8888 000 </p>

          </div>


        </div>
      </div>
      {/* stop sectio content */}
      {/* section send comment */}
      <div className="content section-send">
        <div className="flex">
          <div className="left">
            <p className="btn">تواصل معنا</p>
            <p className="tile">هل لديك أسئلة؟ لا تتردد في مراسلتنا</p>
            <p className="sub-tile">نحن هنا لدعمك والإجابة على استفساراتك. إذا كان لديك أي استفسار حول منتجاتنا أو خدماتنا، أو تحتاج إلى معلومات إضافية، فلا تتردد في التواصل معنا.</p>
            <div className="flex-icons">
              <span><FaFacebookSquare /></span>
              <span><FaTwitter /></span>
              <span><FaInstagramSquare /></span>
              <span><FaLinkedin /></span>

            </div>
          </div>
          <div className="right">
            <div className="inputs">
              <div>
                <input type="text" placeholder="اسمك" />
              </div>
              <div>
                <input type="text" placeholder="عنوان البريد الإلكتروني" />
              </div>
              <div>
                <input type="text" placeholder="رقم الهاتف" />
              </div>
              <div>
                <input type="text" placeholder="الموضوع" />
              </div>
            </div>


            <div className="area">
              <textarea placeholder="اكتب رسالة"></textarea>

            </div>
            <p className="btn-send">أرسل رسالة</p>
          </div>
        </div>
      </div>
      {/* stop section send comment */}
      {/* start section location */}
      <div className="section-location head">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          loading="lazy"
        ></iframe>
        <div className="content">
          <BosterExplore />

        </div>
      </div>
      {/* stop sectio location */}
      <br></br>
      <br></br>
      <FotterHome />
    </div>
  );
}
export default ConCat;