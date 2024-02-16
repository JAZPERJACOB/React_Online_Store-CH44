
import './App.css';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";




function App() {
  return (  
    <div className="App">
      <h1>Hello from React!</h1>
        <Navbar></Navbar>
        <Home/>
        <Catalog></Catalog>
        <About/>
        <Footer></Footer>

    </div>
  );
}

export default App;
