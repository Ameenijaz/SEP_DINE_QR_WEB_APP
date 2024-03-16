"use client";
import React , {useState} from "react";
import Footer from "../Footer/page";
import Navber from "../Navbar/page";
import Link from "next/link";
import {ContactUser} from "../action/contact"

const Contact = () => {
  return (
    <main style={{fontFamily:'-moz-initial'}} > 
      <Navber />
      <div className="contact-warp">
        <Contactfrist />
        <div className="contact-bg">
          <Contactsecond />
          <ContactThird />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Contact;

function Contactfrist() {
  return (
    <div className="contactfrist-warp flex w-full ">
      <div className="contactfrist-container flex flex-row gap-10 ">
        <div>
        <h3>CONTACT</h3>
        <h2>
          Restaurant <br /> Contact US
        </h2>
        <p className="w-[300px]  text-lg mt-5 " >
        Thank you for your interest in connecting with us. <br />
        Whether you have a question about our products, want to provide feedback, or need assistance, we're here to help. Choose a convenient way to reach out to us: </p>
        <button className="contact-btn mt-10 ">
        <Link href={'/Home'} >
          <span className="hover:text-black" >Home</span>
          </Link>
          <p></p>
          <span className="btn-cont hover:text-black">Contact</span>
        </button>
        </div>
        <img src="/contact.jpg" className="w-[72%] h-[415px] rounded-lg flex justify-center items-center  shadow-md " />
      
      </div>
    </div>
  );
}

function Contactsecond() {
  return (
    <div className="Contactsecond-warp">
      <div className="Contactsecond-container">
        <div className="Contactsecond-contant">
          <h3>CONTACT</h3>
          <h2>Contact information</h2>
          <p>Porro eveniet, autem ipsam vitae consequatur!</p>
        </div>
        <div className="contactsecond-card-main">
          <div className="contactsecond-card">
            <img src={"/icon-contact-1.png"} />
            <h3>Write Us</h3>
            <p>bcsm-f20-142@superior.edu.pk</p>
            <p className="mt-3" >bcsm-f20-350@superior.edu.pk</p>
          
          </div>
          <div className="contactsecond-card">
            <img src={"/icon-contact-2.png"} />
            <h3>Call Us</h3>
            <p>+923271277807</p>
            <p className="mt-3" >+923179610447</p>
          </div>
          <div className="contactsecond-card">
            <img src={"/icon-contact-3.png"} />
            <h3>Visit Us</h3>
            <p>Canada, Toronto, North Avenue 31B</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function ContactThird() {
  // Initialize state for form values
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
var userid  =  localStorage.getItem("_id")

await ContactUser(userid  , formValues.firstName , formValues.lastName ,formValues.phone ,formValues.email , formValues.message ) 
    // Access form values in the formValues object
    console.log('Form values:', formValues);
    // Add your logic for form submission here
  };

  return (
    <div className="Contactthrid-warp">
      <div className="Contactthrid-container">
        <div className="Contactthrid-contant">
          <h3>CONTACT</h3>
          <h2>Contact information</h2>
          <p>Porro eveniet, autem ipsam vitae consequatur!</p>
        </div>
        <form onSubmit={handleSubmit} className="Contact-full-form">
          <div className="contact-name-sec">
            <input
              size="40"
              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required border border-gray-200"
              placeholder="First Name"
              value={formValues.firstName}
              onChange={handleInputChange}
              type="text"
              name="firstName"
            ></input>
            <input
              size="40"
              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required border border-gray-200"
              placeholder="Last Name"
              value={formValues.lastName}
              onChange={handleInputChange}
              type="text"
              name="lastName"
            ></input>
          </div>
          <div className="contact-phone-sec">
            <input
              size="40"
              className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel border border-gray-200"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleInputChange}
              type="tel"
              name="phone"
            ></input>
            <input
              size="40"
              className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email border border-gray-200"
              placeholder="Email"
              value={formValues.email}
              onChange={handleInputChange}
              type="email"
              name="email"
            ></input>
          </div>
          <div className="contact-message-sec">
            <textarea
              cols="40"
              rows="10"
              className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required border border-gray-200"
              placeholder="Message"
              value={formValues.message}
              onChange={handleInputChange}
              name="message"
            ></textarea>
          </div>
          <div className="contact-btn-sec">
            <button className="tst-btn" type="submit" name="button">
              Send a message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}