import React from 'react';

import classes from './Pagination.module.css';

const Pagination = (props) => {
    const pageLinks = []

    for (let i = 1; i <= props.pages + 1; i++) {
        let active = props.currentPage === i ? 'active' : '';

        pageLinks.push(<li key={i} className={classes.Pagination} onClick={() => props.nextPage(i)}> <a href="#" activeClassName={classes.active}>{i}</a></li >)
    }

    return (
        <div>
            <ul style={{ padding: "0.5rem" }}>
                {props.currentPage > 1 ? <li className={classes.Pagination} onClick={() => props.nextPage(props.currentPage - 1)}><a href="#">Prev</a></li> : ''}
                {pageLinks}
                {props.currentPage < props.pages + 1 ? <li className={classes.Pagination} onClick={() => props.nextPage(props.currentPage + 1)}><a href="#">Next</a></li> : ''}
            </ul>
        </div >
    )
}

export default Pagination;