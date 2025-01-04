import { FaArrowRight, FaStar } from "react-icons/fa";
import LogoHeader from "../components/common/LogoHeader";
import { useState } from "react";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

function ShopSingle() {
  const [num, setNum] = useState(1)
  const [btn, setBtn] = useState("desc")
  return (
    <div>
      <Navbar />
      <LogoHeader bgImg={`/Banner Image.png`} title={`Shop Single`} />

      <section>
        <div className="w-8/12 h-[400px] flex items-center justify-between gap-10 mx-auto my-10">
          <div className="w-2/5 h-full rounded-3xl border-2 relative">
            <button className="text-[15px] text-[#fff] bg-[#274C5B] rounded-md py-1 px-3 absolute top-6 left-6">
              Millets
            </button>
            <img
              src="/Photo.jpg"
              alt="img"
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className=" w-3/5 text-left">
            <h2 className="text-[40px] text-[#274C5B] font-bold">
              Health Pistachios
            </h2>
            <div className="flex items-center justify-center gap-2 max-w-max text-yellow-600">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className="text-[25px] text-[#274C5B] font-bold">
              <span className="text-[20px] text-[#B8B8B8] font-semibold line-through">
                $20.00
              </span>{" "}
              $13.00
            </h3>

            <p className="text-[18px] text-[#525C60] my-6">
              {`Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.`}
            </p>

            <div className="w-10/12 h-20 flex items-center justify-center gap-10">
              <h2 className="text-[#274C5B] text-[19px] font-bold">Quantity:</h2>

              <button className=" border-2 border-[#274C5B] rounded-xl h-full w-2/6"
                onClick={() => setNum(num + 1)}
              >{num}</button>
              <button className=" bg-[#274C5B] rounded-xl h-full w-3/6 text-[#fff] flex items-center gap-2 justify-center">Add To Cart
                <FaArrowRight className="p-1 rounded-full bg-[#335B6B] text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-7/12 h-auto text-center mx-auto mb-10 mt-20">
          <div className="flex items-center justify-center gap-4 mx-auto w-3/4">
            <button className={`px-6 py-4 rounded-lg w-2/4 text-[25px] font-bold transition-all ${btn === "desc" ? "bg-[#274C5B] text-white" : "bg-[#EFF6F1] text-[#274C5B]"}`}
              onClick={() => setBtn("desc")}
            >Product Description</button>
            <button className={`px-6 py-4 rounded-lg w-2/4 text-[25px] font-bold transition-all ${btn === "info" ? "bg-[#274C5B] text-white" : "bg-[#EFF6F1] text-[#274C5B]"}`}
              onClick={() => setBtn("info")}
            >Additional Info</button>
          </div>
          <p className="text-[18px] text-[#525C60] py-10">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles
            of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.
            It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ShopSingle;
