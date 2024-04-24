import React from 'react'
import Cards from './others/cards'
import "./guessnumber/styles.css"

export default function HomePage() {
  return (
    <div className='allCardContainer'>
        <Cards title = "Tic-Tac-Toe" visit = "./tictactoe" imgURL = './image/tictactoe.jpg' message="Play tic tac toe with friends" />
        <Cards title = "Snake Game" visit = "./snakegame" imgURL= './image/snake.jpg' message="Try to score more..."/>
        <Cards title = "Guess The Number" visit = "./guessthenumber" imgURL= './image/guessthenumber.jpg' message="Guess the correct number and Win" />
    </div>
  )
}

