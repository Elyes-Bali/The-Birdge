import React, { useState } from "react";
import { Button, Card, ModalTitle } from "react-bootstrap";
import { Getone, hundelUpdate } from "../api/CoursesApi";
import Modal from "./Modal";

const Cards = ({ off, key }) => {
  const [course, setCourse] = useState({});

  const hundelCourse = async (el) => {
    hundelUpdate(off._id, {});
    const isCourse = await Getone(course._id);
    setCourse(isCourse);
    console.log(course);
    window.location.reload();
  };
  return (
    <div key={key}>
    <Card style={{ width: "35rem", margin: "1%" }}>
      <Card.Body>
        <ModalTitle className="text-center">
          {off.title.substring(0, 30)}
        </ModalTitle>

        <Card.Text>
          <b>Title: </b>
          {off.title} 
        </Card.Text>
        <br />

        <Card.Text>
          <b>Date: </b>
          {off.date.substring(0, 10)}
        </Card.Text>

        <br />
        <b>Price: </b>
        <Card.Text>{off.price} TND</Card.Text>
        <br />

        <Modal cours={off} keey={key} />
      </Card.Body>
    </Card>
  </div>
  )
}

export default Cards;
