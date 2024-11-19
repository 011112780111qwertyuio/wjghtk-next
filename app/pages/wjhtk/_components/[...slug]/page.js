"use server";
import './style.scss';
import axios from 'axios';
import Link from 'next/link';
import ShowComment from '../_components/show-comment/_show-comment';
import SendComment from '../_components/send-comment/_send-comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowLeft, faCity, faPhone } from '@fortawesome/free-solid-svg-icons';
import NavBarControl from '@/app/_components/nav-bar-control/nav-bar-control';
import NavBarHome from '@/app/_components/Nav-Bar-Home/Nav-Bar-Home';
import SectionAlboumMain from '@/app/_components/section-alboum-main/section-alboum-main';
import FotterHome from '@/app/_components/fotter-home/fotter-home';
import { counterSlice } from '../../../redux/counterSlice';
const local = counterSlice.getInitialState().nameLocal;
import { CheckApiTokenServer } from '@/app/_functions/check-api-token-server';
import { cookies } from "next/headers";
import ShowToicp from '../_components/share-Topic/show-topic';



const Wjhtk = async (context) => {
  let valueCookie = cookies().get('token_user_server');
  let error = false;
  const promiseB = await CheckApiTokenServer();
  let loading = true;
  const idTopic = Number(context.params.slug[3]) || 1;
  let alldata = null;
  const url = local + "/" + process.env.API_SHOWIDNEW;
  const obj = new FormData();
  obj.append("idTopick", idTopic);
  await axios.post(url, obj).then(async (res) => {
    if (res?.data?.state === "okAllData") {
      alldata = await res.data.mydata;
      loading = false;
    }
    else {
      alldata = null;
      error = true;
    }
  })

  /* ----------- data_CATEGORIES ------------- */
  const url_2 = local + "/" + process.env.API_SHOWTRIPCATEGORIES;
  let data_CATEGORIES = [];
  await axios.post(url_2).then((res) => {
    if (res?.data === "not-foune") {
      data_CATEGORIES = [];
      error = true;
    }
    else {
      data_CATEGORIES = res.data;

    }
  })
  loading = false;

  return (
    <div className="news-wghtk head">
      <NavBarControl />
      <NavBarHome />
      <SectionAlboumMain title={alldata?.title_Topics?.length > 40 ? alldata?.title_Topics.slice(0, 40) + ".." : alldata?.title_Topics} subitel={"مجلات"} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {error === false ?
        <div className='flex-between content'>
          {/* left content */}
          <div dir='rtl' className="left-content">
            {loading === true ?
              <div className="view-travel">
                <div className="img">
                  {/* تظهر خلفية تحميل أثناء انتظار تحميل الصورة */}
                  <div className="loading-skeleton2"></div>


                </div>
              </div>
              :
              <div className="view-travel">
                <div className="img">
                  <img src={`${local + "/" + process.env.API_PATHIMAGES + "/" + alldata?.avatar_Prim}`} alt="view-travel" />
                </div>
                <div className="row">
                  <div className="btn">
                    <FontAwesomeIcon icon={faUser} />
                    <span>مستخدم</span>
                  </div>
                  <div className="btn">
                    <FontAwesomeIcon icon={faCity} />
                    <span>{alldata?.category}</span>
                  </div>
                </div>
              </div>}
            {loading === false ?
              <div className="prg">
                <p className="my-Title">{alldata?.title_Topics}</p>
                <p className="sup-tile">{alldata?.content_Topics}</p>
              </div>
              :
              <>
                <div className="loading-text skeleton-title"></div>
                <div className="loading-text skeleton-des"></div>
              </>
            }
            <br></br>
            <br></br>
            <ShowComment token={!valueCookie || !valueCookie?.value ? "dsdsd" : valueCookie?.value} promiseB={promiseB?.data} idTopic={idTopic} local={local} />
            <br></br>
            <br></br>
            <SendComment logded={promiseB?.data?.stateUser} local={local} Token={!valueCookie || !valueCookie?.value ? "dsdsd" : valueCookie?.value} idTopic={idTopic} />
          </div>
          {/* stop content */}
          {/* rihgt bar */}
          <div dir='rtl' className="right-bar">
            {/* start All Categories */}
            <div className='all-categories'>
              <div className='top categories'>
                <p>جميع الفئات</p>
              </div>
              <div className='items'>
                {
                  data_CATEGORIES?.map((item, index) => (
                    <div key={index} className='between-item'>
                      <p>{item.name.slice(0, 30)}</p>
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </div>
                  ))
                }
              </div>
            </div>
            {/* stop All Categories */}
            {/* start Recent Posts */}
            <ShowToicp local={local} />
            {/* stop Recent Posts */}
            {/* start tags */}
            <div className='tags'>
              <div className='top'>
                <p>العلامات</p>
              </div>
              <div className='items'>
                {JSON.parse(alldata?.tags_Topics).map((item, index) => (
                  <p key={index}>{item?.myval.slice(0, 30)}</p>
                ))}
              </div>
            </div>
            {/* stop tags */}
            {/* start travel-adsens */}
            <div className='travel-adsens'>
              <Link href='#'>
                <div className='items-travel-adsens'>
                  <div className='card-tour'>
                    <div className='img-view'>
                      <img src="/images/pramds.jfif" alt='view-tour' />
                    </div>
                    <div className='between-image'>
                      <div className='top'>
                        <p>3 رحلات</p>
                      </div>
                      <div className='bottom'>
                        <p className='my-tile'>استمتع</p>
                        <p className='my-sub-tile'>بالسفر إلى أجمل مدن مصر </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* stop travel-adsens */}
            {/* start content */}
            <div className='card-conent'>
              <div className='img-view'>
                <img src="/images/pramds.jfif" alt='view-tour' />
              </div>
              <div className='flex-view'>
                <div className='d-1'>
                  <FontAwesomeIcon icon={faPhone} />
                  <p>عملية الحجز سريعة</p>
                </div>
                <div className='d-2'></div>
                <div className='d-3'>
                  <p className='sup'>التحدث الى خبير</p>
                  <p className='prg'>+ 1- (246) 333-0089</p>
                </div>
              </div>
            </div>
            {/* stop content */}
          </div>
          {/* stop right bar */}
        </div>
        :
        <div className='error-div'>
          <p>الصفحة غير متوفرة</p>
        </div>
      }
      <br></br>
      <br></br>
      <FotterHome />
    </div>
  );
}
export default Wjhtk;
