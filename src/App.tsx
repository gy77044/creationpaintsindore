import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import CompanyProfile from "./components/Header/CompanyProfile";
import Dealership from "./components/Header/DealerShip";
import Header from "./components/Header/Header";
import MissionVision from "./components/Header/MissionVision";
import Network from "./components/Header/Network";
import HomeScreen from "./components/HomeScreen";
import "./components/mainscreen.scss";
import ScrollToTop from "./components/ScrollRenderWrapper";
import Indoor from "./pages/Indoor";
import Outdoor from "./pages/Outdoor";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex flex-col scroll-smooth">
              <HomeScreen />
            </div>
          }
        />
        <Route path="/indoor" element={<Indoor />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/about-us/company-profile" element={<CompanyProfile />} />
        <Route path="/about-us/mission-vision" element={<MissionVision />} />
        <Route path="/network" element={<Network />} />
        <Route path="/dealership" element={<Dealership />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
