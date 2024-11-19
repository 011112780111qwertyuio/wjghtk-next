"use server";
import './section-review-scores.scss';
import axios from "axios";
const SectionReviewScores = async ({ idTour, typeTrafel, local }) => {
  let loading = true;
  let sumation = 1;
  let sumQuality = 1;
  let sumLocation = 1;
  let sumPrice = 1;
  let sumServes = 1;
  let sumAmenities = 1;
  loading = true;
  const url = `${local}/${process.env.API_KEY_SHOWCOMMENTS}`;
  const obj = new FormData();
  obj.append("idTour", idTour);
  obj.append("typetrafel", typeTrafel);
  await axios.post(url, obj).then((res) => {
    if (res.data.state === "ok") {
      let _5star = res.data.data.filter(r => r.Quality == 5).length;
      let _4star = res.data.data.filter(r => r.Quality == 4).length;
      let _3star = res.data.data.filter(r => r.Quality == 3).length;
      let _2star = res.data.data.filter(r => r.Quality == 2).length;
      let _1star = res.data.data.filter(r => r.Quality == 1).length;
      let _5starLoc = res.data.data.filter(r => r.Location_comment == 5).length;
      let _4starLoc = res.data.data.filter(r => r.Location_comment == 4).length;
      let _3starLoc = res.data.data.filter(r => r.Location_comment == 3).length;
      let _2starLoc = res.data.data.filter(r => r.Location_comment == 2).length;
      let _1starLoc = res.data.data.filter(r => r.Location_comment == 1).length;
      let _5starAmenities = res.data.data.filter(r => r.Amenities == 5).length;
      let _4starAmenities = res.data.data.filter(r => r.Amenities == 4).length;
      let _3starAmenities = res.data.data.filter(r => r.Amenities == 3).length;
      let _2starAmenities = res.data.data.filter(r => r.Amenities == 2).length;
      let _1starAmenities = res.data.data.filter(r => r.Amenities == 1).length;
      let _5starServices = res.data.data.filter(r => r.Services == 5).length;
      let _4starServices = res.data.data.filter(r => r.Services == 4).length;
      let _3starServices = res.data.data.filter(r => r.Services == 3).length;
      let _2starServices = res.data.data.filter(r => r.Services == 2).length;
      let _1starServices = res.data.data.filter(r => r.Services == 1).length;
      let _5starPrice = res.data.data.filter(r => r.Price_comment == 5).length;
      let _4starPrice = res.data.data.filter(r => r.Price_comment == 4).length;
      let _3starPrice = res.data.data.filter(r => r.Price_comment == 3).length;
      let _2starPrice = res.data.data.filter(r => r.Price_comment == 2).length;
      let _1starPrice = res.data.data.filter(r => r.Price_comment == 1).length;
      //Sum of individual star.
      let sumOfRating = parseInt(_5star + _4star + _3star + _2star + _1star + _5starLoc + _4starLoc + _3starLoc + _2starLoc + _1starLoc + _5starAmenities + _4starAmenities + _3starAmenities + _2starAmenities + _1starAmenities + _5starServices + _4starServices + _3starServices + _2starServices + _1starServices + _5starPrice + _4starPrice + _3starPrice + _2starPrice + _1starPrice);
      //Total number of rating
      let overallRating = parseInt(5 * _5star + 4 * _4star + 3 * _3star + 2 * _2star + 1 * _1star + 5 * _5starLoc + 4 * _4starLoc + 3 * _3starLoc + 2 * _2starLoc + 1 * _1starLoc + 5 * _5starAmenities + 4 * _4starAmenities + 3 * _3starAmenities + 2 * _2starAmenities + 1 * _1starAmenities + 5 * _5starServices + 4 * _4starServices + 3 * _3starServices + 2 * _2starServices + 1 * _1starServices + 5 * _5starPrice + 4 * _4starPrice + 3 * _3starPrice + 2 * _2starPrice + 1 * _1starPrice);
      //Average of all rating
      let averageRating = parseFloat(overallRating / sumOfRating);
      //Percentage of each star rating
      sumation = averageRating.toFixed(1);
      /* --- sumation quilty ---- */
      let sumOfRatingquilte = parseInt(_5star + _4star + _3star + _2star + _1star);
      let overallquilte = parseInt(5 * _5star + 4 * _4star + 3 * _3star + 2 * _2star + 1 * _1star);
      sumQuality = parseFloat(overallquilte / sumOfRatingquilte);
      /* -------- */
      /* --- sumation location ---- */
      let sumOfRatingLoc = parseInt(_5starLoc + _4starLoc + _3starLoc + _2starLoc + _1starLoc);
      let overallLoc = parseInt(5 * _5starLoc + 4 * _4starLoc + 3 * _3starLoc + 2 * _2starLoc + 1 * _1starLoc);
      sumLocation = parseFloat(overallLoc / sumOfRatingLoc);
      /* -------- */
      /* --- sumation animated ---- */
      let sumOfRatingAnimated = parseInt(_5starAmenities + _4starAmenities + _3starAmenities + _2starAmenities + _1starAmenities);
      let overallanimated = parseInt(5 * _5starAmenities + 4 * _4starAmenities + 3 * _3starAmenities + 2 * _2starAmenities + 1 * _1starAmenities);
      sumAmenities = parseFloat(overallanimated / sumOfRatingAnimated);
      /* -------- */
      /* --- sumation service ---- */
      let sumOfRatingServices = parseInt(_5starServices + _4starServices + _3starServices + _2starServices + _1starServices);
      let overallServices = parseInt(5 * _5starServices + 4 * _4starServices + 3 * _3starServices + 2 * _2starServices + 1 * _1starServices);
      sumServes = parseFloat(overallServices / sumOfRatingServices);

      /* -------- */
      /* --- sumation price ---- */
      let sumOfRatingPrice = parseInt(_5starPrice + _4starPrice + _3starPrice + _2starPrice + _1starPrice);
      let overallPrice = parseInt(5 * _5starPrice + 4 * _4starPrice + 3 * _3starPrice + 2 * _2starPrice + 1 * _1starPrice);
      sumPrice = parseFloat(overallPrice / sumOfRatingPrice);
      /* -------- */
    }
    else {
      sumation = 1;
    }
  })
  loading = false;


  return (
    <div className="section-review-scores">
      <p className="title-rev">
        درجات التقييم      </p>
      <div className="from-reviews">
        <div className="left">
          <div className="flex">
            <p className="title">{sumation}</p>
            <label>/5</label>
          </div>
          <p className="mytext"> رائع </p>
          <p className="sub-tile">{sumation} التقييمات المعتمدة</p>
        </div>
        <div className="right">
          <div className="chiled">
            <div className="flex-chiled">
              <p>جودة</p>
              <span>{sumQuality.toFixed(1)}/5</span>
            </div>
            <div className="progres">
              <div style={{ width: (sumQuality + sumQuality).toFixed(1).replace(".", "") + "%" }} className="abso"></div>
            </div>
          </div>
          <div className="chiled">
            <div className="flex-chiled">
              <p>موقع</p>

              <span>{sumLocation.toFixed(1)}/5</span>
            </div>
            <div className="progres">
              <div style={{ width: (sumLocation + sumLocation).toFixed(1).replace(".", "") + "%" }} className="abso"></div>
            </div>
          </div>
          <div className="chiled">
            <div className="flex-chiled">
              <p>التسهيلات</p>
              <span>{sumAmenities.toFixed(1)}/5</span>
            </div>
            <div className="progres">
              <div style={{ width: (sumAmenities + sumAmenities).toFixed(1).replace(".", "") + "%" }} className="abso">

              </div>

            </div>
          </div>
          <div className="chiled">
            <div className="flex-chiled">
              <p>الخدمات</p>
              <span>{sumServes.toFixed(1)}/5</span>
            </div>
            <div className="progres">
              <div style={{ width: (sumServes + sumServes).toFixed(1).replace(".", "") + "%" }} className="abso">
              </div>
            </div>
          </div>
          <div className="chiled">
            <div className="flex-chiled">
              <p>سعر</p>
              <span>{sumPrice.toFixed(1)}/5</span>
            </div>
            <div className="progres">
              <div style={{ width: (sumPrice + sumPrice).toFixed(1).replace(".", "") + "%" }} className="abso">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}
export default SectionReviewScores;