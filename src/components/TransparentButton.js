import PropTypes from 'prop-types'
import React, { useState } from 'react';


const TransparentButton = ({text, borderRadius, onChange, id}) => {




    const [isOnClick, setClickActive] = useState(false);

    return (
       <button id={id} className='font-face' style={{
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
       
       onClick={(e) => {
        setClickActive(!isOnClick);
        onChange(e.target.id);
       }}

       >
           {text}
       </button>
    )
}


TransparentButton.prototype = {
    text: PropTypes.string,
    borderRadius: PropTypes.number,
    onChange: PropTypes.func.bind(this),
    id: PropTypes.string
}

export default TransparentButton
