import React, { useEffect, useMemo, useState } from "react";
import Cards from "./Cards";
import { GetAllCourses } from "../api/CoursesApi";
import './Crud.css'
const Allcourses = () => {
  const [courses, setCourses] = useState([]);
  const [specificCourses, setSpecificCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); 


  const isCourses = async () => {
    const oflg = await GetAllCourses();
    setCourses(oflg);
    setLoading(false); 
  };
  console.log(courses)

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = useMemo(() => {
    return specificCourses?.filter((el) =>
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [specificCourses, searchTerm]);

  useEffect(() => {
    isCourses();
    setSpecificCourses(courses);
  }, [courses]); 

  const Loader = () => {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  };
  
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <ul>
        <li><a href="/course">New Course</a></li>
        <li><a href="/allcourses">Courses</a></li>
        </ul>
      </aside>
      <div className="main-content mt-5">
        <section id="">
          <div className="">
            <div className="search-container adofs col-6 col-sm-2 col-md-7">
              <input
                type="text"
                placeholder="Search By Course Name"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
            </div>
            {loading ? ( 
              <Loader />
            ) : (
              <div className="container adofc">
                {filteredCourses.map((el, index) => (
                  <Cards off={el} key={index} />
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Allcourses
