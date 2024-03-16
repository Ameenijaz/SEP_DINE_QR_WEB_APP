"use client";
import React from "react";
import { Icon } from "@iconify/react";
// import "./layout.css";

function Footer() {
  const logo = "/logo.png";
  const footerimg = "/blog-5 (1).jpg";
  const footerimg1 = "/galler footer.jpg";
  const footerimg2 = "/gallery-i-5 (1).jpg";
  const footerimg3 = "/gallery-i-4.jpg";

  return (
    <div className="footer-warp" style={{fontFamily:'-moz-initial'}} >
      <div className="footer-container">
        <div className="footer-contant">
          <div className="footer-logo">
            <img src={logo} className="w-[480px] h-[110px]" />
            <div className="footer-icon">
              <Icon icon="eva:facebook-fill" />
              <Icon icon="mdi:twitter" />
              <Icon icon="ant-design:instagram-filled" />
              <Icon icon="ant-design:youtube-filled" />
            </div>
          </div>
          <div className="footer-text-sec">
            <div className="footer-descr">
              <h3>About us</h3>
              <p className="text-lg  text-white" >
              Welcome to DineQR, your premier solution     
                <br />for modernizing the dining experience.
                <br />
                Established in [Year], DineQR has been <br />
                dedicated to revolutionizing the way, <br />
                restaurants and customers connect. 
                <br /> Our commitment to cutting-edge technology 
                <br/> and exceptional service has made us a
                <br/>trusted choice for the hospitality industry.
              </p>
              <span> Read More </span>
            </div>
            <div className="footer-contact-sec">
              <h3>Contact info</h3>
              <div className="footer-contact">
                <h4>CALL :</h4>
                <p>+923179610447</p>
              </div>
              <div className="footer-contact">
                <h4>WRITE :</h4>
                <p>ameenijaz142@gmail.com</p>
              </div>
              <div className="footer-contact">
                <h4>FIND US :</h4>
                <p>Canada, Toronto, Avenue 31B,</p>
              </div>
              <h5> Read More </h5>
            </div>
            <div className="footer-galler-sec">
              <h4>Gallery</h4>
              <div className="footer-img-galler">
                <img src={footerimg} />
                <img src={footerimg1} />
                <img src={footerimg2} />
                <img src={footerimg3} />
              </div>
              <span> See More </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
