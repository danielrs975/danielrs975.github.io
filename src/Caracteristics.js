import React from 'react';

function Caracteristics(props) {
    return (
        <div id={props.caracteristic} className="caracteristic">
            <span className={props.icon}></span>
            <h4 className="subtitles habilities">{props.title}</h4>
            <div className="phrase">
              <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Caracteristics;