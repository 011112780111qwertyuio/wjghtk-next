import React from "react";
import './section-tour-card.scss';
import CardTrip from "../card-trip/card-trip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown91 } from "@fortawesome/free-solid-svg-icons";
import MebuePoup from "./mebue-poup";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import LoadingCardTour from "../loading-card-tour/loading-card-tour";
import { counterSlice } from "@/app/redux/counterSlice";
const myvalue = counterSlice.getInitialState().nameLocal;
const ITEMS_PER_PAGE = 10;
const SectionTour = async ({ search, Ranking, According, page, location, typeTravel, startDate }) => {
  let isloading = true;
  /* start show data */
  let alldata = [];
  if (search === undefined) {
    const url = await `${myvalue}/${process.env.API_ALLTOURS}`;
    const obj = new FormData();
    obj.append("val_order", decodeURIComponent(According));
    obj.append("type_order", decodeURIComponent(Ranking));
    await axios.post(url, obj).then((res) => {
      if (res.data.length > 0 && res.data !== "error-network") {
        alldata = res.data;
      }
      else {
        alldata = [];
      }
    });
  }
  else if (search === "search") {
    const url2 = await `${myvalue}/${process.env.API_SEARCHTABLETROURS}`;
    const obj = new FormData();
    obj.append('loc', decodeURIComponent(location))
    obj.append('typeTravel', decodeURIComponent(typeTravel))
    obj.append('dt', decodeURIComponent(startDate))
    obj.append("order", According);
    obj.append("typeorder", Ranking);
    await axios.post(url2, obj).then((res) => {
      if (res.data !== "error-network" && res.data.length > 0) {
        alldata = res.data;
      }
      else {
        alldata = [];
      }

    })
  }
  else {
    alldata = [];
  }

  /* order pages */
  const totalPages = Math.ceil(alldata.length / ITEMS_PER_PAGE);
  const displayedItems = alldata.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  /* order pages stop*/

  isloading = false;

  return (
    <div dir="rtl" className="head section-tour-card">
      <div className="content">
        <div className="nav-title">
          <div className="left">
            <span>{displayedItems.length}</span>
            <p>رحلات</p>
          </div>
          <div className="flex-right">
            <div className="flex">
              <p>فرز حسب</p>
              <span><FontAwesomeIcon icon={faArrowDown91} /></span>
            </div>
            <div className="menue-pop">
              <MebuePoup selected={According} />
            </div>
          </div>
        </div>
        <div className="flex-cards">
          {!isloading && displayedItems.length > 0 &&
            displayedItems?.map((item, index) => (
              <CardTrip key={index} item={item} local={myvalue} />
            ))
          }
        </div>
        {isloading &&
          <LoadingCardTour />
        }
        {displayedItems.length === 0 && isloading === false ?
          <div className="not-found">
            <div className="content">
              <p>لا توجد رحلات متاحة</p>
              <span>يبدو أننا لا نستطيع العثور على ما تبحث عنه.</span>
            </div>
          </div>
          :
          <>
            <Pagination addpage={search === "search"
              ? `Ranking=${Ranking}&According=${According}&location=${location}&typeTravel=${typeTravel}&startDate=${startDate}&search=${search}`
              :
              According === undefined && Ranking === undefined ? page :
                `Ranking=${Ranking}&According=${According}`} currentPage={page} totalPages={totalPages} />
          </>
        }
      </div>
    </div>
  )



}

export default SectionTour;