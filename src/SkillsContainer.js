import React from 'react';
import { Image } from 'react-bootstrap';

class SkillsContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = { isVisible: false };
    }

    render() {
        console.log(this.props.imagen)
        return (
            <div className="container-skills">
                <div>
                    <Image src={this.props.imagen} circle bsClass="image"/>
                </div>
                <h1>{this.props.nombre}</h1>
            </div>
        );
    }
}

export default SkillsContainer;