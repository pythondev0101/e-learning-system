import React from 'react';
import {Image, Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CustomLeftTile.css';

const CustomRightTile = ({title, picture}) => {
    return (
        <>
            <div className='tile-container'>
                <Row lg={12}>
                <Col lg={7}>
                    <Row lg='fluid' md='fluid' xs='fluid'>
                        <h4 className='font-face'>{title}</h4>
                    </Row>
                    <Row lg='fluid' md='fluid' xs='fluid'>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Illum deleniti libero, dolores error incidunt commodi. Beatae reiciendis, 
                            laborum consequuntur excepturi esse voluptas nulla assumenda doloremque vel 
                            vero repellat. Aspernatur, sapiente.
                        </p>
                    </Row>
                </Col>
                <Col lg='fluid' md='fluid' xs='fluid'>
                    <Image src={picture} />
                </Col>
                </Row>
            </div>
        </>
    )
}

CustomRightTile.prototype = {
    title: PropTypes.string,
    picture: PropTypes.any,
}

export default CustomRightTile
