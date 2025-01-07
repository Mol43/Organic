import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/ui/Footer";
import LogoHeader from "../components/common/LogoHeader";
import { Link } from "react-router-dom";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Calabrese Broccoli",
      category: "Vegetable",
      image: "./Health.jpg",
      oldPrice: 20.0,
      price: 13.0,
      rating: 4,
    },
    {
      id: 2,
      name: "Fresh Carrots",
      category: "Vegetable",
      image: "./Health.jpg",
      oldPrice: 25.0,
      price: 15.0,
      rating: 5,
    },
    {
      id: 3,
      name: "Green Lettuce",
      category: "Vegetable",
      image: "./Health.jpg",
      oldPrice: 18.0,
      price: 12.0,
      rating: 3,
    },
    {
      id: 4,
      name: "Organic Tomatoes",
      category: "Vegetable",
      image: "./Health.jpg",
      oldPrice: 22.0,
      price: 14.0,
      rating: 4,
    },
  ];

  const ProductCard = ({ product }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs">
        <div className="relative">
          <Link
            to={{
              pathname: "/shopSingle",
            }}
            state={product} // Mahsulot ma'lumotlarini state orqali yuboramiz
            className="absolute top-0 left-0 w-full h-full"
          ></Link>
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

  return (
    <>
      <Navbar />
      <LogoHeader bgImg="/shaptolibg.png" title="Shop" />
      <div className="p-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Shop;
