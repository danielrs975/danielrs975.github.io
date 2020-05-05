/**
 * The Welcome Message Section
 */
import React from 'react'

const WelcomeSection = () => {
    return (
        <div className="section section--welcome">
            <div className="content-container content-container--section">
                <div className="welcome__content">
                    <div className="welcome__message">
                        <h1>Some message</h1>
                    </div>
                    <div className="welcome__currenttitle">
                        <h2>A master student in Computer Science</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection;
