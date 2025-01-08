import EntrEmail from "../Components/common/EntrEmail"
import Footer from "../components/ui/Footer"
import Navbar from "../components/ui/Navbar"


function PortfolioSingle() {
    return (
        <div>
            <Navbar />

            <section className="relative pb-40">
                <div>
                    <img src="/PSingleBG.png" alt="img" />
                </div>
                <div className="absolute left-2/4 bottom-2 w-10/12 h-72 shadow-md -translate-x-2/4 rounded-xl bg-white flex items-center justify-between  p-20">
                    <div className="w-4/6">
                        <h2 className="text-[70px] text-[#274C5B] font-bold">Black Raspberry</h2>
                        <p className="text-[18px] text-[#525C60]">Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                    </div>
                    <div className="w-2/6 h-44">
                        <table>
                            <tr>
                                <th className="w-2/4 text-[25px] text-[#274C5B]">Date  : </th>
                                <td className="w-2/4 text-[18px] text-[#525C60] ">December 4, 2022</td>
                            </tr>
                            <tr>
                                <th className="w-2/4 text-[25px] text-[#274C5B]">Date  : </th>
                                <td className="w-2/4 text-[18px] text-[#525C60] ">December 4, 2022</td>
                            </tr>
                            <tr>
                                <th className="w-2/4 text-[25px] text-[#274C5B]">Date  : </th>
                                <td className="w-2/4 text-[18px] text-[#525C60] ">December 4, 2022</td>
                            </tr>
                            <tr>
                                <th className="w-2/4 text-[25px] text-[#274C5B]">Date  : </th>
                                <td className="w-2/4 text-[18px] text-[#525C60] ">December 4, 2022</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>

            <section className="w-8/12 h-auto mx-auto my-20">
                <h2 className="text-[35px] text-[#274C5B] font-bold">About The Farm:</h2>
                <p className="text-[18px] text-[#525C60]">{`t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`}
                    <br />
                    <br />
                  {`Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years`}
                </p>
                <img src="/Sabzi.png" alt="img" className="rounded-xl my-10" />
                <h2 className="text-[35px] text-[#274C5B] font-bold">How To Farm:</h2>

                <p className="ttext-[18px] text-[#525C60]">{`It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `}
                    <br />
                    <br />
                   {`Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years`}</p>

                <h2 className="text-[35px] text-[#274C5B] font-bold mt-10">Conclusion:</h2>

                <p className="text-[18px] text-[#525C60]">
                    {`t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `}
                    <br />
                    <br />
                    {`Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years`}
                </p>
            </section>
            <EntrEmail />
            <Footer />
        </div>
    )
}

export default PortfolioSingle;
