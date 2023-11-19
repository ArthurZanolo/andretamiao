import styled from "styled-components";
import ArrowBottom from "../../assets/Arrow_bottom.png"
import TopArrow from "../../assets/Arrow_top.png"


export const LerMaisButton = styled.button`
    background-color: #ff0000;
    background-image: url(${ArrowBottom});
    border-radius: 5px;
    color: white;
    cursor: pointer;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 35px;
    width: 70px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
`;

export const LerMenosButton = styled.button`
    background-color: #ff0000;
    background-image: url(${TopArrow});
    border-radius: 5px;
    color: white;
    cursor: pointer;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 35px;
    width: 70px;
    border: none;
    font-size: 18px;
    font-weight: bold;
    align-self: center;
    justify-self: center;
`;

export const ContentContainer = styled.div`
    width: 400px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    //background-color: orange;
    row-gap: 10px;
`;