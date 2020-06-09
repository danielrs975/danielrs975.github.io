import React from 'react'

// Icons
import { faAngular, faReact, faNode, faPython, faHtml5, faSass, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import SkillBox from './SkillBox';

// My Info
import translation from '../translations/AboutMeSection';
import database from '../firebase/firebase';

class AboutMeSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: null
        };
        this.fetchProfile();
    }
    /**
     * Fetch the information of my profile
     */
    fetchProfile() {
        database.ref('/profile').once('value').then((snapshot) => {
            const profile = snapshot.val();
            this.setState({ profile });
        })
    }
    render() {
        return (
            <div id="aboutMe" className="section">
                <div className="content-container">
                    <div className="section__header">
                        <h2>{translation[this.props.lang].section}</h2>
                    </div>
                    <div className="row about-me__content">
                        <div className="about-me__photo center">
                            {this.state.profile && <img src={this.state.profile.photo.link} alt="me" />}
                        </div>
                        <div className="about-me__bio center">
                            {
                                this.state.profile &&  
                                <p>
                                    {this.state.profile.bio}
                                </p>
                            }
                        </div>
                    </div>
                    <div className="subsection">
                        <div className="subsection__header">
                            <h3>Skills</h3>
                        </div>
                        <div className="row evenly-distributed skills">
                            <SkillBox icon={faAngular} level={5} />
                            <SkillBox icon={faReact} level={4} />
                            <SkillBox icon={faNode} level={5} />
                            <SkillBox icon={faPython} level={4} />
                        </div>
                        <div className="row evenly-distributed skills">
                            <SkillBox icon={faHtml5} level={5} />
                            <SkillBox icon={faSass} level={3} />
                            <SkillBox icon={faGitAlt} level={4} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMeSection
