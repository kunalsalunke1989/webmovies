import React from 'react';

function MovieMetadata(props) {
    return (
        <div className="MovieMetadata component">
            <li><span className="metadata">Released</span>: {props.metadata.Released}</li>
            <li className="plot"><span className="metadata">Plot</span>: {props.metadata.Plot}</li>
            <li><span className="metadata">Rating</span>: {props.metadata.Rating}</li>
            <li><span className="metadata">Director</span>: {props.metadata.Director}</li>
            <li><span className="metadata">Actors</span>: {props.metadata.Actors}</li>
        </div>
    )
}

export default MovieMetadata;