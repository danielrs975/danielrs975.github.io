import React from 'react';

function WelcomeMessage(props) {
    return (
    <div id="welcome-section" className="jumbotron">
        <div id="welcome-message">
            <h1 id="presentation" style={{textAlign: 'center'}}>Hi! I'm Daniel.</h1>
            <div id="description">
                <h2 className="explanation" style={{marginBottom: '0px'}}>And this is my Portfolio</h2>
                <div id="underscore"></div>
            </div>
        </div>
        <div id="little-description">
            <h3 className="bottom-jumbo">A student of Computer Engineering</h3>
        </div>
    </div>
    );
}

export default WelcomeMessage;