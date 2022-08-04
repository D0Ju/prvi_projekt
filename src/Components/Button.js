import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({Children, type, onClick, buttonStyle, buttonSize}) => {

    const checkButtonStyle = STYLES.include(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[0];
    
    return (


        <Link to='/sign-up' className ='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick = {onClick}
            type = {type}
            >
                {Children}
            </button>
        </Link> 
    )
};