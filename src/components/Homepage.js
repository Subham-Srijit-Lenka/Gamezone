import React from 'react'
import Cards from './others/cards'
import "./guessnumber/styles.css"

import img1 from '/Users/srijit/Documents/GameZone/gamezone/src/components/image/tictactoe.jpg'
import img2 from '/Users/srijit/Documents/GameZone/gamezone/src/components/image/snake.jpg'
import img3 from '/Users/srijit/Documents/GameZone/gamezone/src/components/image/guessthenumber.jpg'



export default function HomePage() {
  return (
    <div className='allCardContainer'>
        <Cards title = "Tic-Tac-Toe" visit = "./tictactoe" imgURL = {img1} message="Play tic tac toe with friends" />
        <Cards title = "Snake Game" visit = "./snakegame" imgURL= {img2} message="Try to score more..."/>
        <Cards title = "Guess The Number" visit = "./guessthenumber" imgURL= {img3} message="Guess the correct number and Win" />
    </div>
  )
}
