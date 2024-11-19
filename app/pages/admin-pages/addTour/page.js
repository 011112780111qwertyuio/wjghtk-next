"use client";
import React, { useState, useEffect } from "react";
import './addTour.scss';
import dynamic from "next/dynamic";
const Map = dynamic(() => import('@/app/_components/admin-components/select_location/select_location'), { ssr: false });
import Loading from "@/app/_components/loading/loading";
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavparLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavparContnet from "@/app/_components/admin-components/nav-content/nav-content";
import FromArea from "@/app/_components/admin-components/form-area/form-area";
import UplodeVipImage from "@/app/_components/admin-components/uplode-vip-image/uplode-vip-image";
import BtnAllImages from "@/app/_components/admin-components/btn-all-images/btn-all-images";
import SectionSearch from "@/app/_components/admin-components/card-search-google/card-search-google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
axios.defaults.withCredentials = true;
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { CheckApiTokenAdmin } from "@/app/_functions/check-api-token-admin";
function AddTour() {
  let promiseB = CheckApiTokenAdmin();
  const myvalue = useSelector((state) => state.counter);
  const [isloading, setloading] = useState(false);
  const [toggle, setToogle] = useState(false);
  const funToggle = () => {
    setToogle(toggle === true ? false : true);
  }
  const [toggleInedx, setToggleIndex] = useState("from-general");
  const funTogleIndex = (index) => {
    setToggleIndex(index)
  }
  /* start form  questions*/
  const [allquestions, setquestions] = useState([]);
  const [valuesqust, setvaluesqust] = useState({
    myval: "",
    quest: ""
  });
  const handelQuest = (event) => {
    const obj = { ...valuesqust, [event.target.name]: event.target.value };
    setvaluesqust(obj);
  }
  const pushquestions = () => {
    setquestions([...allquestions, valuesqust]);
  }
  const deleteQuestions = (index) => {

    setquestions([
      ...allquestions.slice(0, index),
      ...allquestions.slice(index + 1)
    ]);
  }
  /* stop form  questions*/
  /* start add services */
  const [allServices, setServices] = useState([]);
  const [valServices, setValServices] = useState({
    "title": "",
    "salre": ""
  });
  const handelServices = (event) => {
    const obj = { ...valServices, [event.target.name]: event.target.value };
    setValServices(obj);
  }
  const pushServices = () => {
    if (valServices.title === "") {
      alert("ادخل اسم الخدمة");
    }
    if (valServices.salre === "") {
      alert("ادخل سعر الخدمة");
    }
    if (valServices.salre.length > 0 && valServices.title.length > 0) {
      setServices([...allServices, valServices]);
      setValServices({
        "title": "",
        "salre": ""
      });

    }

  }
  const deleteServices = (index) => {
    setServices([
      ...allServices.slice(0, index),
      ...allServices.slice(index + 1)
    ]);
  }
  /* stop add services */
  /* start all titles */
  const [allTitles, setTitles] = useState([]);
  const [valueTitleInclude, setTitleInclude] = useState({
    "title": "",
    "ditls": ""
  });
  const funhandelTitleInclude = (event) => {
    const obj = { ...valueTitleInclude, [event.target.name]: event.target.value };
    setTitleInclude(obj);
  }
  const pushTitles = () => {
    if (valueTitleInclude.title !== "" && valueTitleInclude.ditls !== "") {
      setTitles([...allTitles, valueTitleInclude]);
      setTitleInclude({
        "title": "",
        "ditls": ""
      });
    }
    else {
      alert("لأا تترك الحقول فارغة")
    }


  }
  const deletetitle = (index) => {
    setTitles([
      ...allTitles.slice(0, index),
      ...allTitles.slice(index + 1)
    ]);
  }
  /* stop all titles */
  /* start all Exclude */
  const [allExclude, setExclude] = useState([]);
  const [handelExclude, sethandelExclude] = useState("");
  const pushExclude = () => {
    setExclude([...allExclude, handelExclude]);
    sethandelExclude("");
  }
  const deleteExclude = (index) => {
    setExclude([
      ...allExclude.slice(0, index),
      ...allExclude.slice(index + 1)
    ]);
  }
  /* stop all Exclude */
  /* start all Itinerary */
  const [allItinerary, setItinerary] = useState([]);
  const [valuesItinerary, setvaluesItinerary] = useState();
  const handelItinerary = (event) => {
    const obj = { ...valuesItinerary, [event.target.name]: event.target.value };
    setvaluesItinerary(obj);
  }
  const pusItinerary = () => {
    setItinerary([...allItinerary, valuesItinerary]);
  }
  const deleteItinerary = (index) => {

    setItinerary([
      ...allItinerary.slice(0, index),
      ...allItinerary.slice(index + 1)
    ]);
  }
  /* stop all Itinerary */

  /* start extra charge */
  const [allextra, setextra] = useState([]);
  /* stop extra charge */
  /* start discount */
  const [alldiscount, setdiscount] = useState([]);
  /* stop discount */
  /* start state */
  const [FeatureTravel, setFeatureTravel] = useState([]);
  const handelFeatureTravel = (event) => {
    let position = FeatureTravel.indexOf(event.target.value) + 1;
    if (event.target.checked) {
      if (position === 0) {
        const obj = event.target.name = event.target.value;
        setFeatureTravel([...FeatureTravel, obj]);
      }
    }
    else {
      const index = FeatureTravel.indexOf(event.target.value);
      setFeatureTravel([
        ...FeatureTravel.slice(0, index),
        ...FeatureTravel.slice(index + 1)
      ]);



    }
  }
  /* ------ */
  const [facilities, setfacilities] = useState([]);
  const handelfacilities = (event) => {
    let position = facilities.indexOf(event.target.value) + 1;

    if (event.target.checked) {
      if (position === 0) {
        const obj = event.target.name = event.target.value;
        setfacilities([...facilities, obj]);
      }
    }
    else {
      const index = facilities.indexOf(event.target.value);
      setfacilities([
        ...facilities.slice(0, index),
        ...facilities.slice(index + 1)
      ]);


    }

  }
  /* stop state */
  const [filepander, setfilepaner] = useState({
    "ublode": "false",
    "out": "",
    "src": ""
  });
  const changepaner = async (val) => {
    setloading(true);
    setfilepaner(val)
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_UBLODEIMGADMIN}`;
    const obj = new FormData();
    if (val !== null) {

      if (val.ublode === "true") {
        obj.append('fileToUpload', val.src);

        await axios.post(url, obj).then((res) => {


          if (res.data.state === "error") {
            alert("لم يتم رفع الصورة");
          }
          if (res.data.state === "ok") {
            alert("تم رفع الصورة بنجاح");
            const dt = { ...dataAll, ["file_paner"]: res.data.nameimage };
            setDataAll(dt);




          }


        });

      }
      if (val.ublode === "false") {
        alert('تم الحذف');
        const dt = { ...dataAll, ["file_paner"]: "" };
        setDataAll(dt);

      }
    }


    setloading(false);
  }
  const [showRoom, setShowRoom] = useState({
    "ublode": "false",
    "out": [],
    "src": '',
  });
  const changelshowRoom = async (val) => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_UBLODEIMGADMIN}`;
    const obj = new FormData();
    setShowRoom(val)
    if (val !== null) {
      if (val.ublode === "true") {
        obj.append('fileToUpload', val.src);
        await axios.post(url, obj).then((res) => {
          if (res.data.state === "error") {
            alert("لم يتم رفع الصورة");
          }
          if (res.data.state === "ok") {
            alert("تم رفع الصورة بنجاح");
            const dt = { ...dataAll, ["show_room"]: [...dataAll.show_room, res.data.nameimage] };
            setDataAll(dt);
          }



        });

      }

      if (val.ublode === "false") {
        alert("تم الحذف");

        const obj = {
          ...dataAll, ["show_room"]: [
            ...dataAll.show_room.slice(0, val.delet),
            ...dataAll.show_room.slice(val.delet + 1)
          ]
        }
        setDataAll(obj)






      }




    }


    setloading(false);


  }

  const [Statusimage, setStatusimage] = useState({
    "ublode": "false",
    "out": "",
    "src": ""
  });
  const changeStatusimage = async (val) => {
    setloading(true);
    setStatusimage(val)
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_UBLODEIMGADMIN}`;
    const obj = new FormData();
    if (val !== null) {

      if (val.ublode === "true") {
        obj.append('fileToUpload', val.src);

        await axios.post(url, obj).then((res) => {


          if (res.data.state === "error") {
            alert("لم يتم رفع الصورة");
          }
          if (res.data.state === "ok") {
            alert("تم رفع الصورة بنجاح");
            const dt = { ...dataAll, ["Featured_image"]: res.data.nameimage };
            setDataAll(dt);




          }


        });

      }
      if (val.ublode === "false") {
        alert('تم الحذف');
        const dt = { ...dataAll, ["Featured_image"]: "" };
        setDataAll(dt);

      }
    }


    setloading(false)



  }
  /* ======================= push data ============================= */
  const [dataAll, setDataAll] = useState({
    typeDuration: "",
    file_paner: "",
    show_room: [],
    Featured_image: "",
    title: "",
    area: "",
    urlvidio: "",
    typeTravel: "",
    MinimumAdvanceReservations: "",
    Duration: "",
    MainePeopleTour: "",
    MaxPeopleTour: "",
    location: "",
    titleLocation: "",
    gps: "",
    salry: "",
    sellingPrice: "",
    EmpoweringAllTypesOfPeople: "of",
    EnableTheAdditionalPrice: "of",
    EnableServiceCharges: "of",
    EnableFixedDate: "of",
    EnableWorkingHours: "of",
    stateshare: "Draft",
    Enable_the_feature: "of",
    mapWidth: '',
    mapHeight: ''
  });
  const handelData = (event) => {



    if (event.target.type === "checkbox") {

      if (event.target.checked) {

        const opj = { ...dataAll, [event.target.name]: event.target.value };
        setDataAll(opj);
      }
      else {
        const opj = { ...dataAll, [event.target.name]: "of" };
        setDataAll(opj);
      }











    }
    else {
      const opj = { ...dataAll, [event.target.name]: event.target.value };
      setDataAll(opj)
    }





  }
  const handelarea = (val) => {
    const opj = { ...dataAll, ["area"]: val };
    setDataAll(opj)
  }
  /* start handel map location */
  const handelMapLocation = (width, height) => {
    const opj = { ...dataAll, "mapWidth": width, "mapHeight": height };
    setDataAll(opj);

  }
  /* stop handel map location */
  const pushData = async () => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_ADDTOURADMIN}`;
    const obj = new FormData();
    if (dataAll.title === "") {
      alert("ادخل العنوان");
    }
    else if (dataAll.title === "" || dataAll.area === "") {
      alert("اكتب المحتوى");

    }
    else if (dataAll.typeTravel === "" || dataAll.typeTravel === "--- الرجاء التحديد ---") {
      alert("حدد الفئة");

    }
    else if (dataAll.file_paner === "") {
      alert("لا توجد صورة بانر");

    }
    else if (dataAll.show_room.length === 0) {
      alert("لا توجد صالة عرض");

    }
    else if (dataAll.Duration === "") {

      alert("ادخل المدة");
    }
    else if (allquestions.length === 0) {

      alert("اكتب الاسئلة الشائعة");
    }
    else if (allTitles.length === 0) {

      alert("يشمل ؟؟");
    }
    else if (allExclude.length === 0) {

      alert("استبعاد ؟؟");
    }
    else if (allItinerary.length === 0) {

      alert("مسار الرحلة ؟");
    }
    else if (dataAll.location === "" || dataAll.location === "-- الرجاء الحديد --") {
      alert("قم بتحديد الموقع");

    }
    else if (dataAll.titleLocation === "") {

      alert("عنوان الجولة الحقيقى");
    }
    else if (dataAll.salry === "") {

      alert("كتابة السعر؟");
    }
    else if (dataAll.sellingPrice === "") {

      alert("تحديدسعر البيع ؟");
    }
    else if (dataAll.Featured_image === "") {
      alert("صورة مميزة");
    }
    else if (facilities.length === 0) {

      alert("المرافق ؟؟");
    }
    else if (FeatureTravel.length === 0) {

      alert("انماط السفر؟؟");
    }
    else if (dataAll.typeDuration === "") {
      alert("حدد المدة");
    }
    else if (dataAll.urlvidio === "") {
      alert("رابط فيديو على اليوتيوب ؟؟");
    }
    else if (dataAll.MainePeopleTour === "") {
      alert('جولة مين الناس');
    }
    else if (dataAll.MaxPeopleTour === "") {
      alert('جولة ماكس الناس');
    }
    else if (dataAll.mapHeight === "" || dataAll.mapWidth === "") {
      alert("الرجاء تحديد الموقع");
    }
    else {
      obj.append('area', dataAll.area);
      obj.append('additional_services', allServices.length === 0 ? "[]" : JSON.stringify(allServices))
      obj.append('title', dataAll.title);
      obj.append('linkType', dataAll.urlvidio);
      obj.append('typeTour', dataAll.typeTravel);
      obj.append('Minimum_advance_reservations', dataAll.MinimumAdvanceReservations);
      obj.append('Duration', dataAll.Duration);
      obj.append('Maine_people_tour', dataAll.MainePeopleTour);
      obj.append('Max_people_tour', dataAll.MaxPeopleTour);
      obj.append('common_questions', JSON.stringify(allquestions));
      obj.append('Includes', JSON.stringify(allTitles));
      obj.append('Exclude', JSON.stringify(allExclude));
      obj.append('Itinerary', JSON.stringify(allItinerary));
      obj.append('Banner_image', dataAll.file_paner);
      obj.append('show_room', JSON.stringify(dataAll.show_room));
      obj.append('location', dataAll.location);
      obj.append('Real_tour_title', dataAll.titleLocation);
      obj.append('price', dataAll.salry);
      obj.append('selling_price', dataAll.sellingPrice);
      obj.append('extra_charge', JSON.stringify(allextra));
      obj.append('Empowering_all_types_of_people', dataAll.EmpoweringAllTypesOfPeople);
      obj.append('enable_the_additional_price', dataAll.EnableTheAdditionalPrice);
      obj.append('Discount_depends_on_the_number_of_people', JSON.stringify(alldiscount));
      obj.append('Enable_service_charges', dataAll.EnableServiceCharges);
      obj.append('Enable_fixed_date', dataAll.EnableFixedDate);
      obj.append('Enable_working_hours', dataAll.EnableWorkingHours);
      obj.append('Enable_the_feature', dataAll.Enable_the_feature);
      obj.append('Travel_patterns', JSON.stringify(FeatureTravel));
      obj.append('Accompanying', JSON.stringify(facilities));
      obj.append('Featured_image', dataAll.Featured_image);
      obj.append('State_share', dataAll.stateshare);
      obj.append('typeDuration', dataAll.typeDuration);
      obj.append('mymapLocation', dataAll.mapWidth + "-" + dataAll.mapHeight);
      await axios.post(url, obj, { withCredentials: true }).then((res) => {
        if (res.data === "ok-insert") {
          alert("تم الحفظ بنجاح");
          window.location.reload();


        }
        else {
          alert("لم يتم الحفظ ");
        }
      })
    }
    setloading(false);

  }
  /* ----------------------- push data ----------------------------- */
  const [DataCategories, setDataCategories] = useState([]);
  const [allLocations, setLocations] = useState([]);
  const showCategories = async () => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTRIPCATEGORIES}`;
    await axios.post(url).then((res) => {
      if (res.data !== "not-foune") {
        setDataCategories(res.data);
      }
      else {
        setDataCategories([]);
      }
    })



    const url2 = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOWLOCATIONTOUR}`;
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
    showCategories();
    funTravelStyleFeatures();
    funfacilitiesFeature();
  }, [])
  /* start Travel style features*/
  const [allTravelStyleFeatures, setallTravelStyleFeatures] = useState([]);
  const funTravelStyleFeatures = async () => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTRAVELSTYLEFEATURES}`;
    await axios.post(url).then((res) => {
      if (res.data !== "not-foune") {
        setallTravelStyleFeatures(res.data);
      }
      else {
        setallTravelStyleFeatures([]);
      }
    })
    setloading(false);
  }
  /* stop Travel style features */
  /* start facilities-feature*/
  const [allfacilitiesFeature, setfacilitiesFeature] = useState([]);
  const funfacilitiesFeature = async () => {
    setloading(true);
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOW_FACILITIESFEATURE}`;
    await axios.post(url).then((res) => {
      if (res.data !== "not-foune") {
        setfacilitiesFeature(res.data);
      }
      else {
        setfacilitiesFeature([]);
      }
    })
    setloading(false);
  }
  /* stop facilities-feature*/





  if (promiseB === null || promiseB.data.stateUser === "error-network") {
    return (
      <Loading />
    )
  }
  if (promiseB.data.stateUser === "ok-auth") {

    return (
      <>
        {isloading &&
          <Loading />}
        <div className="add-tour">
          <div className="navpar-top">
            <Navpar funtogglebarleft={funToggle} />
          </div>
          <div className="flex-page">
            {toggle &&
              <div className="left-nav">
                <div className="fixed-left">
                  <NavparLeft />

                </div>
              </div>
            }
            <div className={`right-page ${toggle === false && "fit-content"}`}>
              <div className="padding">
                <NavparContnet t1={"جولات"} t2={"اضف جولة"} t3={""} />
                <p className="title">اضافة جولة جديدة</p>
                <div className="from-content">
                  <div className="left-conten-bar">
                    <p><span><FontAwesomeIcon icon={faGear} /></span>معلومات الجولة</p>

                    <div onClick={() => { funTogleIndex("from-general") }} className={`${toggleInedx === "from-general" && 'active-left'}`}>
                      <span>عام</span>
                    </div>
                    <div className={`${toggleInedx === "from-gps" && 'active-left'}`} onClick={() => { funTogleIndex("from-gps") }}>
                      <span>موقع</span>
                    </div>
                    <div className={`${toggleInedx === "from-Pricing" && 'active-left'}`} onClick={() => { funTogleIndex("from-Pricing") }}>
                      <span>التسعير</span>
                    </div>
                    <div onClick={() => { funTogleIndex("from-state") }} className={`${toggleInedx === "from-state" && 'active-left'}`}>
                      <span>حالة</span>
                    </div>
                    <div onClick={() => { funTogleIndex("from-search") }} className={`${toggleInedx === "from-search" && 'active-left'}`}>
                      <span>تحسين محركات البحث</span>
                    </div>

                  </div>

                  <div className="right-content-bar">

                    {
                      toggleInedx === "from-general" &&
                      <div className="from-general">
                        <div className="child-1 child-style ">
                          <div className="my-tile">
                            <p>محتوى الجولة</p>
                          </div>
                          <br></br>
                          <label>عنوان</label>
                          <br></br>
                          <input value={dataAll.title} onChange={handelData} name="title" type="text" placeholder="عنوان" />
                          <br></br>
                          <br></br>
                          <label>محتوى</label>
                          <br></br>
                          <FromArea ditels={dataAll.area} handel={handelarea} />
                          <br></br>
                          <label>فئة</label>
                          <br></br>
                          <select onChange={handelData} defaultValue={dataAll.typeTravel} name="typeTravel">
                            <option>--- الرجاء التحديد ---</option>
                            {DataCategories.map((item, index) => (
                              <option key={index} value={item.name}>{item.name}</option>

                            ))}
                          </select>
                          <br></br>
                          <br></br>
                          <label>فيديو يوتيوب</label>
                          <br></br>
                          <input value={dataAll.urlvidio} onChange={handelData} name="urlvidio" type="text" placeholder="رابط الفيديو على اليوتيوب" />
                          <br></br>
                          <br></br>
                          <label>الحد الادنى للحجوزات المسبقة</label>
                          <br></br>
                          <input value={dataAll.MinimumAdvanceReservations} name="MinimumAdvanceReservations" onChange={handelData} type="number" placeholder="على ثبيل المثال:3" />
                          <br></br>
                          <label>اتركه فارغًا إذا لم تكن بحاجة إلى استخدام خيار الحد الأدنى لليوم</label>
                          <br></br>
                          <br></br>
                          <label>مدة</label>
                          <br></br>
                          <input value={dataAll.Duration} name="Duration" onChange={handelData} type="text" placeholder="مدة" />
                          <br></br>
                          <select defaultValue={dataAll.typeDuration} onChange={handelData} name="typeDuration">
                            <option value="">حدد</option>
                            <option value="ساعات">ٍساعات</option>
                            <option value="أيام">ايام</option>
                            <option value="شهور">شهور</option>
                            <option value="اسابيع">اسابيع</option>
                          </select>
                          <br></br>
                          <br></br>
                          <label>جولة مين الناس</label>
                          <br></br>
                          <input placeholder="Min Age 12+" value={dataAll.MainePeopleTour} name="MainePeopleTour" onChange={handelData} type="text" />
                          <br></br>
                          <br></br>
                          <label>جولة ماكس الناس</label>
                          <br></br>
                          <input placeholder="Max Guests 10" value={dataAll.MaxPeopleTour} name="MaxPeopleTour" onChange={handelData} type="text" />
                          <br></br>
                          <br></br>
                          <label>الاسئلة الشائعة</label>
                          <br></br>
                          <div className="create-box-add">
                            <div className="box-tile-column">
                              <p>عنوان</p>
                              <p>محتوى</p>
                            </div>
                            <div className="create-box">
                              <input value={valuesqust === '' ? '' : valuesqust.quest} onChange={handelQuest} name="quest" type="text" placeholder="على سبيل المثال:دليل متخصص ثنائى اللغة" />
                              <br></br>
                              <br></br>
                              <textarea value={typeof valuesqust.myval === "undefined" ? "" : valuesqust.myval} onChange={handelQuest} name="myval">
                              </textarea>
                              <div className="btn-add">
                                <p onClick={pushquestions}>+اضافة عنصر</p>
                              </div>
                            </div>
                            {allquestions.map((item, index) => (
                              <div key={index} className="create-box">
                                <input readOnly value={item.quest} type="text" placeholder="على سبيل المثال:دليل متخصص ثنائى اللغة" />
                                <br></br>
                                <br></br>
                                <textarea value={item.myval} readOnly>
                                  {item.myval}
                                </textarea>
                                <p onClick={() => { deleteQuestions(index) }} className="btn-delete"><span><FontAwesomeIcon icon={faTrash} /></span></p>
                              </div>
                            ))}
                          </div>
                          <br></br>
                          <br></br>
                          <label>الخدمات الاضافية</label>
                          <br></br>
                          <div className="create-box-add">
                            <div className="box-tile-column">
                              <p>اسم الخدمة</p>
                              <p>السعر</p>
                            </div>
                            <div className="create-box">
                              <input name="title" value={valServices === '' ? '' : valServices.title} onChange={handelServices} type="text" placeholder="اسم الخدمة" />
                              <br></br>
                              <br></br>
                              <input name="salre" value={valServices === '' ? '' : valServices.salre} onChange={handelServices} type="number" placeholder="السعر" />
                              <div className="btn-add">
                                <p onClick={pushServices}>+اضافة عنصر</p>
                              </div>
                            </div>


                            {allServices.map((item, index) => (
                              <div key={index} className="create-box">
                                <input readOnly value={item.title} type="text" />
                                <br></br>
                                <br></br>
                                <input type="text" value={item.salre} readOnly />
                                <p onClick={() => { deleteServices(index) }} className="btn-delete"><span><FontAwesomeIcon icon={faTrash} /></span></p>
                              </div>
                            ))}




                          </div>
                          <br></br>
                          <br></br>
                          <label>يشمل</label>
                          <br></br>
                          <div className="create-box-add">
                            <div className="box-tile">
                              <p>عنوان</p>
                            </div>

                            <div className="create-box">
                              <input value={valueTitleInclude.title} name="title" type="text" placeholder="على سبيل المثال:   انترنت" onChange={funhandelTitleInclude} />
                              <br></br>
                              <input value={valueTitleInclude.ditls} name="ditls" onChange={funhandelTitleInclude} type="text" placeholder="على ثبيل المثال : انترنت عالى السرعة طول" />
                              <div className="btn-add">
                                <p onClick={pushTitles}>+اضافة عنصر</p>
                              </div>
                              {allTitles.map((item, index) => (
                                <div key={index}>
                                  <input readOnly value={item.title} type="text" />
                                  <br></br>
                                  <input readOnly value={item.ditls} type="text" />
                                  <p onClick={() => { deletetitle(index) }} className="btn-delete"><span><FontAwesomeIcon icon={faTrash} /></span></p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <br></br>
                          <br></br>
                          <br></br>
                          <label>استبعاد</label>
                          <br></br>
                          <div className="create-box-add">
                            <div className="box-tile">
                              <p>عنوان</p>
                            </div>
                            <div className="create-box">
                              <input value={handelExclude} type="text" placeholder="على سبيل المثال:دليل متخصص ثنائى اللغة" onChange={(eo) => { sethandelExclude(eo.target.value) }} />
                              <br></br>
                              <div className="btn-add">
                                <p onClick={pushExclude}>+اضافة عنصر</p>
                              </div>
                              {allExclude.map((item, index) => (
                                <div key={index}>
                                  <input readOnly value={item} type="text" />
                                  <p onClick={() => { deleteExclude(index) }} className="btn-delete"><span><FontAwesomeIcon icon={faTrash} /></span></p>
                                </div>
                              ))}



                            </div>



                          </div>
                          <br></br>
                          <label>مسار الرحلة</label>
                          <br></br>
                          <div className="create-box-add">
                            <div className="box-tile-column">
                              <p>العنوان- </p>
                              <p>محتوى</p>
                            </div>
                            <div className="create-box">

                              <input value={allItinerary.tile} name="tile" onChange={handelItinerary} type="text" placeholder="العنوان:اليوم الاول" />
                              <br></br>
                              <br></br>
                              <textarea value={allItinerary.contentItinerary} name="contentItinerary" onChange={handelItinerary}>
                              </textarea>
                              <div className="btn-add">
                                <p onClick={pusItinerary}>+اضافة عنصر</p>
                              </div>


                              {allItinerary.map((item, index) => (
                                <div key={index}>
                                  <input readOnly type="text" value={item.tile} />
                                  <br></br>
                                  <br></br>
                                  <textarea readOnly value={item.contentItinerary}>
                                  </textarea>
                                  <p onClick={() => { deleteItinerary(index) }} className="btn-delete"><span><FontAwesomeIcon icon={faTrash} /></span></p>

                                </div>
                              ))}


                            </div>







                          </div>
                          <br></br>
                          <br></br>

                          <label>صورة بانر</label>
                          <br></br>
                          <div className="size-images">
                            <UplodeVipImage src={filepander} myfile={changepaner} />
                          </div>
                          <br></br>
                          <br></br>
                          <br></br>

                          صالة العرض
                          <br></br>
                          <br></br>

                          <BtnAllImages val={showRoom} allfiles={changelshowRoom} />
                        </div>
                        {false &&
                          <div className="child-2 child-style ">
                            <div className="my-tile">
                              <p>محيط</p>
                            </div>

                            <label>تعليم</label>
                            <br></br>
                            <div className="create-box-add">
                              <div className="box-tile-column">
                                <p>اسم</p>
                                <p>محتوى</p>
                                <p>مسافة</p>
                              </div>
                              <div className="create-box">
                                <input type="text" placeholder="شاطى : مشمس" />
                                <br></br>
                                <br></br>
                                <textarea>
                                </textarea>
                                <br></br>
                                <input type="number" />
                                <br></br>
                                <select>
                                  <option>م</option>
                                  <option>كم</option>

                                </select>


                                <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash} /></span></p>

                              </div>
                              <div className="btn-add">
                                <p>+اضافة عنصر</p>
                              </div>






                            </div>
                            <br></br>
                            <label>صحة</label>
                            <br></br>
                            <div className="create-box-add">
                              <div className="box-tile-column">
                                <p>اسم</p>
                                <p>محتوى</p>
                                <p>مسافة</p>
                              </div>
                              <div className="create-box">
                                <input type="text" placeholder="شاطى : مشمس" />
                                <br></br>
                                <br></br>
                                <textarea>
                                </textarea>
                                <br></br>
                                <input type="number" />
                                <br></br>
                                <select>
                                  <option>م</option>
                                  <option>كم</option>

                                </select>


                                <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash} /></span></p>

                              </div>
                              <div className="btn-add">
                                <p>+اضافة عنصر</p>
                              </div>






                            </div>
                            <br></br>
                            <label>مواصلات</label>
                            <br></br>
                            <div className="create-box-add">
                              <div className="box-tile-column">
                                <p>اسم</p>
                                <p>محتوى</p>
                                <p>مسافة</p>
                              </div>
                              <div className="create-box">
                                <input type="text" placeholder="شاطى : مشمس" />
                                <br></br>
                                <br></br>
                                <textarea>
                                </textarea>
                                <br></br>
                                <input type="number" />
                                <br></br>
                                <select>
                                  <option>م</option>
                                  <option>كم</option>

                                </select>


                                <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash} /></span></p>

                              </div>
                              <div className="btn-add">
                                <p>+اضافة عنصر</p>
                              </div>






                            </div>
                            <br></br>
                            <label>ايجار</label>
                            <br></br>
                            <div className="create-box-add">
                              <div className="box-tile-column">
                                <p>اسم</p>
                                <p>محتوى</p>
                                <p>مسافة</p>
                              </div>
                              <div className="create-box">
                                <input type="text" placeholder="شاطى : مشمس" />
                                <br></br>
                                <br></br>
                                <textarea>
                                </textarea>
                                <br></br>
                                <input type="number" />
                                <br></br>
                                <select>
                                  <option>م</option>
                                  <option>كم</option>

                                </select>


                                <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash} /></span></p>

                              </div>
                              <div className="btn-add">
                                <p>+اضافة عنصر</p>
                              </div>
                            </div>
                          </div>
                        }
                      </div>
                    }
                    {
                      toggleInedx === "from-gps" &&
                      <div className="from-gps">

                        <div className="my-tile">
                          <p>مواقع الجولة</p>
                        </div>
                        <br></br>
                        <br></br>
                        <label>موقع</label>
                        <br></br>
                        <select defaultValue={dataAll.location} onChange={handelData} name="location">
                          <option>-- الرجاء التحديد --</option>
                          {allLocations.map((item, index) => (
                            <option key={index} value={item.location}>--  {item.location} --</option>
                          ))}
                        </select>
                        <br></br>
                        <br></br>
                        <label>عنوان الجولة الحقيقية</label>
                        <br></br>
                        <input value={dataAll.titleLocation} name="titleLocation" onChange={handelData} type="text" placeholder="عنوان الجولة الحقيقية" />
                        <br></br>
                        <br></br>
                        <label>الاحداثيات الجغرافية</label>
                        <br></br>
                        <div>
                          <br></br>
                          <Map handelMap={handelMapLocation} />
                        </div>
                        <br></br>
                        <label>خط عرض الخريطة</label>
                        <br></br>
                        <input value={dataAll.mapWidth} onChange={handelData} name="mapWidth" type="text" />
                        <br></br>
                        <label>خط طول الخريطة</label>
                        <br></br>
                        <input value={dataAll.mapHeight} onChange={handelData} name="mapHeight" type="text" />
                        <br></br>


                      </div>
                    }

                    {
                      toggleInedx === "from-state" &&
                      <div className="from-state">
                        <div className="child-1 child-style ">
                          <div className="my-tile">
                            <p>ألحالة</p>
                          </div>
                          <div className="padding-child">
                            <select defaultValue={dataAll.stateshare} name="stateshare" onChange={handelData}>
                              <option value="Draft">مسودة</option>
                              <option value="push">نشر</option>
                            </select>
                          </div>
                        </div>
                        <div className="child-1 child-style ">
                          <div className="my-tile">
                            <p>اعداد المؤلف</p>
                          </div>
                          <div className="padding-child">
                            <select>
                              <option>-- اختر اسم المستخدم --</option>
                              <option>ahmed</option>
                            </select>
                          </div>
                        </div>
                        <div className="child-2 child-style ">
                          <div className="my-tile">
                            <p>جولة مميزة</p>
                          </div>
                          <br></br>
                          <input defaultChecked={dataAll.Enable_the_feature === "on" ? true : false} onChange={handelData} name="Enable_the_feature" value='on' type="checkbox" id="ch" />
                          <label htmlFor="ch">تمكين المميز</label>
                          <br></br>
                          <br></br>

                        </div>
                        <div className="child-3 child-style ">
                          <div className="my-tile">
                            <p>السمة:انماط السفر</p>
                          </div>
                          <div className="padding-content">
                            {allTravelStyleFeatures.map((item, index) => (
                              <div key={index}>
                                <input defaultChecked={FeatureTravel.indexOf(item.name_feature) + 1 === 0 ? false : true} onChange={handelFeatureTravel} value={item.name_feature} name={item.name_feature} type="checkbox" id={index + "c1"} /><label htmlFor={index + "c1"}>{item.name_feature}</label>
                                <br></br>
                                <br></br>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="child-3 child-style ">

                          <div className="my-tile">
                            <p>السمة: المرافق</p>
                          </div>
                          <div className="padding-content">
                            {allfacilitiesFeature.map((item, index) => (
                              <div key={index}>
                                <input defaultChecked={facilities.indexOf(item.name_feature) + 1 === 0 ? false : true} onChange={handelfacilities} value={item.name_feature} name={item.name_feature} type="checkbox" id={index + "d1"} /><label htmlFor={index + "d1"}>{item.name_feature}</label>
                                <br></br>
                                <br></br>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="child-4 child-style ">
                          <div className="my-tile">
                            <p>صورة مميزة</p>
                          </div>
                          <div className="size-image">
                            <UplodeVipImage src={Statusimage} myfile={changeStatusimage} />

                          </div>
                        </div>
                        <div className="child-5 child-style ">
                          <div className="my-tile">
                            <p>ايكال</p>
                          </div>
                          <br></br>
                          <br></br>
                          <label>استيراد عنوان URL</label>
                          <br></br>
                          <input type="text" />
                        </div>

                      </div>
                    }
                    {
                      toggleInedx === "from-Pricing" &&
                      <div className="from-Pricing">
                        <div className="child-1 child-style">
                          <div className="my-tile">
                            <p>التسعير</p>
                          </div>
                          <p>سعر الجولة</p>
                          <br></br>
                          <label>سعر</label>
                          <br></br>
                          <input onChange={handelData} value={dataAll.salry} name="salry" type="number" placeholder="1549:00" />
                          <br></br>
                          <br></br>

                          <label>سعر البيع</label>
                          <br></br>
                          <input name="sellingPrice" value={dataAll.sellingPrice} onChange={handelData} type="number" placeholder="1549.00" />
                          <br></br>
                          <br></br>

                          <label>
                            إذا كان السعر العادي أقل من الخصم، فسوف يظهر السعر العادي
                          </label>
                          <br></br>
                          <br></br>
                          <hr></hr>
                          <br></br>
                          <br></br>
                          <input defaultChecked={dataAll.EnableServiceCharges === "of" ? false : true} name="EnableServiceCharges" onChange={handelData} type="checkbox" id="p" /><label htmlFor="p">تمكين رسوم الخدمة</label>
                        </div>
                      </div>
                    }
                    {
                      toggleInedx === "from-search" &&
                      <div className="from-search">
                        <SectionSearch mylink={"http://localhost:3000/pages/tours"} />
                      </div>
                    }





                    <div className="btn-save">
                      <p onClick={pushData}>حفظ التغيرات</p>
                    </div>



                  </div>



                </div>
              </div>


            </div>
          </div>
        </div>
      </>

    )

  }
  if (promiseB.data.stateUser === "no-auth" || promiseB.data.stateUser === "not-found-cookie-network") {
    redirect('/');
  }

}
export default AddTour;



