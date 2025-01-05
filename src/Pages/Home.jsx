import Footer from "../Components/ui/Footer";
import Navbar from "../Components/ui/Navbar";
import { FaCircleArrowRight } from "react-icons/fa6";
import EntrEmail from "../Components/common/EntrEmail";

const fruits = [
  {
    id: 1,
    image: "./homeBanan.jpg",
    subtitle: "Natural!!",
    title: "Get Garden Fresh Fruits",
  },
  {
    id: 2,
    image: "./homeOrink.png",
    subtitle: "Fresh & Juicy!",
    title: "Enjoy Organic Apples",
  },
];

function Home() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="bg-[url(./headerBg.png)] bg-cover flex items-center bg-center h-screen ">
          <div className="ml-20">
            <p className="text-3xl text-[#68A47F] italic font-serif">
              100% Natural Food
            </p>{" "}
            <br />
            <p className="text-5xl font-extrabold text-[#274C5B]">
              Choose the best <br />
              healthier way <br />
              of life
            </p>{" "}
            <br />
            <button className="flex items-center gap-1 px-10 py-7 bg-[#EFD372] rounded-xl text-[#274C5B] text-xl">
              Explore Now <FaCircleArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap gap-6 mt-10 justify-center">
          {fruits.map((fruit) => (
            <div
              key={fruit.id}
              className={`relative h-[300px] w-[500px] rounded-xl overflow-hidden ${fruit.bgColor}`}
            >
              <img
                src={fruit.image}
                alt={fruit.title}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start p-8">
                <p className="text-lg text-green-600 italic font-serif">
                  {fruit.subtitle}
                </p>
                <p className="text-2xl font-extrabold text-white w-48">
                  {fruit.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-screen bg-[#F9F8F8] mt-20">
        <div className="flex justify-center items-center h-full">
          <img src="./homeFruts.png" alt="" className="w-[600px]" />
          <div className="">
            <p className="text-2xl text-[#68A47F] italic font-serif">
              About Us
            </p>
            <h2 className="text-5xl font-extrabold text-[#274C5B]">
              We Believe in Working Accredited Farmers
            </h2>
            <p className="text-lg text-[#274C5B] mt-5">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to <br />
              been the industry's standard dummy text ever since the 1500s, when
              an unknown <br /> printer took a galley.{" "}
            </p>
            <div className="flex gap-5 mt-5">
              <div className="px-5 py-5 rounded-xl bg-[#FFFFFF]">
                <img src="./Vegan Food.svg" alt="" />
              </div>
              <div className="">
                <h2 className="text-xl font-extrabold text-[#274C5B]">
                  Organic Foods Only
                </h2>
                <p className="text-[#525C60]">
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="px-5 py-5 rounded-xl bg-[#FFFFFF]">
                <img src="./Mailbox Quality.svg" alt="" />
              </div>
              <div className="">
                <h2 className="text-xl font-extrabold text-[#274C5B]">
                Quality Standards
                </h2>
                <p className="text-[#525C60]">
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <button className="flex items-center gap-1 mt-3 px-12 py-7 bg-[#274C5B] rounded-xl text-white text-xl">
              See More <FaCircleArrowRight />
            </button>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <EntrEmail />
      <Footer />
    </div>
  );
}

export default Home;
