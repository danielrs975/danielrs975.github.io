import React from 'react';
import Project from './Project';

import projects from '../fixtures/projects';

const PortfolioSection = () => {
    return (
        <div id="portfolio" className="section">
            <div className="content-container">
                <div className="section__header">
                    <h2>PORTFOLIO</h2>
                </div>
                {
                    projects.map((project) => (<Project project={project} />))
                }
            </div>
        </div>
    )
}

export default PortfolioSection;
