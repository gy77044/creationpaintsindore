import { Route, Routes } from "react-router-dom";
import "./components/mainscreen.scss";
import Categories from "./pages/Categories";
import Indoor from "./pages/Indoor";
import Outdoor from "./pages/Outdoor";
import HomeScreen from "./components/HomeScreen";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./components/ScrollRenderWrapper";
import CompanyProfile from "./components/Header/CompanyProfile";
import MissionVision from "./components/Header/MissionVision";
import Network from "./components/Header/Network";
import Dealership from "./components/Header/DealerShip";
import Gallery from "./components/Gallery";
import Shades from "./components/Shades";
import Contact from "./components/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header/>
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
        <Route path="/shade" element={<Shades />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
