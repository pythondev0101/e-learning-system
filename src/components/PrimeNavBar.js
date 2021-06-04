import {Image,Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

const primeLogo = require('../assets/icons/prime_logo.png');

const PrimeNavBar = () => {
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
        </Row>
    )
}

PrimeNavBar.prototype = {
    onClick: PropTypes.func.bind(this)
}

export default PrimeNavBar
