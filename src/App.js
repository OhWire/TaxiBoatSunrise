
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/Signup';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path = "/services" element={<Services/>} />
        <Route path = "/products" element={<Products/>} />
        <Route path = "/sign-up" element={<SignUp/>} />
        
      </Routes>
    </>
  );
}

export default App;
