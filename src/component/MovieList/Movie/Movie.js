import React from 'react';

const Movie = (props) => {
    return (
        <div>
            <div>
                <div>
                    {
                        props.image == null
                            ?
                            <img src={`http://www.bruttles.com/layout/images/NoPhotoDefault.png?1323807363`} alt="Card image" style={{ width: "100%", height: 360 }} />
                            :
                            <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image" style={{ width: "100%", height: 360 }} />
                    }
                </div>
                <div className>
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;