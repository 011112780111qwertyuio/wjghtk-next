import React from "react";
import Image from "next/image";
import './read-the-latest-from-blog.scss';
function ReadTheLatestFromBlog() {
  const data = [
    { id: 1, src: "/images/tourism1.jpg", tile: "The day on Paris", time: "03/07/2024", ditels: "From the iconic to the unexpected, the city of San Francisco never ceases to...", subtile: "ADVENTURE TRAVEL" },
    { id: 2, src: "/images/tourism2.jpg", tile: "The day on Paris", time: "03/07/2024", ditels: "From the iconic to the unexpected, the city of San Francisco never ceases to...", subtile: "ADVENTURE TRAVEL" },
    { id: 3, src: "/images/tourism3.jpg", tile: "The day on Paris", time: "03/07/2024", ditels: "From the iconic to the unexpected, the city of San Francisco never ceases to...", subtile: "ADVENTURE TRAVEL" },
    { id: 4, src: "/images/tourism4.jpg", tile: "The day on Paris", time: "03/07/2024", ditels: "From the iconic to the unexpected, the city of San Francisco never ceases to...", subtile: "ADVENTURE TRAVEL" },
    { id: 5, src: "/images/tourism5.jpg", tile: "The day on Paris", time: "03/07/2024", ditels: "From the iconic to the unexpected, the city of San Francisco never ceases to...", subtile: "ADVENTURE TRAVEL" },
    { id: 6, src: "/images/tourism6.jpg", tile: "The day on Paris", time: "03/07/2024", ditels: "From the iconic to the unexpected, the city of San Francisco never ceases to...", subtile: "ADVENTURE TRAVEL" },







  ];

  return (
    <div className="read-the-latest-from-blog">
      <div className="content">

        <p className="title">Read the latest from blog</p>
        <p className="sub-title"> Contrary to popular belief </p>

        <div className="flex-cards">






          {data.map((item) => (
            <div key={item.id} className="card">
              <div className="view">
                <Image width={1000} loading="lazy" height={2000} sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw ,33vw" src={item.src} alt="" />
              </div>
              <div className="content-card">
                <div className="flex-title">
                  <p> Adventure Travel </p>
                  <span>.</span>
                  <span> 03/07/2024 </span>
                </div>
                <div className="title-ditels">
                  <p>The day on Paris </p>
                </div>
                <div className="ditels">
                  <p> From the iconic to the unexpected, the city of San Francisco never ceases to... </p>
                </div>
                <p className="red-more">Read More</p>
              </div>
            </div>
          ))}


        </div>


      </div>
    </div>
  )

}
export default React.memo(ReadTheLatestFromBlog);