import React from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import SkillsContainer from './SkillsContainer';
import python from './python.png';
import ruby from './ruby.png'
import haskell from './haskell.svg'
import java from './java.png'
import cplusplus from './C++.png';
import c from './C.png';
import shell from './shell.png'

function ProgrammingLanguages(){
    return (
        <Jumbotron bsClass="jumbotron programming-section">
            <Grid>
                <h1 className="section-name">Programming Languages</h1>
            </Grid>
            <Grid>
                <Row>
                    <Col xs={6} md={3}>
                        <SkillsContainer imagen={python} nombre="Python"/>
                    </Col>
                    <Col xs={6} md={3}>
                        <SkillsContainer imagen={ruby} nombre="Ruby" />
                    </Col>
                    <Col xs={6} md={3}>
                        <SkillsContainer imagen={haskell} nombre="Haskell" />
                    </Col>
                    <Col xs={6} md={3}>
                        <SkillsContainer imagen={java} nombre="Java" />
                    </Col>
                </Row>
                <Row bsClass="row second-row">
                    <Col xs={6} md={3}>
                        <SkillsContainer imagen={cplusplus} nombre="C++"/>
                    </Col>
                    <Col xs={6} md={3}>
                        <SkillsContainer imagen={c} nombre="C" />
                    </Col>
                    <Col xs={6} md={3}>
                        <SkillsContainer imagen={shell} nombre="Shell" />
                    </Col>
                </Row>
            </Grid>
        </Jumbotron>
    );
}

export default ProgrammingLanguages;