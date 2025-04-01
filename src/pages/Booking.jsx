import React, {useState} from "react";
import Form from "../component/Form/Form"

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Your appointment has been scheduled!");
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center text-center mx-auto vh-100">
      <h4 className="text-success">Schedule Your Appointment</h4>
      <form
        className="mt-3 w-100 px-4"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        {/* Full Name */}
        <div className="form-group mb-3">
          <input
            className="form-control"
            name="fullName"
            placeholder="Full Name"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="form-group mb-3">
          <input
            className="form-control"
            name="email"
            placeholder="Email Address"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="form-group mb-3">
          <input
            className="form-control"
            name="phone"
            placeholder="Phone Number"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Appointment Date */}
        <div className="form-group mb-3">
          <input
            className="form-control"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {/* Appointment Time */}
        <div className="form-group mb-3">
          <select
            className="form-control"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          >
            <option value="">Select a Time</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
          </select>
        </div>

        {/* Service Selection */}
        <div className="form-group mb-3">
          <select
            className="form-control"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a Service</option>
            <option value="Routine Checkup">Routine Checkup</option>
            <option value="Teeth Whitening">Teeth Whitening</option>
            <option value="Dental Cleaning">Dental Cleaning</option>
            <option value="Emergency Care">Emergency Care</option>
          </select>
        </div>

        {/* Additional Message */}
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            name="message"
            placeholder="Additional Comments (Optional)"
            rows="3"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default Booking;
