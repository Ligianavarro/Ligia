
import Login from './pages/auth/login';

// Estilos
import './App.css';
import Home from './pages/admin/home';


function App() {

  const titulo = 
    <div>
      <h1 style={ {color: "red", fontFamily: 'cursive'} }>Tienda de dulces</h1>
      <p>Esta es la tienda virtual de dulces colombianos </p>
    </div>
  
  return (
    <Home />
  );
}

export default App;
