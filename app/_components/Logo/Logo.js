
import React from "react";
import './style-logo.scss';
import Image from "next/image";
import Link from "next/link";
function Logo() {
  return (
    <Link dir="rtl" href="/" className="flex-logo">
      <div className="logo">
        <Image width="0" height="0" sizes="100vw" src="/images/logo.png" className="img-log" alt="" />
      </div>
      <div className="column">
        <p className="title">WJHTK</p>
        <p className="sub-title">COM.</p>
      </div>
    </Link>
  );

}
export default Logo;