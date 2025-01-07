import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import ServiceSingle from "./Pages/ServiceSingle";
import ShopSingle from "./Pages/ShopSingle";
import Team from "./Pages/Team";
import WhyChooseUs from "./Pages/WhyChooseUs";
import Shop from "./Pages/Shop";
import PortfolioSingle from "./Pages/PortfolioSingle";

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service-single" element={<ServiceSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<WhyChooseUs />} />
        <Route path="/shopSingle" element={<ShopSingle  />} />
        <Route path="/portfolioSingle" element={<PortfolioSingle />} />
      </Routes>
    </Router>
  );
}

export default App;
