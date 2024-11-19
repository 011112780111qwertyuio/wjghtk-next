"use server";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
const ShowToicp = ({ local }) => {
  let isloading = true;
  let data = [];
  const url = local + "/" + process.env.API_SHOWTOPICRECENRPOSTS;
  axios.post(url).then(async (res) => {
    if (res?.data?.state === "ok-auth") {
      data = await res?.data?.mydata;
    }
    else {
      data = [];
    }
  })
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

  isloading = false;

  return (
    <div className='Recent-Posts'>
      <div className='top'>
        <p>المشاركات الأخيرة</p>
      </div>
      <div className='items'>
        {data?.map((item, index) => (
          <div key={index} className='card'>
            <div className='l-card'>
              <Link href={`/pages/wjhtk?title?=&${item?.title_Topics}&uid=${item?.ID_Topics}`}>
                <img src={`${local + "/" + process.env.API_PATHIMAGES + "/" + item?.avatar_Prim}`} alt="f" />
              </Link>
            </div>
            <div className='r-card'>
              <p className='tile'><FontAwesomeIcon icon={faComment} />{countComment(item.ID_Topics)} تعليقات</p>
              <p className='des'><Link href={`/pages/wjhtk?title?=&${item?.title_Topics}&uid=${item?.ID_Topics}`}>{item?.title_Topics.length > 80 ? item?.title_Topics + ".." : item?.title_Topics}</Link></p>
            </div>
          </div>

        ))}

      </div>
    </div>
  );

}
export default ShowToicp;
