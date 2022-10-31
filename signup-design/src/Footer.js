import React from "react";

function Footer({footerDatas}){
  return(
    <footer className="part-5">
    <ul>
      {footerDatas.lists.map((e) => (
      <li>{e}</li>
      ))}
    </ul>
  </footer>
  )
}
export default Footer;