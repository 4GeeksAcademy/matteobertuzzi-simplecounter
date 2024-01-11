import React from 'react';
import { useState, useEffect } from 'react';


export default function Counter(){
    
    const [seconds,setSeconds]= useState(0);
    const [firstDigit, setFirstDigit] = useState(0);
    const [secondDigit, setSecondDigit] = useState(0);
    const [thirdDigit, setThirdDigit] = useState(0);
    const [fourthDigit, setFourthDigit] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
        setSeconds(prevSecond => prevSecond +1);
        },1000)}, [])

    useEffect(()=>{
        let stringValue = seconds.toString();
        if (seconds < 10){
            setFirstDigit(stringValue.charAt(0));
        }
        if (seconds >= 10 || seconds < 100){
            setFirstDigit(stringValue.charAt(1));
            setSecondDigit(stringValue.charAt(0));
        }
        if (seconds == 60){
            alert('1 minute passed!')
        }
        if (seconds >= 100 || seconds < 1000){
            setFirstDigit(stringValue.charAt(2));
            setSecondDigit(stringValue.charAt(1));
            setThirdDigit(stringValue.charAt(0));
            }
        if (seconds == 600){
            alert('10 minute passed!')
        }
        if (seconds >= 1000 || seconds < 10000){
            setFirstDigit(stringValue.charAt(3));
            setSecondDigit(stringValue.charAt(2));
            setThirdDigit(stringValue.charAt(1));
            setFourthDigit(stringValue.charAt(0))
            }
    }, [seconds]);

function resetTimer(){
    setSeconds(0);
}
    return(
        <>
            <div className="mainBox d-flex justify-content-center mt-5">
                <div className="clockbox mx-3" id="unit"><i className="fa-regular fa-clock" style={{color: '#ffffff'}}></i></div>
                <div className="box mx-3" id="fourth" >{fourthDigit?fourthDigit:0}</div>
                <div className="box mx-3" id="third" >{thirdDigit?thirdDigit:0}</div>
                <div className="box mx-3" id="sec" >{secondDigit?secondDigit:0}</div>
                <div className="box mx-3" id="first" >{firstDigit?firstDigit:0}</div>
            </div>
                <div className="d-flex justify-content-center my-5">
                <button type="button" className="btn btn-danger mx-3">Stop</button>
                <button type="button" className="btn btn-warning mx-3">Resume</button>
                <button type="button" className="btn btn-success mx-3" onClick={resetTimer}>Reset</button>
            </div>
        </>
    )
}
