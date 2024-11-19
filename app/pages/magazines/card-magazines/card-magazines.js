import './card-magazines.scss';
import Link from 'next/link';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
const Card = async ({ data, local }) => {
  const monthsOfYear = [
    "يناير", "فبراير", "مارس", "أبريل",
    "مايو", "يونيو", "يوليو", "أغسطس",
    "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
  ];


  const countComment = async (id) => {
    let count = 0;
    const url_2 = local + "/" + process.env.API_COUNTCOMMENTTOPIC;
    const obj_2 = new FormData();
    obj_2.append("idTopic", id);
    await axios.post(url_2, obj_2).then(async (res) => {
      count = await res?.data?.data.length > 100 ? 100 + "+" : res?.data?.data.length;
    })
    return " " + count + " ";
  }



  return (
    <div dir='rtl' className="card-magazines">
      <Link href={`/pages/wjhtk?title?=&${data?.title_Topics}&uid=${data?.ID_Topics}`}>
        <div className="view-card">
          <img src={local + "/" + process.env.API_PATHIMAGES + "/" + data?.avatar_Prim} alt="" />
          <div className="title-top">
            <p>{new Date(data?.myDT).getDay()}</p>
            <span>{monthsOfYear[new Date(data?.myDT).getMonth() + 1]}</span>
          </div>
          <div className="btn-bottom">
            <p>{data?.category}</p>
          </div>
        </div>
      </Link>
      <div className="content-card">
        <div className="flex">
          <div>
            <span><FontAwesomeIcon icon={faComment} /></span>
            <label>{countComment(data?.ID_Topics)} تعليقات</label>
          </div>
          <div>
            <span><FontAwesomeIcon icon={faUser} /></span>
            <label>{data?.name_user_Topics}</label>
          </div>
        </div>
        <p className="title">
          <Link className='title' href={`/pages/wjhtk?title?=&${data?.title_Topics}&uid=${data?.ID_Topics}`}>{data?.title_Topics?.slice(0, 70)}</Link>
        </p>
        <p className="sub-content">{
          data?.content_Topics?.slice(0, 200)
        } ...</p>
        <div className="flex-get">
          <p><Link href={`/pages/wjhtk?title?=&${data?.title_Topics}&uid=${data?.ID_Topics}`} >اقرأ المزيد</Link></p>
          <span><FontAwesomeIcon icon={faArrowLeft} /></span>
        </div>
      </div>

    </div>
  )

}
export default Card;
