import styled from "styled-components"
import "./App.css"
import StartGame from "./Components/StartGame"
import { useState } from "react"
import GamePlay from "./Components/GamePlay"
const Button = styled.button`
background-color: black;
color: white;
padding: 10px;

`

function App() {
  
  const[isGameStarted, setIsGameStarted] = useState(true)
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);  //this will reverse the state from true to false and vice-versa
  }

  return (
    <div className="main">
    {
      isGameStarted ? <GamePlay /> : <StartGame toggle ={toggleGamePlay}/>
    }
    </div>
  )
}

export default App
