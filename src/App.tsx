import { Route, Routes } from "react-router-dom";
import "./components/mainscreen.scss";
import Categories from "./pages/Categories";
import Indoor from "./pages/Indoor";
import Outdoor from "./pages/Outdoor";
import HomeScreen from "./components/HomeScreen";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./components/ScrollRenderWrapper";

function App() {
  return (
    <>
      <ScrollToTop />
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
        <Route path="/product" element={<ProductPage />} />
        {/* <Route path="/categories" element={<Categories />} /> */}
      </Routes>
    </>
  );
}

export default App;
