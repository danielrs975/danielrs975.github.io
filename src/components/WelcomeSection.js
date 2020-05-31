/**
 * The Welcome Message Section
 */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const translate = {
    en: {
        presentation: (<h1>Hi, I'm Daniel <br/> and this is my portfolio</h1>),
        description: (<h2>MSc student in Computer Science</h2>)
    },
    es: {
        presentation: (<h1>Hola, me llamo Daniel <br/> y este es mi portafolio</h1>),
        description: (<h2>Estudiante de Master en Ciencias de la Computación</h2>)
    },
    fr: {
        presentation: (<h1>Salut, je m'appelle Daniel <br/> et c'est mon portfolio</h1>),
        description: (<h2>Étudiant de Master en Science de la Computation</h2>)
    }
}

const WelcomeSection = (props) => {
    return (
        <div id="home" className="section section--welcome">
            <div className="content-container content-container--section">
                <div className="welcome__content">
                    <div className="welcome__message">
                        {translate[props.lang].presentation}
                        {/* <h1>Hi, I'm Daniel <br/> and this is my portfolio</h1> */}
                    </div>
                    <div className="welcome__currenttitle">
                        {translate[props.lang].description}
                        {/* <h2>MSc student in Computer Science</h2> */}
                        <div className="row social-medias">
                            <a href="https://github.com/danielrs975" 
                                target="__blank" 
                                className="social-medias__icon" 
                            >
                                <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                            </a>
                            <a href="https://www.linkedin.com/in/danielrs9705/" 
                                target="__blank" 
                                className="social-medias__icon"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                            </a>
                            <a href="https://twitter.com/DanielR975" 
                                target="__blank" 
                                className="social-medias__icon"
                            >
                                <FontAwesomeIcon icon={faTwitterSquare} size="3x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection;
