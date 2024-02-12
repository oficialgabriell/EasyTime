import React from 'react';
import './App.css';
import MainApp from './components/Main';
import CadFuncionario from './components/CadFuncionario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <CadFuncionario/>
      </header>
    </div>
  );
}

export default App;
