import React from 'react';

function LanguageContainer(props) {
    var column = props.container + " " + props.column
    return (
        <div className={column}>
          <span className={props.language}></span>
          <h5 className="subtitles percentage">{props.percentage}</h5>
        </div>
    );
}

export default LanguageContainer;