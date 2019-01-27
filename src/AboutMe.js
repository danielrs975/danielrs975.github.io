import React from 'react';
import photo from './foto.png';

function AboutMe(props){
    return (
<div id="about-me-section" className="jumbotron">
  <div className="animation">
    <h1 className="sections-names">About Me</h1>
    <div className="underline"></div>
  </div>
  <div id="skills-and-information">
    <div id="information">
      <h2 className="subtitles subsections-left-1">Who am I?</h2>
      <div id="photo-information">
        <div className="profile-photo">
          <img src={photo} alt="my-self" className="photo"></img>
        </div>
        <div id="little-about-myself">
          <p>
            I'm a Computer Engineering student at the Simón Bolívar University, Caracas, Venezuela. I'm in the final phase of my career. I love computer science and the art of coding. I also like to code in the back-end of the web apps.
          </p>
        </div>
        <div id="characteristics">
          <div id="responsive" className="caracteristic">
            <span className="mdi mdi-responsive icon"></span>
            <h4 className="subtitles habilities">Responsive</h4>
            <div className="phrase">
              <p>I provide web apps that look awesome from large to small devices</p>
            </div>
          </div>
          <div id="intuitive" className="caracteristic">
            <span className="mdi mdi-monitor icon"></span>
            <h4 className="subtitles habilities">Intuitive</h4>
            <div className="phrase">
              <p>I love make an app the most easy to use.</p>
            </div>
          </div>
          <div id="interactive" className="caracteristic">
            <span className="mdi icon mdi-gamepad-variant"></span>
            <h4 className="subtitles habilities">Interactive</h4>
            <div className="phrase">
              <p>An app or a webpage don't have to be boring.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="skills">
      <h2 className="subtitles subsections">Programming Languages</h2>
      <div id="programming-languages">
        <div className="language-container first-column">
          <span className="mdi mdi-language-python language"></span>
          <h5 className="subtitles percentage">70%</h5>
        </div>
        <div className="language-container second-column">
          <span className="mdi mdi-ruby language"></span>
          <h5 className="subtitles percentage">40%</h5>
        </div>
        <div className="language-container third-column">
          <span className="mdi mdi-language-javascript language"></span>
          <h5 className="subtitles percentage">55%</h5>
        </div>
        <div className="language-container fourth-column">
          <span className="mdi mdi-language-html5 language"></span>
          <h5 className="subtitles percentage">80%</h5>
        </div>
        <div className="language-container first-column">
          <span className="mdi mdi-language-css3 language"></span>
          <h5 className="subtitles percentage">60%</h5>
        </div>
        <div className="language-container second-column">
          <span className="mdi mdi-language-c language"></span>
          <h5 className="subtitles percentage">49%</h5>
        </div>
        <div className="language-container third-column">
          <span className="mdi mdi-language-cpp language"></span>
          <h5 className="subtitles percentage">40%</h5>
        </div>
        <div className="language-container fourth-column">
          <span className="mdi mdi-language-java language"></span>
          <h5 className="subtitles percentage">40%</h5>
        </div>
      </div>
      <h2 className="subtitles subsections-2">Frameworks and Libraries</h2>
      <div id="frameworks-libraries">
        <div className="framework-container first-column">
          <span className="mdi mdi-react framework"></span>
          <h5 className="subtitles percentage">45%</h5>
        </div>
        <div className="framework-container second-column">
          <span className="mdi mdi-nodejs framework"></span>
          <h5 className="subtitles percentage">40%</h5>
        </div>
        <div className="framework-container third-column">
          <span className="mdi mdi-bootstrap framework"></span>
          <h5 className="subtitles percentage">61%</h5>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}

export default AboutMe;