import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import LogoHeader from "../Components/common/LogoHeader"
import Footer from "../Components/ui/Footer"
import Navbar from "../Components/ui/Navbar"
import EntrEmail from "../Components/common/EntrEmail"






function Team() {

    const Deweloper = [
        {
            id: 1,
            img: "/Giovani.jpg",
            name: "Giovani Bacardo",
            dev: "Farmer",
            profil: [

                { id: 1, icon: <FaFacebook /> },
                { id: 2, icon: <FaTwitter /> }
            ],
        },
        {
            id: 2,
            img: "/Marianne.jpg",
            name: "Marianne Loreno",
            dev: "Designer",
            profil: [
                { id: 1, icon: <FaInstagram /> },
                { id: 2, icon: <FaFacebook /> },
                { id: 3, icon: <FaTwitter /> }
            ],
        },
        {
            id: 3,
            img: "/Riga.jpg",
            name: "Riga Pelore",
            dev: "Farmer",
            profil: [
                { id: 1, icon: <FaInstagram /> },
                { id: 2, icon: <FaFacebook /> },
                { id: 3, icon: <FaTwitter /> }
            ],
        },
        {
            id: 4,
            img: "/Keira.jpg",
            name: "Keira Knightley",
            dev: "Farmer",
            profil: [
                { id: 1, icon: <FaFacebook /> },
                { id: 2, icon: <FaTwitter /> }
            ],
        },
        {
            id: 5,
            img: "/Scott.jpg",
            name: "Scott Lawrence",
            dev: "Designer",
            profil: [
                { id: 1, icon: <FaInstagram /> },
                { id: 2, icon: <FaFacebook /> },
                { id: 3, icon: <FaTwitter /> }
            ],
        },
        {
            id: 6,
            img: "/Karen.jpg",
            name: "Karen Allen",
            dev: "Farmer",
            profil: [
                { id: 1, icon: <FaInstagram /> },
                { id: 2, icon: <FaFacebook /> },
                { id: 3, icon: <FaTwitter /> }
            ],
        },
    ]

    return (
        <div>
            <Navbar />
            <LogoHeader bgImg="/TeamBG.png" title="Our Team" />

            <section className="w-8/12 h-auto text-center my-20 mx-auto">
                <p className="text-[36px] text-[#7EB693] font-sans">Team</p>
                <h2 className="text-[50px] text-[#274C5B] font-bold my-4">Our Organic Experts</h2>

                <p className="text-[18px] text-[#525C60]">{`Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.`}</p>

                <div className="w-full grid grid-cols-3 gap-4 mt-4">
                    {Deweloper.map((item) => {
                        return (
                            <div key={item.id} className="rounded-xl bg-[#F9F8F8] hover:shadow-md hover:bg-white">
                                <img src={item.img} alt="img" className="w-full h-80 rounded-tl-xl rounded-tr-xl" />
                                <div className="p-4 text-left">
                                    <h3 className="text-[25px] text-[#274C5B] font-semibold">{item.name}</h3>
                                    <div className="flex items-center justify-between">
                                        <p className="text-[22px] text-[#7EB693]">{item.dev}</p>
                                        <div className="flex gap-2">
                                            {item.profil.map((icon) => {
                                                return (
                                                    <span key={icon.id} className="text-[#274C5B] flex items-center justify-center cursor-pointer">{icon.icon}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>

            <EntrEmail />
            <Footer />
        </div>
    )
}

export default Team
