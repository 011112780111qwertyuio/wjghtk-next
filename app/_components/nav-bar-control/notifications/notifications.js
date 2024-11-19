"use client";
import React from "react";
import './notifications.scss';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Notifications() {
  const [toggle, setToggle] = useState(false);
  const funToggle = (nameToggle) => {
    setToggle(toggle === false ? nameToggle : false);
  }
  return (
    <div className="sub-menue-nav-control">
      <div onClick={() => { funToggle("navigation") }} className="btn" >
        <span><FontAwesomeIcon icon={faBell} /></span>
      </div>
      <p className="abos">10+</p>
      {toggle === "navigation" &&

        <div className="sub-menue-nav-control">
          <div className="top">
            <p>notifications(34)</p>
            <Link href="#">mark all as read</Link>
          </div>

          <div className="scroll-item">
            <div className="item">
              <div className="avatar">
                <Image width={1000} height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src="/images/myuser.png" alt="" />
              </div>
              <div className="content-logs">
                <p>fdfsdfsdfsdfdfsdfs</p>
                <span>12 hours 41 minutes 10 seconds</span>
              </div>
            </div>
            <div className="item">
              <div className="avatar">
                <Image width={1000} height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src="/images/myuser.png" alt="" />
              </div>
              <div className="content-logs">
                <p>yassen fathe</p>
                <span>12 hours 41 minutes 10 seconds</span>
              </div>
            </div>

          </div>

        </div>
      }
    </div>
  );
}

export default React.memo(Notifications);