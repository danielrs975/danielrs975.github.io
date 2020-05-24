import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';

const ContactMeSection = () => {
    return (
        <div id="contact" className="section section--contact-me">
            <div className="content-container">
                <div className="evenly-distributed footer__content">
                    <div className="contact-me">
                        <div className="footer__header">
                            <h2>CONTACT ME</h2>
                        </div>
                        <ContactForm />
                    </div>
                    <div className="page-info">
                        <h3>Built with</h3>
                        <FontAwesomeIcon icon={faReact} size="5x" />
                        <h3>
                            Made with 
                            <FontAwesomeIcon icon={faHeart} className="page-info__love-icon" />
                            by Daniel R, 2020
                        </h3>
                        <div className="row social-medias--footer">
                            <a href="https://github.com/danielrs975" 
                                target="__blank" 
                                className="social-medias__icon" 
                            >
                                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                            </a>
                            <a href="https://www.linkedin.com/in/danielrs9705/" 
                                target="__blank" 
                                className="social-medias__icon"
                            >
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__app-versioning">
                    <p>
                        Portfolio app, Version 1.1. May 2020
                    </p>
                </div>
            </div>
        </div>
    )
}
 
export default ContactMeSection
