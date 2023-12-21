import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/home/Navbar';
import MainProducts from './components/home/MainProducts';
import Cart from "./components/home/Cart";
import ProDetails from './components/home/ProDetails';
import CheckPage from './components/home/CheckPage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<MainProducts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mainProducts" element={<MainProducts />} />
        <Route path="cart" element={<Cart />} />
        {/* <Route path="proDetail" element={<ProDetails />} /> */}
        <Route path="productD/:productId" element={<ProDetails />} />
        <Route path="cart/out" element={<CheckPage />} />
      </Routes>
    </div>
  );
}

export default App;
