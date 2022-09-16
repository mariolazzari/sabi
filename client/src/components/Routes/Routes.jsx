import { Routes, Route } from "react-router-dom";

import Home from "../../views/Home";
import Users from "../../views/Users";
import Patients from "../../views/Patients";

const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/patients" element={<Patients />} />
    </Routes>
  );
};

export default Routings;
