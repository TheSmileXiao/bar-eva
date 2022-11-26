import Inicio from "./pages/Inicio"
import CnCarta from './pages/cnCarta';
import EsCarta from './pages/esCarta';
import ReactDOM from "react-dom/client";
import { GlobalStyle } from './globalStyles';

import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/" element = {<Inicio/>}/>
          <Route path="/cnCarta" element = {<CnCarta/>}/>
          <Route path="/esCarta" element = {<EsCarta/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
