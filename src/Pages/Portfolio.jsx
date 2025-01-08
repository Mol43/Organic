import { FaAngleRight } from "react-icons/fa"
import LogoHeader from "../components/common/LogoHeader"
import Footer from "../components/ui/Footer"
import Navbar from "../components/ui/Navbar"
import EntrEmail from "../Components/common/EntrEmail"






function Portfolio() {
  const Fruits = [
    {
      id: 1,
      img: "/Lemon.png",
      title: "Green & Tasty Lemon",
      info: "Fruits",
    },
    {
      id: 2,
      img: "/Carrot.png",
      title: "Organic Carrot",
      info: "Farmer",
    },
    {
      id: 3,
      img: "/Betel.png",
      title: "Organic Betel Leaf",
      info: "Leaf",
    },
    {
      id: 4,
      img: "/Natural.png",
      title: "Natural Tommato",
      info: "Fruits",
    },
    {
      id: 5,
      img: "/Black.png",
      title: "Black Raspberry",
      info: "Farmer",
    },
    {
      id: 6,
      img: "/Honey.png",
      title: "Honey Orange",
      info: "Farmer",
    },
  ];

  return (
    <div>
      <Navbar />
      <LogoHeader bgImg="/portfolioBG.png" title="Portfolio Standard" />
      
      <div className="w-8/12 h-auto mx-auto my-20 grid grid-cols-3 gap-4">
        {Fruits.map((item) => (
          <Link to="/portfolioSingle" state={{ fruit: item }} key={item.id}>
            <div className="w-full h-auto relative">
              <img src={item.img} alt="img" className="w-full rounded-xl" />
              <h3 className="text-[25px] text-[#274C5B] font-semibold">{item.title}</h3>
              <p className="text-[22px] text-[#7EB693] font-sans">{item.info}</p>
              <div className="opacity-0 hover:opacity-100 transition-all">
                <div className="w-3/4 h-3/5 bg-[#FFFFFFE8] absolute top-10 left-10 rounded-xl flex items-center justify-center">
                  <span className="w-16 h-16 rounded-full bg-[#7EB693] text-white flex items-center justify-center cursor-pointer"><FaAngleRight /></span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <EntrEmail />
      <Footer />
    </div>
  );
}

export default Portfolio;
