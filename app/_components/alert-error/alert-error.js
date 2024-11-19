import React from "react";
function AlertError({ t1 }) {

  return (
    <div style={styleHead} className="alert">
      <div style={styleContent} className="flex-alert">
        <p>{t1}</p>
        <span>x</span>
      </div>

    </div>
  );

}
export default React.memo(AlertError);


const styleHead = {
  paddingLeft: 25,
  paddingRight: 25,
  marginTop: 20,
};
const styleContent = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#f8d7da',
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 20,
  paddingRight: 20,
  color: 'black',
  fontWeight: 'bold',
  fontSize: 20,
  borderRadius: 5,


}







