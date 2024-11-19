"use client";
import React, { useEffect, useState } from "react";
import './table-all-items.scss';
import Link from "next/link";
import axios from "axios";
import { useSelector } from "react-redux";
import Loading from "../../loading/loading";
import CommentAdmin from "../comment-admin/comment-admin";
function TableAllItems({ funCountItems, stateEditTour, stateEditHotel }) {
  const myvalue = useSelector((state) => state.counter);
  const [loading, setloading] = useState(true);
  const [alldata, setAllData] = useState(null);
  const showData = async () => {
    const url = await `${myvalue.nameLocal}/${process.env.NEXT_PUBLIC_API_KEY_SHOWTOURSADMIN}`;
    await axios.post(url).then((res) => {
      if (res.data.length > 0 && res.data !== "error-network") {
        setAllData(res.data);
        funCountItems(res.data.length);
      }
      else {
        setAllData(null);
        funCountItems(0);

      }

    })
    setloading(false);

  }
  useEffect(() => {
    showData();
  }, [])





  if (loading) {
    return <Loading />
  }


  if (!loading) {
    return (
      <div className="table-all-items">
        <div className="scroll-from">
          <table>
            <thead>
              <tr>
                <th style={{ width: '60px' }}><input type="checkbox" /></th>
                <th style={{ width: '200px' }}>اسم</th>
                <th style={{ width: '200px' }}>موقع</th>
                <th style={{ width: '130px' }}>مؤلف</th>
                <th style={{ width: '100px' }}>حالة</th>
                <th style={{ width: '100px' }}>التعليقات</th>
                <th style={{ width: '100px' }}>تاريخ</th>
              </tr>
            </thead>
            <tbody>
              {alldata === null ?
                <tr>
                  <td><input type="checkbox" /></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="share"></td>
                  <td className="comment"></td>
                  <td></td>
                  <td>
                  </td>
                </tr>
                :
                alldata.map((item, index) => (
                  <tr key={index}>
                    <td><input type="checkbox" /></td>
                    <td><Link href={`/pages/open-card-tour-page/${item.id}`}>{item.title}</Link></td>
                    <td>{item.location}</td>
                    <td>مسئول</td>
                    {item.State_share === "push" ?
                      <td className="share active-share">
                        <span>ينشر</span>
                      </td> :
                      <td className="share off-share">
                        <span>مسودة</span>
                      </td>
                    }
                    <CommentAdmin typeTrafel={"tour"} idTour={item.id} local={myvalue.nameLocal + "/" + process.env.NEXT_PUBLIC_API_KEY_SHOWCOMMENTS} />
                    <td>{item.dataTime.split("-")[0] + "-" + item.dataTime.split("-")[1] + "-" + item.dataTime.split(":")[2]}</td>
                    <td>
                      {
                        stateEditHotel === true &&
                        <select>
                          <option>فعل</option>
                          <option >تحرير الفندق</option>
                          <option>ادارة الغرف</option>
                          <option>ادارة توفر الغرف</option>
                        </select>
                      }
                      {stateEditTour === true &&
                        <Link href="/AdministratorControlPanelEditTour">يحرر</Link>

                      }
                    </td>
                  </tr>
                ))
              }



            </tbody>

          </table>
        </div>

      </div>
    );
  }
}
export default React.memo(TableAllItems);