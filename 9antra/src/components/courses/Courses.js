import React, { useEffect, useState } from "react";
import './Courses.css';
import { GetAllCourses } from "../api/CoursesApi";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const isCourses = async () => {
    const cours = await GetAllCourses();
    setCourses(cours);
  };
  useEffect(() => {
    isCourses();
  }, []);
  return (
    <section className="courses-section">
      <div className="header-row">
        <h2>Discover Our Courses</h2>
        <button className="view-more-btn">View More</button>
      </div>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.pic} alt={course.title} />
            <h3>{course.title}</h3>
            <p>{course.price} DT/Month</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
