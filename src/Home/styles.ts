import styled from "styled-components";
import zap from "../assets/7c81bd56-d313-48fc-8857-426e4f05d713.jpg"
import civil1 from "../assets/civil.jpg"
import civil2 from "../assets/civil2.jpg"
import direitocivel from "../assets/civil.png"
import direitoconsumidor from "../assets/consumidor.png"
import criminal from "../assets/criminal.png"
import previdenciario from "../assets/previdenciario.png"
import whatsapp from "../assets/whatsapp.png"
import loas from "../assets/BPCLOASIcon.png"
import pensao from "../assets/pensaomorteicon.png"
import auxilio from "../assets/auxilio.png"
import revisao from "../assets/revisao.png"
import policial from "../assets/policial.png"
import folha from "../assets/folha.png"
import violencia from "../assets/violência.png"
import vendacasada from "../assets/vendacasada.png"
import recusa from "../assets/recusa.png"
import cartao from "../assets/cartao.png"
import civelcontrato from "../assets/civelcontrato.png"
import civelfamilia from "../assets/civelfamilia.png"
import civelcontrato2 from "../assets/civelcontrato2.png"


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

    @media (max-width: 768px) {
    height: 400px;
    position: relative;
    background-attachment: scroll;
    transform: scaleX(-1);
    background-position: 100%;
  }
`;

export const TamiaoCard = styled.div`
    width: 360px;
    height: 750px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    display: grid;
    grid-template-columns: repeat(1, 3fr);
    gap: 0;
    justify-items: center;
    padding-right: 2%;
    padding-left: 2%;
    margin-left: 50px;
    margin-top: 50px;
    background-color: black;
    transition: .7s;

    &:hover {
        transform: scale(1.05);
      
    }

`;

export const Container = styled.div`
    width: 100%;
    height: auto;
    
`;


export const NomeContainer = styled.div`
    width: 100px;
    height: auto;
    align-self: center;
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
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    align-items: center;
    justify-content: center;
    
    @media (max-width: 768px) {
    justify-self: center;
    height: 400px;
    grid-template-columns: repeat(1, 2fr);
  }
`;

export const FotoInfo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    margin: 0 auto;
  }
`;

export const FotoTamiao = styled.div`
    width: 400px;
    height: 400px;
    color: #fff;
    background-image: url(${zap});
    margin-right: 180px;
    border-radius: 50%;
    transition: transform .5s;
    margin-top: 40px;
    background-position: 0%, 0%;
    background-size: cover;
    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    margin: 0 auto;

  }
    
`;

export const TextoTamiao = styled.div`
    width: 600px;
    height: 300px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;

  @media (max-width: 768px) {
        margin: 0 auto;
        padding-top: 3%;
        width: 300px;
}

@media (max-width: 420px) {
        margin: 0 auto;
        padding-top: 3%;
        padding-left: 6%;
}
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

    @media (max-width: 768px) {
    position: relative;
    background-attachment: scroll;
    background-position: 44%;
}
`;

export const ServiceTitleContainer = styled.div`
    
    width: 175px;
    height: 58px;
    justify-content: center;
    justify-self: center;
    padding-top: 50px;
    

    @media (max-width: 768px) {
     width: 140px;
     height: auto;
     padding-top: 25px;
}
`;

export const ServiceTitle = styled.div`
    font-size: 44px;
    font-weight: bold;
    color: #fff;
    border-bottom: 6px solid #fff;
    border-radius: 18%;


    @media (max-width: 768px) {
       font-size: 36px;
    
}
`;

export const CardsContainers = styled.div`
    width: 1700px;
    height: 730px;
    //border: 6px solid #fff;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 30px;
    row-gap: 50px;

    @media (max-width: 768px) {
        margin-top: 40px;
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: repeat(1, 4fr);
        column-gap: 20px;
        row-gap: 20px;
}
`;

export const ServiceName = styled.div`
    width: auto;
    height: auto;
    font-size: 44px;
    font-weight: bold;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 28px;

}
    
`;

export const ServiceCard = styled.div`
    width: 360px;
    height: 360px;
    background-color: #555555;
    border-radius: 2%;
    //border: 5px solid #fff;
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
      
        ${ServiceName} {

        }
    }

    @media (max-width: 768px) {
        width: 300px;
        height: 220px;
        font-size: 18px;
        margin: 0;
        margin-bottom: 0;
}
    
`;

export const FotoTamiao2 = styled.div`
    width: 300px;
    height: 300px;
    border: 4px solid #fff;
    background-image: url(${zap});
    transition: transform .5s;
    margin-top: 40px;
    background-position: 0%, 0%;
    background-size: cover;
`;

