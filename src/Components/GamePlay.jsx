import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number")
      return
    }   //if nothing is selected then return

    const randomNumber = generateRandomNumber(1, 7)
    setCurrentDice((prev) => randomNumber)

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }
    setSelectedNumber(undefined)
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RoleDice currentDice={currentDice}
        rollDice={rollDice} />
      <div className="btns">
        <OutlineButton
          onClick={resetScore}
        >Reset</OutlineButton>
        <Button
          onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
padding-top: 50px;
max-width: 90%;
  height: 100vh;
  margin: 0 auto;
  .top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin-bottom: 40px;
  }

`
