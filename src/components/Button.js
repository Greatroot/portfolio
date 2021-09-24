import React from 'react';
import {Link} from "react-router-dom";

const Button = ({ link }) => {
    return (
        <div>
            <Link to={link} className='' >This is a button</Link>
        </div>
    );
};

export default Button;