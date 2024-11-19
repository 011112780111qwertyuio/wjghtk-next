"use client";
import React, { useState } from "react";
/*
import NavLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavContent from "@/app/_components/admin-components/nav-content/nav-content";
import UblodePaner from "@/app/_components/admin-components/uplode-vip-image/uplode-vip-image";
import './edit-coupon.scss';
*/
function EditCoupon(){
  const [toggle, settoggle] = useState(true);
  const funtoggle = () => {
    settoggle(toggle === true ? false : true);
  }
/*
return (
  <div className="edit-coupon">


<div className="nav-top">
  <Navpar funtogglebarleft={funtoggle} />
</div>
<div className="flex-con">
  {toggle &&
    <div className="left-nav">
      <div>
        <NavLeft />
      </div>
    </div>
  }

  <div className={`right-from ${toggle === false && "fit-content"}`}>
    <NavContent t1={"جميع القسائم"} t2={"انشاء قسيمة"} t3={""} />
    <div className="padding">
    <br></br>

      <p className="title-page">التعديل:4560</p>
      <div className="flex-from">
        <div className="left">

          <div className="child">
            <div className="tile">
              <p>عام</p>
            </div>
            <br></br>
            <label>رمز الكوبون</label>
            <br></br>
            <br></br>
            <input type="text" placeholder="كود فريد" />
            <br></br>
            <br></br>
            <label>اسم القسيمة</label>
            <br></br>
            <input type="text" placeholder="اسم" />
            <br></br>
            <br></br>
            <label>مبلغ القسيمة</label>
            <br></br>
            <input type="number" placeholder="0" />
            <br></br>
            <br></br>
            <label>نوع الخصم</label>
            <br></br>
            <select>
              <option>كمية</option>
              <option>نسبة مئوية</option>

            </select>
            <br></br>
            <br></br>
            <label>تاريخ الانتهاء</label>
            <br></br>
            <input type="text" placeholder="2021-12-12 00:00:00" />


          </div>

          <br></br>
          <br></br>
          <div className="child-1">
            <div className="tile">
              <p>تقييد الاستخدام</p>
            </div>
            <br></br>
            <label>الحد الادنى لانفاق</label>
            <br></br>
            <br></br>
            <input type="text" placeholder="لايوجد حد ادنى" />
            <br></br>
            <label>لا يتضمن الحد الأدنى للإنفاق أي رسوم حجز</label>
            <br></br>
            <br></br>
            <label>الحد الاقصى للانفاق</label>
            <br></br>
            <input type="text" placeholder="لايوجد الحد الاقصى" />
            <br></br>
            <label>الحد الأقصى للإنفاق لا يشمل أي رسوم حجز</label>
            <br></br>
            <br></br>
            <label>فقط للخدمات</label>
            <br></br>
            <select>
              <option>جولة لوس انجلوس</option>
            </select>
            <br></br>
            <br></br>
            <label>فقط للمستخدم</label>
            <br></br>
            <select>
              <option>-- اختر المستخدم --</option>
              <option>احمد</option>
              <option>اسلام</option>
              <option>عمر</option>
            </select>
            <br></br>
            <br></br>



          </div>





        </div>
        <div className="right">


          <div className="child-1">
            <div className="tile">
              <p>حدود الاستخدام</p>
            </div>
            <br></br>
            <label>حدد الاستخدام لكل قسيمة</label>
            <br></br>
            <br></br>
            <input type="number" placeholder="استخدام غير محدود" />
            <br></br>
            <br></br>
            <label>حدد الاستخدام لكل مستخدم</label>
            <br></br>
            <input type="number" placeholder="استخدام غير محدود" />
            <br></br>
            <br></br>
            <div className="right-div">
              <p>حقظ التغيرات</p>
            </div>

          </div>
          <br></br>
          <br></br>


          <div className="child-2">
            <div className="tile">
              <p>صورة مميزة</p>
            </div>
            <div className="image-paner">
              <UblodePaner />
            </div>

          </div>



        </div>
      </div>
    </div>




  </div>

</div>




  </div>
);
*/

}
export default EditCoupon;