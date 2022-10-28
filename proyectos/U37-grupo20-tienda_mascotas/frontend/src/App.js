import "./App.css"

import "admin-lte/dist/js/adminlte.js"

import Home from "./pages/admin/home"
import Login from "./pages/auth/login"
import {Routes, Route} from "react-router-dom"


function App() {
  /*const titulo = 
  <div>
    <h1 className="titulo">Tienda de mascotas</h1>
    <p>Esta es la tienda virtual de Mascotas</p>
  </div>*/

  return (
    <Routes>
      <Route path="" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
    </Routes>
  )
}

export default App
