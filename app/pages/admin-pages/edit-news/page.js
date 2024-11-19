"use client";
import React, { useEffect, useState } from "react";
import './style.scss';
import NavTop from "@/app/_components/admin-components/navpar/navpar";
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavContent from "@/app/_components/admin-components/nav-content/nav-content";
import FromArea from "@/app/_components/admin-components/form-area/form-area";
import SectionSearh from "@/app/_components/admin-components/card-search-google/card-search-google";
import UplodeVipImage from "@/app/_components/admin-components/uplode-vip-image/uplode-vip-image";
import { useSelector } from "react-redux";
import Loading from "@/app/_components/loading/loading";
import axios from "axios";

function EditNews({ searchParams }) {
  const params = searchParams?.idTopic;

  const [isloading, setloading] = useState(false);
  const myvalue = useSelector((state) => state.counter);
  const [dataAll, setDataAll] = useState({
    file_paner: "",
    Featured_image: "",
    title: "",
    area: "",
    typeTravel: "",
    name: "",
    stateshare: "",
  });

  /* handel area */


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
  /* stop handel area */
  /* START uploade image vip */

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
  const [Statusimage, setStatusimage] = useState({
    "ublode": "false",
    "out": "",
    "src": ""
  });

  /* stop */
  /* start add tags */

  const [allTags, setTags] = useState([]);
  const [valuesTags, setvaluesTags] = useState({
    myval: "",
  });
  const handeTags = (event) => {
    const obj = { ...valuesTags, [event.target.name]: event.target.value };
    setvaluesTags(obj);
  }
  const pushTags = (event) => {
    if (event.key === "Enter") {
      setTags([...allTags, valuesTags]);
      setvaluesTags({
        myval: ""
      })
    }
  }
  const deleteTags = (index) => {
    setTags([
      ...allTags.slice(0, index),
      ...allTags.slice(index + 1)
    ]);
  }

  /* stop add tags */

  const [toggle, setToggle] = useState(false);
  const funToggle = () => {
    setToggle(toggle === true ? false : true);
  }
  const getData = async () => {
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_UPDATENEWS}`;
    if (dataAll.area.trim().length === 0 || dataAll.area === "") {
      alert("محتوى ؟")
    }
    else if (dataAll.title.trim().length === 0) {
      alert("عنوان ؟")
    }
    else if (dataAll.Featured_image.length === 0) {
      alert("صورة مميزة ؟")
    }
    else if (allTags.length === 0) {
      alert("الدخل العلامة ؟")
    }
    else if (dataAll.name.trim().length === 0) {
      alert("اسم الناشر ؟")
    }
    else if (dataAll.typeTravel.trim().length === 0) {
      alert("فئة ؟ ")
    }
    else {
      setloading(true);
      const obj = new FormData();
      obj.append('mysele', 'update');
      obj.append('idTopick', params);
      obj.append('title', dataAll.title);
      obj.append('content', dataAll.area);
      obj.append('share', dataAll.stateshare);
      obj.append('nameUser', dataAll.name);
      obj.append('typeTour', dataAll.typeTravel);
      obj.append('tags', JSON.stringify(allTags));
      obj.append('myimg', dataAll.Featured_image);
      await axios.post(url, obj).then((res) => {
        if (res.data === "ok-update") {
          alert("تم التحديث بنجاح");
        }
        else {
          alert('حاول مرة اخرى');
        }
      })
      setloading(false)
    }
  }

  /* show default data */

  const [isData, setalldata] = useState([]);
  const showData = async () => {

    setloading(true)
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTRIPCATEGORIES}`;
    const url2 = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_UPDATENEWS}`;
    await axios.post(url).then((res) => {
      if (res.data !== "not-foune") {
        setalldata(res.data);
      }
      else {
        setalldata([]);
      }
    })

    /* start show default data */

    const obj2 = new FormData();
    obj2.append('idTopick', params);
    obj2.append('mysele', 'show');
    await axios.post(url2, obj2).then((res) => {
      if (res.data.state === "okAllData") {
        setDataAll({
          file_paner: res.data.mydata.avatar_Prim,
          Featured_image: res.data.mydata.avatar_Prim,
          title: res.data.mydata.title_Topics,
          area: res.data.mydata.content_Topics,
          typeTravel: res.data.mydata.category,
          name: res.data.mydata.name_user_Topics,
          stateshare: res.data.mydata.state_share,
        });
        setTags(JSON.parse(res.data.mydata.tags_Topics));
        setStatusimage({
          "ublode": 'default',
          "out": res.data.mydata.avatar_Prim,
          "src": res.data.mydata.avatar_Prim
        });
        setloading(false);
      }
      else {
        setloading(true);
      }



    });

    /* stop show default data */
    setloading(false)
  }


  useEffect(() => {
    showData();
  }, [])

  /* ------------- */

  return (
    <>
      {isloading &&
        <Loading />
      }
      <div className="edit-news">
        <div className="nav-top">
          <NavTop funtogglebarleft={funToggle} />
        </div>
        <div className="flex-add-news">
          {toggle &&
            <div className="left-nav">
              <div>
                <NavLeft />
              </div>
            </div>

          }

          <div className={`right-from ${toggle === false && "fit-content"}`}>
            <NavContent t1={"اخبار"} t2={"اضف اخبار"} t3={""} />
            <div className="flex-bwtween">
              <div className="left">
                <p className="tile">اضف مشاركة جديدة</p>
                <div className="child-1 child-card">
                  <div className="title-top">
                    <p>محتوى الاخبار</p>
                  </div>
                  <label>عنوان</label>
                  <br></br>
                  <br></br>
                  <input value={dataAll.title} onChange={handelData} name="title" type="text" placeholder="عنوان" />
                  <br></br>
                  <br></br>
                  <label>محتوى</label>
                  <br></br>
                  <FromArea ditels={dataAll.area} handel={handelarea} />
                  <br></br>
                  <br></br>
                </div>
                <SectionSearh />
              </div>


              <div className="right">
                <div className="child33 child-card">
                  <div className="title-right title-top">
                    <p>نشر</p>
                  </div>
                  <select value={dataAll.stateshare} name="stateshare" onChange={handelData}>
                    <option value="Draft">مسودة</option>
                    <option value="push">نشر</option>
                  </select>
                  <br></br>
                  <p onClick={getData} className="btn-share">حفظ التغيرات</p>
                </div>
                <br></br>
                <div className="child-1 child-card">
                  <div className="title-right title-top">
                    <p>اعداد المؤلف</p>
                  </div>
                  <select value={dataAll.name} onChange={handelData} name="name">
                    <option value="">--- اختر المستخدم ---</option>
                    <option value="ahmed">ahmed</option>
                    <option value="all yassen">All Yassen</option>
                    <option value="elpahr">Elpahr</option>
                  </select>
                </div>
                <div className="child-2 child-card">
                  <div className="title-top">
                    <p>فئة</p>
                  </div>
                  <br></br>
                  <select onChange={handelData} value={dataAll.typeTravel} name="typeTravel">
                    <option value="">--- الرجاء التحديد ---</option>
                    {isData.map((item, index) => (
                      <option value={item.name} key={index}>{item.name}</option>
                    ))}
                  </select>
                  <br></br>
                  <br></br>
                  <label>ادخل العلامة</label>
                  <br></br>
                  <br></br>

                  <input onKeyPress={pushTags} value={valuesTags === '' ? '' : valuesTags.myval} onChange={handeTags} name="myval" type="text" placeholder="ادخل العلامة" />
                  <div className="view-tags">
                    {allTags.map((item, index) => (
                      <div key={index} className="mytag">
                        <p>{item.myval}</p>
                        <span onClick={() => { deleteTags(index) }}>x</span>
                      </div>
                    ))}

                  </div>
                </div>
                <div className="child-3  child-card">
                  <div className="title-top">
                    <p>صورة مميزة</p>
                  </div>
                  <div className="size">
                    <UplodeVipImage src={Statusimage} myfile={changeStatusimage} />
                  </div>
                </div>


              </div>

            </div>



          </div>
        </div>
      </div>
    </>

  );

}
export default EditNews;
