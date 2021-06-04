import React from 'react';
import {Image, Col, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';


const CustomRightTile = ({title, picture}) => {
    return (
        <Row lg={12}>
            <Col lg={7}>
                <Row style={{paddingLeft: 400}}>
                    <h4 className='font-face' style={{
                        color: 'rgb(41, 120, 181)',
                        fontWeight: 'bold',
                        fontSize: 30,
                    }}
                    >{title}</h4>
                </Row>
                <Row style={{textAlign: 'right'}}>
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
            <Col lg={5}>
                <Image src={picture} width='100%'/>
            </Col>
        </Row>
    )
}

CustomRightTile.prototype = {
    title: PropTypes.string,
    picture: PropTypes.any,
}

export default CustomRightTile
