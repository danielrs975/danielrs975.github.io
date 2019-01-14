import React from 'react';
import posed from 'react-pose';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import foto from './foto.png'

const Box = posed.div({
    enter: { 
        opacity: 1,
        delay: 300,
        transition: {
            y: {type: 'spring', stiffness: 1000, damping: 15 },
            default: {duration: 300}
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

class Welcome extends React.Component {
    state = { isVisible: false };

    componentDidMount(){
        this.setState({isVisible: false});
    }

    comp

    render(){
        const { isVisible } = this.state;
        return (
            <Jumbotron bsClass="jumbotron welcome-panel">
                <Grid>
                    <Box pose={isVisible ? 'exit' : 'enter'} > 
                        <Row key="row">
                            <Col xs={6} md={4}>
                                <Image src={foto} circle bsClass="photo"/>
                            </Col>
                        </Row>
                        <h1 key="welcome">Welcome!</h1>
                        <h2 key="presentation">My name is Daniel and this is my portfolio</h2>
                    </Box>
                </Grid>
            </Jumbotron>
        );
    }
}

export default Welcome;