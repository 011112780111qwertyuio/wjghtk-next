"use client";
import React, { useState } from "react";
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavparContent from "@/app/_components/admin-components/nav-content/nav-content";
import NavparControl from "@/app/_components/admin-components/navpar-control-content/navpar-control-content";
import './Coupon.scss';
import Link from "next/link";
function Coupon() {
  const [toggle, settoggle] = useState(true);

  const funToggle = () => {
    settoggle(toggle === true ? false : true);
  }

  return (
    <div className="coupon">
      <div className="nav-top">
        <Navpar funtogglebarleft={funToggle} />
      </div>
      <div className="flex-between">
        {toggle &&

          <div className="left-n">
            <div>
              <NavLeft myactive={"AdministratorControlPanelCoupon"}/>

            </div>
          </div>
        }
        <div className={`form-right ${toggle === false && "fit-width"}`}>
          <NavparContent t1={""} t2={"ادارة القسيمة"} t3={""} />
          <div className="padding">
            <NavparControl title={"ادارة القسيمة"} nameBtn={"اضافة قسيمة جديدة"} link={"/AdministratorControlPanelAddCoupon"} />
            <div className="from-table">
              <table>
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>شفرة</th>
                    <th>اسم</th>
                    <th>كمية</th>
                    <th style={{ minWidth: "100px" }}>نوع الخصم</th>
                    <th style={{ minWidth: '130px' }}>تاريخ الانتهاء</th>
                    <th>مؤلف</th>
                    <th>حالة</th>
                  </tr>
                </thead>


                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>4560</td>
                    <td>تهوية</td>
                    <td>10</td>
                    <td>نسبة مئوية</td>
                    <td>2024-04-10 00:00:00</td>
                    <td>النظام المشرف</td>
                    <td>ينشر</td>
                    <td>
                      <Link href="/pages/admin-pages/edit-coupon/">تحرير</Link>
                    </td>


                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>4560</td>
                    <td>تهوية</td>
                    <td>10</td>
                    <td>نسبة مئوية</td>
                    <td>2024-04-10 00:00:00</td>
                    <td>النظام المشرف</td>
                    <td>ينشر</td>
                    <td>
                      <Link href="/pages/admin-pages/edit-coupon/">تحرير</Link>
                    </td>


                  </tr>
                </tbody>



              </table>

              <p>نم العثور على 1 عنصر</p>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
export default Coupon;
