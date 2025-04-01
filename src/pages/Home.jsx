import React from "react";
import Layout from "../component/Layout";
import Navigation from "../component/Navigation";
import HeroBanner from "../component/HeroBanner/HeroBanner";
import doctors from "../assets/doctors.jpg";
import care from "../assets/care.png"
import teeth from "../assets/teeth.png"
import checkup from "../assets/checkup.png"
import Footer from "../component/Footer";

const About = () => {
  return (
    <section className="about-section text-center text-md-start py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6">
            <img
              src={doctors}
              alt="Dental Care"
              width="350"
              className="img-fluid rounded-circle shadow-sm"
              loading="lazy"
            />
          </div>
          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="text-success poppins-bold">About Us</h2>
            <p className="text-muted">
              We are dedicated to providing seamless and stress-free dental
              appointments. Our mission is to make it easy for you to book,
              manage, and track your dental visits with trusted professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="services-section text-center py-5 bg-light">
      <div className="container">
        <h2 className="mb-4 text-success poppins-bold">Our Services</h2>
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <div className="mb-3">
                <img src={checkup} width="50" />
              </div>
              <h4 className="poppins-semibold text-success">Routine Checkups</h4>
              <p>Regular dental exams to maintain a healthy smile.</p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <div className="mb-3">
                <img src={teeth} width="50" />
              </div>
              <h4 className="poppins-semibold text-success">Teeth Whitening</h4>
              <p>Professional treatments for a brighter, whiter smile.</p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm p-4">
              <div className="mb-3">
                <img src={care} width="50" />
              </div>
              <h4 className="poppins-semibold text-success">Emergency Care</h4>
              <p>Quick and reliable care for urgent dental needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="contact-section text-center py-5">
      <div className="container">
        <h2 className="text-success poppins-bold">Contact Us</h2>
        <p className="text-muted">Have questions? Reach out to us!</p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-success">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-between pt-4 align-middle">
        <a href="#" className="montserrat-bold text-success">
          Dental24x7
        </a>
        <Navigation />
      </div>
      <HeroBanner />
      <About />
      <Services />
      <Contact />
      <Footer />
    </Layout>
  );
};

export default Home;
