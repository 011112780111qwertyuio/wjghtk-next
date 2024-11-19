"use client";
import React, { useEffect, useState } from "react";
import './section-alboum-main.scss';
import Link from "next/link";
import Image from "next/image";
function SectionAlboumMain({ title, subitel }) {
  const dataimages = [
    {
      myimg: "/images/alboum/7.jpg",
    },
    {
      myimg: "/images/alboum/6.jpg",
    },
    {
      myimg: "/images/alboum/5.jpg",
    },
    {
      myimg: "/images/alboum/4.jpg",
    },
    {
      myimg: "/images/alboum/3.jpg",
    },
    {
      myimg: "/images/alboum/2.jpg",
    },
    {
      myimg: "/images/alboum/1.jpg",
    },
    {
      myimg: "/images/alboum/0.jpg",
    },

  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % dataimages.length);
    }, 5000); // تغيير الصورة كل 3 ثوانٍ
    // تنظيف التأثير عند إلغاء التكوين
    return () => clearInterval(intervalId);
  }, []);





  return (
    <div className="section-alboum-main head">
      <Image width={1000} priority height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src={dataimages[currentIndex].myimg} alt="" />
      <div className="flex content">
        <p >{title}</p>
        <div className="flexx">
          <Link href="/">الرئيسية</Link>
          <span>/</span>
          <Link href="/">{subitel}</Link>
        </div>
      </div>
    </div>
  );
}
export default React.memo(SectionAlboumMain);