import React from "react";
import './style.scss';
import PriceComponent from "@/app/_functions/getCountry.js";
function DetalisSalre({ data }) {

  return (
    <div className="detalis-salre">
      {data !== null ?
        <>
          <div className="child-5 padding">
            <div dir="rtl" className="flex-child-5">
              <p>3,081 EGP</p>
              <p>وحدتان</p>
            </div>
            <div dir="rtl" className="flex-child-5">
              <p>482 EGP</p>
              <p>14% ضريبة القيمة المضافة	</p>
            </div>
            <div dir="rtl" className="flex-child-5">
              <p>370 EGP</p>
              <p>12% رسوم خدمة مكان الإقامة	</p>
            </div>
            <div dir="rtl" className="flex-child-5">
              <p>35 EGP</p>
              <p>1% ضريبة المدينة	</p>
            </div>
          </div>
          <div className="child-6 padding">
            <div className="row-child-6">

              <div className="left-c-6">
                <div>
                  <p><PriceComponent price={data.salre} /> *</p>
                </div>
                <span><PriceComponent price={data.salre} /></span>
              </div>
              <div className="right-c-6">
                <p>السعر</p>
                <br></br>
                {JSON.parse(data.allgust).map((item, index) => (
                  <label key={index}>{item.split('=')[1] + " = " + item.split('=')[0].split('x')[1] + " x " + item.split('=')[0].split('x')[0]}</label>
                ))}
                {JSON.parse(data.allSeleServec).map((item, index) => (
                  <label key={index}>{item.split('-')[1] + " X " + item.split('-')[0]} , </label>
                ))}

              </div>
            </div>
            <ul dir="rtl">
              <li>* يرجى الملاحظة بأنه وفقًا للقانون المصري يتعين على جميع الضيوف الأجانب الدفع بالعملة الأجنبية وليس بالجنيه المصري.</li>
              <li>* يجب على المواطنين المصريين الدفع بالعملة المحلية وفقاً لسعر الصرف في وقت الدفع.</li>
            </ul>
          </div>
          <div dir="rtl" className="child-7 padding">
            <div className="item-c-7">
              <strong>معلومات عن الدفع</strong>
              <br></br>
              <p>يقبل الموقع  هذا أشكال الدفع التالية: Visa, Mastercard</p>
            </div>




          </div>
        </>
        :
        <div className="skeletonLoader">
          <div className="child">
            <div className="flexChild">
              <div className="skeleton" style={{ width: '60%', height: '20px' }}></div>
              <div className="skeleton" style={{ width: '30%', height: '20px' }}></div>
            </div>
            {/* يمكنك تكرار الهيكل كما هو مطلوب */}
          </div>
          <div className="child">
            <div className="flexChild">
              <div className="skeleton" style={{ width: '60%', height: '20px' }}></div>
              <div className="skeleton" style={{ width: '30%', height: '20px' }}></div>
            </div>
            {/* يمكنك تكرار الهيكل كما هو مطلوب */}
          </div>
          <div className="child">
            <div className="flexChild">
              <div className="skeleton" style={{ width: '60%', height: '20px' }}></div>
              <div className="skeleton" style={{ width: '30%', height: '20px' }}></div>
            </div>
            {/* يمكنك تكرار الهيكل كما هو مطلوب */}
          </div>
        </div>

      }
    </div>
  );

}
export default DetalisSalre;