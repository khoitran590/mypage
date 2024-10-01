import React from 'react';
import './App.css';


function App() {
  return (
<>
<div className='outer_container'>
  <div className="container">
    <h1>My Portfolio</h1>
  </div>
  <div className="smaller_container">
    <h2><a href="https://www.linkedin.com/in/peter-t-77830b138/" target='_blank' >LinkedIn</a></h2>
    <h2><a href="./public/Resume (3).pdf" target='_blank' >Resume</a></h2>
    <h2><a href="https://www.google.com/travel/flights" target='_blank' >About</a></h2>
  </div>
</div>

<div className="info_box">
  <h2>Below is my most notable project thus far: </h2>

  <div className="links_container">
    <div className="left">
      <h3><a href="https://weatherappthev2.netlify.app/" target='_blank'>Weather App</a></h3>
      <h3><a href="https://github.com/khoitran590/Number-Counter" target='_blank'>Number Counter</a></h3>

    </div>

    <div className="right">
      <h3><a href="https://github.com/khoitran590/color_flipper" target='_blank'>Color Flipper</a></h3>
      <h3><a href="https://github.com/sebavillani916/flappybird" target='_blank'>Flappy Bird Replica</a></h3>
    </div>
    
  </div>
</div>
</>
  );
}

export default App;
