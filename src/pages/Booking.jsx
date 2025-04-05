import React, { useState, useEffect } from "react";

const BookingPage = () => {
  const [dentists] = useState([
    { id: 1, name: "Dr. Sarah Lee", specialization: "General Dentist" },
    { id: 2, name: "Dr. John Smith", specialization: "Orthodontist" },
    { id: 3, name: "Dr. Emily Wong", specialization: "Periodontist" },
  ]);

  const [selectedDentist, setSelectedDentist] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [appointmentDetails, setAppointmentDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    remarks: ""
  });

  useEffect(() => {
    if (selectedDentist) {
      // Simulate fetching available slots for the selected dentist
      setAvailableSlots([
        "09:00 AM",
        "10:00 AM",
        "11:00 AM",
        "01:00 PM",
        "02:00 PM",
        "03:00 PM",
      ]);
    }
  }, [selectedDentist]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({
      ...appointmentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment Scheduled with ${selectedDentist.name} at ${selectedSlot}`
    );
  };

  return (
    <div className="container mx-auto p-5">
      {/* Dentist Selection */}
      <h2 className="text-center mb-4 text-success">Choose Your Dentist</h2>
      <div className="d-flex justify-content-center mb-4">
        {dentists.map((dentist) => (
          <div
            key={dentist.id}
            className="card p-3 mx-2 cursor-pointer"
            onClick={() => setSelectedDentist(dentist)}
          >
            <h5>{dentist.name}</h5>
            <p>{dentist.specialization}</p>
          </div>
        ))}
      </div>

      {selectedDentist && (
        <>
          {/* Available Time Slots */}
          <h3 className="text-center mb-4 text-success">
            Available Time Slots for {selectedDentist.name}
          </h3>
          <div className="d-flex justify-content-center flex-wrap">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                className={`btn btn-outline-success mx-2 mb-3 ${
                  selectedSlot === slot ? "btn-success text-white" : ""
                }`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>

          {/* Appointment Form */}
          {selectedSlot && (
            <form
              onSubmit={handleSubmit}
              className="bg-light p-4 rounded shadow-sm mt-5"
            >
              <h4 className="text-center text-success">
                Confirm Your Appointment
              </h4>

              {/* Full Name */}
              <div className="form-group mb-3">
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Full Name"
                  value={appointmentDetails.fullName}
                  onChange={handleFormChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={appointmentDetails.email}
                  onChange={handleFormChange}
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-group mb-3">
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  value={appointmentDetails.phone}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <textarea
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Remarks"
                  value={appointmentDetails.remarks}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100 mt-4">
                Confirm Appointment
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default BookingPage;
