import React from 'react';
import { useState, useEffect } from 'react';

export default function Counter(value){
    const [seconds,setSeconds] = useState(0);


    useEffect(setSeconds((seconds)=>{
       prevSeconds => setInterval(()=>{
                prevSeconds+=1
            },1000)
            if (seconds === 100){
                setSeconds(0);
            }
        }))
  


    return(
        <div className="mainBox d-flex justify-content-center mt-5">
            <div className="clockbox mx-3" id="unit"><i className="fa-regular fa-clock"></i></div>
            <div className="box mx-3" id="dec">{seconds}</div>
            <div className="box mx-3" id="dec">{seconds}</div>
            <div className="box mx-3" id="dec">{seconds}</div>
            <div className="box mx-3" id="dec">{seconds}</div>
            <div className="box mx-3" id="dec">{seconds}</div>
        </div>
    )
}