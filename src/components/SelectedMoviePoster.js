import React from 'react';

function SelectedMoviePoster(props) {
    return (
        <div className="SelectedMoviePoster component">
            <img src={props.img} alt=""/>
        </div>
    )
}

export default SelectedMoviePoster;