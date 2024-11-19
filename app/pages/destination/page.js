import React from "react";
import './destination.scss';
import NavBarHome from "@/app/_components/Nav-Bar-Home/Nav-Bar-Home";
import NavBarControl from "@/app/_components/nav-bar-control/nav-bar-control";
import SectionAlboumMain from "@/app/_components/section-alboum-main/section-alboum-main";
import SectionExploreWrold from "@/app/_components/section-explore-world/section-explore-world";
import BosterExplore from "@/app/_components/boster-explore/boster-explore";
import FotterHome from "@/app/_components/fotter-home/fotter-home";
function Destination() {

  return (
    <>
      <NavBarControl stateToken={"d"} />
      <NavBarHome typepage={"destination"} />
      <div className="destination">
        <SectionAlboumMain title={"Explore The Worlds"} subitel={"destination"} />
        <SectionExploreWrold />
        <br></br>
        <br></br>
        <BosterExplore />
        <br></br>
        <FotterHome />
      </div>
    </>
  );

}
export default Destination;
