import React from "react";
import location from "../assets/location.png"
import phone from "../assets/phone.png"

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container d-flex justify-content-between">
        <div className="d-flex flex-column ">
          <small className="mb-1 align-middle">
            <img src={phone} width="20px" className="mx-2 my-1" />
            +61 412 345 678
          </small>
          <small className="mb-0 align-middle">
            <img src={location} width="20px" className="mx-2 my-1" />
            10 Florabunda Dr. Camden Park, NSW Australia
          </small>
        </div>
        <div>
          <p className="poppins-semibold text-success">
            Dental24x7 | &copy; 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
