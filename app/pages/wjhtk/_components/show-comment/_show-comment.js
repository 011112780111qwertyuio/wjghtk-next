"use server";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import LoadingBtn from '@/app/_components/loading-btn/loading-btn';
import DeletedComment from '../deleted-comment/deleted-comment';
const ShowComment = async ({ token, local, promiseB, idTopic }) => {
  let loading = true;
  let alldata = [];
  const url = local + "/" + process.env.API_SHOWCOMMENTOPIC;
  const obj = new FormData();
  obj.append('idTopic', idTopic)
  await axios.post(url, obj).then(async (res) => {
    alldata = await res?.data?.data;
  })
  loading = false;
  return (
    <div className="show-comment">
      {loading === false ?
        alldata?.map((item, index) => (
          <div key={index} className='card-comment'>
            <div className='avatar'>
              {!item?.avatar ?
                <FontAwesomeIcon icon={faUser} />
                :
                <img src={`${local + "/" + process.env.API_PATHIMAGES + "/" + item?.avatar}`} alt="user" />
              }
            </div>
            <div className='ditls-comment'>
              <p className='name-user'>{item?.first_name + " " + item?.last_name}</p>
              <div className='write-comment'>
                {promiseB === null || promiseB?.stateUser === "error-network" ?
                  <LoadingBtn />
                  :
                  promiseB?.stateUser === "ok-auth" ?
                    promiseB?.userData?.ID_user === item?.uid_user ?
                      <DeletedComment Token={token} local={local} IDComment={item.ID_Comment_Topic} />
                      :
                      <p></p>
                    :
                    <p></p>
                }
                <p>{item?.content_Topics_comment}</p>
              </div>
            </div>

          </div>
        ))
        :
        <>
          <div className='card-comment'>
            <div className='avatar'>
              <div className="skeleton-loader skeleton-avatar"></div>
            </div>
            <div className='ditls-comment'>
              <>
                <div className="skeleton-loader skeleton-name"></div>
                <div className="skeleton-loader skeleton-content" ></div>
                <div className="skeleton-loader skeleton-button" ></div>
              </>
              <p></p>
              <p></p>
              <div className="skeleton-loader skeleton-content" ><p></p></div>
            </div>
          </div>
          <div className='card-comment'>
            <div className='avatar'>
              <div className="skeleton-loader skeleton-avatar"></div>
            </div>
            <div className='ditls-comment'>
              <>
                <div className="skeleton-loader skeleton-name"></div>
                <div className="skeleton-loader skeleton-content" ></div>
                <div className="skeleton-loader skeleton-button" ></div>
              </>
              <p></p>
              <p></p>
              <div className="skeleton-loader skeleton-content" ><p></p></div>
            </div>
          </div>
          <div className='card-comment'>
            <div className='avatar'>
              <div className="skeleton-loader skeleton-avatar"></div>
            </div>
            <div className='ditls-comment'>
              <>
                <div className="skeleton-loader skeleton-name"></div>
                <div className="skeleton-loader skeleton-content" ></div>
                <div className="skeleton-loader skeleton-button" ></div>
              </>
              <p></p>
              <p></p>
              <div className="skeleton-loader skeleton-content" ><p></p></div>
            </div>
          </div>

        </>
      }
    </div>
  );
}
export default ShowComment;