import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import Navbar from "./components/navbar";
import Subscribe from "./components/subscribe";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="app-header-bg">
          <Navbar />
          <Header />
        </div>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail/:hotelName" element={<Detail />} />
          </Routes>
        </div>


        <div className="app-footer-bg">
          <Subscribe />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;