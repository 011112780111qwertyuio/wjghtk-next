"use server";
import './section-comment.scss';
import ShowAvatar from "../show_avatar/show_avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CompondMoment from '../moment/moment';
import axios from "axios";
import DeletComment from './deleteComent/delet-comment';
import { cookies } from 'next/headers';
const SectionComments = async ({ idTour, typeTrafel, local, promiseB, localFront }) => {
  const cookieStore = cookies();
  const token = cookieStore.get('token_user_server');
  let data = { "state": "no" };
  if (idTour?.state === "ok") {
    const url = await `${local}/${process.env.API_KEY_SHOWCOMMENTS}`;
    const obj = new FormData();
    obj.append("idTour", idTour?.data?.id);
    obj.append("typetrafel", typeTrafel);
    await axios.post(url, obj).then((res) => {
      data = res.data;
    })
  }


  return (
    <div className="section-comments">
      {
        data?.state === "ok" && idTour?.state === "ok" ?
          data?.data.map((item, index) => (
            <div key={index} className="flex-cards">
              <div className="left-comments">
                <div className="cover">
                  <div className="img">
                    <ShowAvatar iduser={item?.uid_user} local={local} />
                  </div>
                  <div className="data-user">
                    <p className="name">{item?.name_user}</p>
                    <p className="date"><CompondMoment item={item?.dateTime_comment} /></p>
                  </div>
                </div>
                {promiseB !== null &&
                  promiseB?.stateUser === "ok-auth" &&
                  <>
                    {
                      item?.uid_user === promiseB?.userData.ID_user ?
                        <DeletComment item={item?.ID_comment} local={local} Token={token} />
                        :
                        <p className="delet-comment"></p>
                    }
                  </>
                }
              </div>
              <div className="right-comments">
                <div className="flex">
                  <div>
                    <p>
                      جودة
                    </p>
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
                            color={currentRating <= (item?.Quality) ? "#ffc107" : "#e4e5e9"}
                          />
                        </label>
                      );
                    })}
                  </div>
                  <div>
                    <p>
                      موقع
                    </p>
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
                            color={currentRating <= (item?.Location_comment) ? "#ffc107" : "#e4e5e9"}
                          />

                        </label>

                      );
                    })}
                  </div>
                  <div>
                    <p>
                      التسهيلات
                    </p>
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
                            color={currentRating <= (item.Amenities) ? "#ffc107" : "#e4e5e9"}
                          />

                        </label>

                      );
                    })}
                  </div>
                  <div>
                    <p>
                      الخدمات
                    </p>
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
                            color={currentRating <= (item?.Services) ? "#ffc107" : "#e4e5e9"}
                          />

                        </label>

                      );
                    })}
                  </div>
                  <div>
                    <p>
                      التسهيلات
                    </p>
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
                            color={currentRating <= (item?.Price_comment) ? "#ffc107" : "#e4e5e9"}
                          />

                        </label>

                      );
                    })}
                  </div>
                </div>
                <div className="comment-user">
                  <p>
                    {item.content}
                  </p>

                </div>
              </div>

            </div>
          ))
          :
          <>
            {data?.state === "no" ?
              <div className="container">
                <div className="row">
                  <div className="circle loading-animationn"></div>
                  <div className="column">
                    <div className="linee line11 loading-animationn"></div>
                    <div className="linee line22 loading-animationn"></div>
                  </div>
                </div>
                <div className="column">
                  <div className="linee line33 loading-animationn"></div>
                  <div className="linee line44 loading-animationn"></div>
                  <div className="linee line55 loading-animationn"></div>
                </div>
              </div>
              :
              <></>
            }
          </>
      }
    </div>
  );

}
export default SectionComments;