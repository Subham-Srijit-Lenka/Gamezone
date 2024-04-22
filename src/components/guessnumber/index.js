import { useState } from 'react'
import React from 'react'
import "./styles.css"

function Square({ value}) {
    return (
      <button className="square">
        {value}
      </button>
    );
  }
  
  const numbers = [];
  for (var i = 1; i <= 100; i++) {
      numbers.push(i);
  }

export default function GuessTheNumber() {
    const [num, setNum] = useState(0);
    const [result, setResult] = useState("");
    const [myArray, setmyArray] = useState(numbers);
    const [upperLimit, setupperLimit] = useState(100);
    const [lowerLimit, setlowerLimit] = useState(0);
    const [text, setText] = useState('Start Game')


    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
    
    const Click = () => {
        setNum(randomNumberInRange(1, 100));
        setmyArray(numbers.slice(0, 100));
        setText(text === 'Start Game' ? 'Restart' : 'Start Game')
    };


    function handleOnClick(getCurrentNumber){
        // console.log({num});

        if (getCurrentNumber===num) {
           setResult("You guessed the correct number");
        }

        if (getCurrentNumber < num) {
            setResult("Higher");
            setlowerLimit(getCurrentNumber);
            setmyArray(numbers.slice(getCurrentNumber,upperLimit));
         }


         if (getCurrentNumber > num) {
            setResult("Lower");
            setupperLimit(getCurrentNumber);
            setmyArray(numbers.slice(lowerLimit, getCurrentNumber-1));
         }

    }



    return (
        <div className="numberBox">
            <div>
                <h1 className='text-center' style={{color:'blueviolet'}}>Guess The Number</h1>
            {myArray.map((number) => {
                return <div key={number} onClick={() => handleOnClick(number)}>
                    <Square value={number} />
                </div>
            })}
            </div>
            <div className='startSection'>
            <div ><button className='startButton' onClick={Click}>{text}</button></div>
            <div className='my-4'><h2 className='text-center'>{result}</h2></div>
            </div>
        </div>
    );
}
