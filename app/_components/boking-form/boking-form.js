"use client";
import { v4 as uuidv4 } from 'uuid';
import PriceComponent from '@/app/_functions/getCountry.js';
import Datetime from "../datetime/datetime";
import React, { useState } from "react";
import DataEncryption from "@/app/_functions/Data-encryption";
import './booking-form.scss';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGlobe, faPlane, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import LoadingBtn from "../loading-btn/loading-btn";
function BokingForm({ data, local, promiseB }) {
  const router = useRouter();
  //  const router = useRouter();
  const [checkError, setCheckError] = useState(false);
  var [isSalre, setSalre] = useState(0);
  const [itemNums, setItemNum] = useState({});
  const [arrNum, setarrNum] = useState([0]);
  const [allByGust, setByGust] = useState([]);
  const handleSelectChange = (event) => {
    const obj = { ...itemNums, [event.target.name]: Number(event.target.value) };
    setItemNum(obj);
    setarrNum(Object.values(obj));
    const selectedOption = event.target.options[event.target.selectedIndex];
    // الوصول إلى البيانات
    const info = selectedOption.dataset.info;
    const obj2 = { ...allByGust, [event.target.name]: info };
    const convert = Object.values(obj2);
    const filteredArray = convert.filter(item => item !== undefined);
    setByGust(filteredArray);
  }
  const [isloading, setloading] = useState(true);
  const [dataFormation, setDataFormation] = useState([]);
  const funDataFormation = async (arr) => {
    setloading(true);
    await setDataFormation(JSON.parse(arr));
    setloading(false);
  }
  const funcountDrop = (s, e, pri, typeFrind) => {
    var option = [];
    option.push(
      <option key={100} value={0} >0</option>
    )
    for (let i = +s; i <= +e; i++) {

      option.push(
        <option key={i} data-info={`${typeFrind + "x" + i + "=" + pri}`} value={i * pri} >
          {i}
        </option>
      );
    }
    return option;
  }
  const [seleTime, setseleTime] = useState(null);
  const [allSeleServec, setallSeleServec] = useState([]);
  const funSeleServec = (itemTile, itemSalre, event) => {
    let position = allSeleServec.indexOf(itemTile + "-" + itemSalre) + 1;
    if (event.target.checked) {
      if (position === 0) {
        setallSeleServec([...allSeleServec, itemTile + "-" + itemSalre]);
      }
    }
    else {
      const index = allSeleServec.indexOf(itemTile + "-" + itemSalre);
      setallSeleServec([
        ...allSeleServec.slice(0, index),
        ...allSeleServec.slice(index + 1)
      ]);
    }
  }
  const [allTimes, setTimes] = useState(undefined);
  const funItems = (val) => {
    setTimes(val)
    setseleTime(JSON.parse(val.all_Times)[0]);
  }
  const funSumServese = (eo, sle) => {
    const s = +sle;
    if (eo.target.checked === true) {
      setSalre(isSalre + s);
    }
    if (eo.target.checked === false) {
      setSalre(isSalre - s);
    }
  }
  const clearAllData = () => {

    setTimes(undefined);
    setItemNum({});
    setarrNum([0]);
    setDataFormation([]);

  }
  const [checkErrorFrind, setCheckErrorFrind] = useState(false);
  /* start all formation form */
  const pushPage = async () => {
    setloading(true);
    if (dataFormation.length === 0) {
      setCheckError(true);
    }
    if (allByGust.length === 0) {
      setCheckErrorFrind(true);
    }
    if (dataFormation.length > 0) {
      setCheckError(false);
    }
    if (allByGust.length > 0) {
      setCheckErrorFrind(false);
    }
    if (dataFormation.length > 0 && allByGust.length > 0) {

      if (promiseB?.stateUser === "ok-auth") {
        const numOrder = uuidv4();
        const obj = {
          "title": data.data.title,
          "idTour": data.data.id,
          "stDt": dataFormation[0].stDt,
          "endDt": dataFormation[0].enDt,
          "seleTime": seleTime,
          "allSelectServec": allSeleServec,
          "allSumation": arrNum.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0) + isSalre,
          "allGust": allByGust,
          "avatarTour": data.data.Featured_image,
          "numberOrder": numOrder,
          "duration": data.data.Duration + " " + data.data.typeDuration,
          "Includes": data.data.Includes,
          "Facilities": data.data.Accompanying
        };
        const encodedEncryptedData = DataEncryption(obj);

         router.push(`/pages/checkout?order=${numOrder}&decode=${encodedEncryptedData}`)

      }
      if (promiseB?.stateUser === "no-auth" || promiseB?.stateUser === "not-found-cookie-network") {
        //await router.push('/pages/login/');
      }
    }

    setloading(false);


  }
  /* stop all formation form */
  return (
    <div className="boking-form">
      <div className="mycard-sumation">
        <div className="title">
          <p>حجز الرحلة</p>
        </div>
        <div className="flex-date">
          <label>من</label>
          <div className="row">
            <div>
              {data.state === "ok" ?
                <Datetime clearAllData={clearAllData} funItems={funItems} uid={data.data.id} local={local} funDataFormation={funDataFormation} />
                :
                <LoadingBtn />
              }
            </div>
          </div>
        </div>
        <div className="flex-dt-time">
          <label>وقت</label>
          <div className="flex-radio">
            {allTimes !== undefined && JSON.parse(allTimes.all_Times).map((item, index) => (
              <div key={index}>
                <input onChange={() => { setseleTime(item) }} defaultChecked={index === 0 ? true : false} id={index} name="e" type="radio" /><label name="e" htmlFor={index}>{item}.00</label>
              </div>
            ))}
          </div>
        </div>
        <div className="between">
          <p className="title-select">التذاكر:</p>
          {
            dataFormation.length === 0 ?
              <p className="loading-select">يرجى اختيار التاريخ أولاً</p>
              :
              <p></p>
          }
        </div>
        {isloading === false &&
          dataFormation.map((item, index) => (
            <div key={index} className="flex-children">
              <p>{item.name + " (" + item.min + "-" + item.max + " years ) "}<PriceComponent price={item.price} /></p>
              <select className='myselect' defaultValue={0} name={index} onChange={handleSelectChange}>
                {
                  funcountDrop(item.min, item.max, item.price, item.name)
                }
              </select>
            </div>
          ))
        }
        <div className="spce-between">
        </div>
        <div className="spce-between-column">
          <p className="mytl">أضف إضافات</p>
          {data.state === "ok" ?
            <>
              {
                JSON.parse(data.data.additional_services).length === 0 ?
                  <div className="child">
                    <div>
                    </div>
                    <p>غير متاح</p>
                  </div>
                  :
                  JSON.parse(data.data.additional_services).map((item, index) => (
                    <div key={index} className="child">
                      <label>
                        <input onClick={(eo) => { funSumServese(eo, item.salre); funSeleServec(item.title, item.salre, eo) }} id={index} type="checkbox" />
                        {item.title}
                      </label>
                      <p><PriceComponent price={item.salre} /></p>
                    </div>
                  ))
              }
            </>
            :
            <LoadingBtn />
          }
        </div>
        <div className="button">
          <div className="title-flex">
            <label>الإجمالي:</label>
            <p><PriceComponent price={arrNum.reduceRight((accumulator, currentValue) => accumulator + currentValue, 0) + isSalre} /></p>
          </div>
          {checkError &&
            <p className="check-found">يرجى اختيار تاريخ البدء</p>
          }
          {checkErrorFrind &&
            <p className="check-found">يرجى اختيار عدد الأشخاص</p>
          }
          <div className="btn-center">
            <div onClick={pushPage}>
              <span><FontAwesomeIcon icon={faCartShopping} /></span>
              <p>احجز الآن</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mycard-information">
        <p className="title">معلومات الرحلة</p>
        <div className="flex-information">
          <span><FontAwesomeIcon icon={faUserGroup} /></span>
          <div>
            <p>الحد الأقصى للضيوف</p>
            {data.state === "ok" ?
              <label>{data.data.Max_people_tour}</label>
              :
              <div className="details">
                <span className="name"></span>
              </div>
            }
          </div>
        </div>
        <div className="flex-information">
          <span><FontAwesomeIcon icon={faUser} /></span>
          <div>
            <p>الحد الأدنى للسن</p>
            {data.state === "ok" ?
              <label>{data.data.Maine_people_tour}</label>
              :
              <div className="details">
                <span className="name"></span>
              </div>
            }
          </div>
        </div>
        <div className="flex-information">
          <span><FontAwesomeIcon icon={faPlane} /></span>
          <div>
            <p>موقع الرحلة</p>
            {data.state === "ok" ?
              <label>{data.data.location}</label>
              :
              <div className="details">
                <span className="name"></span>
              </div>
            }
          </div>
        </div>
        <div className="flex-information">
          <span><FontAwesomeIcon icon={faGlobe} /></span>
          <div>
            <p>دعم اللغات</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(BokingForm);