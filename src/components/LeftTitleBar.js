import React from 'react'
import Proptypes from 'prop-types';
import {Image, Row, Col, Button} from 'react-bootstrap';

const leftTitleBarSvg = require('../assets/svg/left_title_bar.svg');

const LeftTitleBar = ({title}) => {
    return (
        <Row lg={12} style={{position: 'relative', marginBottom: 50}}>
            <Col lg={3} style={{marginLeft: -500}}>
                <Image src={leftTitleBarSvg.default} width='600%'/>
            </Col>
            <Col lg={9} style={{marginTop: 20, position: 'absolute', left: -150, top: 18 }}>
                <Button className='font-face' style={{
                    color: 'black',
                    fontWeight: 'bold',
                    borderRadius: 10,
                    padding: 15,
                    fontSize: 18,
                    backgroundColor: 'white'
                }}
                >Learn More</Button>
            </Col>
            <Col lg={9} style={{marginTop: 20, position: 'absolute', left: 90, top: -10 }}>
                <h1 className='font-face' style={{
                    fontWeight: 'bold',
                    fontSize: 80,
                    color: 'white',
                }}
                >{title}</h1>
            </Col>
        </Row>
    )
}

LeftTitleBar.prototype = {
    title: Proptypes.string,
}

export default LeftTitleBar
