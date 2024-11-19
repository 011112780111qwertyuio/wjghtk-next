import React from "react";
import './bestseller-listing.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
function BestsellerListing() {

  
  const alldata = [1, 2, 3, 4, 5, 6];

  return (
    <div className="bestseller-listing content">
      <p className="title"> Bestseller Listing </p>

      <p className="title-sub"> Hotel highly  rated for thoughtful design </p>
      <div className="flex-cards">
        {
          alldata.map((item) => (

            <div key={item} className="mycard">

              <div className="view">
                <img  loading="lazy" src="/images/img1.jpg" alt="" />
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <div className="flex-icons">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />

                </div>
              </div>

              <div className="flex-content">
                <p className="tile-content">Castello Casole Hotel</p>
                <div className="row">
                  <span>3.2/5 Average </span>

                  <label>-</label>
                  <p className="number">10000000</p>
                  <p>Reviews</p>
                </div>
                <div className="flex-salre">
                  <span>from</span>
                  <p>$350999949</p>
                  <span>/night</span>
                </div>
              </div>
            </div>

          ))
        }

      </div>
    </div>
  );

}
export default React.memo(BestsellerListing);