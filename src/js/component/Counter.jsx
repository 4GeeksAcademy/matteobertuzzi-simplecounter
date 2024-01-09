import React from 'react';

export default function Counter(value){
    return(
        <div className="mainBox d-flex justify-content-center mt-5">
            <div className="box mx-3" id="unit" value={value}>A</div>
            <div className="box mx-3" id="dec" value={value}>A</div>
            <div className="box mx-3" id="cent" value={value}>A</div>
            <div className="box mx-3" id="mil" value={value}>A</div>
            <div className="box mx-3" id="tenMil" value={value}>A</div>
            <div className="Clockbox mx-3" id="clock" value={value}>A</div>
        </div>
    )
}