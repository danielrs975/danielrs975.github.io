import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
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
                                <Row>
                                    <Col xs={6} md={4}>
                                        <Image src={foto} circle bsClass="photo"/>
                                    </Col>
                                </Row>
                                <h1>Welcome!</h1>
                                <h2>My name is Daniel and this is my portfolio</h2>
                            </Box>,
                        ]}
                    </PoseGroup>
                </Grid>
            </Jumbotron>
        );
    }
}

export default Welcome;