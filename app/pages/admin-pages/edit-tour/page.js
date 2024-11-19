"use client";
import React, { useState } from "react";
import './edit-tour.scss';
/*
import Navpar from "@/app/_components/admin-components/navpar/navpar";
import NavparLeft from "@/app/_components/admin-components/modal-left-bar/modal-left-bar";
import NavparContnet from "@/app/_components/admin-components/nav-content/nav-content";
import FromArea from "@/app/_components/admin-components/form-area/form-area";
import UplodeVipImage from "@/app/_components/admin-components/uplode-vip-image/uplode-vip-image";
import BtnAllImages from "@/app/_components/admin-components/btn-all-images/btn-all-images";
import SectionSearch from "@/app/_components/admin-components/card-search-google/card-search-google";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
*/
function EditTour() {
  const [toggle, setToogle] = useState(true);
  const funToggle = () => {
    setToogle(toggle === true ? false : true);
  }
  const [toggleInedx, setToggleIndex] = useState("from-general");
  const funTogleIndex = (index) => {
    setToggleIndex(index)
  }
  /*
  return (
    <div className="edit-tour">
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
            <div className="betwen">
              <div>
                <p className="title">تحرير: جولة نهرية على نهر السين</p>
                <span>الرابط الثابت</span>
                <Link href="/AdministratorControlPanelEditTour">http://localhost:3000/AdministratorControlPanelEditTour</Link>
              </div>
              <div className="btn">
              <Link href="/opencard-tour-page" target="_blank">عرض الجولة</Link>
              </div>
            </div>
            <div className="from-content">

              <div className="left-conten-bar">

                <p><span><i className="fa-solid fa-gear"></i></span>معلومات الجولة</p>
                <div onClick={() => { funTogleIndex("from-general") }} className={`${toggleInedx === "from-general" && 'active-left'}`}>
                  <span>عام</span>
                </div>
                <div className={`${toggleInedx === "from-gps" && 'active-left'}`} onClick={() => { funTogleIndex("from-gps") }}>
                  <span>موقع</span>
                </div>
                <div className={`${toggleInedx === "from-Pricing" && 'active-left'}`} onClick={() => { funTogleIndex("from-Pricing") }}>
                  <span>التسعير</span>
                </div>
                <div onClick={() => { funTogleIndex("from-Availability") }} className={`${toggleInedx === "from-Availability" && 'active-left'}`}>
                  <span>التوفر</span>
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
                      <input type="text" placeholder="عنوان" />
                      <br></br>
                      <br></br>
                      <label>محتوى</label>
                      <br></br>
                      <FromArea />
                      <br></br>
                      <label>فئة</label>
                      <br></br>
                      <select>
                        <option>--- الرجاء التحديد ---</option>
                        <option>رحلات المدينة</option>
                        <option>السياحة البيئية</option>
                        <option>جولة مرافقة</option>
                        <option> شرم الشبخ</option>
                      </select>
                      <br></br>
                      <br></br>
                      <label>فيديو يوتيوب</label>
                      <br></br>
                      <input type="text" placeholder="رابط الفيديو على اليوتيوب" />
                      <br></br>
                      <br></br>
                      <label>الحد الادنى للحجوزات المسبقة</label>
                      <br></br>
                      <input type="text" placeholder="على ثبيل المثال:3" />
                      <br></br>
                      <label>اتركه فارغًا إذا لم تكن بحاجة إلى استخدام خيار الحد الأدنى لليوم</label>
                      <br></br>
                      <br></br>
                      <label>مدة</label>
                      <br></br>
                      <input type="text" placeholder="مدة" />
                      <label>ساعات</label>
                      <br></br>
                      <br></br>
                      <label>جولة مين الناس</label>
                      <br></br>
                      <input type="text" placeholder="جولة مين الناس" />
                      <br></br>
                      <br></br>
                      <label>جولة ماكس الناس</label>
                      <br></br>
                      <input type="text" placeholder="جولة ماكس الناس" />
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
                          <input type="text" placeholder="على سبيل المثال:دليل متخصص ثنائى اللغة" />
                          <br></br>
                          <br></br>

                          <textarea>

                          </textarea>


                          <p className="btn-delete"><span><i className="fa-solid fa-trash"></i></span></p>

                        </div>
                        <div className="btn-add">
                          <p>+اضافة عنصر</p>
                        </div>






                      </div>
                      <label>يشمل</label>
                      <br></br>
                      <div className="create-box-add">
                        <div className="box-tile">
                          <p>عنوان</p>
                        </div>
                        <div className="create-box">
                          <input type="text" placeholder="على سبيل المثال:دليل متخصص ثنائى اللغة" />
                          <br></br>



                          <p className="btn-delete"><span><i className="fa-solid fa-trash"></i></span></p>

                        </div>

                        <div className="btn-add">
                          <p>+اضافة عنصر</p>
                        </div>

                      </div>
                      <label>استعاد</label>
                      <br></br>
                      <br></br>
                      <div className="create-box-add">
                        <div className="box-tile">
                          <p>عنوان</p>
                        </div>
                        <div className="create-box">
                          <input type="text" placeholder="على سبيل المثال:دليل متخصص ثنائى اللغة" />
                          <br></br>



                          <p className="btn-delete"><span><i className="fa-solid fa-trash"></i></span></p>

                        </div>

                        <div className="btn-add">
                          <p>+اضافة عنصر</p>
                        </div>

                      </div>
                      <br></br>
                      <label>مسار الرحلة</label>
                      <br></br>
                      <div className="create-box-add">
                        <div className="box-tile-column">
                          <p>صورة</p>
                          <p>العنوان - وصف</p>
                          <p>محتوى</p>
                        </div>
                        <div className="create-box">
                          <div className="my-img-vip">
                            <UplodeVipImage />
                          </div>
                          <input type="text" placeholder="العنوان:اليوم الاول" />
                          <br></br>
                          <input type="text" placeholder="مدينة اتش سى ام :وصف" />
                          <br></br>
                          <br></br>

                          <textarea>

                          </textarea>


                          <p className="btn-delete"><span><i className="fa-solid fa-trash"></i></span></p>

                        </div>
                        <div className="btn-add">
                          <p>+اضافة عنصر</p>
                        </div>






                      </div>
                      <label>صورة بانر</label>
                      <br></br>
                      <div className="size-images">
                        <UplodeVipImage />
                      </div>
                      <br></br>

                      صالة العرض
                      <br></br>
                      <br></br>

                      <BtnAllImages />
                    </div>

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


                          <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash}/></span></p>

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


                          <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash}/></span></p>

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


                          <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash}/></span></p>

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


                          <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash}/></span></p>

                        </div>
                        <div className="btn-add">
                          <p>+اضافة عنصر</p>
                        </div>






                      </div>
                    </div>


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
                    <select>
                      <option>-- الرجاء التحديد --</option>
                      <option>--  باريس --</option>
                      <option>-- المانيا  --</option>
                      <option>--  مصر --</option>




                    </select>
                    <br></br>
                    <br></br>
                    <label>عنوان الجولة الحقيقية</label>
                    <br></br>
                    <input type="text" placeholder="عنوان الجولة الحقيقية" />
                    <br></br>
                    <br></br>
                    <label>الاحداثيات الجغرافية</label>
                    <br></br>
                    <div>gps</div>
                    <br></br>
                    <label>خط عرض الخريطة</label>
                    <br></br>
                    <input type="text" />
                    <br></br>
                    <label>خط طول الخريطة</label>
                    <br></br>
                    <input type="text" />
                    <br></br>
                    <label>تكبير الخريطة</label>
                    <br></br>
                    <input type="text" />
                  </div>
                }

                {
                  toggleInedx === "from-state" &&
                  <div className="from-state">
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
                      <input type="checkbox" id="ch" />
                      <label htmlFor="ch">تمكين المميز</label>
                      <br></br>
                      <br></br>
                      <label>الحالة الافتراضية</label>
                      <br></br>
                      <select>
                        <option>متاح دائما</option>
                        <option>متاح فقط فى تواريخ محددة</option>
                      </select>
                    </div>
                    <div className="child-3 child-style ">

                      <div className="my-tile">
                        <p>السمة:انماط السفر</p>
                      </div>
                      <div className="padding-content">
                        <input type="checkbox" id="c1" /><label htmlFor="c1">ثقافية</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="c2" /><label htmlFor="c2">الطبيعة والمغامرة</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="c3" /><label htmlFor="c3">البحرية</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="c4" /><label htmlFor="c4">مستقل</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="c5" /><label htmlFor="c5">انشطة</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="c6" /><label htmlFor="c6">المهرجانات والفعاليات</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="c7" /><label htmlFor="c7">مصلحة خاصة</label>

                      </div>
                    </div>
                    <div className="child-3 child-style ">

                      <div className="my-tile">
                        <p>السمة: المرافق</p>
                      </div>
                      <div className="padding-content">
                        <input type="checkbox" id="d1" /><label htmlFor="d1">واى فاى</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="d2" /><label htmlFor="d2">صالة الالعاب الرياضية</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="d3" /><label htmlFor="d3">الدراجة الجبيلة</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="d4" /><label htmlFor="d4">مكتب الاقمار الصناعية</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="d5" /><label htmlFor="d5">صالة الموظفين</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="d6" /><label htmlFor="d6">اقفاص الجولف</label>
                        <br></br>
                        <br></br>

                        <input type="checkbox" id="d7" /><label htmlFor="d7">غرفة التمارين الرياضية</label>

                      </div>
                    </div>
                    <div className="child-4 child-style ">
                      <div className="my-tile">
                        <p>صورة مميزة</p>
                      </div>
                      <div className="size-image">
                        <UplodeVipImage />

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
                      <input type="text" placeholder="1549:00" />
                      <br></br>
                      <br></br>

                      <label>سعر البيع</label>
                      <br></br>
                      <input type="text" placeholder="1549.00" />
                      <br></br>
                      <br></br>

                      <label>
                        إذا كان السعر العادي أقل من الخصم، فسوف يظهر السعر العادي
                      </label>
                      <br></br>
                      <br></br>


                      <hr></hr>
                      <br></br>

                      <p>انواع الاشخاص</p>
                      <br></br>
                      <input type="checkbox" id="iii" /><label htmlFor="iii">تمكين انواع الاشخاص</label>
                      <br></br>
                      <br></br>
                      <label>انواع الاشخاص</label>
                      <br></br>
                      <div className="create-box-add">
                        <div className="box-tile-column">
                          <p>نوع الشخص</p>
                          <p>دقيقة</p>
                          <p>الاعلى</p>
                          <p>ٍسعر</p>
                        </div>
                        <div className="create-box">
                          <p className="lang">انجليزى</p>
                          <input type="text" placeholder="الكبار:على ثبيل المثال " />
                          <br></br>
                          <input type="text" placeholder="وصف" />
                          <br></br>
                          <br></br>
                          <hr></hr>
                          <p className="lang">اليبانية</p>
                          <input type="text" placeholder="الكبار:على ثبيل المثال " />
                          <br></br>
                          <input type="text" placeholder="وصف" />
                          <br></br>
                          <br></br>
                          <hr></hr>
                          <p className="lang">مصرى</p>
                          <input type="text" placeholder="الكبار:على ثبيل المثال " />
                          <br></br>
                          <input type="text" placeholder="وصف" />
                          <br></br>
                          <br></br>
                          <hr></hr>
                          <p className="lang">رومانا</p>
                          <input type="text" placeholder="الكبار:على ثبيل المثال " />
                          <br></br>
                          <input type="text" placeholder="وصف" />
                          <br></br>
                          <br></br>
                          <br></br>
                          <br></br>
                          <input type="number" placeholder="الحد الادنى لكل حجز" />
                          <br></br>
                          <input type="number" placeholder="الحد الاقصى لكل حجز" />
                          <br></br>
                          <input type="text" placeholder="لكل 1 عنصر" />

                          <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash}/></span></p>

                        </div>
                        <div className="btn-add">
                          <p>+اضافة عنصر</p>
                        </div>
                      </div>
                      <label>سعر اضافى</label>
                      <br></br>
                      <br></br>
                      <input type="checkbox" id="sale" /><label htmlFor="sale">تمكين السعر الاضافى</label>
                      <br></br>
                      <br></br>
                      <label>سعر اضافى</label>
                      <br></br>
                      <div className="create-box-add">
                        <div className="box-tile-column">
                          <p>اسم</p>
                          <p>سعر</p>
                          <p>يكتب</p>
                        </div>
                        <div className="create-box">
                          <p className="lang">انجليزى</p>
                          <input type="text" placeholder="اسم السعر الاضافى" />
                          <br></br>
                          <br></br>
                          <hr></hr>
                          <p className="lang">اليبانية</p>
                          <input type="text" placeholder="اسم السعر الاضافى" />
                          <br></br>
                          <br></br>
                          <hr></hr>
                          <p className="lang">مصرى</p>
                          <input type="text" placeholder="اسم السعر الاضافى" />
                          <br></br>
                          <br></br>
                          <hr></hr>
                          <p className="lang">رومانا</p>
                          <br></br>
                          <input type="text" placeholder="اسم السعر الاضافى" />
                          <br></br>
                          <br></br>
                          <br></br>
                          <input type="text" />
                          <br></br>
                          <select>
                            <option>مرة واحدة</option>
                            <option>فى الساعة</option>
                            <option>فى اليوم</option>
                          </select>
                          <br></br>
                          <br></br>

                          <input type="checkbox" id="ok" /><label htmlFor="ok">السعر للشخص الواحد</label>
                          <br></br>

                          <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash}/></span></p>

                        </div>
                        <div className="btn-add">
                          <p>+اضافة عنصر</p>
                        </div>
                      </div>
                      <br></br>
                      <label>الخصم حسب عدد الاشخاص</label>
                      <br></br>
                      <div className="create-box-add">
                        <div className="box-tile-column">
                          <p>لا من الناس</p>
                          <p>نخفيض</p>
                          <p>يكتب</p>
                        </div>
                        <div className="create-box">
                          <input type="number" placeholder="من" />
                          <br></br>
                          <br></br>
                          <input type="number" placeholder="ل" />
                          <br></br>
                          <br></br>
                          <input type="number" />
                          <br></br>
                          <br></br>
                          <select>
                            <option>مثبت</option>
                            <option>النسبة مئوية</option>
                          </select>


                          <p className="btn-delete"><span><FontAwesomeIcon icon={faTrash}/></span></p>

                        </div>
                        <div className="btn-add">
                          <p>+اضافة عنصر</p>
                        </div>






                      </div>
                      <br></br>
                      <br></br>
                      <label>رسوم الخدمة</label>
                      <br></br>
                      <input type="checkbox" id="p" /><label htmlFor="p">تمكين رسوم الخدمة</label>

                    </div>



                  </div>
                }
                {
                  toggleInedx === "from-search" &&
                  <div className="from-search">
                    <SectionSearch />
                  </div>
                }
                {toggleInedx === "from-Availability" &&

                  <div className="child-3 child-style ">

                    <div className="my-tile">
                      <p>التوفر</p>
                    </div>
                    <label>مواعيد ثابتة</label>
                    <br></br>
                    <br></br>

                    <input type="checkbox" id="id-time" /><label htmlFor="id-time">تمكين التاريخ الثابت</label>
                    <br></br>
                    <br></br>
                    <label>ساعة مفتوحة</label>
                    <br></br>
                    <br></br>

                    <input type="checkbox" id="id-time-2" /><label htmlFor="id-time-2">تمكين ساعات العمل</label>

                  </div>
                }




                <div className="btn-save">
                  <p>حفظ التغيرات</p>
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
export default EditTour;