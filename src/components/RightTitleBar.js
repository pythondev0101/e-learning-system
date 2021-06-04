import React from 'react'
import {Image} from 'react-bootstrap';
import PropTypes from 'prop-types';

const  rightTitleBarSvg = require('../assets/svg/right_title_bar.svg');

const RightTitleBar = ({title}) => {
    return (
        <div>
            <div style={{
                position: 'relative',
                textAlign: 'center',
            }} >
                <Image src={rightTitleBarSvg.default} />
                
            </div>
            <div style={{
                height: '100 %',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            >{title}
            </div>
        </div>
    )
}

RightTitleBar.prototype = {
    title: PropTypes.string
}

export default RightTitleBar
