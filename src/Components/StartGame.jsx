import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'


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
  @media (max-width: 880px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div img{
      @media (max-width: 880px) {
        width: 400px;  
      }
      @media (max-width: 500px) {
        width: 300px;  
      }
  }

  .content {
    padding-right: 80px;
    display: flex;
    flex-direction: column;
    align-items: end;
    @media (max-width: 880px) {
        align-items: center;
        padding-right: 0px;
      }
    h1 {
      font-size: 96px;
      white-space: nowrap;
      @media (max-width: 880px) {
        font-size: 50px;
      }
      @media (max-width: 880px) {
        font-size: 30px;
      }
    }
  }
`;

