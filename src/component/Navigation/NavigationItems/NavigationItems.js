import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Movies</NavigationItem>
            <NavigationItem link="/favorites">Favorites</NavigationItem>
            < NavigationItem link="/contact">Contact</NavigationItem>
        </ul >
    );
};

export default NavigationItems;