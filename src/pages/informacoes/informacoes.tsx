import { CardsSubContainer, CivelContainer, ConsumidorContainer, Container, CriminalContainer, PrevidenciarioContainer, ServiceDescription, ServiceMainName, ServiceTitle } from "./informacoesstyles";
import Footer from "../../footer/footer";
import { useNavigate } from "react-router-dom";
import { CustomSpan, SaberMaisContainer, WhatsappIcon2 } from "../../Home/styles";


function Informacoes() {

    const navigate = useNavigate();

    const handleClick = (route: any) => {
        navigate(route);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleWhatsappClick = () => {
        const whatsappUrl = "https://api.whatsapp.com/send?phone=5514998516478";
        window.open(whatsappUrl, "_blank");
    };

    return (
        <Container>
                <CardsSubContainer>
                    <CivelContainer>
                        <ServiceMainName>Cível</ServiceMainName>
                        <ServiceTitle onClick={() => handleClick('/informacoes/contenciosocivil')}>• Contencioso Civil </ServiceTitle>
                        <ServiceDescription>O contencioso civil envolve litígios e disputas que são levados aos tribunais. Pode abranger uma variedade de assuntos, desde disputas contratuais até ações de responsabilidade civil e outros tipos de reclamações.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/direitodefamilia')}>• Direito de Família</ServiceTitle>
                        <ServiceDescription>Este campo trata de questões relacionadas ao direito matrimonial, divórcio, guarda de filhos, pensão alimentícia, visitação, adoção e outros assuntos que envolvem relações familiares.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/contratosenegociacoes')}>• Contratos e Negociações</ServiceTitle>
                        <ServiceDescription>Advogados civis ajudam na elaboração, revisão e negociação de contratos. Isso pode incluir contratos de compra e venda, acordos comerciais, contratos de aluguel, entre outros. Eles também podem oferecer aconselhamento jurídico em negociações para garantir que seus clientes estejam protegidos legalmente.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/inventario')}>• Inventário e Partilha de Bens</ServiceTitle>
                        <ServiceDescription>Advogados na área cível podem auxiliar em questões de sucessão, especialmente quando há necessidade de realizar o inventário e a partilha de bens após o falecimento de uma pessoa. Isso envolve a avaliação, identificação e distribuição legal dos ativos e passivos do falecido entre os herdeiros.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/danosmorais')}>• Ações de Indenização por Danos Morais:</ServiceTitle>
                        <ServiceDescription>Advogados podem representar clientes em ações de indenização por danos morais, buscando compensação financeira por sofrimento emocional, constrangimento, ou perda de reputação causados por atos ilícitos de terceiros. Esse tipo de processo pode incluir difamação, calúnia, injúria, entre outros.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/adocao')}>• Adoção</ServiceTitle>
                        <ServiceDescription>Na área de direito de família, advogados podem auxiliar casais ou indivíduos no processo de adoção. Isso envolve orientação sobre os requisitos legais, preparação da documentação necessária, representação em procedimentos judiciais e aconselhamento sobre as etapas envolvidas no processo de adoção legal.</ServiceDescription>
                    </CivelContainer>
                    <ConsumidorContainer>
                        <ServiceMainName>Consumidor</ServiceMainName>
                        <ServiceTitle onClick={() => handleClick('/informacoes/vendacasada')}>• Venda Casada</ServiceTitle>
                        <ServiceDescription>O serviço do advogado em casos de Venda Casada envolve a proteção dos direitos do consumidor. Isso ocorre quando um fornecedor vincula a compra de um produto ou serviço à aquisição de outro, prejudicando a liberdade de escolha do consumidor. O advogado trabalha para garantir que os direitos do cliente sejam respeitados, buscando ressarcimento por práticas comerciais ilegais e ajudando a prevenir futuras violações das leis de defesa do consumidor.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/recusaoferta')}>• Recusa em Cumprir Oferta Anunciada</ServiceTitle>
                        <ServiceDescription>Refere-se a uma situação na qual um vendedor ou fornecedor se recusa a fornecer um produto ou serviço conforme anunciado, desrespeitando as condições previamente estabelecidas. Isso é geralmente uma violação das leis de proteção do consumidor e pode resultar em ações legais para garantir que o consumidor receba o que foi prometido na oferta.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/constrangimento')}>• Constrangimento ao Consumidor na Cobrança de Débitos</ServiceTitle>
                        <ServiceDescription>Ocorre quando um credor ou cobrador utiliza práticas agressivas, abusivas ou constrangedoras ao tentar recuperar dívidas de um consumidor. Isso pode incluir ameaças, assédio, exposição pública indevida da situação de dívida ou outras ações que violem as leis de proteção do consumidor. O objetivo é garantir que as práticas de cobrança sejam justas e não causem danos emocionais ou constrangimento indevido ao consumidor.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/acoesfabricante')}>• Ações de Responsabilidade do Fabricante</ServiceTitle>
                        <ServiceDescription>Advogados na área do Consumidor podem representar clientes que sofreram danos devido a produtos defeituosos ou perigosos. Isso pode envolver ações contra fabricantes, distribuidores ou vendedores que colocaram produtos no mercado que causaram lesões ou danos materiais aos consumidores.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/transacaoonline')}>• Direito do Consumidor em Transações Online</ServiceTitle>
                        <ServiceDescription>Com o crescimento do comércio eletrônico, advogados na área do Consumidor desempenham um papel vital em questões relacionadas a transações online. Isso pode incluir disputas sobre produtos, políticas de reembolso, questões de privacidade e segurança, entre outros.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/resolucaoconflitos')}>• Resolução de Conflitos e Mediação</ServiceTitle>
                        <ServiceDescription>Além de litígios tradicionais, advogados podem auxiliar consumidores na resolução de conflitos por meio de mediação ou outras formas de resolução alternativa de disputas. Essa abordagem busca resolver disputas de maneira mais rápida e menos adversarial do que o processo judicial tradicional.</ServiceDescription>
                    </ConsumidorContainer>
                    <CriminalContainer>
                        <ServiceMainName>Criminal</ServiceMainName>
                        <ServiceTitle onClick={() => handleClick('/informacoes/inqueritopolicial')}>• Acompanhamento de Inquérito Policial</ServiceTitle>
                        <ServiceDescription>Este serviço é uma assistência prestada por advogados a envolvidos em investigações criminais. Envolve a orientação legal, representação e a proteção dos direitos do cliente durante a fase inicial de uma investigação, o inquérito policial. Isso inclui a assessoria durante depoimentos, análise de evidências e negociação com as autoridades, visando garantir um processo justo e, se necessário, a preparação para futuras etapas do processo criminal.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/revisaocriminal')}>• Revisão Criminal</ServiceTitle>
                        <ServiceDescription>A Revisão Criminal é um processo legal que permite a reavaliação de casos já julgados, com o objetivo de corrigir erros ou injustiças. Novas evidências ou argumentos legais são apresentados para modificar sentenças ou anular condenações. Isso é fundamental para garantir a justiça no sistema legal.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/violenciadomestica')}>• Violência Doméstica</ServiceTitle>
                        <ServiceDescription>Envolve a defesa e proteção dos direitos das vítimas ou dos acusados em situações de abuso ou violência dentro do ambiente doméstico. O advogado auxilia na obtenção de ordens de proteção, na representação legal durante processos judiciais e fornece aconselhamento jurídico para buscar soluções apropriadas para as partes envolvidas.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/crimesfinanceiros')}>• Crimes Financeiros</ServiceTitle>
                        <ServiceDescription>Advogados criminais podem oferecer defesa em casos relacionados a crimes financeiros, como fraude, lavagem de dinheiro, evasão fiscal, entre outros. Eles ajudam a proteger os direitos dos acusados e a fornecer representação legal durante investigações e processos judiciais.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/traficodrogas')}>• Tráfico de Drogas</ServiceTitle>
                        <ServiceDescription>Advogados especializados em direito criminal podem representar clientes acusados de tráfico de drogas. Eles lidam com questões relacionadas à posse, distribuição e transporte de substâncias controladas, proporcionando uma defesa vigorosa para garantir que os direitos dos acusados sejam protegidos durante todo o processo legal. Isso pode incluir desafios à legalidade das buscas e apreensões, revisões de evidências e negociações de penas.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/sentencarevisao')}>• Recursos e Revisões de Sentenças</ServiceTitle>
                        <ServiceDescription>Advogados criminais podem ajudar clientes a buscar recursos e revisões de sentenças após condenações. Isso pode envolver a apresentação de apelações, revisões de evidências e argumentação em tribunais superiores para garantir que a justiça seja adequadamente servida.</ServiceDescription>
                    </CriminalContainer>
                    <PrevidenciarioContainer>
                        <ServiceMainName>Previdenciário</ServiceMainName>
                        <ServiceTitle onClick={() => handleClick('/informacoes/bpcloas')}>• BPC/LOAS</ServiceTitle>
                        <ServiceDescription>O BPC/LOAS é um mecanismo de proteção social que promove a pessoas com deficiência e aos idosos um benefício mínimo para que tenham dignidade. Em caso de pessoas deficientes, para que seja concedido o benefício é necessário a avaliação pela perícia do INSS. Em relação aos idosos, o benefício é concedido para pessoas que possuem 65 anos ou mais e não recebem qualquer outro tipo de benefício. Além disso, a renda familiar deve ser igual ou inferior a ¼ do salário mínimo.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/pensaopormorte')}>• Pensão por Morte</ServiceTitle>
                        <ServiceDescription>O benefício da pensão por morte é concedido para dependentes do segurando que vier a óbito. Atuamos com agilidade para a restituição da renda familiar o mais rápido possível através da pensão por morte.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/auxiliodoenca')}>• Auxílio Doença</ServiceTitle>
                        <ServiceDescription>O auxílio-doença trata-se de um benefício concedido pelo INSS àqueles que ficam incapacitados por mais de 15 dias para o trabalho ou atividade que exercem. Além disso, para que faça jus ao benefício do auxílio-doença, é necessário o cumprimento da carência de 12 meses, além da qualidade de segurado. Destacamos que, a carência fica dispensada se a incapacidade laboral do segurado seja decorrente de um acidente de qualquer natureza ou doença profissional.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/aposentadoriainvalidez')}>• Aposentadoria por Invalidez</ServiceTitle>
                        <ServiceDescription>Advogados especializados em direito previdenciário podem auxiliar pessoas que estão incapacitadas de trabalhar devido a doenças ou lesões a solicitar a aposentadoria por invalidez. Isso envolve a apresentação de documentação médica, recursos administrativos e, se necessário, ações judiciais para garantir que os benefícios sejam concedidos.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/revisaobeneficios')}>• Revisão de Benefícios Previdenciários</ServiceTitle>
                        <ServiceDescription>Advogados podem ajudar beneficiários do INSS a revisar seus benefícios previdenciários para garantir que estejam recebendo a quantia correta. Isso pode envolver revisar os cálculos da Previdência Social, analisar os anos de contribuição e tomar medidas legais para corrigir quaisquer erros ou omissões.</ServiceDescription>
                        <ServiceTitle onClick={() => handleClick('/informacoes/reabilitacaoprofissional')}>• Reabilitação Profissional</ServiceTitle>
                        <ServiceDescription>Advogados especializados em direito previdenciário podem auxiliar segurados que necessitam passar por processos de reabilitação profissional oferecidos pelo INSS. Eles ajudam na compreensão dos direitos do segurado, orientam sobre as etapas do processo de reabilitação, e, se necessário, representam o segurado para garantir que ele receba o suporte e as oportunidades adequadas para retornar ao mercado de trabalho.</ServiceDescription>
                    </PrevidenciarioContainer>
                </CardsSubContainer>
            <SaberMaisContainer>
                <CustomSpan>Entre em contato:</CustomSpan>
                <WhatsappIcon2 onClick={handleWhatsappClick}></WhatsappIcon2>
            </SaberMaisContainer>
            <Footer></Footer>
        </Container>
    )
}

export default Informacoes;