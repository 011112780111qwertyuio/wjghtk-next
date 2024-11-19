import React from "react";
import './section-explore-world.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
function SectionExploreWorld() {
  let count = [0, 1, 2, 3, 4, 5];
  return (
    <div className="section-explore-world">
      <div className="flex content">
        <div className="center">
          <p className="bt">Destination lists</p>
          <p className="title"> Explore Destinations </p>
        </div>
        <div className="flex-cards">
          {
            count.map((item) => (

              <Link href="/pages/definition-of-journey/" key={item} className="card">
                <div className="view">
                  <Image width={1000} priority height={2000}  sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src="/images/img1.jpg" alt="" />
                  <p>3 tours</p>
                </div>
                <div className="flex-content">
                  <div className="left">
                    <p className="sub-tile">travel to</p>
                    <p className="title">المملكة العربية السعودية</p>
                  </div>
                  <div className="right">
                    <div className="btn">
                      <span><FontAwesomeIcon icon={faAngleRight}/></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }

        </div>
      </div>
    </div>
  )


}
export default SectionExploreWorld;