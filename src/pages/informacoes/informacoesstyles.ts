import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #555555;
    box-sizing: border-box;
    
`;

export const ModalCloseButton = styled.button`
    color: #fff;
    background-color: transparent;
    margin-left: 40px;
    margin-top: 40px;
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
    border: 3px solid #fff;
    transition: .9s;
    &:hover {
        background-color: #ff0000;
        border-color: #ff0000;
        
    }
`;


export const CardsSubContainer = styled.div`
    width: 1500px;
    min-height: 90vh;  
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center; 
    margin: 0 auto;
    background-color: #555555;
`;



export const ServiceMainName = styled.div`
    font-size: 44px;
    font-weight: bold;
    color: #fff;
    justify-self: center;
`;

export const ServiceTitle = styled.div`
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    margin-top: 1%;
    margin-left: .5%;
    transition: .5s;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    width: 200px;
    &:hover {
        color: red;
    }
`;

export const ServiceDescription = styled.div`
    font-size: 24px;
    color: #fff;
    margin-top: .5%;
    font-weight: bold;
`;

export const CivelContainer = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(1, 3fr);
    padding-top: 2%;

`;

export const ConsumidorContainer = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    display: grid;
    padding-top: 2%;
    grid-template-columns: repeat(1, 3fr);

`;

export const CriminalContainer = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;

    align-self: center;
    justify-self: center;
    display: grid;
    padding-top: 2%;
    grid-template-columns: repeat(1, 3fr);

`;

export const PrevidenciarioContainer = styled.div`
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    padding-bottom: .5%;
    align-self: center;
    justify-self: center;
    display: grid;
    padding-top: 2%;
    grid-template-columns: repeat(1, 3fr);

`;
export {};

