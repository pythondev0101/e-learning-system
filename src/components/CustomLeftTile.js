import React from 'react';
import {Image, Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CustomLeftTile.css';


const CustomLeftTile = ({title, picture}) => {
    return (
        <>
            <div className='tile-container'>
                <Row lg={12}>
                <Col lg={4} xs={12}>
                    <img src={picture}/>
                </Col>
                    <Col lg={8}>
                        <Row xs={12}>
                            <h4 className='font-face'>{title}</h4>
                        </Row>
                        <Row style={{ textAlign: 'left'}} xs={12}>
                            <p className='font-face'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Illum deleniti libero, dolores error incidunt commodi. Beatae reiciendis, 
                                laborum consequuntur excepturi esse voluptas nulla assumenda doloremque vel 
                                vero repellat. Aspernatur, sapiente.
                            </p>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
}
CustomLeftTile.prototype = {
    title: PropTypes.string,
    picture: PropTypes.any,
}

export default CustomLeftTile
