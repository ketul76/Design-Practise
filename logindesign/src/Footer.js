import React from 'react';

function Footer({footerData}) {
  return (
    <footer>
    <ul>
      {footerData.lists.map((e) => (
      <li>{e}</li>
      ))}
    </ul>
  </footer>
  );
}

export default Footer;