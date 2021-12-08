import React from "react";

import "./footer.css";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__iconSection">
          <a
            className="footer__icons"
            href="https://www.linkedin.com/in/aylabasha/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="footer__icons" href="https://angel.co/u/ayla-basha">
            <i class="fab fa-angellist"></i>
          </a>
          <a className="footer__icons" href="https://github.com/spacegray">
            <i className="fab fa-github-square"></i>
          </a>
        </div>
        <div className="footer__name"> Developed by Ayla Basha</div>
      </div>
    </>
  );
}
export default Footer;
