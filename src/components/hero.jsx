import React from 'react';
import '../index.css';

function Home() {
  return (
    <section id="home">
      <div className="home-content">
        <div className="text">
          <h1>Hello!,Im Rina</h1>
          <p>This is my Portfolio feel free to explore it!!!</p>
        </div>
        <div className="image">
        <img src="/mee.jpg" className="leaf leaf1" alt="leaf" />
        </div>
      </div>
    </section>
  );
}

export default Home;