import React from 'react';
import { Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';
import foto from './foto.png'

function PanelI(props){
    return (
        <Jumbotron bsClass="jumbotron panel-izquierdo">
            <Grid>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={foto} circle bsClass="photo"/>
                    </Col>
                </Row>
            </Grid>
        </Jumbotron>
    );
}

export default PanelI;