import React from "react";
import './section-boat-listing.scss';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faHeart, faPeopleGroup, faSquare } from "@fortawesome/free-solid-svg-icons";
function SectionBoatListing() {

  return (
    <div className="section-boat-listing head">

      <div className="content">
        <p className="title"> Rental Listing </p>
        <p className="sub-title"> Homes highly rated for thoughtful design </p>

        <div className="flex-card">

          <div className="mycard">
            <div className="mycard-view">
              <Image src="/images/decor1.jpg" alt=""   width="0" height="0" sizes="100vw"/>


              <div className="abso-top">
                <p className="left-tekit">Featured</p>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </div>
              <div className="abso-bottom">
                <a href="" className="sub-salre">$400</a>
                <br></br>
                <p className="salre">$350</p>
                <span>/ day</span>
              </div>

            </div>
            <div className="bottom-card">
              <div className="content-card">
                <div className="left-content">
                  <p className="tile">LUXURY SINGLE </p>
                  <div className="flex-views">
                    <p>5.0/5 Excellent </p>
                    <span>2 Reviews </span>
                  </div>
                </div>
                <div className="right-content">
                  <p>12%</p>
                </div>

              </div>
              <div className="content-viewo">

                <div>
                  <span><FontAwesomeIcon icon={faPeopleGroup} /></span>
                  <p>8</p>

                </div>
                <div>
                  <span><FontAwesomeIcon icon={faBed}/></span>
                  <p>8</p>

                </div>


                <div>
                  <span><FontAwesomeIcon icon={faBath}/></span>
                  <p>8</p>

                </div>

                <div>
                  <span><FontAwesomeIcon icon={faSquare}/></span>
                  <p>189 sqft</p>

                </div>

              </div>


            </div>

          </div>

          <div className="mycard">
            <div className="mycard-view">
              <Image  width="0" height="0" sizes="100vw" src="/images/decor2.jpg" alt=""  />


              <div className="abso-top">
                <p className="left-tekit">Featured</p>
                <span>
                  <FontAwesomeIcon icon={faHeart}/>
                </span>
              </div>
              <div className="abso-bottom">
                <br></br>
                <p className="salre">$500</p>
                <span>/ day</span>
              </div>

            </div>
            <div className="bottom-card">
              <div className="content-card">
                <div className="left-content">
                  <p className="tile">PARIS GREENWICH VILLA  </p>
                  <div className="flex-views">
                    <p>4.3/5 Very Good</p>
                    <span>3 Reviews </span>
                  </div>
                </div>


              </div>
              <div className="content-viewo">

                <div>
                  <span><FontAwesomeIcon icon={faPeopleGroup}/></span>
                  <p>7</p>

                </div>
                <div>
                  <span><FontAwesomeIcon icon={faBed}/></span>
                  <p>8</p>

                </div>


                <div>
                  <span><FontAwesomeIcon icon={faBath}/></span>
                  <p>3</p>

                </div>

                <div>
                  <span><FontAwesomeIcon icon={faBath}/></span>
                  <p>162 sqft</p>

                </div>

              </div>


            </div>

          </div>

          <div className="mycard">
            <div className="mycard-view">
              <Image  width="0" height="0" sizes="100vw" src="/images/decor3.jpg" alt="" />


              <div className="abso-top">
                <p className="left-tekit">Featured</p>
                <span>
                  <FontAwesomeIcon icon={faHeart}/>
                </span>
              </div>
              <div className="abso-bottom">
                <a href="" className="sub-salre">$400</a>
                <br></br>
                <p className="salre">$350</p>
                <span>/ day</span>
              </div>

            </div>
            <div className="bottom-card">
              <div className="content-card">
                <div className="left-content">
                  <p className="tile">LUXURY SINGLE </p>
                  <div className="flex-views">
                    <p>5.0/5 Excellent </p>
                    <span>2 Reviews </span>
                  </div>
                </div>
                <div className="right-content">
                  <p>12%</p>
                </div>

              </div>
              <div className="content-viewo">

                <div>
                  <span><FontAwesomeIcon icon={faPeopleGroup}/></span>
                  <p>8</p>

                </div>
                <div>
                  <span><FontAwesomeIcon icon={faBed}/></span>
                  <p>8</p>

                </div>


                <div>
                  <span><FontAwesomeIcon icon={faBath}/></span>

                  <p>8</p>

                </div>

                <div>
                <span><FontAwesomeIcon icon={faBed}/></span>
                  <p>189 sqft</p>

                </div>

              </div>


            </div>

          </div>

          <div className="mycard">
            <div className="mycard-view">
              <Image  width="0" height="0" sizes="100vw" src="/images/decor4.jpg" alt="" />


              <div className="abso-top">
                <p className="left-tekit">Featured</p>
              
                <span><FontAwesomeIcon icon={faHeart}/></span>

              </div>
              <div className="abso-bottom">
                <a href="" className="sub-salre">$400</a>
                <br></br>
                <p className="salre">$350</p>
                <span>/ day</span>
              </div>

            </div>
            <div className="bottom-card">
              <div className="content-card">
                <div className="left-content">
                  <p className="tile">LUXURY SINGLE </p>
                  <div className="flex-views">
                    <p>5.0/5 Excellent </p>
                    <span>2 Reviews </span>
                  </div>
                </div>
                <div className="right-content">
                  <p>12%</p>
                </div>

              </div>
              <div className="content-viewo">

                <div>
                  <span><FontAwesomeIcon icon={faPeopleGroup}/></span>
                  <p>8</p>

                </div>
                <div>
                <span><FontAwesomeIcon icon={faBed}/></span>
                  <p>8</p>

                </div>


                <div>
                <span><FontAwesomeIcon icon={faBath}/></span>
                  <p>8</p>

                </div>

                <div>
                <span><FontAwesomeIcon icon={faPeopleGroup}/></span>
                  <p>189 sqft</p>

                </div>

              </div>


            </div>

          </div>




        </div>



      </div>

    </div>
  );


}
export default SectionBoatListing;