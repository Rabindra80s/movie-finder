import React from 'react';

import classes from './MovieInfo.module.css';

const MovieInfo = (props) => {
    return (
        <div className={classes.MovieInfo}>
            <div onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingBottom: 8 }}>
                <i className="fas fa-arrow-left"></i>
                <span style={{ marginLeft: 10 }}>Go back</span>
            </div>
            <div>
                <div>
                    {props.currentMovie.poster_path == null
                        ?
                        <img src={`http://www.bruttles.com/layout/images/NoPhotoDefault.png?1323807363`} alt="Card image" style={{ width: "100%", height: 240 }} />
                        :
                        <img src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} alt="Card image" style={{ width: "100%", height: 240 }} />}
                </div>

                <div>
                    <div>
                        <p>{props.currentMovie.title}</p>
                        <p>{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
                        <p>{props.currentMovie.overview}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieInfo;