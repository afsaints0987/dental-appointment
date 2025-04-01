import React from "react";
import { Link } from "react-router-dom";
import dentist from "../../assets/dentist.png";

const HeroBanner = () => {
  return (
    <div className="hero-container d-flex flex-column flex-md-row align-items-center justify-content-between p-4">
      {/* Left Section - Text */}
      <div className="hero-text text-center text-md-start mx-auto">
        <div className="text-wrapper">
          <h1 className="hero-headline text-wrap poppins-semibold text-success">
            Brighten Your Smile with Hassle-Free Appointments
          </h1>
          <p className="hero-subheadline">
            Book your next dental visit in seconds. No calls, no wait—just a
            healthier smile at your convenience.
          </p>
        </div>
        <Link to="/appointment" className="btn btn-success text-white mt-3">
          Book an Appointment
        </Link>
      </div>

      {/* Right Section - Image Placeholder */}
      <div className="hero-image text-center">
        <img
          src={dentist}
          width="350px"
          alt="Smiling dentist at a dental clinic"
          className="img-fluid rounded"
          id="hero-image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
