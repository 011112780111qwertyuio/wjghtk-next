import React from "react";
import './btn-search-larg.scss';
import Link from "next/link";
function BtnSearchLarg() {

  return (
    
    <div className="btn-search-larg">
      <div className="btn-search">
      <Link href="">search</Link>
    </div>
    </div>
  ); 


}
export default React.memo(BtnSearchLarg);