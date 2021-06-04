import React from 'react';
import {Image, Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';



const CustomLeftTile = ({title, picture}) => {
    return (
        <Row lg={12}>
            <Col lg={4}>
                <Image src={picture} width='80%'/>
            </Col>
            <Col lg={8}>
                <Row>
                    <h4 className='font-face' style={{
                        color: 'rgb(41, 120, 181)',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }}
                    >{title}</h4>
                </Row>
                <Row style={{ textAlign: 'left'}}>
                    <p className='font-face' style={{
                        fontWeight: 'lighter',
                        fontSize: 20
                    }}
                        >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Illum deleniti libero, dolores error incidunt commodi. Beatae reiciendis, 
                        laborum consequuntur excepturi esse voluptas nulla assumenda doloremque vel 
                        vero repellat. Aspernatur, sapiente.
                    </p>
                </Row>
            </Col>
        </Row>
    )
}
CustomLeftTile.prototype = {
    title: PropTypes.string,
    picture: PropTypes.any,
}

export default CustomLeftTile
