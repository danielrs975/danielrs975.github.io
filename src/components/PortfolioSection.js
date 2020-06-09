import React from 'react';
import Project from './Project';
import database from '../firebase/firebase';
// import projects from '../fixtures/projects';

class PortfolioSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
        this.fetchProjects();
    }
    /**
     * Method to fetch the projects from firebase
     */
    fetchProjects = () => {
        database.ref('/projects').once('value').then((snapshot) => {
            const projects = [];
            snapshot.forEach((childSnapshot) => {
                projects.push({
                    ...childSnapshot.val()
                })
            })
            this.setState({ projects });
        })
    }
    render() {
        return (
            <div id="portfolio" className="section">
                <div className="content-container">
                    <div className="section__header">
                        <h2>PORTFOLIO</h2>
                    </div>
                    {
                        this.state.projects.map((project, idx) => (<Project project={project} key={`project-${idx}`} />))
                    }
                </div>
            </div>
        )
    }
}

export default PortfolioSection;
