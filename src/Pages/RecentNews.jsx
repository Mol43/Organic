import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/ui/Footer";
import LogoHeader from "../Components/common/LogoHeader";

const newsData = [
  {
    id: 1,
    date: { day: "25", month: "Nov" },
    imgSrc: "/public/ShopImgs/musur.png",
    author: "By Rachi Card",
    title: "Don’t Use Plastic Product! It’s Kill Nature",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  {
    id: 2,
    date: { day: "25", month: "Nov" },
    imgSrc: "/public/ShopImgs/musur.png",
    author: "By John Doe",
    title: "Save the Earth with Recycling",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  
  {
    id: 3,
    date: { day: "25", month: "Nov" },
    imgSrc: "/public/ShopImgs/musur.png",
    author: "By John Doe",
    title: "Save the Earth with Recycling",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  
  {
    id: 4,
    date: { day: "25", month: "Nov" },
    imgSrc: "/public/ShopImgs/musur.png",
    author: "By John Doe",
    title: "Save the Earth with Recycling",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  
  {
    id: 5,
    date: { day: "25", month: "Nov" },
    imgSrc: "/public/ShopImgs/musur.png",
    author: "By John Doe",
    title: "Save the Earth with Recycling",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  
  {
    id: 6,
    date: { day: "25", month: "Nov" },
    imgSrc: "/public/ShopImgs/musur.png",
    author: "By John Doe",
    title: "Save the Earth with Recycling",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  },
  
];

function RecentNews() {
  return (
    <>
    <Navbar/>
    <LogoHeader bgImg="./path.png" title="Recent  News" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 mb-10 py-10 bg-gray-100">
        {newsData.map((news) => (
          <div key={news.id} className="relative">
            <div className="relative">
              <img
                src={news.imgSrc}
                alt={news.title}
                className="w-full object-cover rounded-xl"
              />
              <div className="absolute top-4 left-4 bg-white text-center text-sm font-bold text-gray-700 w-16 h-16 flex flex-col justify-center items-center rounded-full shadow-md">
                <span className="text-xl">{news.date.day}</span>
                <span>{news.date.month}</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 bg-white p-6 rounded-xl shadow-xl w-[450px]">
              <div className="flex items-center mb-2 text-gray-600 text-sm">
                <MdPeopleAlt className="text-xl mr-2" />
                <p>{news.author}</p>
              </div>
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {news.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">{news.description}</p>
              <button className="flex items-center text-slate-600 text-lg font-medium hover:text-slate-800 transition">
                Read More
                <HiArrowCircleRight className="ml-2 mt-0.5" />
              </button>
            </div>
          </div>
        ))}
      </section>
     <Footer/>
    </>
  );
}

export default RecentNews;
