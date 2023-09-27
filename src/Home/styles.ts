import styled from "styled-components";
import zap from "../assets/7c81bd56-d313-48fc-8857-426e4f05d713.jpg"
import civil1 from "../assets/civil.jpg"
import civil2 from "../assets/civil2.jpg"


export const Foto = styled.div`
    width:100%;
    height: 900px;
    display: flex;
    align-self: center;
    background-image: url(${civil2}); 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #555555;
    border: none;
    border-style: none;
    box-sizing: border-box;
    margin: 0;
`;

export const Container = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box
`;


export const NomeContainer = styled.div`
    width: auto;
    height: auto;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    padding-top: 14px;
    transition: .5s;
    &:hover {
        transform: scale(1.1);
    }

`;

export const InfoContainer = styled.div`
    width: 100%;
    height: 600px;
    background-color: #555555;
`;

export const FotoInfo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    background-color: #555555;
    align-items: center;
    justify-content: center;
`;

export const FotoTamiao = styled.div`
    width: 400px;
    height: 400px;
    color: #fff;
    background-image: url(${zap});
    margin-right: 400px;
    border-radius: 50%;
    transition: transform .5s;
    margin-top: 40px;
    background-position: 0%, 0%;
    background-size: cover;
    &:hover {
        transform: scale(1.1);
    }
`;

export const TextoTamiao = styled.div`
    width: 600px;
    height: 300px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;

`;

export const ServiceContainer = styled.div`
    width: 100%;
    height: auto;
    background-image: url(${civil1});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    justify-content: center;
    align-items: center;
    display: grid;
`;

export const ServiceTitleContainer = styled.div`
    border-bottom: 6px solid #fff;
    width: 200px;
    height: 58px;
    justify-content: center;
    justify-self: center;
    padding-top: 50px;
    border-radius: 10%;
`;

export const ServiceTitle = styled.div`
    font-size: 44px;
    font-weight: bold;
    color: #fff;
`;

export const CardsContainers = styled.div`
    width: 1700px;
    height: 900px;
    //border: 6px solid #fff;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 50px;
`;

export const ServiceName = styled.div`
    width: auto;
    height: auto;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
    transition: .7s;
`;

export const ServiceCard = styled.div`
    width: 360px;
    height: 750px;
    border: 8px solid #fff;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 90px;
    display: grid;
    justify-items: center;
    padding-right: 2%;
    padding-left: 2%;
    transition: .7s;

    &:hover {
        transform: scale(1.05);
        background-color: black;
      
        ${ServiceName} {

        }
    }
`;


