import React from 'react'
import styled from 'styled-components'


const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img src="/dices.png" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick = { toggle }>Play Now</Button>
            </div>
        </Container>
    )
}

export default StartGame

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
    padding: 10px 18px;
    max-width: 220px;
    min-width: 220px;
    border: none;
    background-color: black;
    border-radius:5px;
    color: white;
    cursor: pointer;
    border: 1px solid black;
    transition: 0.2s ease-in;
  &:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s ease-in;
  }
`;