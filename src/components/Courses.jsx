import React from "react";
import "../styles/courses.css";

function Courses() {
  return (
    <section className="courses">
      <h2>Our Courses</h2>
      <div className="course-list">
        <div className="course-card">
          <h3>HTML Basics</h3>
          <p>Learn the structure of web pages using HTML.</p>
        </div>
        <div className="course-card">
          <h3>CSS Styling</h3>
          <p>Style your websites with colors, layouts, and animations.</p>
        </div>
        <div className="course-card">
          <h3>JavaScript Essentials</h3>
          <p>Add interactivity and logic to your web applications.</p>
        </div>
        <div className="course-card">
          <h3>React Fundamentals</h3>
          <p>Build modern, dynamic user interfaces with React.</p>
        </div>
         <div className="course-card">
          <h3>Python Basics</h3>
          <p>Understand programming concepts and automation using Python.</p>
        </div>
        <div className="course-card">
          <h3>Node.js Fundamentals</h3>
          <p>Learn backend development and server-side programming with Node.js.</p>
        </div>

      </div>
    </section>
  );
}

export default Courses;

