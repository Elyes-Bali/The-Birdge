import React from 'react'
import './Home.css';
import Header from '../header/Header';
import Front from '../front/Front';
import Courses from '../courses/Courses';
import Contact from '../contact/Contact';
const Home = () => {
  return (
    <div>
  <Header />
  <Front />
  <Courses />
  <Contact />
    </div>
  )
}

export default Home
