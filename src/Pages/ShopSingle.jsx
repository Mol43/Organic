import { useLocation } from "react-router-dom";
import { FaArrowRight, FaStar } from "react-icons/fa";
import LogoHeader from "../Components/common/LogoHeader";
import EntrEmail from "../Components/common/EntrEmail";
import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/ui/Footer";

function ShopSingle() {
  const location = useLocation();
  const product = location.state; // Mahsulot ma'lumotlarini olish

  return (
    <div>
      <Navbar />
      <LogoHeader bgImg={`/Banner Image.png`} title={`Shop Single`} />

      <section>
        <div className="w-8/12 h-[400px] flex items-center justify-between gap-10 mx-auto my-10">
          <div className="w-2/5 h-full rounded-3xl border-2 relative">
            <button className="text-[15px] text-[#fff] bg-[#274C5B] rounded-md py-1 px-3 absolute top-6 left-6">
              {product.category}
            </button>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full rounded-3xl"
            />
          </div>
          <div className=" w-3/5 text-left">
            <h2 className="text-[40px] text-[#274C5B] font-bold">
              {product.name}
            </h2>
            <div className="flex items-center justify-center gap-2 max-w-max text-yellow-600">
              {[...Array(product.rating)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <h3 className="text-[25px] text-[#274C5B] font-bold">
              <span className="text-[20px] text-[#B8B8B8] font-semibold line-through">
                ${product.oldPrice}
              </span>{" "}
              ${product.price}
            </h3>

            <p className="text-[18px] text-[#525C60] my-6">
              {`Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.`}
            </p>

            <div className="w-10/12 h-20 flex items-center justify-center gap-10">
              <h2 className="text-[#274C5B] text-[19px] font-bold">
                Quantity:
              </h2>

              <button className="border-2 border-[#274C5B] rounded-xl h-full w-2/6">
                1
              </button>
              <button className="bg-[#274C5B] rounded-xl h-full w-3/6 text-[#fff] flex items-center gap-2 justify-center">
                Add To Cart
                <FaArrowRight className="p-1 rounded-full bg-[#335B6B] text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-7/12 h-auto text-center mx-auto mb-10 mt-20">
          <div className="flex items-center justify-center gap-4 mx-auto w-3/4">
            <button className="px-6 py-4 rounded-lg w-2/4 text-[25px] font-bold bg-[#274C5B] text-white">
              Product Description
            </button>
          </div>
          <p className="text-[18px] text-[#525C60] py-10">
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care.
          </p>
        </div>
      </section>

      <EntrEmail />
      <Footer />
    </div>
  );
}

export default ShopSingle;
