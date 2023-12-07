import { AndréTamião, Container, GuiasContainer, HeaderInfoButton, Logo } from "./styles";
import { useNavigate } from "react-router-dom";

function HeaderInformacoes() {

    const navigate = useNavigate();

    return (
        <Container>
            <GuiasContainer>
                <Logo></Logo>
                <HeaderInfoButton onClick={() => navigate('/')}>Home</HeaderInfoButton>
                <HeaderInfoButton onClick={() => navigate('/informacoes')}>Informações</HeaderInfoButton>
            </GuiasContainer>
        </Container>
    );
}

export default HeaderInformacoes;
