import React from "react";
import './section-ourBest-bromotion-tours.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
function SectionOurBestBromotionTours() {

  return (
    <div className="section-ourbest-promotion-tours">

      <div className="content">
        <p className="title"> Our best promotion tours </p>
        <p className="sub-tile"> Most popular destinations </p>
        <div className="flex-cards">


          <div className="card">
            <div className="view">
              <Image width="0" height="0" sizes="100vw" src="/images/img1.jpg" alt="" />
              <p className="tecit">31%</p>

              <p className="add-card-tikei">featured</p>
              <span className="heart">
                <FontAwesomeIcon icon={faHeart} />
              </span>

              <div className="view-action">
                <p className="btn">book new</p>
              </div>

            </div>
            <div className="content-card">
              <div className="flex-content">
                <div className="left">
                  <p>american parks trail end rapid city</p>
                  <p className="sub-text">4H</p>

                </div>
                <div className="right">
                  <a href="">$9.000</a>
                  <p className="salry">$124</p>
                </div>
              </div>

            </div>

          </div>

          <div className="card">
            <div className="view">
              <Image width="0" height="0" sizes="100vw" src="/images/view5.jpg" alt="" />
              <p className="tecit">50%</p>

              <p className="add-card-tikei">featured</p>
              <span className="heart">
                <FontAwesomeIcon icon={faHeart} />
              </span>

              <div className="view-action">
                <p className="btn">book new</p>
              </div>

            </div>
            <div className="content-card">
              <div className="flex-content">
                <div className="left">
                  <p>american parks trail end rapid city</p>
                  <p className="sub-text">4H</p>

                </div>
                <div className="right">
                  <a href="">$9.000</a>
                  <p className="salry">$124</p>
                </div>
              </div>

            </div>

          </div>

          <div className="card">
            <div className="view">
              <Image width="0" height="0" sizes="100vw" src="/images/img1.jpg" alt="" />
              <p className="tecit">20%</p>

              <p className="add-card-tikei">featured</p>
              <span className="heart">
                <FontAwesomeIcon icon={faHeart} />
              </span>

              <div className="view-action">
                <p className="btn">book new</p>
              </div>

            </div>
            <div className="content-card">
              <div className="flex-content">
                <div className="left">
                  <p>american parks trail end rapid city</p>
                  <p className="sub-text">4H</p>

                </div>
                <div className="right">
                  <a href="">$40.000</a>
                  <p className="salry">$124</p>
                </div>
              </div>

            </div>

          </div>

          <div className="card">
            <div className="view">
              <Image width="0" height="0" sizes="100vw" src="/images/view6.jpg" alt="" />
              <p className="tecit">31%</p>

              <p className="add-card-tikei">featured</p>
              <span className="heart">
                <FontAwesomeIcon icon={faHeart} />
              </span>

              <div className="view-action">
                <p className="btn">book new</p>
              </div>

            </div>
            <div className="content-card">
              <div className="flex-content">
                <div className="left">
                  <p>american parks trail end rapid city</p>
                  <p className="sub-text">4H</p>

                </div>
                <div className="right">
                  <a href="">$100.000</a>
                  <p className="salry">$124</p>
                </div>
              </div>

            </div>

          </div>
          <div className="card">
            <div className="view">
              <Image width="0" height="0" sizes="100vw" src="/images/view8.jpg" alt="" />
              <p className="tecit">31%</p>

              <p className="add-card-tikei">featured</p>
              <span className="heart">
                <FontAwesomeIcon icon={faHeart} />
              </span>

              <div className="view-action">
                <p className="btn">book new</p>
              </div>

            </div>
            <div className="content-card">
              <div className="flex-content">
                <div className="left">
                  <p>american parks trail end rapid city</p>
                  <p className="sub-text">4H</p>

                </div>
                <div className="right">
                  <a href="">$.000</a>
                  <p className="salry">$124</p>
                </div>
              </div>

            </div>

          </div>
          <div className="card">
            <div className="view">
              <Image width="0" height="0" sizes="100vw" src="/images/view10.jpg" alt="" />
              <p className="tecit">31%</p>

              <p className="add-card-tikei">featured</p>
              <span className="heart">
                <FontAwesomeIcon icon={faHeart} />
              </span>

              <div className="view-action">
                <p className="btn">book new</p>
              </div>

            </div>
            <div className="content-card">
              <div className="flex-content">
                <div className="left">
                  <p>american parks trail end rapid city</p>
                  <p className="sub-text">4H</p>

                </div>
                <div className="right">
                  <a href="">$2.000</a>
                  <p className="salry">$14</p>
                </div>
              </div>

            </div>

          </div>



        </div>
      </div>



    </div>
  )

}
export default SectionOurBestBromotionTours;