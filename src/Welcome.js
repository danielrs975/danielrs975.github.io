import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Jumbotron, Grid, Image, Glyphicon } from 'react-bootstrap';
import foto from './foto.png'

const Box = posed.div({
    enter: {
        opacity: 1,
        delay: 550,
        transition: {
            y: {type: 'spring', stiffness: 1000, damping: 15 },
            default: {duration: 1000}
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 150 }
    }
});

class Welcome extends React.Component {
    state = { isVisible: false }

    componentDidMount(){
        this.setState({ isVisible: true });
    }

    render(){
        const { isVisible } = this.state;
        return (
            <Jumbotron bsClass="jumbotron welcome-panel">
                <Grid>
                    <PoseGroup>
                        {isVisible && [
                            <Box key="welcome">
                                <div className="welcome-message">
                                    <Image src={foto} circle bsClass="photo"/>
                                    <h1>Welcome!</h1>
                                    <h2>My name is Daniel and this is my portfolio</h2>
                                </div>
                            </Box>,
                        ]}
                    </PoseGroup>
                </Grid>
                <Glyphicon glyph="menu-down" />
            </Jumbotron>
        );
    }
}

export default Welcome;