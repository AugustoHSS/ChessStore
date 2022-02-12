import styled from 'styled-components'

const Button = styled.button`
  all: unset;

  transition: background-color 0.4s;

  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 15px 20px;

  font-size: 1.5rem;
  font-weight: 400;

  color: #22272b;
  background-color: #fcd12c;
  border-radius: 20px;

  img {
    width: 30px;
    height: 30px;
  }

  :hover {
    transition: background-color 0.4s;
    background-color: #bba139;
    cursor: pointer;
  }

  :disabled {
    opacity: 0.5;
  }
`
const OptionsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding-bottom: 20px;
`

const Option = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  padding: 15px 20px;

  width: 90%;
  border-radius: 20px;
  background-color: #31363c;

  img {
    width: 30px;
    height: 30px;
  }

  h2 {
    color: #d5d6d6;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
  }

  :hover {
    cursor: pointer;
  }
`

const SelectFirstDot = styled.div`
  margin-left: auto;

  width: 15px;
  height: 15px;

  background-color: ${(props) => (props.selected > 0 ? '#fcd12c' : '#22272b')};

  border-radius: 50%;
  border: 1px solid #fcd12c;
`
const SelectSecondDot = styled.div`
  margin-left: auto;

  width: 15px;
  height: 15px;

  background-color: ${(props) => (props.selected < 0 ? '#fcd12c' : '#22272b')};

  border-radius: 50%;
  border: 1px solid #fcd12c;
`

export { Button, OptionsContainer, Option, SelectFirstDot, SelectSecondDot }
