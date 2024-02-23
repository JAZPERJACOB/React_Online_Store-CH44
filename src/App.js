
import './App.css';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';
import Cart from './pages/cart';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (  
    <BrowserRouter> 
    <div className="App">
      <h1>LifeStyle.shop</h1>
        <Navbar></Navbar>
        
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/" element={ <About/>} />
          <Route path="/catalog" element={ <Catalog/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>

        <Footer></Footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
