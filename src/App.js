import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";

import {  AuthProvider } from "./contexts/AuthContext";
import useLocalStorate from "./hooks/useLocalStorage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products";
import Register from "./components/Register/Register";
import Concerts from "./components/Concerts";
import Logout from "./components/Logout";
import AddNewCategory from "./components/Products/AddNewCategory";

function App() {
  return (
    <AuthProvider>
      <body className="main-layout">
        <div>
          <div className="components-wrapper">
            <Header />
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/concerts" element={<Concerts />} />
              <Route path="/products" exact element={<Products />} />
              <Route path="/products/add-category" exact element={<AddNewCategory />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </body>
    </AuthProvider>
  );
}

export default App;
