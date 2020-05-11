import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngular, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({ project }) => {
    return (
        <div className="row project">
            <div className="project__image">
                Some image of the project
            </div>
            <div className="column project__content">
                <div className="project__header">
                    <h3>{project.name}</h3>
                    <h4>{project.date}</h4>
                </div>
                <div className="project__description">
                    <p>
                        {project.description}
                    </p>
                </div>
                <div className="project__links">
                    { project.repositories.map((repository) => (
                        <p>
                            {repository.name} Repository: 
                            <a href={repository.link}>
                                {repository.link}
                            </a>
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
