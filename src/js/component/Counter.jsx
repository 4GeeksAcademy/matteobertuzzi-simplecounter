import React from 'react';
import { useState, useEffect } from 'react';

export default function Counter(){
    // 1. Declare states.

    const [unit,setUnit]= useState(0);
    const [decimal, setDecimal] = useState(0);
    const [cent, setCent] = useState(0);
    const [thousands, setThousands] = useState(0);

    const countValue = 0;

    function startInterval(countValue){
        countValue++;
        const countString = countValue.toString();
        if (countValue < 10){
            const firstDigit = countString.charAt(0);
            setUnit(firstDigit);
            console.log(firstDigit);
        }
        if ((countValue >= 10) || (countValue < 100)){
            const secDigit = countString.charAt(1);
            setDecimal(secDigit);
        }
        if ((countValue >= 100) || (countValue < 1000)){
            const thirdDigit = countString.charAt(2);
            setCent(thirdDigit);
        }
        if ((countValue >= 1000) || (countValue < 10000)){
            const fourthDigit = countString.charAt(3);
            setThousands(fourthDigit);
        }
    }

    useEffect(()=>{
        const interval = setInterval(startInterval(countValue), 1000);
    }, [unit, decimal, cent, thousands])

    function stopInterval(){
        clearInterval(interval);
    }

    return(
        <div className="mainBox d-flex justify-content-center mt-5">
            <div className="clockbox mx-3" id="unit"><i className="fa-regular fa-clock"></i></div>
            <div className="box mx-3" id="dec">0</div>
            <div className="box mx-3" id="dec">{thousands}</div>
            <div className="box mx-3" id="dec">{cent}</div>
            <div className="box mx-3" id="dec">{decimal}</div>
            <div className="box mx-3" id="dec">{unit}</div>
        </div>
    )
}
