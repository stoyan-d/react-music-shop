import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";

import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import useLocalStorate from "./hooks/useLocalStorage";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Categories from "./components/Categories/Categories";
import Register from "./components/Register/Register";
import Concerts from "./components/Concerts";
import Logout from "./components/Logout";
import AddNewCategory from "./components/Categories/AddNewCategory";
import Notification from "./components/Common/Notifications/Notification";

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <body className="main-layout">
          <div className="components-wrapper">
            <Header />
            <Notification />
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/concerts" element={<Concerts />} />
              <Route path="/categories" exact element={<Categories />} />
              <Route
                path="/categories/add-category"
                exact
                element={<AddNewCategory />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
          <Footer />
        </body>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
