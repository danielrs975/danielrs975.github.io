import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';

const ContactMeSection = () => {
    return (
        <div id="contactMe" className="section section--contact-me">
            <div className="content-container">
                <div className="row evenly-distributed footer__content">
                    <div className="contact-me">
                        <div className="footer__header">
                            <h2>CONTACT ME</h2>
                        </div>
                        <ContactForm />
                    </div>
                    <div className="page-info">
                        <h3>Build with</h3>
                        <FontAwesomeIcon icon={faReact} size="5x" />
                        <h3>
                            Made with 
                            <FontAwesomeIcon icon={faHeart} className="page-info__love-icon" />
                            by Daniel R
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ContactMeSection
