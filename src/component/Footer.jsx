import React from "react";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="py-4 text-white bg-success">
      <div className="container d-flex justify-content-between">
        <div className="d-flex flex-column ">
            <Logo className={`text-white`}/>
          <small className="my-1 align-middle">
            <img src={phone} width="20px" className="mx-2 my-1" />
            +61 412 345 678
          </small>
          <small className="mb-0 align-middle">
            <img src={mail} width="20px" className="mx-2 my-1" />
            dentalservices@dental24x7.com
          </small>
          <small className="mb-0 align-middle">
            <img src={location} width="20px" className="mx-2 my-1" />
            10 Florabunda Dr. Camden Park, NSW Australia
          </small>
        </div>
        <div>
          <p className="poppins-semibold text-light">
            Dental24x7 | &copy; 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
