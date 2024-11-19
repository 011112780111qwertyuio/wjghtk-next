import './style.scss';
function LoadingCard() {




  return (
    <div dir="rtl" className="card-magazines">
      <div className="skeleton-loader">
        <div className="view-card">
          <div className="skeleton-img"></div>
          <div className="title-top">
            <p className="skeleton-title"></p>
            <span className="skeleton-date"></span>
          </div>
          <div className="btn-bottom"></div>
        </div>
        <div className="content-card">
          <div className="flex">
            <div className="skeleton-user"></div>
            <div className="skeleton-comment"></div>
          </div>
          <div className="title skeleton-title"></div>
          <div className="sub-content skeleton-content"></div>
          <div className="flex-get">
            <p className="skeleton-read-more"></p>
            <span className="skeleton-arrow"></span>
          </div>
        </div>
      </div>
    </div>

  );

}
export default LoadingCard;