import './App.css';
import Home from './Home/Home';
import Informacoes from './pages/informacoes/informacoes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/informacoes" element={<Informacoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
