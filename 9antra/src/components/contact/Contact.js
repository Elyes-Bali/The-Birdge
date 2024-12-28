import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact mb-5">
      <section className="contact-section">
        <h2 className="mt-5">Contact Us</h2>
        <form className="contact-form">
          <h3>NAME</h3>
          <input type="text" placeholder="Name" />
          <h3>EMAIL</h3>
          <input type="email" placeholder="Email" />
          <h3>MESSAGE</h3>
          <textarea placeholder="Message"></textarea>
          <div className="sub">
          <button type="submit">Send the message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
