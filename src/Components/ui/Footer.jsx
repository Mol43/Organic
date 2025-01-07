import { Link } from "react-router-dom";



function Footer() {
    return (
        <>
        <footer className="flex flex-col md:flex-row justify-center gap-3 items-center bg-dark p-5 text-[#525C60]">
            <div className="text-center md:text-right mb-4 md:mb-0">
                <p className="font-bold mb-2">Contact Us</p>
                <div className="mb-2">
                    <p className="font-semibold">Email</p>
                    <p>needhelp@Organia.com</p>
                </div>
                <div className="mb-2">
                    <p className="font-semibold">Phone</p>
                    <p>666 888 888</p>
                </div>
                <div>
                    <p className="font-semibold">Address</p>
                    <p>88 road, borklyn street, USA</p>
                </div>
            </div>
            <div className="h-52 border border-gray-500"></div>
            

            <div className="text-center mb-4 md:mb-0">
                <a href='#' className="flex justify-center items-center mb-2">
                    <img src="./Logo.png" alt="Logo" className="w-5 mr-2" />
                    <p className="text-lg font-bold">Organick</p>
                </a>
                <p className="text-sm leading-relaxed">
                    Simply dummy text of the printing and typesetting industry.<br />
                    Lorem Ipsum simply dummy text of the printing
                </p>
                
            </div>
            <div className="h-52 border border-gray-500"></div>

            <div className="text-center md:text-left">
                <p className="font-bold mb-2">Utility Pages</p>
                <ul>
                    <li className="mb-1"><a href="#">Style Guide</a></li>
                    <li className="mb-1"><Link to='/notfound'>404 Not Found</Link></li>
                    <li className="mb-1"><a href="#">Password Protected</a></li>
                    <li className="mb-1"><a href="#">Licences</a></li>
                    <li><a href="#">Changelog</a></li>
                </ul>
            </div>
        </footer>
        <div className="text-center">
            <hr />
            <p className='font-normal text-[#525C60]'>Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow</p>
        </div>
        </>
    );
}

export default Footer;
