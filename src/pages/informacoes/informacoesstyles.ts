import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    background-color: black;
    display: flex;

`;

export const ModalCloseButton = styled.button`
    color: #ff0000;
    background-color: #fff;
    margin-left: 20px;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    height: 45px;
    width: 90px;
    border: none;
    font-size: 19px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    position: absolute;
    border: 2px solid #ff0000;
`;

export const CardsContainer = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

export const CardsSubContainer = styled.div`
    width: 1500px;
    height: 1600px;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
    margin-top: 200px;
    align-self: center;
    justify-self: center; 
    margin: 200px auto;
`;

export {};