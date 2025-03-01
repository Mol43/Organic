import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import ServiceSingle from "./Pages/ServiceSingle";
import ShopSingle from "./Pages/ShopSingle";
import Team from "./Pages/Team";
import WhyChooseUs from "./Pages/WhyChooseUs";
import Shop from "./Pages/Shop";
import NotFaound from "./Pages/NotFaound";
import RecentNews from "./Pages/RecentNews";
import BlogSingle from "./Pages/BlogSingle";
import ContactUs from "./Pages/ContackUs";
import PortfolioSingle from "./Pages/PortfolioSingle";

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolioSingle" element={<PortfolioSingle />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopSingle" element={<ShopSingle />} />
        <Route path="/service-single" element={<ServiceSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<BlogSingle/>} />
        <Route path="/about" element={<WhyChooseUs />} />
        <Route path="/News" element={<RecentNews />} />
        <Route path="*" element={<NotFaound />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
