"use client";
import React from "react";
import Link from "next/link";
import './style.scss';
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function DetalisRoom({ data }) {

  return (

    <div dir="rtl" className="detalis-room">
      {data !== null ?
        <>
          <p>تفاصبل الرحلة</p>
          <div className="row-cild-4">
            <div className="myimg">
              <img alt="" src="/images/img1.jpg" />
            </div>
            <p>{data.Tour_name}</p>
          </div>
          <br></br>
          <br></br>
          <table>
            <tbody>
              <tr>
                <th>اسم الضيف</th>
                <td>{data.f_name + " " + data.l_name}<Link href="#">تعديل اسم الضيف</Link></td>
              </tr>


              <tr>
                <th>خدمات اضافية</th>
                <td>
                  {JSON.parse(data.allSeleServec).map((item, index) => (
                    <label key={index}>{item.split("-")[0]} مشمولة في السعر النهائي</label>
                  ))
                  }
                </td>
              </tr>
              <tr>
                <th>يشمل هذا السعر</th>
                <td>
                  {JSON.parse(data.Includes).map((item, index) => (
                    <div key={index}>
                      <strong>{item.title}</strong>
                      <br></br>
                      <label>{item.ditls}</label>
                      <br></br>
                    </div>
                  ))}
                </td>
              </tr>

              <tr>
                <th>الخدمات الاضافية</th>
                <td>
                  {JSON.parse(data.allSeleServec).map((item, index) => (
                    <label key={index}>{item.split('-')[0]} , </label>
                  ))}
                </td>

              </tr>


              <tr>
                <th>التفضيل الخاص بالتدخين</th>
                <td><Link href="#">لا يوجد تفضيل</Link></td>
              </tr>
              <tr>
                <th>المرافق</th>
                <td>
                  {JSON.parse(data.Facilities).map((item, index) => (
                    <label key={index}>{item + " , "}</label>
                  ))}
                </td>
              </tr>
              <tr>
                <th>سياسة الإلغاء	</th>
                <td><strong>غير قابل للإلغاء</strong></td>
              </tr>
            </tbody>
          </table>

        </>
        :
        <div className="skeleton-loader">
          <div className="skeleton-header"></div>
          <div className="skeleton-content">
            <div className="skeleton-image"></div>
            <div className="skeleton-text-container">
              <div className="skeleton-title"></div>
              <div className="skeleton-text short"></div>
              <div className="skeleton-text"></div>
              <div className="skeleton-text short"></div>
            </div>
          </div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      }



    </div>






  );

}
export default DetalisRoom;