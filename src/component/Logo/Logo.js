import React from 'react';

import logo from '../../assets/img/logo.jpg';
import classes from './Logo.module.css';

const Logo = props => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt='moviefinder' />
        </div>
    );
};

export default Logo;