"use server";
import './section-tile-reviows.scss';
import Review_start from "../review_start/review_start";
import Form from "./form";
function SectionTileReviwos({ idTour, typeTrafel, local }) {
  return (
    <div dir="rtl" className="head tile-reviwos">
      <div className="flex-tile-revi content">
        <div className="left">
          <Review_start idTour={idTour.state === "ok" && idTour.data.id} typeTrafel={"tour"} local={local} showsum={true} />
        </div>
        <Form />
      </div>
    </div>
  );

}
export default SectionTileReviwos;