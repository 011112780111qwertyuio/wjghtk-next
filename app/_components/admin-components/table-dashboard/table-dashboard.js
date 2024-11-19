import React from "react";
import './table-dashboard.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
function TableDashboard() {


  return (
    <div className="table-dashboard">
      <div className="from-table">
        <div className="flex-top-nav">
          <p>الحجوزات الاخيرة</p>
          <Link href="">الاكثر<span><FontAwesomeIcon icon={faAngleRight}/></span></Link>
        </div>
        <div style={{ paddingLeft: 15, paddingRight: 15 }}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>غرض</th>
                <th>المجموع</th>
                <th>مدفوع</th>
                <th>حالة</th>
                <th>انشئت فى</th>


              </tr>
            </thead>
            <tbody>
              <tr>
                <td>رقم<br></br> 22</td>
                <td><Link href="#">شرم الشيخ</Link></td>
                <td>
                  550
                  <br></br>
                  دولار
                </td>
                <td>
                  0
                  <br></br>
                  دولار
                </td>
                <td>
                  <p style={{ backgroundColor: "red" }}>الغيت</p>
                </td>
                <td>
                  11/04/2024
                  <br></br>
                  01:16
                </td>


              </tr>
              <tr>
                <td>رقم<br></br> 22</td>
                <td><Link href="#">شرم الشيخ</Link></td>
                <td>
                  550
                  <br></br>
                  دولار
                </td>
                <td>
                  0
                  <br></br>
                  دولار
                </td>
                <td>
                  <p style={{ backgroundColor: "#007bff" }}>يعالج</p>
                </td>
                <td>
                  11/04/2024
                  <br></br>
                  01:16
                </td>


              </tr>
              <tr>
                <td>رقم<br></br> 22</td>
                <td><Link href="#">شرم الشيخ</Link></td>
                <td>
                  550
                  <br></br>
                  دولار
                </td>
                <td>
                  0
                  <br></br>
                  دولار
                </td>
                <td>
                  <p style={{ backgroundColor: "#007bff" }}>مكتمل</p>
                </td>
                <td>
                  11/04/2024
                  <br></br>
                  01:16
                </td>


              </tr>
            </tbody>


          </table>
        </div>
      </div>
    </div>
  );

}
export default TableDashboard;