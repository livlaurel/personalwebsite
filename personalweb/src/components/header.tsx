import logo from "../imgs/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const Header = () => {
    return (
        <main className="bg-[#fff9f0] top-0 z-50">
            <nav className="flex justify-between items-center ml-5">
                <a href="/" className="text-black flex justify-left">
                    <img src={logo} alt="livia" className="w-35 h-30" />
                </a>
                <div className="absolute top-7 right-4 flex-grow flex font-bold items-center">
                    <div className="flex text-xl"> 
                        <div className="group flex flex-col items-center">
                            <a href="#/dev" className="text-[#394a28] hover:text-[#9caf88]">
                                <FaCode size={20} />
                            </a>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-[#394a28] mt-1">
                                Projects
                            </span>
                        </div>
                        <div className="group flex flex-col items-center">
                            <a href="#/about" className="text-[#394a28] hover:text-[#9caf88]">
                                <FaUserAlt size={20} />
                            </a>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-[#394a28] mt-1">
                                About Me
                            </span>
                        </div>
                        <div className="group flex flex-col items-center">
                            <a href="#/inspiration" className="text-[#394a28] hover:text-[#9caf88]">
                                <FaLightbulb size={20} />
                            </a>
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-[#394a28] mt-1">
                                Inspiration
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-25 h-25"></div> 
            </nav>    
        </main>
    )
}

export default Header;