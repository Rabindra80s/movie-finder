import React from 'react';

import Movie from './Movie/Movie';
import classes from './MovieList.module.css';

const MovieList = (props) => {
    return (
        <div className={classes.MovieList}>
            {
                props.movies.map((movie, i) => {
                    return (
                        <Movie key={i} viewMovieInfo={props.viewMovieInfo} movieId={movie.id} image={movie.poster_path} />
                    )
                })
            }
        </div>
    )
}

export default MovieList;