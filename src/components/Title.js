import React from 'react';

function Title(props) {
    return (
        <div className="Title component">
            <h1>{props.title}</h1>
            <div className="plot">{props.plot}</div>
        </div>
    )
}

export default Title;