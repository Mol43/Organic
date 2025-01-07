import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import ServiceSingle from "./Pages/ServiceSingle";
import ShopSingle from "./Pages/ShopSingle";
import Team from "./Pages/Team";
import WhyChooseUs from "./Pages/WhyChooseUs";
import Shop from "./Pages/Shop";
<<<<<<< HEAD
import PortfolioSingle from "./Pages/PortfolioSingle";
=======
import NotFaound from "./Pages/NotFaound";
import RecentNews from "./Pages/RecentNews";
import BlogSingle from "./Pages/BlogSingle";
import ContactUs from "./Pages/ContackUs";
>>>>>>> 039f4a92a433697105cbacc7b59def227ed65b1a

function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service-single" element={<ServiceSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<BlogSingle/>} />
        <Route path="/about" element={<WhyChooseUs />} />
<<<<<<< HEAD
        <Route path="/shopSingle" element={<ShopSingle  />} />
        <Route path="/portfolioSingle" element={<PortfolioSingle />} />
=======
        <Route path="/News" element={<RecentNews />} />
        <Route path="*" element={<NotFaound />} />
        <Route path="/contact" element={<ContactUs />} />

>>>>>>> 039f4a92a433697105cbacc7b59def227ed65b1a
      </Routes>
    </Router>
  );
}

export default App;
