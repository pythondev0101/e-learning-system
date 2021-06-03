import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import React, { useState } from 'react';


const TransparentButton = ({text, borderRadius}) => {


    const onClick = (e) =>{
        console.log('click');
        setClickActive(!isOnClick);
        console.log(e);
    }

    const [isOnClick, setClickActive] = useState(false);

    return (
       <button className='font-face' style={{
        backgroundColor: isOnClick ?'white' : 'transparent',
        border: isOnClick? '2px solid transparent' : '2px solid rgb(138, 182, 214)',
        color: 'black',
        padding: '3px 15px',
        fontWeight: 'bold',
        textAlign: 'center',
        textDcoration: 'none',
        display: 'inline-block',
        margin: '4px 2px',  
        cursor: 'pointer',
        borderRadius: borderRadius,
        color: isOnClick ? 'black':'white',
       }}
       
       onClick={onClick}

       >
           {text}
       </button>
    )
}


TransparentButton.prototype = {
    
    text: PropTypes.string,
    borderRadius: PropTypes.number
}

export default TransparentButton
