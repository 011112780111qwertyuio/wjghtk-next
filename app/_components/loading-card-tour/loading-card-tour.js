import React from "react";
import './style.scss';
function LoadingCardTour() {
  const count = [1, 2, 3, 4, 5, 6];

  return (

    <div className="loading-card-tour">
      <div className="flex-cards-loading">
        {count.map((item, index) => (
          <div key={index} className="card">
            <div className="view"></div>
            <div className="padding">
              <div className="tile"></div>
              <div className="tile2"></div>
              <div className="tile3"></div>
              <div className="title4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );

}
export default LoadingCardTour;