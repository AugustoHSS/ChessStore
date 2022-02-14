import styled from 'styled-components';

const Input = styled.input`
    width: 90vw;
    height: 58px;
    background-color: ${props => props.isValid ? "#D5D6D6" : "#f7a8a8"};
    border-radius: 5px;
    font-size: 20px;
    line-height: 23px;
    padding-left: 15px;
    margin-bottom: 15px;
    border: 0;
`;

export default Input;
