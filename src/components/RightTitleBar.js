import React from 'react'
import {Image,Col, Row, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const  rightTitleBarSvg = require('../assets/svg/right_title_bar.svg');

const RightTitleBar = ({title}) => {
    return (
        <Row lg={12} style={{position: 'relative', marginBottom: 50}}>
            <Col lg={7} >
                <Image src={rightTitleBarSvg.default}/>
            </Col>
            <Col lg={5} lg={9} style={{marginTop: 20, position: 'absolute', left: 500, top: -10 }}>
                <h1 className='font-face' style={{
                    fontWeight: 'bold',
                    fontSize: 80,
                    color: 'white',
                }}
                >{title}</h1>
            </Col>
            <Col lg={9} style={{marginTop: 20, position: 'absolute', left: 1100, top: 18 }}>
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
        </Row>
    )
}

RightTitleBar.prototype = {
    title: PropTypes.string
}

export default RightTitleBar
