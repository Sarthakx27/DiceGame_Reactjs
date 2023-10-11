import styled from "styled-components";

export const Button = styled.button`
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

export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black; 
color: black;
    &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
   
  }
`;