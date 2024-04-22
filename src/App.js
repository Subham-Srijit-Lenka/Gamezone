import './App.css';
import GuessTheNumber from './components/guessnumber';
import Navbar from './components/Navbar';
import SnakeGame from './components/snakegame';
import TicTacToe from './components/tictactoe';
import HomePage from './components/Homepage';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
            <HomePage />
            </Route>
            <Route exact path="/tictactoe">
              <TicTacToe />
            </Route>
            <Route exact path="/guessthenumber">
              <GuessTheNumber />
            </Route>
            <Route exact path="/snakegame">
              <SnakeGame />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
