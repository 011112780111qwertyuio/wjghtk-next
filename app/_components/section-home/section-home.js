"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import './section-home.scss';
import TableSection from "../table-section/table-section";
import { useTranslation } from 'react-i18next'
import '../../../i18n';
function SectionHome({ dataimages, typePage, location, typeTour, dataTime }) {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % dataimages.length);
    }, 5000); // تغيير الصورة كل 3 ثوانٍ
    // تنظيف التأثير عند إلغاء التكوين
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="section-home">

      <div className="section-image">
        <Image width={1000} priority height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src={`/images/alboum/${dataimages[currentIndex]}`} alt="" />
      </div>
      <div className="content">

        <div className="content-section">
          <div className="ditls">
            {typePage === "tours" &&
              <>
                <p style={{ textAlign: "center" }} className="title">{t('section_home_title_tours')}</p>
                <p style={{ textAlign: "center" }} className="sub-title">{t('section_home_subtitle_tours')}</p>

              </>
            }

            {typePage === "layout" &&
              <>
                <p className="title">{t('section_home_title_home')}</p>
                <p className="sub-title">{t('section_home_subtitle_home')}</p>

              </>
            }
          </div>

          <div className="my-table">
            <TableSection location={location} typeTour={typeTour} dataTime={dataTime} />

          </div>
        </div>
      </div>


    </div>
  );

}
export default React.memo(SectionHome);