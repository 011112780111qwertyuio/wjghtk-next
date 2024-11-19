"use client";
import React, { useState } from "react";
import './add-hotel.scss';
/*
import NavparContent from "@/app/_components/admin-components/nav-content/nav-content";
import NavparSystem from "@/app/_components/admin-components/navpar/navpar";
import NavparLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import AlertError from "@/app/_components/alert-error/alert-error";
import FormArea from "@/app/_components/admin-components/form-area/form-area";
import UplodeVipImage from "@/app/_components/admin-components/uplode-vip-image/uplode-vip-image";
import CardSearchGoogle from "@/app/_components/admin-components/card-search-google/card-search-google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
*/
function AddHotel() {
  const [toogle, settoggle] = useState(true);
  const funToggle = () => {
    settoggle(toogle === true ? false : true);
  }
  /* form get data */
  const funDataHotel = () => {

  }


  /* stop from get data */



/*
  return (
    <>
      <div className="edit-hotel">
        <div className="fixed-top">
          <div className="fixed">
            <NavparSystem funtogglebarleft={funToggle} />
          </div>
        </div>
        <div className="flex">
          {
            toogle &&
            <div className="left-nav">
              <div className="fixed-left">
                <NavparLeft />

              </div>
            </div>
          }
          <div className="right-content">
            <NavparContent t1={"الفنادق"} t2={"اضافة فندق"} t3={""} />

            <div className="from-content">
              <p className="title-page">اضافة فندق جديد</p>


              <AlertError t1={"ادخل جميع الحقول"} />

              <div className="from-flex">

                <div className="left-from">

                  <div className="child-1 border-affter mypadding">
                    <div className="title">
                      <p>محتوى الفندق</p>
                    </div>
                    <label>عنون</label>
                    <br></br>
                    <input type="text" placeholder="اسم الفندق" />
                    <br></br>
                    <br></br>
                    <label>محتوى</label>
                    <br></br>
                    <FormArea />
                    <br></br>




                    <br></br>
                    <label>ًصالة عرض</label>
                    <p className="btn">+ حدد الصور</p>
                  </div>
                  <div className="child-2 border-affter mypadding">
                    <div className="title">
                      <p >سياسة الفندق</p>
                    </div>
                    <label>معيار تصنيف الفندق</label>
                    <br></br>
                    <br></br>
                    <UplodeVipImage />

                    <input type="text" placeholder="على ثبيل المثال:5" />
                    <br></br>
                    <br></br>
                    <label>سياسة</label>
                    <div className="tile-center">
                      <p>عنوان </p>
                      <p>محتوى</p>
                    </div>

                    <div className="flex-items">
                      <div className="item">
                        <input type="text" placeholder="على سبيل المثال: ما هو نوع الملابس الأكثر ملاءمة؟" />
                        <textarea placeholder="محتوى"></textarea>
                        <br></br>
                        <br></br>

                        <span><FontAwesomeIcon icon={faTrash} /></span>
                      </div>

                      <div className="item">
                        <input type="text" placeholder="على سبيل المثال: ما هو نوع الملابس الأكثر ملاءمة؟" />
                        <textarea placeholder="محتوى"></textarea>
                        <br></br>
                        <br></br>
                        <FontAwesomeIcon icon={faTrash} />
                      </div>
                    </div>



                    <div className="add-child">
                      <p onClick={funDataHotel} className="btn">+اضافة عنصر</p>

                    </div>
                  </div>
                  <div className="child-3 mypadding border-affter">
                    <div className="title">
                      <p>وقت الدخول والخروج</p>
                    </div>
                    <br></br>

                    <label>الوقت لتسجيل الوصول</label>
                    <br></br>
                    <input type="text" placeholder="على ثبيل المثال :12:00 صباحا" />
                    <br></br>
                    <br></br>

                    <label>الوقت لتسجيل الخروح</label>
                    <br></br>

                    <input type="text" placeholder="على ثبيل المثال :11:00 صباحا" />
                    <br></br>
                    <br></br>

                    <label>الحد الادنى للحجوزات المسبقة</label>
                    <br></br>
                    <input type="text" placeholder="على سبيل المثال: 3" />
                    <br></br>

                    <label className="italick">اتركه فارغًا إذا لم تكن بحاجة إلى استخدام خيار الحد الأدنى لليوم</label>
                    <br></br>
                    <br></br>

                    <label>الحد الأدنى من متطلبات الإقامة لمدة يوم</label>
                    <input type="text" placeholder="على سبيل المثال: 2" />
                    <br></br>

                    <label className="italick">اتركه فارغًا إذا لم تكن بحاجة إلى تحديد خيار الحد الأدنى للإقامة لمدة يوم</label>
                    <br></br>

                  </div>
                  <div className="child-4 mypadding border-affter">
                    <div className="title">
                      <p>التسعير</p>
                    </div>
                    <div className="box">
                      <label>سعر</label>
                      <input type="text" placeholder="ٍسعر الفندق" />
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="salry" /><label htmlFor="salry">تمكين السعر الافتراضى</label>
                      <br></br>
                      <div className="border"></div>
                      <p>رسوم الخدمة</p>
                      <input className="check-box" type="checkbox" id="salrye" /><label htmlFor="salrye">تمكين السعر الافتراضى</label>

                    </div>
                  </div>
                  <div className="child-5 mypadding border-affter">
                    <div className="title">
                      <p>المواقع</p>
                    </div>
                    <label>موقع</label>
                    <br></br>
                    <select>
                      <option>-- الرجاء التحديد --</option>
                      <option>باريس</option>
                      <option>السعودية</option>
                      <option>لندن</option>
                      <option>ماليزيا</option>

                    </select>
                    <br></br>
                    <br></br>

                    <label>العنوان الحقيقى</label>
                    <br></br>
                    <input type="text" placeholder="العنوان الحقيقى" />

                    <div className="flex">
                      <div className="left-gps">
                        <label>الاحداثيات الجغرافية</label>
                        <br></br>
                        <br></br>

                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                          width="100%"
                          height="450"
                          style={{ border: "0" }}
                          loading="lazy"
                        ></iframe>
                      </div>
                      <div className="right-gps">
                        <label>خط عرض الخريطة:</label>
                        <br></br>
                        <input type="text" />
                        <br></br>
                        <label>خط طول الخريطة :</label>
                        <br></br>
                        <input type="text" />
                        <label>تكبير الخريطة :</label>
                        <br></br>
                        <input type="text" placeholder="8" />
                      </div>
                    </div>
                  </div>
                  {false &&
                    <div className="child-6 mypadding border-affter">
                      <div className="title">
                        <p>محيط</p>
                      </div>
                      <label>تعليم</label>
                      <div className="box">
                        <div className="center">
                          <p>اسم</p>
                          <p>كحتوى</p>
                          <p>مسافة</p>
                        </div>
                        <div className="flex-items">
                          <div className="item">
                            <input type="text" placeholder="شاطئ مشمس" />
                            <br></br>
                            <textarea placeholder="محتوى"></textarea>
                            <br></br>
                            <input type="number" placeholder="مسافة" />
                            <br></br>
                            <select>
                              <option>كم</option>
                              <option>م</option>
                            </select>
                            <br></br>
                            <br></br>
                            <span><i className="fa-solid fa-trash"></i></span>
                          </div>

                        </div>
                        <div className="btn-add"><p>اضافة عنصر +</p></div>

                      </div>
                      <br></br>
                      <br></br>
                      <label>صحة</label>
                      <div className="box">
                        <div className="center">
                          <p>اسم</p>
                          <p>كحتوى</p>
                          <p>مسافة</p>
                        </div>
                        <div className="flex-items">
                          <div className="item">
                            <input type="text" placeholder="شاطئ مشمس" />
                            <br></br>
                            <textarea placeholder="محتوى"></textarea>
                            <br></br>
                            <input type="number" placeholder="مسافة" />
                            <br></br>
                            <select>
                              <option>كم</option>
                              <option>م</option>
                            </select>
                            <br></br>
                            <br></br>
                            <span><FontAwesomeIcon icon={faTrash} /></span>

                          </div>

                        </div>
                        <div className="btn-add"><p>اضافة عنصر +</p></div>
                      </div>
                      <br></br>
                      <br></br>
                      <label>مواصلات</label>
                      <div className="box">
                        <div className="center">
                          <p>اسم</p>
                          <p>كحتوى</p>
                          <p>مسافة</p>
                        </div>
                        <div className="flex-items">
                          <div className="item">
                            <input type="text" placeholder="شاطئ مشمس" />
                            <br></br>
                            <textarea placeholder="محتوى"></textarea>
                            <br></br>
                            <input type="number" placeholder="مسافة" />
                            <br></br>
                            <select>
                              <option>كم</option>
                              <option>م</option>
                            </select>
                            <br></br>
                            <br></br>
                            <span><FontAwesomeIcon icon={faTrash} /></span>
                          </div>

                        </div>
                        <div className="btn-add"><p>اضافة عنصر +</p></div>
                      </div>
                      <br></br>
                      <br></br>
                      <label>ايجار</label>
                      <div className="box">
                        <div className="center">
                          <p>اسم</p>
                          <p>كحتوى</p>
                          <p>مسافة</p>
                        </div>
                        <div className="flex-items">
                          <div className="item">
                            <input type="text" placeholder="شاطئ مشمس" />
                            <br></br>
                            <textarea placeholder="محتوى"></textarea>
                            <br></br>
                            <input type="number" placeholder="مسافة" />
                            <br></br>
                            <select>
                              <option>كم</option>
                              <option>م</option>
                            </select>
                            <br></br>
                            <br></br>
                            <span><FontAwesomeIcon icon={faTrash} /></span>
                          </div>

                        </div>
                        <div className="btn-add"><p>اضافة عنصر +</p></div>
                      </div>

                    </div>
                  }
                  <CardSearchGoogle />
                </div>
                <div className="right-from">
                  <div className="hotel-user mypadding border-affter">
                    <div className="title">
                      <p>اعداد الؤلف</p>
                    </div>
                    <div>
                      <select>
                        <option>--- اختر المستخدم ---</option>
                      </select>
                    </div>
                  </div>
                  <div className="card-space mypadding border-affter">
                    <div className="title">
                      <p>التوفر</p>
                    </div>
                    <div className="flex-t">
                      <label>فندق مميز</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="star" />
                      <label htmlFor="star">تمكين المميز</label>
                    </div>
                  </div>
                  <div className="checks-type-flex mypadding border-affter">
                    <div className="title">
                      <p>السمة: نوع العقار</p>
                    </div>
                    <div className="scroll">
                      <input className="check-box" type="checkbox" id="check-1" /><label htmlFor="check-1">شقق سكنية</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-2" /><label htmlFor="check-2">الفنادق</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-3" /><label htmlFor="check-3">الاقامة مع العائلات</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-4" /><label htmlFor="check-4">فلل</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-5" /><label htmlFor="check-5">قوارب</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-6" /><label htmlFor="check-6">الرحلات البحرية</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-7" /><label htmlFor="check-7">منازل الاجازة</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-8" /><label htmlFor="check-8">المنتجعات</label>
                    </div>
                  </div>

                  <div className="checks-type-flex mypadding border-affter">
                    <div className="title">
                      <p>السمة: المرافق</p>
                    </div>
                    <div className="scroll">
                      <input className="check-box" type="checkbox" id="check-11" /><label htmlFor="check-11">صرخة يقطة</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-22" /><label htmlFor="check-22">تاجير السيارات</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-33" /><label htmlFor="check-33">تاجير الدراجات</label>
                      <br></br>
                      <br></br>
                      <input className="check-box" type="checkbox" id="check-44" /><label htmlFor="check-44">تلفزيون مسطح</label>
                      <br></br>
                      <br></br>
                      <input className="check-box" type="checkbox" id="check-55" /><label htmlFor="check-55">الغسيل والتنظيف الجاف</label>
                      <br></br>
                      <br></br>
                      <input className="check-box" type="checkbox" id="check-66" /><label htmlFor="check-66">الانترنت واى فاى</label>
                      <br></br>
                      <br></br>
                      <input className="check-box" type="checkbox" id="check-77" /><label htmlFor="check-77">القهوة والشاى</label>
                      <br></br>
                    </div>
                  </div>


                  <div className="checks-type-flex  mypadding border-affter">
                    <div className="title">
                      <p>السمة: خدمة الفندق</p>
                    </div>
                    <div className="scroll">
                      <input className="check-box" type="checkbox" id="check-111" /><label htmlFor="check-111">هافانا لونى بار</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-222" /><label htmlFor="check-222">مطعم فيستا</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-333" /><label htmlFor="check-333">خدمة النقل الفندقية</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-444" /><label htmlFor="check-444">ايداع مجانى للامتعة</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-555" /><label htmlFor="check-555">خدمات الغسيل</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-666" /><label htmlFor="check-666">الحيوانات الاليفة ترحيب</label>
                      <br></br>
                      <br></br>

                      <input className="check-box" type="checkbox" id="check-777" /><label htmlFor="check-777">التذاكر</label>
                      <br></br>
                    </div>
                  </div>


                  <div className="uplode-vip-image">
                    <div className="ublode-avatar mypadding border-affter">
                      <div className="title"><p>صورة مميزة</p></div>
                      <div className="control-size">
                        <UplodeVipImage />

                      </div>
                    </div>

                  </div>



                </div>


              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
*/
}
export default AddHotel;