"use client";
import React, { useEffect, useState } from "react";
import './news.scss';
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavContent from "@/app/_components/admin-components/nav-content/nav-content";
import NavControl from "@/app/_components/admin-components/navpar-control-content/navpar-control-content";
import Link from "next/link";
import { useSelector } from "react-redux";
import Loading from "@/app/_components/loading/loading";
import axios from "axios";
function News() {
  const myvalue = useSelector((state) => state.counter);
  const [toggle, settoggle] = useState(false);
  const funtoggle = () => {
    settoggle(toggle === true ? false : true);
  }

  const [allData, setData] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const showData = async () => {
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTOPIC}`;
    setLoading(true);
    const obj = new FormData();
    obj.append('namePage',"showAll");
    await axios.post(url,obj).then((res) => {
      if (res.data.state === "ok-auth") {
        setData(res.data.mydata);
        setLoading(false);
      }
      else {
        alert('حاول مرة اخرى')
        setLoading(true);
      }
    })

  }
  useEffect(() => {
    showData();
  }, [])




  return (
    <>
      {isLoading &&
        <Loading />
      }
      <div className="news">
        <div className="nav-top">
          <Navpar funtogglebarleft={funtoggle} />
        </div>
        <div className="flex-from">
          {toggle &&
            <div className="left-nav">
              <div>
                <NavLeft myactive={"AdministratorControlPanelNews"} />
              </div>
            </div>
          }


          <div className={`right-from ${toggle === false && "fit-content"}`}>
            <NavContent t1={"اخبار"} t2={"الجميع"} t3={""} />
            <div className="control">
              <NavControl title={"جميع الاخبار"} nameBtn={"اضف مشاركة جديدة"} link={"/pages/admin-pages/add-news/"} />
            </div>
            <div className="child">
              <div className="scroll">
                <table>
                  <thead>
                    <tr>
                      <th><input type="checkbox" /></th>
                      <th>اسم</th>
                      <th>فئة</th>
                      <th>مؤلف</th>
                      <th>تاريخ</th>
                      <th>حالة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allData.map((item, index) => (
                      <tr key={index}>
                        <td><input type="checkbox" /></td>
                        <td><Link href="#">{item.title_Topics}</Link></td>
                        <td>{item.category}</td>
                        <td>{item.name_user_Topics}</td>
                        <td>{item.myDT}</td>
                        <td>
                          {item.state_share === "push" ?
                            <span className="ok">ينشر</span>
                            :
                            <span className="no">مسودة</span>

                          }
                        </td>
                        <td><Link href={`/pages/admin-pages/edit-news?idTopic=${item.ID_Topics}`}>يحرر</Link></td>
                      </tr>
                    ))}




                  </tbody>


                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );

}
export default News;