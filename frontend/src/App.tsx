import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainApp from './components/Main';
import PainelLogin from './components/Painel';
import Dashboard from './components/Dashboard';

function App(): JSX.Element {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route element={<PainelLogin />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
