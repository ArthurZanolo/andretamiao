import './App.css';
import HeaderInformacoes from './Header/headerinformacoes/headerinformacoes';
import Home from './Home/Home';
import AcoesFabricante from './pages/descricoes/acoesfabricante';
import Adocao from './pages/descricoes/adocao';
import AposentadoriaInvalidez from './pages/descricoes/aposentadoriainvalidez';
import AuxilioDoenca from './pages/descricoes/auxiliodoenca';
import BPCLOAS from './pages/descricoes/bpcloas';
import Constrangimento from './pages/descricoes/constrangimento';
import ContenciosoCivil from './pages/descricoes/contenciosocivil';
import ContratosENegociacoes from './pages/descricoes/contratosenegociacoes';
import CrimesFinanceiros from './pages/descricoes/crimesfinanceiros';
import DanosMorais from './pages/descricoes/danosmorais';
import DireitoDeFamilia from './pages/descricoes/direitodefamilia';
import InqueritoPolicial from './pages/descricoes/inqueritopolicial';
import Inventario from './pages/descricoes/inventario';
import PensaoPorMorte from './pages/descricoes/pensaopormorte';
import ReabilitacaoProfissional from './pages/descricoes/reabilitacaoprofissional';
import RecusaOferta from './pages/descricoes/recusaoferta';
import ResolucaoConflitos from './pages/descricoes/resolucaoconflitos';
import RevisaoBeneficios from './pages/descricoes/revisaobeneficios';
import RevisaoCriminal from './pages/descricoes/revisaocriminal';
import SentencaRevisao from './pages/descricoes/sentencarevisao';
import TraficoDrogas from './pages/descricoes/traficodrogas';
import TransacaoOnline from './pages/descricoes/transacaoonline';
import VendaCasada from './pages/descricoes/vendacasada';
import ViolenciaDomestica from './pages/descricoes/violenciadomestica';
import Informacoes from './pages/informacoes/informacoes';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();

  if (location.pathname === '/') {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }

  return (
    <>
      <HeaderInformacoes />
      <Routes>
        
        <Route path="/informacoes" element={<Informacoes />} />
        <Route path="/informacoes/contenciosocivil" element={<ContenciosoCivil />} />
        <Route path="/informacoes/danosmorais" element={<DanosMorais />} />
        <Route path="/informacoes/inventario" element={<Inventario />} />
        <Route path="/informacoes/contratosenegociacoes" element={<ContratosENegociacoes />} />
        <Route path="/informacoes/adocao" element={<Adocao />} />
        <Route path="/informacoes/direitodefamilia" element={<DireitoDeFamilia />} />
        <Route path="/informacoes/recusaoferta" element={<RecusaOferta />} />
        <Route path="/informacoes/constrangimento" element={<Constrangimento />} />
        <Route path="/informacoes/transacaoonline" element={<TransacaoOnline />} />
        <Route path="/informacoes/vendacasada" element={<VendaCasada />} />
        <Route path="/informacoes/acoesfabricante" element={<AcoesFabricante />} />
        <Route path="/informacoes/resolucaoconflitos" element={<ResolucaoConflitos />} />
        <Route path="/informacoes/inqueritopolicial" element={<InqueritoPolicial />} />
        <Route path="/informacoes/violenciadomestica" element={<ViolenciaDomestica />} />
        <Route path="/informacoes/revisaocriminal" element={<RevisaoCriminal />} />
        <Route path="/informacoes/crimesfinanceiros" element={<CrimesFinanceiros />} />
        <Route path="/informacoes/sentencarevisao" element={<SentencaRevisao />} />
        <Route path="/informacoes/traficodrogas" element={<TraficoDrogas />} />
        <Route path="/informacoes/bpcloas" element={<BPCLOAS />} />
        <Route path="/informacoes/pensaopormorte" element={<PensaoPorMorte />} />
        <Route path="/informacoes/aposentadoriainvalidez" element={<AposentadoriaInvalidez />} />
        <Route path="/informacoes/auxiliodoenca" element={<AuxilioDoenca />} />
        <Route path="/informacoes/revisaobeneficios" element={<RevisaoBeneficios />} />
        <Route path="/informacoes/reabilitacaoprofissional" element={<ReabilitacaoProfissional />} />

      </Routes>
    </>
  );
}

export default App;
