import React from 'react';
import '../index.css';


function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
        <img src="/me.png" className="leaf leaf1" alt="leaf" />
        </div>
        <div className="about-text">
          <p>
            Good Day, I'm Katrina T. Dapatnapo a 2nd year BSIT student at Dalubhasaan ng Lungsod ng Lucena 
            or famously known as DLL, I'm 21 years old turning 22 on November 19 and just 2 years from now 
            I'll be graduating student my favorite animals are capibara, Dog and a cat and I like any animals 
            too.I'm the eldest and I am the role model of my siblings.

          </p>
        </div>
      </div>
    </section>
  );
}

export default About;