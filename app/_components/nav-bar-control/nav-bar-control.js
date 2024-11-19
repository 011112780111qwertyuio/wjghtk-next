"use server";
import './nav-bar-control.scss';
import Link from "next/link";
import AuthUser from "./authUser";
import { CheckApiTokenServer } from "@/app/_functions/check-api-token-server";
import LoadingBtn from "../loading-btn/loading-btn";
import { GetCountryServer } from '@/app/_functions/getCountry-server';
const NavBarControl = async () => {
  const nameCountre = await GetCountryServer();
  const promiseB = await CheckApiTokenServer();
  return (
    <div dir="rtl" className="nav-control">
      <div className="content flex">
        <div className="flex-left">
          <Link className="face" href="">
            f
          </Link>
          <Link className="in" href="">in</Link>
          <Link className="g" href="">g+</Link>
          <Link href="">ahmedpahr9@gmail.com</Link>
        </div>
        <>
          <div className="flex-right">
            <div className="btn">
              <Link href="#">
                {nameCountre}
              </Link>
            </div>
            <div className="btn floag">
              <img src={nameCountre === "EGP" ? "/images/egypt.webp" : "/images/pngwing.png"} alt="flag" />
            </div>
            <div className="bt-img btn">
              <Link href="#">عربى</Link>
            </div>
            {promiseB === null ?
              <div className="padding-load">
                <LoadingBtn />
              </div> :
              <AuthUser promiseB={promiseB?.data} />
            }
          </div>
        </>
      </div>
    </div>
  );
}
export default NavBarControl;



