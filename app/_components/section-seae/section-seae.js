import React from "react";
import './section-seae.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faGaugeSimpleHigh, faHeart, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
function SectionSeae() {
  return (
    <div className="section-seae">


      <div className="content">
        <p className="title"> Boat Listing  </p>
        <p className="sub-title"> Lorem Ipsum is simply dummy text of the printing and typesetting industry  </p>

        <div className="flex-card">

          <div className="mycard">
            <div className="mycard-view">
              <Image width={1000} loading="lazy" height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src="/images/sea1.jpg" alt="" />


              <div className="abso-top">
                <p className="left-tekit">Featured</p>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </div>


            </div>
            <div className="bottom-card">
              <div className="content-card">
                <div className="left-content">
                  <p className="tile">Cruising Yacht  </p>
                  <div className="flex-views">
                    <p>5.0/5 Excellent </p>
                    <span>2 Reviews </span>
                  </div>
                </div>
              </div>
              <div className="content-viewo">

                <div>
                  <span><FontAwesomeIcon icon={faPeopleGroup} /></span>
                  <p>8</p>

                </div>
                <div>
                  <span><FontAwesomeIcon icon={faBed} /></span>
                  <p>8</p>

                </div>


                <div>
                  <span><FontAwesomeIcon icon={faBath} /></span>
                  <p>20m</p>

                </div>

                <div>
                  <span><FontAwesomeIcon icon={faGaugeSimpleHigh} /></span>
                  <p>27km/h</p>

                </div>

              </div>
              <div className="flex-bottom">
                <span>from</span>
                <p>$100</p>
              </div>

            </div>

          </div>

          <div className="mycard">
            <div className="mycard-view">
              <Image width="0" height="0" sizes="100vw" src="/images/sea2.jpg" alt="" />


              <div className="abso-top">
                <p className="left-tekit">Featured</p>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </div>


            </div>
            <div className="bottom-card">
              <div className="content-card">
                <div className="left-content">
                  <p className="tile">Cruising Yacht  </p>
                  <div className="flex-views">
                    <p>5.0/5 Excellent </p>
                    <span>2 Reviews </span>
                  </div>
                </div>
              </div>
              <div className="content-viewo">

                <div>
                  <span><FontAwesomeIcon icon={faPeopleGroup} /></span>
                  <p>8</p>

                </div>
                <div>
                  <span><FontAwesomeIcon icon={faBed} /></span>
                  <p>8</p>

                </div>


                <div>
                  <span><FontAwesomeIcon icon={faBath} /></span>
                  <p>20m</p>

                </div>

                <div>
                  <span><FontAwesomeIcon icon={faGaugeSimpleHigh} /></span>
                  <p>27km/h</p>

                </div>

              </div>
              <div className="flex-bottom">
                <span>from</span>
                <p>$100</p>
              </div>

            </div>

          </div>

          <div className="mycard">
            <div className="mycard-view">
              <Image width={1000} loading="lazy" height={2000}  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw"  src="/images/sea3.jpg" alt="" />


              <div className="abso-top">
                <p className="left-tekit">Featured</p>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </div>


            </div>
            <div className="bottom-card">
              <div className="content-card">
                <div className="left-content">
                  <p className="tile">Cruising Yacht  </p>
                  <div className="flex-views">
                    <p>5.0/5 Excellent </p>
                    <span>2 Reviews </span>
                  </div>
                </div>
              </div>
              <div className="content-viewo">

                <div>
                  <span><FontAwesomeIcon icon={faPeopleGroup} /></span>
                  <p>8</p>

                </div>
                <div>
                  <span><FontAwesomeIcon icon={faBed} /></span>
                  <p>8</p>

                </div>


                <div>
                  <span><FontAwesomeIcon icon={faBath} /></span>
                  <p>20m</p>

                </div>

                <div>
                  <span><FontAwesomeIcon icon={faGaugeSimpleHigh} /></span>
                  <p>27km/h</p>

                </div>

              </div>
              <div className="flex-bottom">
                <span>from</span>
                <p>$100</p>
              </div>

            </div>

          </div>

          <div className="mycard">
            <div className="mycard-view">
              <Image  width={1000} loading="lazy" height={2000}  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw"  src="/images/sea4.jpg" alt="" />


              <div className="abso-top">
                <p className="left-tekit">Featured</p>
                <span>
                  <i className="fa-solid fa-heart"></i>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </div>


            </div>
            <div className="bottom-card">
              <div className="content-card">
                <div className="left-content">
                  <p className="tile">Cruising Yacht  </p>
                  <div className="flex-views">
                    <p>5.0/5 Excellent </p>
                    <span>2 Reviews </span>
                  </div>
                </div>
              </div>
              <div className="content-viewo">

                <div>
                  <span><FontAwesomeIcon icon={faPeopleGroup} /></span>
                  <p>8</p>

                </div>
                <div>
                  <span><FontAwesomeIcon icon={faBed} /></span>
                  <p>8</p>

                </div>


                <div>
                  <span><FontAwesomeIcon icon={faBath} /></span>
                  <p>20m</p>

                </div>

                <div>
                  <span><FontAwesomeIcon icon={faGaugeSimpleHigh} /></span>
                  <p>27km/h</p>

                </div>

              </div>
              <div className="flex-bottom">
                <span>from</span>
                <p>$100</p>
              </div>

            </div>

          </div>



        </div>



      </div>



    </div>
  )
}
export default SectionSeae;