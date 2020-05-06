import React from 'react'

const AboutMeSection = () => {
    return (
        <div id="aboutMe" className="section">
            <div className="content-container">
                <div className="section__header">
                    <h1>About Me</h1>
                </div>
                <div className="row about-me__content">
                    <div className="about-me__photo center">
                        <img src="/images/foto.png" alt="me" />
                    </div>
                    <div className="about-me__bio center">
                       <p>
                            Today, I am a MSc Student in Computer Science at Télécom SudParis, France.<br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat<br/> 
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br/>
                            deserunt mollit anim id est laborum.
                       </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection
