import './App.css';
import Home from './pages/home';
import About from './pages/about';
import NoteState from './context/notes/noteState';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<>
  <NoteState>
<BrowserRouter>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/login' element={<Login/>}/>
  <Route exact path='/signup' element={<Signup/>}/>
  
</Routes>
</BrowserRouter>
</NoteState>

</>
  );
}

export default App;
