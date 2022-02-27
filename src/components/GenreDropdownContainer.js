import React from 'react';

function GenreDropdownContainer(props) {
    return (
        <div className="GenreDropdownContainer component">
            <select name="genre" id="genre" onChange={event => props.filterMovies((event.target.value))}>
                <option key="0" value="Genre">Genre</option>
                {props.genreData.map((genre, index) => {
                    return <option key={index} value={genre}>{genre}</option>;
                })}
            </select>
        </div>
    )
}

export default GenreDropdownContainer;