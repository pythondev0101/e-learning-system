import PropTypes from 'prop-types'
import './TransparentButton.css';

const TransparentButton = ({text, borderRadius, onTap, isOnClick}) => {
    return (
       <button style={{
        backgroundColor: isOnClick ?'white' : 'transparent',
        border: isOnClick? '2px solid transparent' : '2px solid rgb(138, 182, 214)',
        borderRadius: borderRadius,
        color: isOnClick ? 'black':'white',
        textDecoration: 'none'
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
