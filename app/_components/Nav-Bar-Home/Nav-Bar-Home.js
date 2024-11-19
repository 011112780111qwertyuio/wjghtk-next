"use server";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";
import './style-nav-home.scss';
import Logo from "../Logo/Logo";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Items from "./items";
import { CheckApiTokenServer } from '@/app/_functions/check-api-token-server';
import { GetCountryServer } from '@/app/_functions/getCountry-server';
const NavBarHome = async ({ typepage }) => {
  const countre = await GetCountryServer();
  const promiseB = await CheckApiTokenServer();


  return (
    <div className="myhead">
      <div dir="rtl" className="content nav-bar-home">
        {/* larg screen */}
        <div className="larg-screen">
          <div className="left">
            <Logo />
          </div>
          <div className="right">
            <div className="button">
              <div className="flex-title">
                <Link href="/" style={{ color: typepage === "home" ? 'red' : 'black' }} className="name">الرئيسية</Link>
                <FontAwesomeIcon style={{ color: typepage === "home" ? 'red' : 'black' }} icon={faAngleDown} />
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>

            </div>
            <div className="button">
              <div className="flex-title">
                <Link href="/pages/tours?page=1&Ranking=desc&According=dataTime" style={{ color: typepage === "tours" ? 'red' : 'black' }} className="name">الرحلات</Link>
                <FontAwesomeIcon style={{ color: typepage === "tours" ? 'red' : 'black' }} icon={faAngleDown} />
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>
            </div>
            <div className="button">
              <div className="flex-title">
                <Link href="" className="name">الصفحات</Link>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home</p>
                </div>
                <div>
                  <p className="active-title">tours</p>
                </div>
                <div>
                  <p className="active-title">Magazines</p>
                </div>



              </div>

            </div>
            <div className="button">
              <div className="flex-title">
                <Link style={{ color: typepage === "destination" ? 'red' : 'black' }} href="/pages/destination/" className="name">وجهة</Link>
                <FontAwesomeIcon style={{ color: typepage === "destination" ? 'red' : 'black' }} icon={faAngleDown} />
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>

            </div>
            <div className="button">
              <div className="flex-title">
                <Link style={{ color: typepage === "Magazines" ? 'red' : 'black' }} href="/pages/magazines?page=1" className="name">مجلات</Link>
                <FontAwesomeIcon style={{ color: typepage === "Magazines" ? 'red' : 'black' }} icon={faAngleDown} />
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>

            </div>
            <div className="button">
              <div className="flex-title">
                <Link style={{ color: typepage === "concat" ? 'red' : 'black' }} href="/pages/contact/" className="name">تواصل</Link>
                <FontAwesomeIcon style={{ color: typepage === "concat" ? 'red' : 'black' }} icon={faAngleDown} />
              </div>
              <div className="pop-menue">

                <div>
                  <p className="active-title">home page</p>
                </div>
                <div>
                  <p className="active-title">home page v2</p>
                </div>
                <div>
                  <p className="active-title">home hotel</p>
                </div>
                <div>
                  <p className="active-title">home tour agency</p>
                </div>
                <div>
                  <p className="active-title">home tour</p>
                </div>
                <div>
                  <p className="active-title">home space</p>
                </div>


              </div>

            </div>
          </div>
        </div>
        {/* stop larg screen */}
        {/* start mobile screen */}
        <div className="mobile-screen">
          <div className="left">
            <Logo />
          </div>
          <Items promiseB={promiseB?.data} countre={countre} />
        </div>
        {/* stop mobile screen */}

      </div>
    </div>
  )
}
export default NavBarHome;