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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/service-single" element={<ServiceSingle />} />
        <Route path="/shop-single" element={<ShopSingle />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<WhyChooseUs />} />
        <Route path="/News" element={<RecentNews />} />
        <Route path="*" element={<NotFaound />} />
        <Route path="/notfound" element={<NotFaound />} />
      </Routes>
    </Router>
  );
}

export default App;
