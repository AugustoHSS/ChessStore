import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export const Container = styled.div`
    height: 100vh;
    background-color: #22272B;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        all: unset;
        margin-top: 5%;
        color: #D5D6D6;
        text-align: center;
    }
    img{
        height: 190px;
        width: 190px;
    }
    h1{
        font-family: 'Libre Franklin', sans-serif;
        color: #D5D6D6;
        font-size: 40px;
        margin-bottom: 15px;
    }
`;

export const data = {
    Component: ThreeDots,
    props: {
        height: 45,
        width: 70,
        color: '#22282C',
    },
};
