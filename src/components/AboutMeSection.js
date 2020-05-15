import React from 'react'

// Icons
import { faAngular, faReact, faNode, faPython, faHtml5, faSass } from '@fortawesome/free-brands-svg-icons';
import SkillBox from './SkillBox';

const AboutMeSection = () => {
    return (
        <div id="aboutMe" className="section">
            <div className="content-container">
                <div className="section__header">
                    <h2>ABOUT ME</h2>
                </div>
                <div className="row about-me__content">
                    <div className="about-me__photo center">
                        <img src="/images/foto.png" alt="me" />
                    </div>
                    <div className="about-me__bio center">
                       <p>
                            Today, I am a MSc Student in Computer Science at Télécom SudParis, France.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                       </p>
                    </div>
                </div>
                <div className="subsection">
                    <div className="subsection__header">
                        <h3>Skills</h3>
                    </div>
                    <div className="row evenly-distributed skills">
                        <SkillBox icon={faAngular} level={5} />
                        <SkillBox icon={faReact} level={4} />
                        <SkillBox icon={faNode} level={5} />
                        <SkillBox icon={faPython} level={4} />
                    </div>
                    <div className="row evenly-distributed skills">
                        <SkillBox icon={faHtml5} level={5} />
                        <SkillBox icon={faSass} level={3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection
