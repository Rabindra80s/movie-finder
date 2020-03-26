import React from 'react';

import classes from './Search.module.css';

const SearchArea = (props) => {
    return (
        <div className={classes.Search}>
            <div>
                <section>
                    <form action="" onSubmit={props.searchMovie}>
                        <div>
                            <input className={classes.Form} placeholder="Search movie" type="text" onChange={props.inputChange} />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchArea;