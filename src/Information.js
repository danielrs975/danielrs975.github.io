import React from 'react';
import Caracteristics from './Caracteristics';

function Information(props) {
    return (
        <div id="information" class="container-fluid">
            <h2 className="subtitles subsections-names subsections-left-1">Who am I?</h2>
            <div id="photo-information">
                <div className="profile-photo">
                    <img src={props.photo} alt="my-self" className="photo img-responsive"></img>
                </div>
                <div id="little-about-myself">
                    <p>
                    I'm a Computer Engineering student at the Simón Bolívar University, Caracas, Venezuela. I'm in the final phase of my career. I love computer science and the art of coding. I also like to code in the back-end of the web apps.
                    </p>
                </div>
                <div id="characteristics">
                    <Caracteristics caracteristic="responsive" icon="mdi mdi-responsive icon" title="Responsive" text="I provide web apps that look awesome from large to small devices" />
                    <Caracteristics caracteristic="intuitive" icon="mdi mdi-monitor icon" title="Intuitive" text="I love make an app the most easy to use." />
                    <Caracteristics caracteristic="interactive" icon="mdi icon mdi-gamepad-variant" title="Interactive" text="An app or a webpage don't have to be boring." />
                </div>
            </div>
        </div>
    );
}

export default Information;