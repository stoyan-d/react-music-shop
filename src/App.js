import "./App.css";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { CartProvider } from "./contexts/CartContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactUs from "./components/ContactUs";
import Login from "./components/Login/Login";
import HomePage from "./components/HomePage/HomePage";
import Instruments from "./components/Instruments/Instruments";
import Register from "./components/Register/Register";
import Logout from "./components/Logout";
import NotFound from "./components/NotFound";
import AddNewInstrument from "./components/Instruments/AddNewInstrument";
import Notification from "./components/Common/Notifications/Notification";
import InstrumentMoreDetails from "./components/Instruments/InstrumentMoreDetails";
import InstrumentUpdateData from "./components/Instruments/InstrumentUpdateData";
import CustomerStoriesMain from "./components/CustomerStories/CustomerStoriesMain";
import ShareYourStory from "./components/CustomerStories/ShareYourStory";
import ReadStories from "./components/CustomerStories/ReadStories";
import SeeMoreStoryDetails from "./components/CustomerStories/ReadStories/StoryCard/SeeMoreStoryDetails";
import UpdateStory from "./components/CustomerStories/ReadStories/StoryCard/UpdateStory";
import ShoppingCart from "./components/ShoppingCart";
import MyProfile from "./components/MyProfile";
import GuardedRoute from "./components/Common/GuardedRoute";

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <CartProvider>
          <body className="main-layout">
            <div className="components-wrapper">
              <Header />
              <Notification />
              <Routes>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/stories" element={<CustomerStoriesMain />} />
                <Route path="/stories/read-stories" element={<ReadStories />} />
                <Route
                  path="/stories/story-details/:storyId"
                  element={<SeeMoreStoryDetails />}
                />

                <Route element={<GuardedRoute />}>
                  <Route path="/my-profile" element={<MyProfile />} />
                  <Route path="/shopping-cart" element={<ShoppingCart />} />
                  <Route
                    path="/stories/update/:storyId"
                    element={<UpdateStory />}
                  />
                </Route>

                <Route
                  path="/stories/share-your-story"
                  element={<ShareYourStory />}
                />
                <Route path="/instruments" exact element={<Instruments />} />

                <Route element={<GuardedRoute />}>
                  <Route
                    path="/instruments/add-instrument"
                    exact
                    element={<AddNewInstrument />}
                  />
                  <Route
                    path="details/:instrumentId"
                    element={<InstrumentMoreDetails />}
                  />
                  <Route
                    path="update/:instrumentId"
                    element={<InstrumentUpdateData />}
                  />
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </div>
            <Footer />
          </body>
        </CartProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
