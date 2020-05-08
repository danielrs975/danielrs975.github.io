import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const ContactMeSection = () => {
    return (
        <div id="contactMe" className="section section--contact-me">
            <div className="content-container">
                <div className="row evenly-distributed footer__content">
                    <div className="contact-me">
                        <div className="footer__header">
                            <h2>CONTACT ME</h2>
                        </div>
                        <form className="contact-me__form">
                            <div>
                                <label>Email: </label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Subject: </label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Message: </label>
                                <input type="text" />
                            </div>
                            <button>Sent</button>
                        </form>
                    </div>
                    <div className="page-info">
                        <h3>Build with</h3>
                        <FontAwesomeIcon icon={faReact} size="5x" />
                        <h3>
                            Made with 
                            <FontAwesomeIcon icon={faHeart} className="page-info__love-icon" />
                            by Daniel Rodriguez
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ContactMeSection
