import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import NewCourses from "./components/newCourses/NewCourses";
import Allcourses from "./components/crud-Courses/Allcourses";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<NewCourses />} />
        <Route path="/allcourses" element={<Allcourses />} />
      </Routes>
    </div>
  );
}

export default App;
