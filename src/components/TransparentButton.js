import PropTypes from 'prop-types'


const TransparentButton = ({text, borderRadius, onTap, isOnClick}) => {
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
       
       onClick={onTap}

       >
        {text}
       </button>
    )
}


TransparentButton.prototype = {
    text: PropTypes.string,
    borderRadius: PropTypes.number,
    onTap: PropTypes.func,
    isOnClick: PropTypes.bool
}

export default TransparentButton
