import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import TurmaPage from './pages/Turmas/turmas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='' element={<Login />} />
          <Route path='main' element={<Main />} />
          <Route path='turma' element={<TurmaPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
