import { AndréTamião, Container, GuiasContainer, Logo } from "./styles";

function Header() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Container>
            <GuiasContainer>
                <Logo></Logo>
                <AndréTamião onClick={() => scrollToSection("andre")}>André Tamião</AndréTamião>
                <AndréTamião onClick={() => scrollToSection("servicos")}>Serviços</AndréTamião>
                <AndréTamião onClick={() => scrollToSection("contato")}>Contato</AndréTamião>
            </GuiasContainer>
        </Container>
    );
}

export default Header;
