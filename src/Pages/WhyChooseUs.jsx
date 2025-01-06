import { useState } from 'react';
import { FaFacebook, FaHeadset, FaInstagram, FaShieldAlt, FaShoppingCart, FaTruck, FaTwitter } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';

const WhyChooseUs = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  return (
    <>    
<div className="flex flex-col lg:flex-row items-center justify-between px-4 py-8">
        
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src="/ShopImgs/YumaloqMeva.png" alt="About Image" className="w-full object-cover" />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <span className="text-xl text-gray-500">About Us</span>
          <h1 className="text-3xl lg:text-5xl font-bold mt-4">We do Creative <br />Things for Success</h1>
          <p className="text-gray-700 mt-6">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />
            to been the industry's standard dummy text ever since the 1500s, when an<br /> unknown printer took a galley.<br /><br />
            Simply dummy text of the printing and typesetting industry. Lorem had ceased<br />
            to been the industry's standard dummy text ever since the 1500s, when an <br />unknown printer took a galley.
          </p>

         
          <div className="flex gap-6 mt-8">
            <div className="flex items-center gap-3">
              <img src="/ShopImgs/Tractor.png" alt="Tractor" className="w-16 h-16" />
              <h3 className="text-lg font-semibold">Modern Agriculture <br /> Equipment</h3>
            </div>
            <div className="flex items-center gap-3">
              <img src="/ShopImgs/Chemical.png" alt="Chemical" className="w-16 h-16" />
              <h3 className="text-lg font-semibold">Modern Agriculture <br /> Equipment</h3>
            </div>
          </div>

        
          <div className="mt-8">
            <button className="bg-slate-800 text-white p-3 rounded-lg flex items-center justify-center gap-2">
              Explore More <GoArrowRight className="text-lg mt-1" />
            </button>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-center justify-center p-8 bg-slate-100">
     
        <div className="lg:w-1/2 text-center lg:text-left">
          <span className="text-xl font-semibold text-green-600">Why Choose us?</span>
          <h1 className="text-3xl lg:text-5xl font-bold mt-4 leading-tight">
            We do not buy from the<br />
            open market & traders.
          </h1>
          <p className="mt-4 text-gray-600">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased <br />
            to been the industry's standard since the 1500s, when an unknown.
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <button
                className="flex items-center bg-green-100 p-4 rounded-3xl gap-3 text-lg text-green-700 w-full lg:w-auto justify-center"
                onClick={() => setIsChecked1(!isChecked1)}
              >
                <input
                  type="checkbox"
                  checked={isChecked1}
                  onChange={() => {}}
                  className="w-5 h-5 accent-green-600"
                />
                100% Natural Product
              </button>
              <p className="mt-2 text-gray-600 text-sm">
                Simply dummy text of the printing and typesetting <br /> industry Lorem Ipsum.
              </p>
            </div>
            <div>
              <button
                className="flex items-center bg-green-100 p-4 rounded-3xl gap-3 text-lg text-green-700 w-full lg:w-auto justify-center"
                onClick={() => setIsChecked2(!isChecked2)}
              >
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={() => {}}
                  className="w-5 h-5 accent-green-600 "
                />
                Increases resistance
              </button>
              <p className="mt-2 text-gray-600 text-sm">
                Filling, and temptingly healthy, our Biona Organic <br /> Granola with Wild Berries is just the thing.
              </p>
            </div>
          </div>
        </div>

      
        <div className="lg:w-1/3 mt-6 lg:mt-0 flex justify-center">
          <img src="/ShopImgs/Barig.jpg.jpg" alt="Product Image" className="w-full max-w-md rounded-xl" />
        </div>
      </div>

    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 px-4 lg:px-20 justify-items-center">
        <div className="border bg-slate-200 rounded-xl text-center p-6 w-60">
          <FaShoppingCart className="text-6xl text-slate-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Return Policy</h1>
          <p className="text-gray-600">Simply dummy text of the printing typesetting.</p>
        </div>
        <div className="border bg-slate-200 rounded-xl text-center p-6 w-60">
          <FaTruck className="text-6xl text-slate-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Free Shipping</h1>
          <p className="text-gray-600">Enjoy free shipping on all orders.</p>
        </div>
        <div className="border bg-slate-200 rounded-xl text-center p-6 w-60">
          <FaShieldAlt className="text-6xl text-slate-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">Secure Payment</h1>
          <p className="text-gray-600">Guaranteed safe and secure checkout.</p>
        </div>
        <div className="border bg-slate-200 rounded-xl text-center p-6 w-60">
          <FaHeadset className="text-6xl text-slate-600 mx-auto mb-4" />
          <h1 className="text-2xl font-bold">24/7 Support</h1>
          <p className="text-gray-600">We're here to help anytime, anywhere.</p>
        </div>
      </div>
    <br/>
    <br/>


    <div className="text-center py-12 bg-gray-50">
    
      <span className="text-green-600 text-xl font-semibold">Team</span>
      <h1 className="text-3xl lg:text-5xl font-bold mt-2">Our Organic Experts</h1>
      <p className="text-gray-600 mt-4">
        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's<br />
        standard dummy text ever since the 1500s, when an unknown printer took a galley.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-12">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden w-80 lg:w-96">
          <img src="/ShopImgs/Yigit.png" alt="Giovani Bacardo" className="w-full h-96 object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold">Giovani Bacardo</h2>
            <p className="text-green-600 font-semibold">Farmer</p>
            <div className="flex justify-center gap-4 mt-4 text-gray-600">
              <FaFacebook className="hover:text-green-600 cursor-pointer" />
              <FaInstagram className="hover:text-green-600 cursor-pointer" />
              <FaTwitter className="hover:text-green-600 cursor-pointer" />
            </div>
          </div>
        </div>

      
        <div className="bg-white shadow-lg rounded-xl overflow-hidden w-80 lg:w-96">
          <img src="/ShopImgs/Yigit.png" alt="Marianne Loreno" className="w-full h-96 object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold">Marianne Loreno</h2>
            <p className="text-green-600 font-semibold">Designer</p>
            <div className="flex justify-center gap-4 mt-4 text-gray-600">
              <FaFacebook className="hover:text-green-600 cursor-pointer" />
              <FaInstagram className="hover:text-green-600 cursor-pointer" />
              <FaTwitter className="hover:text-green-600 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden w-80 lg:w-96">
          <img src="/ShopImgs/Yigit.png" alt="Riga Pelore" className="w-full h-96 object-cover" />
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold">Riga Pelore</h2>
            <p className="text-green-600 font-semibold">Farmer</p>
            <div className="flex justify-center gap-4 mt-4 text-gray-600">
              <FaFacebook className="hover:text-green-600 cursor-pointer" />
              <FaInstagram className="hover:text-green-600 cursor-pointer" />
              <FaTwitter className="hover:text-green-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center bg-slate-800 w-auto h-auto py-10">
      <span className="text-xl text-gray-300">About Us</span>
      <h1 className="text-4xl font-bold text-white mt-4">What We Offer for You</h1>
      
      <div className="flex justify-center gap-8 mt-8">
      
        <div className="flex flex-col items-center">
          <img 
            src="/public/ShopImgs/Qum.png" 
            alt="Spicy" 
            className="object-cover"
          />
          <h6 className="text-lg text-white mt-2">Spicy</h6>
        </div>


        <div className="flex flex-col items-center">
          <img 
            src="/public/ShopImgs/Qum.png" 
            alt="Spicy" 
            className="  object-cover" 
          />
          <h6 className="text-lg text-white mt-2">Spicy</h6>
        </div>

        <div className="flex flex-col items-center">
          <img 
            src="/public/ShopImgs/Qum.png" 
            alt="Spicy" 
            className="object-cover" 
          />
          <h6 className="text-lg text-white mt-2">Spicy</h6>
        </div>
      </div>
    </div>
    </>
  );
};

export default WhyChooseUs;
