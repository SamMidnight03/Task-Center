import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import CursosMedios from './Pages/CursosMedios'
import CursosBasicos from './Pages/CursosBasicos'
import CursosAvanzados from './Pages/CursosAvanzados'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/CursosBasicos' element={<CursosBasicos />} />
          <Route path='/CursosMedios' element={<CursosMedios />} />
          <Route path='/CursosAvanzados' element={<CursosAvanzados />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
