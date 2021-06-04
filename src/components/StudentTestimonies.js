import React from 'react'
import {Container,Row,Col, Image} from 'react-bootstrap'; 

const samplePic = require('../assets/images/ceo_photo.png');

const StudentTestimonies = () => {
    return (
       <Container>
           <Col>
                <Row>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Porro accusantium sint delectus beatae commodi modi id tempore cum suscipit sapiente. S
                        it, aspernatur? Nostrum, aliquid distinctio ea maxime temporibus doloribus hic?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, odit minus cum repudiandae commodi 
                        ab voluptates dolorum, animi saepe mollitia amet dolor facilis ullam sunt consequuntur distinctio! Dolor, eaque id.
                    </p>
                </Row>
                <Row>
                    <h3>Marck Demo</h3>
                </Row>
           </Col>

           <Col>
                <Image src={samplePic.default} roundedCircle />
           </Col>
       </Container>
    )
}

export default StudentTestimonies
