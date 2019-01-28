import React from 'react';
import LanguageContainer from './LanguageContainer';

function Skills(props) {
    return (
        <div id="skills" class="container-fluid">
            <h2 className="subtitles subsections">Programming Languages</h2>
            <div id="programming-languages">
                <LanguageContainer container="language-container" language="mdi mdi-language-python language" percentage="70%" column="first-column" />
                <LanguageContainer container="language-container" language="mdi mdi-ruby language" percentage="40%" column="second-column"/>
                <LanguageContainer container="language-container" language="mdi mdi-language-javascript language" percentage="55%" column="third-column"/>
                <LanguageContainer container="language-container" language="mdi mdi-language-html5 language" percentage="80%" column="fourth-column"/>
                <LanguageContainer container="language-container" language="mdi mdi-language-css3 language" percentage="60%" column="first-column" />
                <LanguageContainer container="language-container" language="mdi mdi-language-c language" percentage="49%" column="second-column" />
                <LanguageContainer container="language-container" language="mdi mdi-language-cpp language" percentage="40%" column="third-column" />
                <LanguageContainer container="language-container" language="mdi mdi-language-java language" percentage="40%" column="fourth-column"/>
            </div>
            <h2 className="subtitles subsections-2">Frameworks and Libraries</h2>
            <div id="frameworks-libraries">
                <LanguageContainer container="framework-container" language="mdi mdi-react framework" percentage="45%" column="first-column" />
                <LanguageContainer container="framework-container" language="mdi mdi-nodejs framework" percentage="40%" column="second-column" />
                <LanguageContainer container="framework-container" language="mdi mdi-bootstrap framework" percentage="61%" column="third-column" />
            </div>
        </div>
    );
}

export default Skills;