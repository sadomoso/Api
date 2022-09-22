import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import Navbar from "./Funcoes/NavBar";
import Inscricao from "./pages/Inscricao/Index";
import Edicao from './pages/Edicao/Index'

function App() {
  return (
    <Router>
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path='/inscricao' element={<Inscricao />} />
          <Route exact path='/edicao/:id' element={<Edicao />} />

        </Routes>
      </header>
    </Router>
  );
}

export default App;
