
import React from "react";
import './ditels-open-card-tour.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
function DitelsOpenCardTour({ data, local }) {

  return (
    <div className="ditels-card-torur">


      <div className="show-welcome">
        <strong className="tile">استكشاف الرحلات</strong>
        <p className="subitel">استكشاف الرحلات يعني القيام برحلات سياحية أو مغامرات تهدف إلى التعرف على أماكن جديدة، سواء كانت طبيعية، ثقافية، أو تاريخية. يمكن أن تكون هذه الرحلات منظمة أو ذاتية.</p>
      </div>

      <div className="flex-content">


        <div className="left" dangerouslySetInnerHTML={{ __html: data.state === "ok" && data.data.area }}>


        </div>
        <div className="section-paner">
          {data.state === "ok" &&

            <img priority="true" src={local + "/" + process.env.API_PATHIMAGES + "/" + data.data.Banner_image} alt="" />

          }
        </div>
      </div>
      <div className="myoptions">
        <p className="mytile">مشمول/غير مشمول</p>
        <div className="flex-lest">
          <div className="left">
            <ul className="le">
              {data.state === "ok" ? JSON.parse(data.data.Includes).map((item, index) => (
                <li key={index}><FontAwesomeIcon icon={faCheck} /> {item.title}</li>
              ))
                :
                <>
                  <li className="line line1 loading-animation"></li>
                  <br></br>
                  <li className="line line1 loading-animation"></li>
                  <br></br>
                  <li className="line line1 loading-animation"></li>
                </>

              }

            </ul>
          </div>
          <br></br>
          <div className="right">
            <ul className="ri">
              {data.state === "ok" ?
                JSON.parse(data.data.Exclude).map((item, index) => (
                  <li key={index}><FontAwesomeIcon icon={faXmark} /> {item}</li>
                ))
                :
                <>
                  <li className="line line1 loading-animation"></li>
                  <br></br>
                  <li className="line line1 loading-animation"></li>
                  <br></br>
                  <li className="line line1 loading-animation"></li>
                </>}
            </ul>
          </div>
        </div>


      </div>
      <div className="section-Amenities-1">
        <p className="mytile-Amenities">أنماط السفر</p>
        <div className="flex-amenities">
          {data.state === "ok" ? JSON.parse(data.data.Travel_patterns).map((item, index) => (
            <div key={index}>
              <FontAwesomeIcon icon={faCircleCheck} />
              <label>{item}</label>
            </div>

          ))
            :
            <span className="line line2 loading-animation"></span>

          }
        </div>
      </div>
      <div className="section-Amenities-2">
        <p className="mytile-Amenities">المرافق</p>
        <div className="flex-amenities">
          {
            data.state === "ok" ?
              JSON.parse(data.data.Accompanying).map((item, index) => (
                <div key={index}>
                  <FontAwesomeIcon icon={faCircleCheck} />
                  <label>{item}</label>
                </div>
              ))
              :
              <>
                <span className="line line2 loading-animation"></span>
                <br></br>
              </>
          }
        </div>



      </div>





      <div className="section-Tour-Plan">

      </div>

    </div>
  );

}
export default React.memo(DitelsOpenCardTour);
