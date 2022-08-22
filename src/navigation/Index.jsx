import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home/Index";
import About from "../pages/About/Index";
import Login from "../pages/Login/Index";
import Register from "../pages/Register/Index";
import Menu from "../pages/Menu/Index";
import Cart from "../pages/Cart/Index";
import PaymentSuccess from "../pages/PaymentSuccess/Index";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
