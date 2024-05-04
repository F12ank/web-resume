import HomePage from "./HomePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function WebRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default WebRouter;
