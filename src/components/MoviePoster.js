import React from 'react';

function MoviePoster(props) {
    return (
        <div className="MoviePoster component">
            <img src={props.img} alt="" onClick={() => props.setSelectedMovieIndex(props.index)}/>
        </div>
    )
}

export default MoviePoster;
