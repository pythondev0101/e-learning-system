import React from 'react'
import {Row,Col, Image} from 'react-bootstrap';
import PropTypes from 'prop-types';


const StudentTestimonies = ({fullName, picture }) => {
    return (
        <Row lg={12}>
            <Col lg={8}>
                 <Row>
                        <p className='font-face'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Porro accusantium sint delectus beatae commodi modi id tempore cum suscipit sapiente. S
                            it, aspernatur? Nostrum, aliquid distinctio ea maxime temporibus doloribus hic?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit minus cum repudiandae commodi 
                            ab voluptates dolorum, animi saepe mollitia amet dolor facilis ullam sunt consequuntur distinctio! Dolor, eaque id.
                        </p>
                    </Row>
                    <Row style={{paddingLeft: 500}}>
                        <h3  className='font-face' style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: 'rgb(41, 120, 181)',
                        }}
                        >{fullName}</h3>
                    </Row>
            </Col>

            <Col lg={4}>
                <Image src={picture} roundedCircle  width='300px' height='300px'/>
            </Col>
        </Row>
    )
}

StudentTestimonies.prototype = {
    fullName: PropTypes.string,
    picture: PropTypes.any,
}

export default StudentTestimonies
