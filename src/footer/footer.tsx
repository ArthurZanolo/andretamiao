
import { Container, FacebookIcon, InstagramIcon, JuridicoIcon, LastContainer, LastContainerText, LastContainerTextContainer, Logo2, MapsIcon, SocialContainer, TiktokIcon, WhatsappIcon } from "./styles";
import emailicon from "../assets/emailicon.png"
import phoneicon from "../assets/phoneicon.jpg"
import localicon from "../assets/mapsicon.png"


function Footer() {
    const handleFacebookClick = () => {
        const facebookUrl = "https://www.facebook.com/andretamiao.adv/";
        window.open(facebookUrl, "_blank"); // Abre o link em uma nova janela/aba
    };

    const handleInstagramClick = () => {
        const instragramUrl = "https://www.instagram.com/andretamiao.adv/";
        window.open(instragramUrl, "_blank"); // Abre o link em uma nova janela/aba
    };

    const handleWhatsappClick = () => {
        const whatsappUrl = "https://api.whatsapp.com/send?phone=5514998516478";
        window.open(whatsappUrl, "_blank"); // Abre o link em uma nova janela/aba
    };

    const handleMapsClick = () => {
        const mapsUrl = "https://www.google.com/maps/place/Andr%C3%A9+Tami%C3%A3o+Advocacia/@-21.7336414,-49.3577634,15z/data=!4m6!3m5!1s0x94bef7ea0e10c1d9:0x2536953f85e78545!8m2!3d-21.7336414!4d-49.3577634!16s%2Fg%2F11sx3wqhv5?entry=ttu";
        window.open(mapsUrl, "_blank"); // Abre o link em uma nova janela/aba
    };

    const handleTiktokClick = () => {
        const tiktokUrl = "https://www.tiktok.com/@andretamiao";
        window.open(tiktokUrl, "_blank"); // Abre o link em uma nova janela/aba
    };

    const handleJuridicoClick = () => {
        const juridicoUrl = "https://juridicocerto.com/p/andretamiao";
        window.open(juridicoUrl, "_blank"); // Abre o link em uma nova janela/aba
    };


    return (
        <Container id="contato">
            <SocialContainer>
                <FacebookIcon onClick={handleFacebookClick}></FacebookIcon>
                <InstagramIcon onClick={handleInstagramClick}></InstagramIcon>
                <TiktokIcon onClick={handleTiktokClick}></TiktokIcon>
                <WhatsappIcon onClick={handleWhatsappClick}></WhatsappIcon>
                <JuridicoIcon onClick={handleJuridicoClick}></JuridicoIcon>
                <MapsIcon onClick={handleMapsClick}></MapsIcon>
            </SocialContainer>
            <Logo2></Logo2>
            <LastContainer>
                <LastContainerText>Email: andretamiao@hotmail.com</LastContainerText>
                <LastContainerText>Telefone: 14 998516478</LastContainerText>
                <LastContainerText>Local: Av. José Cândido Carneiro, 653, Pongaí - SP, 16660-000</LastContainerText>
            </LastContainer>
        </Container>
    );
}

export default Footer;