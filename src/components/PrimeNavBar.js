import {Image,Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import TransparentButton from './TransparentButton';

const primeLogo = require('../assets/icons/prime_logo.png');

const PrimeNavBar = (onClick) => {
    return (
        <Row lg={12} md={12}>
            <Col lg={1} md={1}>
                <Image src={primeLogo.default} style={{width: '100%'}} />
            </Col>
            <Col lg={5} md={5} style={{marginRight: 0, marginTop: 30}}>
                <h3 className='font-face' style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: 'white'
                }}
                >Prime Language Tech. Center Inc.</h3>
            </Col>
            <Col lg={1} md={1} style={{ marginTop: 30 }}> 
                <TransparentButton text='Home' borderRadius={20} onClick={onClick} id='HomePage'/>
            </Col>
            <Col lg={1}md={1} style={{ marginRight: 10, marginTop: 30}}>
                <TransparentButton text='Services' borderRadius={20} onClick={onClick} id='ServicesPage'/>
            </Col>
            <Col lg={1} md={1} style={{ marginRight: 30, marginTop: 30}}>
                <TransparentButton text='Testimonies' borderRadius={20} onClick={onClick} id='TestimoniesPage'/>
            </Col>
            <Col lg={1} md={1} style={{ marginTop: 30}}>
                <TransparentButton text='Branches' borderRadius={20} onClick={onClick} id='BranchesPage'/>
            </Col>
        </Row>
    )
}

PrimeNavBar.prototype = {
    onClick: PropTypes.func.bind(this)
}

export default PrimeNavBar
