import { useState } from 'react';
import AdditionalInfo from '../components/additionalinfo/additionalinfo';
import Header from "../Header/header";
import { ArrowsContainer, AuxilioIcon, CardsContainers, CartaoIcon, CivelContrato2Icon, CivelContratoIcon, CivelFamiliaIcon, CivelIcon, ConsumidorIcon, Container, CriminalIcon, CustomSpan, FolhaIcon, Foto, FotoInfo, FotoTamiao, InfoContainer, InformationButton, InformativeCard1, LoasIcon, ModalCardsContainer, ModalCloseButton, ModalContainer, ModalContent, ModalContentText, PensaoIcon, PolicialIcon, PrevidenciarioIcon, RecusaIcon, SaberMaisContainer, SaibaMais, ServiceCard, ServiceContainer, ServiceName, ServiceTitle, ServiceTitleContainer, TextoTamiao, VendacasadaIcon, ViolenciaIcon } from "./styles";
import Footer from "../footer/footer";
import ReadMore from "../components/readmore/readmore";
import { useNavigate } from 'react-router-dom';
import Arrows from '../components/arrow/arrow';



function Home() {

    const navigate = useNavigate();

    const handleClick = (route: any) => {
        navigate(route);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [additionalInfoContent, setAdditionalInfoContent] = useState('');


    const handleShowAdditionalInfo = (content: any) => {
        setAdditionalInfoContent(content);
        setShowAdditionalInfo(true);
      }

    const handleSaibaMaisClick = (content: string) => {
        setModalContent(content);
        setShowModal(true);
    }


    return (
        <Container>
            <Header />
            <Foto>
                <ArrowsContainer>
                    <Arrows />
                </ArrowsContainer>
            </Foto>
            
            <InfoContainer>
                <CustomSpan id="andre">André Tamião</CustomSpan>
                <FotoInfo>
                    <FotoTamiao />
                    <TextoTamiao>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos...</TextoTamiao>
                </FotoInfo>
            </InfoContainer>
            <ServiceContainer>
                <ServiceTitleContainer id="servicos">
                    <ServiceTitle>Serviços</ServiceTitle>
                </ServiceTitleContainer>
                <CardsContainers>
                    <ServiceCard>
                        <CivelIcon></CivelIcon>
                        <ServiceName>Cível</ServiceName>
                        <SaibaMais onClick={() => { 
                        handleSaibaMaisClick("Abrange casos em que uma parte busca reparação por danos causados por outra, como questões contratuais, responsabilidade civil, direito de família, sucessões, entre outros.");
                        handleShowAdditionalInfo(
                            <ModalCardsContainer>
                                <InformativeCard1>
                                    <CivelContratoIcon />
                                    <CustomSpan>Contencioso Civil</CustomSpan>
                                    <ReadMore content="O contencioso civil envolve litígios e disputas que são levados aos tribunais. Pode abranger uma variedade de assuntos, desde disputas contratuais até ações de responsabilidade civil e outros tipos de reclamações." />
                                </InformativeCard1>

                                <InformativeCard1>
                                    <CivelFamiliaIcon />
                                    <CustomSpan>Direito de Família</CustomSpan>
                                    <ReadMore content="Este campo trata de questões relacionadas ao direito matrimonial, divórcio, guarda de filhos, pensão alimentícia, visitação, adoção e outros assuntos que envolvem relações familiares." />
                                </InformativeCard1>

                                <InformativeCard1>
                                    <CivelContrato2Icon />
                                    <CustomSpan>Contratos e Negociações</CustomSpan>
                                    <ReadMore content="Advogados civis ajudam na elaboração, revisão e negociação de contratos. Isso pode incluir contratos de compra e venda, acordos comerciais, contratos de aluguel, entre outros. Eles também podem oferecer aconselhamento jurídico em negociações para garantir que seus clientes estejam protegidos legalmente." />
                                </InformativeCard1>
                            </ModalCardsContainer>
                        );
                        }}>Saiba Mais</SaibaMais>
                    </ServiceCard>
                    <ServiceCard>
                        <ConsumidorIcon></ConsumidorIcon>
                        <ServiceName>Consumidor</ServiceName>
                        <SaibaMais onClick={() => { 
                        handleSaibaMaisClick("O Direito do Consumidor é um conjunto de leis que protege os direitos e interesses dos consumidores em transações comerciais, garantindo produtos e serviços seguros, informações claras e o direito a reclamar em caso de problemas.");
                        handleShowAdditionalInfo(
                            <ModalCardsContainer>
                                <InformativeCard1>
                                    <VendacasadaIcon />
                                    <CustomSpan>Venda Casada</CustomSpan>
                                    <ReadMore content="O serviço do advogado em casos de Venda Casada envolve a proteção dos direitos do consumidor. Isso ocorre quando um fornecedor vincula a compra de um produto ou serviço à aquisição de outro, prejudicando a liberdade de escolha do consumidor. O advogado trabalha para garantir que os direitos do cliente sejam respeitados, buscando ressarcimento por práticas comerciais ilegais e ajudando a prevenir futuras violações das leis de defesa do consumidor." />
                                </InformativeCard1>

                                <InformativeCard1>
                                    <RecusaIcon />
                                    <CustomSpan>Recusa em Cumprir Oferta Anunciada</CustomSpan>
                                    <ReadMore content="Refere-se a uma situação na qual um vendedor ou fornecedor se recusa a fornecer um produto ou serviço conforme anunciado, desrespeitando as condições previamente estabelecidas. Isso é geralmente uma violação das leis de proteção do consumidor e pode resultar em ações legais para garantir que o consumidor receba o que foi prometido na oferta." />
                                </InformativeCard1>

                                <InformativeCard1>
                                    <CartaoIcon />
                                    <CustomSpan>Constrangimento ao Consumidor na Cobrança de Débitos</CustomSpan>
                                    <ReadMore content="Ocorre quando um credor ou cobrador utiliza práticas agressivas, abusivas ou constrangedoras ao tentar recuperar dívidas de um consumidor. Isso pode incluir ameaças, assédio, exposição pública indevida da situação de dívida ou outras ações que violem as leis de proteção do consumidor. O objetivo é garantir que as práticas de cobrança sejam justas e não causem danos emocionais ou constrangimento indevido ao consumidor." />
                                </InformativeCard1>
                            </ModalCardsContainer>
                        );
                        }}>Saiba Mais</SaibaMais>
                    </ServiceCard>
                    <ServiceCard>
                        <CriminalIcon></CriminalIcon>
                        <ServiceName>Criminal</ServiceName>
                        <SaibaMais onClick={() => { 
                        handleSaibaMaisClick("O Direito Criminal, também conhecido como Direito Penal, é uma área do sistema jurídico que se concentra no estudo das leis e regulamentos que definem comportamentos criminosos, as punições associadas a esses comportamentos e o processo legal.");
                        handleShowAdditionalInfo(
                            <ModalCardsContainer>
                                <InformativeCard1>
                                    <PolicialIcon />
                                    <CustomSpan>Acompanhamento de Inquérito Policial</CustomSpan>
                                    <ReadMore content="Este serviço é uma assistência prestada por advogados a envolvidos em investigações criminais. Envolve a orientação legal, representação e a proteção dos direitos do cliente durante a fase inicial de uma investigação, o inquérito policial. Isso inclui a assessoria durante depoimentos, análise de evidências e negociação com as autoridades, visando garantir um processo justo e, se necessário, a preparação para futuras etapas do processo criminal." />
                                </InformativeCard1>

                                <InformativeCard1>
                                    <FolhaIcon />
                                    <CustomSpan>Revisão Criminal</CustomSpan>
                                    <ReadMore content="A Revisão Criminal é um processo legal que permite a reavaliação de casos já julgados, com o objetivo de corrigir erros ou injustiças. Novas evidências ou argumentos legais são apresentados para modificar sentenças ou anular condenações. Isso é fundamental para garantir a justiça no sistema legal." />
                                </InformativeCard1>

                                <InformativeCard1>
                                    <ViolenciaIcon />
                                    <CustomSpan>Violência Doméstica</CustomSpan>
                                    <ReadMore content="Envolve a defesa e proteção dos direitos das vítimas ou dos acusados em situações de abuso ou violência dentro do ambiente doméstico. O advogado auxilia na obtenção de ordens de proteção, na representação legal durante processos judiciais e fornece aconselhamento jurídico para buscar soluções apropriadas para as partes envolvidas." />
                                    </InformativeCard1>
                            </ModalCardsContainer>
                        );
                        }}>Saiba Mais</SaibaMais>
                    </ServiceCard>
                    <ServiceCard>
                        <PrevidenciarioIcon></PrevidenciarioIcon>
                        <ServiceName>Previdenciário</ServiceName>
                        <SaibaMais onClick={() => { 
                        handleSaibaMaisClick("O Direito Previdenciário lida com as questões relacionadas à previdência social, incluindo a proteção e os benefícios concedidos aos cidadãos em situações de aposentadoria, invalidez, doença, maternidade, e outros eventos que afetam a capacidade de trabalho.");
                        handleShowAdditionalInfo(
                            <ModalCardsContainer>
                                <InformativeCard1>
                                    <LoasIcon></LoasIcon>
                                    <CustomSpan>BPC/LOAS</CustomSpan>
                                    <ReadMore content="O BPC/LOAS é um mecanismo de proteção social que promove a pessoas com deficiência e aos idosos um benefício mínimo para que tenham dignidade. Em caso de pessoas deficientes, para que seja concedido o benefício é necessário a avaliação pela perícia do INSS. Em relação aos idosos, o benefício é concedido para pessoas que possuem 65 anos ou mais e não recebem qualquer outro tipo de benefício. Além disso, a renda familiar deve ser igual ou inferior a ¼ do salário mínimo." />
                                </InformativeCard1>
                                <InformativeCard1>
                                    <PensaoIcon />
                                    <CustomSpan>Pensão por Morte</CustomSpan>
                                    <ReadMore content="O benefício da pensão por morte é concedido para dependentes do segurando que vier a óbito. Atuamos com agilidade para a restituição da renda familiar o mais rápido possível através da pensão por morte." />
                                </InformativeCard1>
                                <InformativeCard1>
                                    <AuxilioIcon />
                                    <CustomSpan>Auxílio Doença</CustomSpan>
                                    <ReadMore content="O auxílio-doença trata-se de um benefício concedido pelo INSS àqueles que ficam incapacitados por mais de 15 dias para o trabalho ou atividade que exercem. Além disso, para que faça jus ao benefício do auxílio-doença, é necessário o cumprimento da carência de 12 meses, além da qualidade de segurado. Destacamos que, a carência fica dispensada se a incapacidade laboral do segurado seja decorrente de um acidente de qualquer natureza ou doença profissional." />
                                </InformativeCard1>
                            </ModalCardsContainer>
                        );
                        }}>Saiba Mais</SaibaMais>
                    </ServiceCard>
                    {/* Adicione mais ServiceCard com botões Saiba Mais aqui */}
                </CardsContainers>
                <SaberMaisContainer>
                    <CustomSpan>Quer saber mais? Acesse:</CustomSpan>
                    <InformationButton onClick={() => handleClick('/informacoes')}>Informações</InformationButton>
                </SaberMaisContainer>
                
            </ServiceContainer>
            <Footer />
            {showModal && (
                <ModalContainer>
                    <ModalContent>
                        <ModalContentText>{modalContent}</ModalContentText>
                        {showAdditionalInfo && <AdditionalInfo content={additionalInfoContent} />} {/* Passe a propriedade content */}
                        <ModalCloseButton onClick={() => setShowModal(false)}>Obrigado!</ModalCloseButton>
                    </ModalContent>
                </ModalContainer>
            )}
        </Container>
    );
}

export default Home;
