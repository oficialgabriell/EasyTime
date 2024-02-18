import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PainelLogin from './components/Painel';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route element={<PainelLogin />} path='/login' />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
