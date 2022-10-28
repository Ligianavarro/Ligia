
import Login from './pages/auth/login';

// Estilos
import './App.css';
import Home from './pages/admin/home';
import {Routes, Route, Link} from "react-router-dom"


function App() {

  const titulo = 
    <div>
      <h1 style={ {color: "red", fontFamily: 'cursive'} }>Tienda de dulces</h1>
      <p>Esta es la tienda virtual de dulces colombianos </p>
    </div>
  
  return (

    <Routes>
      <Route path="" element={ <Home/> } />
      <Route path="/login" element={ <Login/> } />
    </Routes>

  );
}

export default App;
