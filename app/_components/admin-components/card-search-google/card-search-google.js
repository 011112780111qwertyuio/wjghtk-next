import React from "react";
import './card-search-google.scss';
import Link from "next/link";
function CardSearchGoogle({mylink}) {
  return (
    <div className="card-search-google">
      <div className="card-search">
        <div className="flex border-affter">
          <p>محرك البحث</p>
          <Link href="#">يحرر</Link>
        </div>
        <div className="card">
          <div className="avatar">
            <img src="/images/logo.png" alt="" />
          </div>
          <div className="cont">
            <p>الحجز الاساسى</p>
            <span>{mylink}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardSearchGoogle;