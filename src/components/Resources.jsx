import React from "react";
import "../styles/resources.css";

function Resources() {
  return (
    <section className="resources">
       <h2>Resources</h2>   {/* 👈 Heading added here */}
      <p>Explore tutorials, guides, and references to boost your skills.</p>

      <ul className="resource-list">
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer">
            HTML Documentation (MDN)
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer">
            CSS Documentation (MDN)
          </a>
        </li>
        <li>
          <a href="https://javascript.info/" target="_blank" rel="noreferrer">
            JavaScript Info Guide
          </a>
        </li>
        <li>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            React Official Docs
          </a>
        </li>
         <li>
          <a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noreferrer">
            Python Official Tutorial
          </a>
        </li>
        <li>
          <a href="https://nodejs.org/en/docs/" target="_blank" rel="noreferrer">
            Node.js Official Documentation
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Resources;
