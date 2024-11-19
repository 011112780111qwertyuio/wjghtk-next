"use client";
import '../../../i18n';
import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './table-section.scss';
import DateTimeTableSection from "../dateTime-table-section/dateTime-table-section";
import { faAngleDown, faAngleUp, faCalendarDays, faLocationDot, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import Loading from "../loading/loading";
import { counterSlice } from '@/app/redux/counterSlice';
const myvalue = counterSlice.getInitialState().nameLocal;
import { useRouter } from 'next/navigation';
function TableSection({ location, typeTour, dataTime }) {
  const router = useRouter();
  const { t } = useTranslation();
  const [loadingSearch, setloadingSearch] = useState(false);
  const [allFormation, setFormation] = useState({
    "location": !location ? "الموقع" : location,
    "typeTour": !typeTour ? "نوع الرحلة" : typeTour,
    "countFrind": "0",
    "dataTime": !dataTime ? "من تاريخ" : dataTime
  });
  const [istoggle, settoggle] = useState(false);
  const [isloading, setloading] = useState(true);
  const [isData, setalldata] = useState([]);
  const [allLocations, setLocations] = useState([]);
  const funopentoggle = (index) => {
    settoggle(istoggle === false ? index : false);
    if (index === "4") {
      const obj = { ...allFormation, "countFrind": "not" };
      setFormation(obj);
    }

  }
  const funDateTime = (val) => {
    const obj = { ...allFormation, "dataTime": val };
    setFormation(obj);
  }
  const funDtPush = (val) => {
    const obj = { ...allFormation, "dataTime": val };
    setFormation(obj);
  }
  const showData = async () => {
    setloading(true)
    const url = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTRIPCATEGORIES}`;
    await axios.post(url).then((res) => {
      if (res.data !== "not-foune") {
        setalldata(res.data);
      }
      else {
        setalldata([]);
      }
    })


    const url2 = await `${myvalue}/${process.env.NEXT_PUBLIC_API_KEY_SHOWLOCATIONTOUR}`;
    await axios.post(url2).then((res) => {
      if (res.data !== "not-foune") {
        setLocations(res.data);
      }
      else {
        setLocations([]);
      }
    })




    setloading(false);
  }
  useEffect(() => {
    showData();
  }, [])
  /* start formation search */
  const handelFormation = (event) => {
    const obj = { ...allFormation, [event.target.name]: event.target.value, "countFrind": 0 }
    setFormation(obj);
    settoggle(false);
  }




  const getSearch = () => {
    setloadingSearch(true);
    router.push(`/pages/tours?page=1&Ranking=desc&According=dataTime&location=${allFormation.location}&typeTravel=${allFormation.typeTour}&startDate=${allFormation.dataTime}&search=search`);
    setloadingSearch(false);
  }
  /* stop formation search */
  return (
    <>
      {loadingSearch &&
        <Loading />
      }
      <div dir='rtl' className="tabel-section content">
        <div className="flex-cards">
          <div className='mycard'>
            <div className="flex-left">
              <div className="img">
                <span><FontAwesomeIcon icon={faLocationDot} /></span>
              </div>
              <div className="content-card">
                <p className="tile-color-sub">{t('table_section_location')}</p>
                <p className="title">
                </p>
                <p className="title"> {allFormation?.location}</p>
              </div>
              <div onClick={() => { funopentoggle('1') }} className="my-event"></div>

            </div>
            {istoggle === '1' ?
              <span><FontAwesomeIcon icon={faAngleUp} /></span> :
              <span><FontAwesomeIcon icon={faAngleDown} /></span>

            }
            <div className={`sub-menue ${istoggle === '1' ? "toggle-block" : "toggle-hidden"} `}>
              <p className="sub-tile">-{t('table_section_location')}-</p>
              <p>asia</p>
              {isloading === false ?
                allLocations.map((item, index) => (
                  <input name="location" onClick={handelFormation} key={index} className="sub-tile" readOnly value={item.location} />
                ))
                :
                <p>جارٍ التحميل</p>
              }

            </div>
          </div>
          <div className="mycard">
            <div className="flex-left">
              <div className="img">
                <span><FontAwesomeIcon icon={faLocationDot} /></span>
              </div>
              <div className="content-card">
                <p className="tile-color-sub">{t('table_section_type')}</p>
                <p className="title"> {allFormation.typeTour}</p>
              </div>
              <div onClick={() => { funopentoggle('2') }} className="my-event"></div>

            </div>
            {istoggle === '2' ?
              <span><FontAwesomeIcon icon={faAngleUp} /></span>
              :
              <span><FontAwesomeIcon icon={faAngleDown} /></span>
            }
            {istoggle === '2' &&
              <div className="sub-menue">
                <p className="sub-left">-{t('table_section_BokingType')}-</p>
                {isloading === false ?
                  isData.map((item, index) => (
                    <input key={index} onClick={handelFormation} type="text" className="sub-left" name="typeTour" readOnly value={item.name} />
                  ))
                  :
                  <p>{t('loading')}</p>
                }

              </div>
            }
          </div>
          <div className="mycard">
            <div onClick={() => { funopentoggle('3') }} className="flex-left">
              <div className="img">
                <span><FontAwesomeIcon icon={faCalendarDays} /></span>
              </div>
              <div className="content-card">
                <p className="tile-color-sub">{t('table_section_DateFrom')}</p>

                <p className="title"> {allFormation.dataTime}</p>

              </div>
              <div className="my-event"></div>
            </div>
            {istoggle === '3' ?
              <span onClick={() => { funopentoggle('3') }}><FontAwesomeIcon icon={faAngleUp} /></span>

              :
              <span onClick={() => { funopentoggle('3') }}><FontAwesomeIcon icon={faAngleDown} /></span>

            }
            {istoggle === "3" &&
              <div className="sub-menue-datetime">
                <DateTimeTableSection funSaveDt={funDateTime} dtpush={funDtPush} funtoggle={funopentoggle} />
              </div>
            }
          </div>
          <div className="mycard">
            <div className="flex-left">
              <div className="img">
                <span><FontAwesomeIcon icon={faUser} /></span>
              </div>
              <div className="content-card">
                <p className="tile-color-sub">{t('table_section_Guests')}</p>
                {allFormation.countFrind === "not" ?
                  <p style={{ color: "white" }} className="title">0</p>
                  :
                  <p className="title">0</p>
                }
              </div>
              <div onClick={() => { funopentoggle('4') }} className="my-event"></div>
            </div>
            {istoggle === '4' ?
              <span onClick={() => { funopentoggle('4') }}><FontAwesomeIcon icon={faAngleUp} /></span>
              :
              <span onClick={() => { funopentoggle('4') }}><FontAwesomeIcon icon={faAngleDown} /></span>
            }
            {
              istoggle === '4' &&
              <div className="sub-menue-guests">
                <div className="card-flex">
                  <div className="left">
                    <p></p>
                    <span>{t('table_section_Children')}</span>
                  </div>
                  <div className="flex-right">
                    <p>-</p>
                    <p>+</p>
                  </div>
                </div>
                <div className="card-flex">
                  <div className="left">
                    <p></p>
                    <span>{t('table_section_Youth')}</span>
                  </div>
                  <div className="flex-right">
                    <p>-</p>
                    <p>+</p>
                  </div>
                </div>

                <div className="card-flex">
                  <div className="left">
                    <p></p>
                    <span>{t('table_section_Adult')}</span>
                  </div>
                  <div className="flex-right">
                    <p>-</p>
                    <p>+</p>
                  </div>
                </div>



                <div className="btn-center">
                  <p onClick={() => { funopentoggle('4') }}>{t('table_section_apply')}</p>
                </div>
              </div>
            }
          </div>
          <div className="search">
            <div onClick={getSearch}>
              <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
              <p>{t('table_section_search')}</p>
            </div>
          </div>
          <div className="search-mobile">
            <div onClick={getSearch} className="flex">
              <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
              <p>{t('table_section_search')}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default React.memo(TableSection);

