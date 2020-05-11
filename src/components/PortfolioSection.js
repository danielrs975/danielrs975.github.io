import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';

const PortfolioSection = () => {
    return (
        <div id="portfolio" className="section">
            <div className="content-container">
                <div className="section__header">
                    <h2>PORTFOLIO</h2>
                </div>
                <div className="row project">
                    <div className="project__image">
                        Some image of the project
                    </div>
                    <div className="column project__content">
                        <div className="project__header">
                            <h3>Join-Code</h3>
                            <h4>December, 2019 - January, 2020</h4>
                        </div>
                        <div className="project__description">
                            <p>
                                Made as part of an university subject call Groupware and Collaborative Work.
                                Consists of a online text editor where you can write code and share it with other users.
                                These users can edit at the same time the same document, they can develop different part of the
                                code in real-time. The project consists in two parts: the front-end made in Angular and the back-end
                                made in Node.
                            </p>
                        </div>
                        {/* <div className="row project__tools">
                            <FontAwesomeIcon icon={faAngular} size="3x" className="tools__icon" />
                            <FontAwesomeIcon icon={faNodeJs} size="3x" className="tools__icon" />
                        </div> */}
                        <div className="project__links">
                            <p>
                                Front-End Repository: 
                                <a href="https://github.com/danielrs975/join-code-frontend">
                                    https://github.com/danielrs975/join-code-frontend
                                </a>
                            </p>
                            <p>
                                Back-End Repository: 
                                <a href="https://github.com/danielrs975/join-code-backend">
                                    https://github.com/danielrs975/join-code-backend
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection;
