import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        {/* ✅ Navbar (har page par common) */}
        <Navbar />

        {/* ✅ Main Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />          {/* Home Page */}
            <Route path="/about" element={<About />} />    {/* About Page */}
            <Route path="/contact" element={<Contact />} />{/* Contact Page */}
            <Route path="/services" element={<Services />} />{/* Services Page */}
            <Route path="/signup" element={<Signup />} />  {/* Signup Page */}
            <Route path="/login" element={<Login />} />    {/* Login Page */}
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>

        {/* ✅ Footer (har page par common) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
