import React from "react";
import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/ui/Footer";
import EntrEmail from "../Components/common/EntrEmail";
import { FaUserLarge } from "react-icons/fa6";

function BlogSingle() {
  return (
    <>
      <Navbar />
      <search>
        <img src="./blogSinglebg.png" alt="" />
        <div className="px-[82px] py-[60px]  w-10/12 rounded-xl bg-white shadow-xl absolute z-20 -bottom-1/4 left-2/4 -translate-x-2/4">
          <div className=" flex items-center gap-3 text-[#274C5B]">
            <p>
              <b>Posted On:</b>
              January 6, 2022
            </p>
            <p className="flex gap-1 items-center">
              <FaUserLarge className="text-[#7EB693] " />
              By Rachi Card
            </p>
          </div>
          <h1 className="text-[50px] text-[#274C5B] font-bold">
            Research More Organic Food
          </h1>
          <p className="text-[#525C60]">
            Established fact that a reader will be distracted by the readable
            content of a page <br /> when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less <br /> normal distribution
            of letters, as opposed
          </p>
        </div>
        <div className="text-[#525C60] px-64 mt-40">
          <p>
            Uniquely matrix economically sound value through cooperative
            technology. Competently parallel task fully <br /> researched data
            and enterprise process improvements. Collaboratively expedite
            quality manufactured <br /> products via client-focused results
            quickly communicate enabled technology and turnkey leadership
            skills. <br /> Uniquely enable accurate supply chains rather than
            friction technology.
          </p>
          <p className="text-[30px] font-extrabold text-[#274C5B] mt-5 mb-5">Preferred Form of Vitamin D?</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a <br /> layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to <br /> using 'Content here,
            content here', making it look like readable English.
          </p>
          <ul className="list-disc p-6">
            <li>
              Publishing packages and web pageLorem Ipsum as their default
            </li>
            <li>Content here, content here', making it look like readable</li>
            <li>Packages and web pageLorem Ipsum as their default</li>
          </ul>
          <div className="bg-[#F1EDEA] p-16 rounded-2xl text-center font-bold text-[#274C5B]">
            “The first rule of any organic used in a business is that nature
            applied to an efficient operation will magnify the efficiency. The
            second is that organic applied to an inefficient operation will
            magnify the health.”
          </div>
          <p className="text-[25px] font-extrabold text-[#274C5B] mt-5 mb-5">Make perfect organic product with us</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a <br /> layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to <br /> using 'Content here, content here', making
            it look like readable English.
          </p>
          <ol className="list-decimal p-6">
            <li>Publishing packages and web pageLorem Ipsum as their default</li>
            <li>Content here, content here', making it look like readable</li>
            <li>Packages and web pageLorem Ipsum as their default</li>
            <li>more-or-less normal distribution of letters</li>
          </ol>
        </div>
      </search>
      <EntrEmail />
      <Footer />
    </>
  );
}

export default BlogSingle;
