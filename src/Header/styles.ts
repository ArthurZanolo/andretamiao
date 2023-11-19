import styled from "styled-components";
import logo from "../assets/logodireito.png"



export const Container = styled.header`
    width: 100%;
    height: 80px;
    background-color: #000000;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
`;

export const GuiasContainer = styled.div`
    width: auto;
    height: auto;
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 50px;
   
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        
}
`;


export const AndréTamião = styled.div`
    font-size: 26px;
    font-weight: bold;
    color: #fff;
    transition: .5s;
    cursor: pointer;
    text-align: center;
    &:hover {
        color: red;
    }

    @media (max-width: 768px) {
        display: none;
}
`;

export const Logo = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    margin: 0;
    background-image: url(${logo});
    background-position: center;
    background-size: cover;
    border: none;
    border-style: none;
    color: black;
    background-color: black;
    box-sizing: border-box;
    align-self: center;
    justify-self: center;
`;