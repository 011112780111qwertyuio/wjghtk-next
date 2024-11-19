import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCheck, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import PriceComponent from "@/app/_functions/getCountry.js";
import SectionLocation from "@/app/_components/section-location/section-location";
function FormContent({ data }) {
  const defaultProps =
  {
    highlightDate: [new Date()],
    days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    calendarRows: 6,
    monthsArabic: ["", "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    monthsEng: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  };
  if(data===null)
  {
    return (<p></p>)
  }
  return (
    <div dir="rtl" className="view-my-reservation head">
      <div className="content">
        <div className="top-title">
          <Link href="/pages/reservations-and-trips/"><span><FontAwesomeIcon icon={faCaretRight} /></span>العودة على جميع الحجوزات</Link>
          <br></br>
          <div className="row-tile">
            <p>حجزك المؤكد في</p>
            <Link href="#">{data?.Tour_name}</Link>
          </div>
        </div>
        <div className="form-content">
          <div className="child-1">
            <div className="column-1">
              <p>اظهر خريطة مكبرة</p>
              <div className="view-map">
                ٍ<SectionLocation position={data?.map_Location.split('-').map(Number)} />
              </div>
              <div className="flex-between">
                <div className="right">
                  <p className="name-travel">{data?.Tour_name}</p>
                  <p className="location-travel">{data?.Tour_name + " , " + data?.myAdress}</p>
                </div>
              </div>
            </div>
            <div className="column-2">
              <strong className="qust">هل لديك سؤال؟</strong>
              <br></br>
              <span>إذا كان لديك أي أسئلة أو طلبات خاصة بشأن مكان الإقامة، يمكنك التواصل مع فريق الدعم مباشرة. تأكد من توضيح احتياجاتك بوضوح، مثل مواعيد الوصول أو أي خدمات إضافية تحتاجها. سيسعدهم مساعدتك!</span>
              <br></br>
              <span>01155618864</span>
              <br></br>
              <Link href="#">ارسل رسالة الكترونية  لفريق الدعم</Link>
            </div>
            <div className="column-3">
              <div className="row">
                <FontAwesomeIcon icon={faCircleInfo} />
                <div>
                  <strong>بجاحة للمساعدة؟</strong>
                  <br></br>
                  <Link href="#">تواصل مع خدمة العملاء</Link>

                </div>
              </div>
            </div>
          </div>
          <div className="child-2">
            <div className="column-1">
              <p>رقم التأكيد : </p>
              <strong>{data?.number_order}</strong>
            </div>
            <div className="column-2">
              <div className="item-1">
                <span>تسجيل الوصول</span>
                <br></br>
                <strong>{defaultProps.days[new Date(data?.Check_in.split('-')[0] + "-" + data?.Check_in.split('-')[1].padStart(2, '0') + "-" + data?.Check_in.split('-')[2]).getDay()]} , {data?.Check_in.split('-')[2] + " " + defaultProps.monthsArabic[data?.Check_in.split('-')[1]] + " " + data?.Check_in.split('-')[0]}</strong>
                <br></br>
                <span>من 14:00</span>
              </div>
              <div className="item-2">
                <span>تسجيل المغادرة</span>
                <br></br>
                <strong>{defaultProps.days[new Date(data?.Check_out.split('-')[0] + "-" + data?.Check_out.split('-')[1].padStart(2, '0') + "-" + data?.Check_out.split('-')[2]).getDay()]} , {data?.Check_out.split('-')[2] + " " + defaultProps.monthsArabic[data?.Check_out.split('-')[1]] + " " + data?.Check_out.split('-')[0]}</strong>
                <br></br>
                <span>حتى 14:00</span>
              </div>
            </div>
            <div className="column-3">
              <strong>خدمات اضافية</strong>
              {JSON.parse(data?.allSeleServec).map((item, index) => (
                <div key={index} className="row-text">
                  <FontAwesomeIcon icon={faCheck} />
                  <p>{item?.split('-')[1] + " X " + item?.split('-')[0]} , </p>
                </div>
              ))}

            </div>
            <div className="column-4">
              <p>السعر</p>
              {JSON.parse(data?.allgust).map((item, index) => (
                <strong key={index}>{item.split('=')[1] + " = " + item.split('=')[0].split('x')[1] + " x " + item.split('=')[0].split('x')[0]}</strong>
              ))}
              {JSON.parse(data?.allSeleServec).map((item, index) => (
                <strong key={index}>{item?.split('-')[1] + " X " + item?.split('-')[0]} , </strong>
              ))}
              <p className="salre"><PriceComponent price={data?.salre} /></p>
              <span>ماذا يشمل هذا السعر؟</span>
            </div>
          </div>
          <div className="child-3">
            <div className="column-1">
              <Link href="#">تحديث البطاقة</Link>
              <br></br>
              <Link href="#">خيارات اضافية</Link>
              <br></br>
              <strong>اطلع على السياسات</strong>
            </div>
            <div className="column-2">
              <Link href="#">اعرض تأكيد الحجز</Link>
              <br></br>
              <Link href="#">اطيع تأكيد الحجز</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )

}
export default FormContent;