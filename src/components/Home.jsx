import React from "react";
import "../styles/home.css";

function Home() {
  return (
    <section className="home">
      <div className="overlay">
        <h1>Welcome to EduSite</h1>
        <p>Learn HTML, CSS, JavaScript, and React with ease.</p>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
}

export default Home;