export const CustomSpan = styled.div`
    width: auto;
    height: auto;
    font-size: 27px;
    font-weight: bold;
    color: #fff;
    justify-self: center;
    text-align: center;
`;

export const SaibaMais = styled.button`
    background-color: #ff0000;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    height: 60px;
    width: 120px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    transition: .7s;
    &:hover {
        background-color: #990000;
        border: #990000;
    }
    

    @media (max-width: 768px) {
        width: 120px;
        height: 40px;
        font-size: 18px;
}
`;

export const CivelIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${direitocivel});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 20px; 

    @media (max-width: 768px) {
        width: 75px;
        height: 90px;
}
`;

export const ConsumidorIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${direitoconsumidor});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 20px; 

    @media (max-width: 768px) {
        width: 75px;
        height: 90px;
}
`;

export const CriminalIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${criminal});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 20px; 

    @media (max-width: 768px) {
        width: 75px;
        height: 90px;
}
`;

export const PrevidenciarioIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${previdenciario});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 20px; 

    @media (max-width: 768px) {
        width: 75px;
        height: 90px;
}
`;

export const CivelContratoIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${civelcontrato});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 20px; 

    @media (max-width: 768px) {
        width: 75px;
        height: 90px;
}
`;

export const CivelContrato2Icon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${civelcontrato2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 20px; 

    @media (max-width: 768px) {
        width: 75px;
        height: 90px;
}
`;

export const CivelFamiliaIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${civelfamilia});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-top: 20px; 

    @media (max-width: 768px) {
        width: 75px;
        height: 90px;
}
`;

export const ModalContentText = styled.span`
    text-align: left;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    padding: 4%;
    margin-left: 35px;
    
    @media (max-width: 768px) {
        height: auto;
        width: 400px;
    }

    @media (max-width: 525px) {
        width: 260px;

    }
`;

export const ModalContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;

    @media (max-width: 768px) {
       
    }
`;

export const ModalContent = styled.div`
    width: 1600px;
    height: 900px;
    background-color: #555555;
    position: absolute;
    justify-content: center;
    align-items: center;
    display: grid;
    justify-items: center;

    @media (max-width: 768px) {
        width: 500px;
        height: 800px;
    }

    @media (max-width: 525px) {
        width: 400px;
        height: 500px;
    }

    @media (max-width: 420px) {
        width: 340px;
        height: 500px;
    }
`;

export const ModalCardsContainer = styled.div`
    width: 1500px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
    row-gap: 50px;
    justify-items: center;
    margin-bottom: 600px;

    @media (max-width: 768px) {
        width: 600px;
        row-gap: 0px;
        column-gap: 0px;
        display: none;
        
    }
`;


export const InformativeCard1 = styled.div`
    width: 400px;
    height: 200px;
    background-color: #555555;
    border-radius: 2%;
   // border: 5px solid black;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 90px;
    display: grid;
    justify-items: center;
    padding-right: 2%;
    padding-left: 2%;

    @media (max-width: 768px) {
       width: 100px;
       height: 50px;

    }
`;

export const ModalCloseButton = styled.button`
    background-color: #ff0000;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    height: 60px;
    width: 120px;
    border: none;
    font-size: 19px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    align-self: center;
    position: absolute;
    margin-top: 800px;

    @media (max-width: 768px) {
        margin-top: 540px;
        
    }

    @media (max-width: 525px) {
        margin-top: 440px;
        width: 100px;
        height: 50px;
        font-size: 18px;
    }
`;

export const SaberMaisContainer = styled.div`
    width: 260px;
    height: auto;
    padding-bottom: 40px;
    display: grid;
    align-self: center;
    justify-self: center;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding-top: 40px;
}
`;

export const WhatsappIcon2 = styled.div`
    cursor: pointer;
    width: 55px;
    height: 55px;
    background-image: url(${whatsapp});
    border-radius: 50%;
    transition: transform .5s;
    background-position: 0%, 0%;
    background-size: cover;
    justify-self: center;
    margin-top: 10px;
    &:hover {
        transform: scale(1.3);
    }
`;

export const LoasIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${loas});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;

export const PensaoIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${pensao});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;

export const AuxilioIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${auxilio});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;

export const RevisaoIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${revisao});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;

export const PolicialIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${policial});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;

export const FolhaIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${folha});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;

export const ViolenciaIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${violencia});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;

export const VendacasadaIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${vendacasada});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;

export const RecusaIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${recusa});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;

export const CartaoIcon = styled.div`
    width: 90px;
    height: 110px;
    background-image: url(${cartao});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; 
    padding-bottom: 30px;
`;