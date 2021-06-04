import PrimeNavBar from './PrimeNavBar';
import PrimeBanner from './PrimeBanner';
import TransparentButton from './TransparentButton';
import PropTypes from 'prop-types';
import { useCallback, useState } from "react";

const Header = () => {
    return (
        <div>
            <div>
                <PrimeBanner />
            </div>
            <div style={{position: 'absolute', top: 20, left: 150, margin: '30px'}}>
                <PrimeNavBar/>
            </div>
            <dir style={{position: 'absolute', top: 200, left: 50, margin: '30px'}}>
                <h1 className='font-face' style={{
                    fontSize: 50,
                    color: 'white',
                }}
                >Lorem ipsum dolor</h1>
                <br />
                <div fluid style={{width: '800px'}}>
                    <p className='font-face' style={{
                        fontSize: 20,
                        fontWeight: 'lighter',
                        color: 'white'
                    }}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <TransparentButton text='Pre Register' borderRadius={10} />
            </dir>
        </div>
        
    )
}



export default Header
