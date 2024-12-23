import { useState } from 'react'
import './App.css'
import './assets/style.css'
import Header from './header'
import Oldplayer from './Oldplayer'
import Newplayer from './Newplayer'

function App() {
  const [players, setPlayer] = useState([]);

  const addnewPlayer = (value) => {
    setPlayer([...players, value]);
};

  return (
    <div className="scoreboard">
      <Header />
      <Oldplayer players={players}/>
      <Newplayer player={players} addnewPlayer={addnewPlayer}/>
    </div>
  )
}
  
export default App
