import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
