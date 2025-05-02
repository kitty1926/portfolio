import React from 'react';
import '../index.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Programming skills</h2>
      <div className="skills-container">
        {[
          { src: '/python.jpg', alt: 'Python' },
          { src: '/HTML.png', alt: 'HTML' },
          { src: '/CSS.png', alt: 'CSS' },
          { src: '/JAVASCRIPT.png', alt: 'JAVASCRIPT' },
          
          
        ].map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.src} alt={skill.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;