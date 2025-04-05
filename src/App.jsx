import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route element={<ProtectedRoute/>}>
        <Route path="/appointment" element={<Booking />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
      
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
