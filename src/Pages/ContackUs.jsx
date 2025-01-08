import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareTwitter } from 'react-icons/fa6';
import { SiMinutemailer } from 'react-icons/si';
import { FaMapMarkerAlt } from "react-icons/fa";
import Footer from '../Components/ui/Footer';
import Navbar from '../Components/ui/Navbar';
import LogoHeader from '../Components/common/LogoHeader';
function ContactUs() {
  return (
    <>
    <Navbar/>
    <LogoHeader bgImg={`/bgfon.jpg`} title={`Contack Us`} />
    <section className='bg-gray-50'>
    <div className="flex items-center justify-center  h-screen">
      <div className="grid grid-cols-2 gap-8 max-w-5xl  p-8 rounded-xl ">
        <div className="relative flex justify-center items-center rounded-xl">
          <img
            src="/ShopImgs/banan.png"
            alt="Fruit Composition"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
            We'd love to talk about how we<br /> can work together.
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <img src="/public/ShopImgs/email.png" alt="Email Icon" className="w-[50px]" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Message</h3>
              <span className="text-gray-600">support@organic.com</span>
            </div>
          </div>


          <div className="flex items-center gap-4 mb-8">
            <img src="/public/ShopImgs/phone.png" alt="Phone Icon" className="w-[50px]" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
              <span className="text-gray-600">+01 123 456 789</span>
            </div>
          </div>

 
          <div className="flex gap-4 text-2xl text-gray-600">
            <FaSquareInstagram />
            <FaFacebook />
            <FaSquareTwitter />
            <SiMinutemailer />
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
    <div className="relative bg-gray-100 w-full h-[500px] rounded-lg ">
      <img
        src="/public/ShopImgs/bariglar2.jpg" 
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute right-[10%] -mt-[440px] bg-white p-8 rounded-lg shadow-xl max-w-sm">
        <h2 className="text-green-500 font-semibold text-lg">Location</h2>
        <h1 className="text-gray-800 font-bold text-3xl mt-2">Our Farms</h1>
        <p className="text-gray-600 mt-4 text-sm leading-relaxed">
          Established fact that a reader will be distracted by the readable
          content of a page when looking at a layout. The point of using.
        </p>
        <div className="mt-3">
          <div className="flex items-start gap-4 mb-6">
            <FaMapMarkerAlt className="text-green-500 text-xl" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">
                New York, USA:
              </h3>
              <p className="text-gray-600 text-sm">
                299 Park Avenue New York, <br />
                New York 10171
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-green-500 text-xl" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">
                London, UK:
              </h3>
              <p className="text-gray-600 text-sm">
                30 Stamford Street, <br />
                London SE1 9LQ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex flex-col lg:flex-row lg:justify-between bg-gray-50 p-8">
      <div className="lg:w-1/2 w-full">
        <h2 className="text-xl font-semibold mb-6">Billing details</h2>
        <form className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 p-2 rounded-md"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name (Optional)"
            className="border border-gray-300 p-2 rounded-md"
          />
          <div>
            <label className="block mb-1 text-sm">Country / Region</label>
            <select className="border border-gray-300 p-2 rounded-md w-full">
              <option>Sri Lanka</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Street address"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="text"
            placeholder="Town / City"
            className="border border-gray-300 p-2 rounded-md"
          />
          <div>
            <label className="block mb-1 text-sm">Province</label>
            <select className="border border-gray-300 p-2 rounded-md w-full">
              <option>Uzbekiston</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="ZIP code"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border border-gray-300 p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email address"
            className="border border-gray-300 p-2 rounded-md"
          />
          <textarea
            placeholder="Additional Information"
            className="border border-gray-300 p-2 rounded-md h-24"
          ></textarea>
        </form>
      </div>
<br/>
     
      <div className="lg:w-1/3 w-full bg-white shadow-md p-6 lg:mt-14 rounded-xl h-full self-start ">
  <h2 className="text-xl font-semibold mb-6">Product</h2>
  <div className="flex justify-between mb-2">
    <span>Aligator Sofa x 1</span>
    <span>Rs. 250,000.00</span>
  </div>
  <div className="flex justify-between mb-2">
    <span>Subtotal</span>
    <span>Rs. 250,000.00</span>
  </div>
  <div className="flex justify-between font-semibold text-lg mb-6">
    <span>Total</span>
    <span>Rs. 250,000.00</span>
  </div>
  <div>
    <label className="block mb-2">
      <input type="radio" name="payment" className="mr-2" /> Direct Bank Transfer
    </label>
    <p className="text-sm text-gray-500 mb-4">
      Make your payment directly into our bank account. Please use your Order ID as the payment reference.
    </p>
    <label className="block">
      <input type="radio" name="payment" className="mr-2" /> Cash on Delivery
    </label>
  </div>
  <button className="w-[200px] bg-slate-500 text-white p-3 rounded-md mt-6">
    Place order
  </button>
</div>
    </div>
    </section>
    <Footer/>
    </>
  );
}

export default ContactUs;
