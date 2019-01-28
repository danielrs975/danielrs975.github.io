import React from 'react';
import photo from './foto.png';
import LanguageContainer from './LanguageContainer';
import Caracteristics from './Caracteristics';

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
          <Caracteristics caracteristic="responsive" icon="mdi mdi-responsive icon" title="Responsive" text="I provide web apps that look awesome from large to small devices" />
          <Caracteristics caracteristic="intuitive" icon="mdi mdi-monitor icon" title="Intuitive" text="I love make an app the most easy to use." />
          <Caracteristics caracteristic="interactive" icon="mdi icon mdi-gamepad-variant" title="Interactive" text="An app or a webpage don't have to be boring." />
        </div>
      </div>
    </div>
    <div id="skills">
      <h2 className="subtitles subsections">Programming Languages</h2>
      <div id="programming-languages">
        <LanguageContainer container="language-container" language="mdi mdi-language-python language" percentage="70%" column="first-column" />
        <LanguageContainer container="language-container" language="mdi mdi-ruby language" percentage="40%" column="second-column"/>
        <LanguageContainer container="language-container" language="mdi mdi-language-javascript language" percentage="55%" column="third-column"/>
        <LanguageContainer container="language-container" language="mdi mdi-language-html5 language" percentage="80%" column="fourth-column"/>
        <LanguageContainer container="language-container" language="mdi mdi-language-css3 language" percentage="60%" column="first-column" />
        <LanguageContainer container="language-container" language="mdi mdi-language-c language" percentage="49%" column="second-column" />
        <LanguageContainer container="language-container" language="mdi mdi-language-cpp language" percentage="40%" column="third-column" />
        <LanguageContainer container="language-container" language="mdi mdi-language-java language" percentage="40%" column="fourth-column"/>
      </div>
      <h2 className="subtitles subsections-2">Frameworks and Libraries</h2>
      <div id="frameworks-libraries">
        <LanguageContainer container="framework-container" language="mdi mdi-react framework" percentage="45%" column="first-column" />
        <LanguageContainer container="framework-container" language="mdi mdi-nodejs framework" percentage="40%" column="second-column" />
        <LanguageContainer container="framework-container" language="mdi mdi-bootstrap framework" percentage="61%" column="third-column" />
      </div>
    </div>
  </div>
</div>
    );
}

export default AboutMe;