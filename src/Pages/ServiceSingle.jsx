import LogoHeader from "../components/common/LogoHeader"
import Footer from "../components/ui/Footer"
import Navbar from "../components/ui/Navbar"





function ServiceSingle() {
    return (
        <div>
            <Navbar />
            <LogoHeader bgImg="/Background.png" title="Quality Standard" />

            <section className="w-9/12 h-auto mx-auto my-32">
                <img src="/Image.jpg" alt="img" />

                <div className="w-10/12 h-auto mx-auto my-10">
                    <h2 className="text-[50px] text-[#274C5B] font-bold">Organic Store Services</h2>

                    <p className="text-[18px] text-[#525C60] my-8 leading-7 tracking-wide">{`t is a long established fact that a reader will be distracted by the readable content of a page
                   when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `}</p>

                    <p className="text-[18px] text-[#525C60] my-8 leading-7 tracking-wide">{`Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years`}</p>

                    <div className="w-full h-96 my-4">
                        <div className="w-full h-2/4 my-4 flex items-center justify-center gap-6">
                            <img src="/Photo (1).jpg" alt="img" className="w-2/6 h-full rounded-xl" />
                            <div className="flex items-center justify-center w-4/6 h-full">
                                <div>
                                    <h3 className="text-[25px] text-[#274C5B] font-semibold">Why Organic</h3>
                                    <p className="text-[18px] text-[#525C60]">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-2/4 my-4 flex items-center justify-center gap-6">
                            <div className="flex items-center justify-center w-4/6 h-full">
                                <div>
                                    <h3 className="text-[25px] text-[#274C5B] font-semibold">Speciality Produce</h3>
                                    <p className="text-[18px] text-[#525C60]">Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                                </div>
                            </div>
                            <img src="/Image.png" alt="img" className="w-2/6 h-full rounded-xl" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[35px] text-[#274C5B] font-bold">We farm your land</h2>
                        <p className="text-[18px] text-[#525C60] my-4">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full h-32">
                        <div className="flex items-center justify-center gap-6 w-2/4 h-full">
                            <div className="w-20 h-20 rounded-full bg-[#7EB693] my-2 flex items-center justify-center">
                                <span className="text-[25px] text-white ">01</span>
                            </div>
                            <h2 className="text-[25px] text-[#274C5B] font-semibold">Best quality support</h2>
                        </div>
                        <div className="flex items-center justify-center gap-6 w-2/4 h-full">
                            <div className="w-20 h-20 rounded-full bg-[#7EB693] my-2 flex items-center justify-center">
                                <span className="text-[25px] text-white ">02</span>
                            </div>
                            <h2 className="text-[25px] text-[#274C5B] font-semibold">Best quality support</h2>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ServiceSingle
