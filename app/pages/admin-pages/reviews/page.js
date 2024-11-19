"use client";
import React, { useState } from "react";
import './reviews.scss';
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavparContent from "@/app/_components/admin-components/nav-content/nav-content";
import Link from "next/link";
function Reviews() {

  const [toggle, settoggle] = useState(true);
  const funtoggle = () => {
    settoggle(toggle === true ? false : true);
  }

  return (
    <div className="reviews">
      <div className="nav-top">
        <Navpar funtogglebarleft={funtoggle} />
      </div>
      <div className="flex-reviews">
        {toggle &&
          <div className="left-nav">
            <div>
              <NavLeft myactive={"AdministratorControlPanelReviews"}/>

            </div>
          </div>
        }

        <div className={`right-from ${toggle===false&&"fit-content"}`}>
          <NavparContent t2={"مراجعة"} t1={""} t3={""} />
          <br></br>
          <p className="tile">جميع التقيمات</p>

          <div className="flex">
            <div className="btns">
              <Link href="#">سلة المهملات <span>(0)</span></Link>
              <Link href="#">بريد عشوائى<span>(20)</span></Link>
              <Link href="#">معلق<span>(200)</span></Link>
              <Link href="#">تم الموافقة<span>(50)</span></Link>
              <Link href="#">جميع التقييمات<span>(30)</span></Link>

            </div>

            <div className="btn-right">
              تم العثور على 231 مادة
            </div>


          </div>
          <div className="child">
            <div className="scroll-table">
              <table>
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>مؤلف</th>
                    <th style={{minWidth:'150px'}}>مراجعة المحتوى</th>
                    <th style={{minWidth:'150px'}}>الاستجابة ل</th>
                    <th>خدمة</th>
                    <th>حالة</th>
                    <th>تم ارسالة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                      <Link href="#">بريد الكترونى</Link>
                    </td>
                    <td>رحلة ممتازة</td>
                    <td>
                      <Link href="#">رحلة الى الجيزة</Link>
                    </td>
                    <td>
                      <span className="tour">رحلة</span>
                    </td>
                    <td>
                      <span className="ok">موافقة</span>
                    </td>
                    <td>
                      <p>17/04/2024</p>
                      <p>الساعة 31:14</p>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                      <Link href="#">بريد الكترونى</Link>
                    </td>
                    <td>رحلة ممتازة</td>
                    <td>
                      <Link href="#">رحلة الى الجيزة</Link>
                    </td>
                    <td>
                      <span className="tour">رحلة</span>
                    </td>
                    <td>
                      <span className="ok">موافقة</span>
                    </td>
                    <td>
                      <p>17/04/2024</p>
                      <p>الساعة 31:14</p>
                    </td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                      <Link href="#">بريد الكترونى</Link>
                    </td>
                    <td>رحلة ممتازة</td>
                    <td>
                      <Link href="#">رحلة الى الجيزة</Link>
                    </td>
                    <td>
                      <span className="tour">رحلة</span>
                    </td>
                    <td>
                      <span className="ok">موافقة</span>
                    </td>
                    <td>
                      <p>17/04/2024</p>
                      <p>الساعة 31:14</p>
                    </td>
                  </tr>
                </tbody>


              </table>
            </div>


          </div>



        </div>
      </div>
    </div>
  );

}
export default Reviews;