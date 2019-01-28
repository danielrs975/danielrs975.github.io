import React from 'react';
import photo from './foto.png';
import Skills from './Skills';
import Information from './Information';

function AboutMe(props){
    return (
        <div id="about-me-section" className="jumbotron">
          <div className="animation">
            <h1 className="sections-names">About Me</h1>
            <div className="underline"></div>
          </div>
          <div id="skills-and-information">
            <Information photo={photo}/>
            <Skills />
          </div>
        </div>
    );
}

export default AboutMe;