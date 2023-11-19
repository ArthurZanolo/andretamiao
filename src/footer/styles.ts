import styled from "styled-components";
import facebook from "../assets/facebook.png"
import whatsapp from "../assets/whatsapp.png"
import instagram from "../assets/instagram.png"
import maps from "../assets/maps.png"
import tiktok from "../assets/tiktok.png"
import juridico from "../assets/juridico.png"
import logo from "../assets/logodireito.png"

export const Container = styled.div`
    width: 100%;
    height: 170px;
    background-color: black;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 50px;

    @media (max-width: 768px) {
        height: auto;
        grid-template-columns: repeat(1, 3fr);
}
`;

export const SocialContainer = styled.div`
    width: 400px;
    height: 75px;
   // border: 2px solid #fff;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 30px;
    row-gap: 50px;
    padding-left: 20%;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 3fr);
        row-gap: 30px;
        column-gap: 0px;
        margin: 0 auto;
}
`;

export const FacebookIcon = styled.div`
    cursor: pointer;
    width: 55px;
    height: 55px;
    background-image: url(${facebook});
    border-radius: 50%;
    transition: transform .5s;
    background-position: 0%, 0%;
    background-size: cover;
    &:hover {
        transform: scale(1.3);
    }

    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
}
`;

export const InstagramIcon = styled.div`
    cursor: pointer;
    width: 55px;
    height: 55px;
    background-image: url(${instagram});
    border-radius: 50%;
    transition: transform .5s;
    background-position: 0%, 0%;
    background-size: cover;
    &:hover {
        transform: scale(1.3);
    }

    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
}
`;

export const WhatsappIcon = styled.div`
    cursor: pointer;
    width: 55px;
    height: 55px;
    background-image: url(${whatsapp});
    border-radius: 50%;
    transition: transform .5s;
    background-position: 0%, 0%;
    background-size: cover;
    &:hover {
        transform: scale(1.3);
    }

    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
}
`;

export const MapsIcon = styled.div`
    cursor: pointer;
    width: 55px;
    height: 55px;
    background-image: url(${maps});
    border-radius: 50%;
    transition: transform .5s;
    background-position: 0%, 0%;
    background-size: cover;
    &:hover {
        transform: scale(1.3);
    }

    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
}
`;

export const TiktokIcon = styled.div`
    cursor: pointer;
    width: 55px;
    height: 55px;
    background-image: url(${tiktok});
    border-radius: 50%;
    transition: transform .5s;
    background-position: 0%, 0%;
    background-size: cover;
    &:hover {
        transform: scale(1.3);
    }

    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
}
`;


export const JuridicoIcon = styled.div`
    cursor: pointer;
    width: 55px;
    height: 55px;
    background-image: url(${juridico});
    border-radius: 50%;
    transition: transform .5s;
    background-position: 0%, 0%;
    background-size: cover;
    &:hover {
        transform: scale(1.3);
    }

    @media (max-width: 768px) {
        width: 70px;
        height: 70px;
}
`;

export const LastContainer = styled.div`
    width: 500px;
    height: 100px;
    //border: 2px solid black;
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 5px;
    padding: 2%;

    @media (max-width: 768px) {
        margin: 0 auto;
        padding-top: 25%;
}
`;

export const LastContainerTextContainer = styled.div`
    width: auto;
    height: auto;
    align-items: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    

`;

export const LastContainerText = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: center;
`;

export const Logo2 = styled.div`
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

    @media (max-width: 768px) {
        display: none;
}
`;

export const TextSpan = styled.div`
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding-top: 5%;

    @media (min-width: 768px) {
        display: none;
}
`;