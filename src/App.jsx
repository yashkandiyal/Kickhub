import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home_page from "./landingPage/Home_page";
import Shop from "./Shop/shop";
import Navbar from "./landingPage/Navbar";
import Checkout from "./CheckOut/checkout";
import Footer from "./Footer/footer";
import Payment from "./PaymentPage/PaymentGateway";
import Success from "./SuccessPage/Success";

function App() {
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
