import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import Form from "./component/Form/Form"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/appointment" element={<Booking />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
      <Route exact path="/login" element={<Form title="Login" />}></Route>
      <Route exact path="/register" element={<Form title="Register"/>}></Route>
    </Routes>
  );
}

export default App;
