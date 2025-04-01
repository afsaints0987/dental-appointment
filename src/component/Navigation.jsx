import React from "react";
import { NavLink } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="d-flex">
      <NavLink className="mx-1">Home</NavLink>
      <NavLink className="mx-2">Services</NavLink>
      <NavLink className="mx-2">About</NavLink>
      <NavLink className="mx-1">Contact</NavLink>
    </div>
  );
};

export default Navigation;
