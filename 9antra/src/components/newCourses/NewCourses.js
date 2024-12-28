import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button, Col, Form } from "react-bootstrap";
import "./NewCourses.css";
import { Link, useNavigate } from "react-router-dom";
const NewCourses = () => {
  const [course, setCourse] = useState({
    title: "",
    price: "",
    pic: "",
  });

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("file", file);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/courses/upload",
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setCourse({ ...course, pic: data });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.post("/api/courses/create", course, config);
      alert(`${res.data.msg}`);
      //   navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!course.price || !course.title || !course.pic) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please check your informations !",
      });
    } else {
      await handleSubmit();
    }
  };
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <ul>
          <li>
            <a href="/course">New Course</a>
          </li>
          <li>
            <a href="/allcourses">Courses</a>
          </li>
        </ul>
      </aside>
      <div className="main-contente mt-5">
        <section id="Create">
          <div className="formgroup offset-sm-3 text-center">
            <br />
            <div className="container justcontainer my-5 py-5">
              <Form.Group>
                <div className="row testing">
                  <h1 className="d-flex justify-content-center">Add Course</h1>
                  <div className="col-md-3 Coursepic">
                    <h1 className="text-center text-bold">
                      Upload Your Course Pic{" "}
                    </h1>

                    <div className="imggg">
                      {course?.pic && (
                        <img
                          className="imgg"
                          alt="not fount"
                          width={"250px"}
                          src={`http://localhost:5000${course?.pic}`}
                        />
                      )}
                      {!course.pic && (
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4JvZuw_Q_yEggsD8I1qXrKlRP9mtf6MuwA&usqp=CAU" />
                      )}
                      <br />
                      {course.pic && (
                        <button
                          className="btn btn-primary w-75 mt-4 rounded-pill"
                          onClick={(event) => {
                            setCourse({ ...course, pic: "" });
                          }}
                        >
                          Delete
                        </button>
                      )}
                    </div>

                    <br />
                    <br />
                    <input
                      type="file"
                      className=" myimage course"
                      onChange={uploadFileHandler}
                    />
                  </div>

                  <div className="container col-md-6">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      className="form-control"
                      type="text"
                      placeholder="Course Title"
                      value={course?.title}
                      onChange={(e) =>
                        setCourse({ ...course, title: e.target.value })
                      }
                    />
                    <br />

                    <Form.Label>Price</Form.Label>

                    <Form.Control
                      className="form-control"
                      type="number"
                      placeholder="Price"
                      value={course?.price}
                      onChange={(e) =>
                        setCourse({ ...course, price: e.target.value })
                      }
                    />
                    <br />
                  </div>
                </div>
              </Form.Group>
              <div className="mt-2">
                <button
                  className="btn btn-success rounded-pill px-4 py-2"
                  onClick={handleFormSubmit}
                  href="/"
                >
                  <i className="fa fa-check px-1" aria-hidden="true"></i>Add
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewCourses;
