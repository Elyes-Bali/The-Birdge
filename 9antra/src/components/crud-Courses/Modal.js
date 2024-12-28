import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

const Modale = ({ cours, keey }) => {
    const [courses, setCourses] = useState({});
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
  
    const uploadFileHandler = async (e) => {
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append("file", file);
      const { data } = await axios.post(
        "http://localhost:5000/api/courses/upload",
        bodyFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        }
      );
      setCourses({ ...courses, pic: data });
    };
  
    const hundelUpdate = async () => {
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.put(`/api/courses/edite/${courses._id}`, courses, config);
  
      window.location.reload();
    };
  
    const hundleDelete = async () => {
      const config = { headers: { "Content-Type": "application/json" } };
      const res = await axios.delete(
        `/api/courses/delcourse/${courses._id}`,
        courses,
        config
      );
  
      window.location.reload();
    };
  
    useEffect(() => {
      setCourses(cours);
      setCourses({ ...cours, date: Date.now() });
    }, []);
  
    return (
      <div key={keey}>
      <div className="buttom">
        <Button onClick={handleShow} variant="primary">
          Edit
        </Button>
        <Button variant="danger" onClick={hundleDelete}>
          Delete
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="col-md-7 ml-5">
                  <br />
                  <br />
                  <br />
                  <h1 className="text-center text-bold">
                    Upload Your Blog Pic{" "}
                  </h1>
  
                  <div className="imggg">
                    {courses?.pic && (
                      <img
                        className="imgg"
                        alt="not fount"
                        width={"350px"}
                        src={`http://localhost:5000${courses?.pic}`}
                      />
                    )}
                    {!courses.pic && (
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4JvZuw_Q_yEggsD8I1qXrKlRP9mtf6MuwA&usqp=CAU" />
                    )}
                    <br />
                    {courses.pic && (
                      <button
                        className="btn btn-primary w-50 mt-4 rounded-pill"
                        onClick={(event) => {
                          setCourses({ ...courses, pic: "" });
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
                    className=" myimage blogger ml-3"
                    onChange={uploadFileHandler}
                  />
                </div>
                <br/>
          <Form.Group>
            <h1><b>Title :</b></h1>
            <Form.Control
              type="text"
              placeholder="Product Name"
              value={courses?.title}
              onChange={(e) =>
                setCourses({ ...courses, title: e.target.value })
              }
            />
          </Form.Group>
          <br />
        
        
          <br />
          <Form.Group>
          <h1><b>Content :</b></h1>
  
            <Form.Control
             type="number"
              placeholder="Describe your product details"
              value={courses?.price}
              onChange={(e) => setCourses({ ...courses, price: e.target.value })}
            />
          </Form.Group>
          <br />
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hundelUpdate} variant="success" type="button" block>
            Update
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
    );
  };

export default Modale
