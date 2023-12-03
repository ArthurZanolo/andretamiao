import { AndréTamião, Container, GuiasContainer, Logo } from "./styles";
import { useNavigate } from "react-router-dom";

function HeaderInformacoes() {

    const navigate = useNavigate();

    return (
        <Container>
            <GuiasContainer>
                <Logo></Logo>
                <AndréTamião onClick={() => navigate('/')}>Home</AndréTamião>
                <AndréTamião onClick={() => navigate('/informacoes')}>Informações</AndréTamião>
            </GuiasContainer>
        </Container>
    );
}

export default HeaderInformacoes;
