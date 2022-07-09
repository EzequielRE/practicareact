import './App.css';
import Home from './components/home/home.jsx';
import Barra from './components/navbar/barra.jsx';
import Pelicula from './components/pelicula/pelicula.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Barra/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route index path="/home" element={<Home/>}/>
        <Route path="*" element={<Home/>}/>
        <Route path="/pelicula/:title" element={<Pelicula/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
