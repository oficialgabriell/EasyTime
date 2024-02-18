import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PainelLogin from './components/Painel';
import CadFuncionario from './components/CadFuncionario';
import ListFuncionarios from './components/ListFuncionarios';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route element={<PainelLogin />} path='/login' />
          <Route element={<CadFuncionario />} path='/CadFuncionario' />
          <Route element={<ListFuncionarios />} path='/ListFuncionarios' />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
