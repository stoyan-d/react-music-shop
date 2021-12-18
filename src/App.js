import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";

import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Instruments from "./components/Instruments/Instruments";
import Register from "./components/Register/Register";
import Concerts from "./components/Concerts";
import Logout from "./components/Logout";
import AddNewInstrument from "./components/Instruments/AddNewInstrument";
import Notification from "./components/Common/Notifications/Notification";
import InstrumentMoreDetails from "./components/Instruments/InstrumentMoreDetails";
import InstrumentUpdateData from "./components/Instruments/InstrumentUpdateData";
import CustomerStoriesMain from "./components/CustomerStories/CustomerStoriesMain";

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
              <Route path="/stories" element={<CustomerStoriesMain />} />
              <Route path="/categories" exact element={<Instruments />} />
              <Route
                path="/categories/add-category"
                exact
                element={<AddNewInstrument />}
              />
              <Route path="details/:instrumentId" element={<InstrumentMoreDetails/>}/>
              <Route path="update/:instrumentId" element={<InstrumentUpdateData/>}/>
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
