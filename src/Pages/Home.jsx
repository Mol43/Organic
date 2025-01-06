import { FaCircleArrowRight } from 'react-icons/fa6'
import EntrEmain from '../components/common/EntrEmain'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'






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



      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <EntrEmain />
      <Footer />
    </div>
  );
}

export default Home;
