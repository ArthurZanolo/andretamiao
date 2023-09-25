import Header from "../Header/header";
import { CardsContainers, Container, Foto, FotoInfo, FotoTamiao, InfoContainer, NomeContainer, ServiceCard, ServiceContainer, ServiceName, ServiceTitle, ServiceTitleContainer, TextoTamiao } from "./styles";
import bookimage from "../assets/booklogo.png"
import Footer from "../footer/footer";

function Home(){
    return(
    <Container>
        <Header />
        <Foto />
        <InfoContainer>
        <NomeContainer id="andre">André Tamião</NomeContainer>
            <FotoInfo>
                <FotoTamiao></FotoTamiao>
                <TextoTamiao>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</TextoTamiao>
            </FotoInfo>
        </InfoContainer>
        <ServiceContainer>
            <ServiceTitleContainer id="servicos">
                <ServiceTitle>Serviços</ServiceTitle>
            </ServiceTitleContainer>
            <CardsContainers>
                <ServiceCard> 
                <img src={bookimage} alt='' width={60} height={75}></img>
                <ServiceName>Usucapião</ServiceName>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ServiceCard>
                <ServiceCard>
                <img src={bookimage} alt='' width={60} height={75}></img>
                <ServiceName>Usucapião</ServiceName>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ServiceCard>
                <ServiceCard>
                <img src={bookimage} alt='' width={60} height={75}></img>
                <ServiceName>Usucapião</ServiceName>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ServiceCard>
                <ServiceCard>
                <img src={bookimage} alt='' width={60} height={75}></img>
                <ServiceName>Usucapião</ServiceName>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ServiceCard>
            </CardsContainers>
        </ServiceContainer>
        <Footer></Footer>
    </Container>
    )
}


export default Home;