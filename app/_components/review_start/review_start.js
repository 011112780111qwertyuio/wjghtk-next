"use server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import LoadingElement from "../loadingElement/loadingElement";
import './style.scss';
const ReviewStart = async ({ idTour, typeTrafel, local, showsum }) => {
  let loading = true;
  let data = 1;
  const url = `${local}/${process.env.API_KEY_SHOWCOMMENTS}`;
  const obj = new FormData();
  obj.append("idTour", idTour);
  obj.append("typetrafel", typeTrafel);
  await axios.post(url, obj).then((res) => {
    if (res?.data?.state === "ok") {
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
      data = averageRating.toFixed(1)
    }
    else {
      data = 1;
    }
  })
  loading = false;
  return (
    <div className="review-start">
      {loading === false ? <>
        <div className="stars">
          {[...Array(5)].map((star, indexx) => {
            const currentRating = indexx + 1;
            return (
              <label key={indexx}>
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                />
                <FontAwesomeIcon className="star"
                  icon={faStar}
                  color={currentRating <= (data) ? "#ffc107" : "#e4e5e9"}
                />

              </label>

            );
          })}


        </div>
        {showsum === true ?
          <p>{data} حسب التقييمات</p> :
          <p></p>

        }
      </> : <LoadingElement />
      }
    </div>

  );
}
export default ReviewStart;