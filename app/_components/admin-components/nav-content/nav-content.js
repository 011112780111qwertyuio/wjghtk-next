import React from "react";
import './nav-content.scss';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
function NavContent({ t1, t2, t3 }) {

  return (
    <div className="nav-content">
      <div className="flex-nav">
        <div className="left">
          <Link href="/pages/admin-pages/dathboard/"><span><FontAwesomeIcon icon={faHouseChimney} /></span>لوحة القيادة</Link>

          {t1 !== "" &&
            <>
              <span>/</span>
              <Link href="" >{t1}</Link>

            </>
          }
          {
            t2 !== "" &&
            <>
              <span>/</span>
              <p>{t2}</p>
            </>
          }
          {
            t3 !== "" &&
            <>
              <span>/</span>
              <p>{t3}</p>
            </>
          }

        </div>
      </div>
    </div>
  );

}
export default React.memo(NavContent);