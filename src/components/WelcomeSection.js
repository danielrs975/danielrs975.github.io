/**
 * The Welcome Message Section
 */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import translate from '../translations/WelcomeSection';

const WelcomeSection = (props) => {
    return (
        <div id="home" className="section section--welcome">
            <div className="content-container content-container--section">
                <div className="welcome__content">
                    <div className="welcome__message">
                        {translate[props.lang].presentation}
                    </div>
                    <div className="welcome__currenttitle">
                        {translate[props.lang].description}
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
