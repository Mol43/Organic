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

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
      <div className="relative">
        <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded absolute top-2 left-2">
          {product.category}
        </span>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg mb-3 font-semibold mt-4">{product.name}</h3>
      <hr />
      <div className="flex items-center justify-between mt-2">
        <div>
          <span className="text-gray-500 line-through text-sm">
            ${product.oldPrice}
          </span>
          <span className="text-gray-900 font-bold ml-2">${product.price}</span>
        </div>
        <div className="flex items-center">
          {[...Array(product.rating)].map((_, index) => (
            <span key={index} className="text-yellow-400">
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

function Home() {
  const products = [
    {
      id: 1,
      name: "Calabrese Broccoli",
      category: "Vegetable",
      image: "./Photo.jpg",
      oldPrice: 20.0,
      price: 13.0,
      rating: 4,
    },
    {
      id: 2,
      name: "Calabrese Broccoli",
      category: "Vegetable",
      image: "./Photo.jpg",
      oldPrice: 20.0,
      price: 13.0,
      rating: 4,
    },
    {
      id: 3,
      name: "Calabrese Broccoli",
      category: "Vegetable",
      image: "./Photo.jpg",
      oldPrice: 20.0,
      price: 13.0,
      rating: 4,
    },
    {
      id: 4,
      name: "Calabrese Broccoli",
      category: "Vegetable",
      image: "./Photo.jpg",
      oldPrice: 20.0,
      price: 13.0,
      rating: 4,
    },
    {
      id: 5,
      name: "Calabrese Broccoli",
      category: "Vegetable",
      image: "./Photo.jpg",
      oldPrice: 20.0,
      price: 13.0,
      rating: 4,
    },
    {
      id: 6,
      name: "Calabrese Broccoli",
      category: "Vegetable",
      image: "./Photo.jpg",
      oldPrice: 20.0,
      price: 13.0,
      rating: 4,
    },
    {
      id: 7,
      name: "Calabrese Broccoli",
      category: "Vegetable",
      image: "./Photo.jpg",
      oldPrice: 20.0,
      price: 13.0,
      rating: 4,
    },
    {
      id: 8,
      name: "Calabrese Broccoli",
      category: "Vegetable",
      image: "./Photo.jpg",
      oldPrice: 20.0,
      price: 13.0,
      rating: 4,
    },
  ];
  return (
    <div>
      <Navbar />
      <section>
        <div className="bg-[url(./headerBg.png)] bg-cover flex items-center bg-center h-screen ">
          <div className="ml-20">
            <p className="text-3xl text-[#68A47F] italic font-serif">
              100% Natural Food
            </p>
            <br />
            <p className="text-5xl font-extrabold text-[#274C5B]">
              Choose the best <br />
              healthier way <br />
              of life
            </p>
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
              className="relative h-[300px] w-[500px] rounded-xl overflow-hidden"
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
          <img src="./homeFruts.png" alt="Fruits" className="w-[600px]" />
          <div>
            <p className="text-2xl text-[#68A47F] italic font-serif">
              About Us
            </p>
            <h2 className="text-5xl font-extrabold text-[#274C5B]">
              We Believe in Working Accredited Farmers
            </h2>
            <p className="text-lg text-[#274C5B] mt-5">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="flex gap-5 mt-5">
              <div className="px-5 py-5 rounded-xl bg-[#FFFFFF]">
                <img src="./Vegan Food.svg" alt="Vegan Food" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#274C5B]">
                  Organic Foods Only
                </h2>
                <p className="text-[#525C60]">
                  Simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="px-5 py-5 rounded-xl bg-[#FFFFFF]">
                <img src="./Mailbox Quality.svg" alt="Mailbox Quality" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-[#274C5B]">
                  Quality Standards
                </h2>
                <p className="text-[#525C60]">
                  Simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            <button className="flex items-center gap-1 mt-3 px-12 py-7 bg-[#274C5B] rounded-xl text-white text-xl">
              See More <FaCircleArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="text-center">
          <p className="text-2xl text-[#68A47F] italic font-serif">
            Categories{" "}
          </p>
          <h2 className="text-5xl font-extrabold text-[#274C5B]">
            Our Products
          </h2>
        </div>
        <div className="p-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <button className="flex mx-auto items-center gap-1 px-10 py-7 bg-[#274C5B] text-white rounded-xl text-xl">
          Load More <FaCircleArrowRight />
        </button>
      </section>

      <section className="h-screen mt-32 ">
        <div className="">
          <img
            src="./homebgend.png"
            className="h-screen w-full absolute -z-10"
            alt=""
          />
          <p className="text-2xl text-[#68A47F] italic text-center font-serif">
            Testimonial
          </p>
          <h2 className="text-3xl font-extrabold text-center text-[#274C5B]">
            What Our Customer Saying?
          </h2>
          <div className="justify-center">
            <img
              src="./ava.jpg"
              className="rounded-full flex mx-auto mt-14 w-28"
              alt=""
            />
            <p className="text-center mt-10 text-[#525C60]">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy <br /> text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
            <h2 className="text-[#274C5B] font-extrabold text-center">
              Sara Taylor
            </h2>
            <p className="text-[#525C60] text-center">Consumer</p>
          </div>
        </div>
      </section>

      <EntrEmail />
      <Footer />
    </div>
  );
}

export default Home;
