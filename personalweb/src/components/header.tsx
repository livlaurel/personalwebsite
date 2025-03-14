import logo from "../imgs/logo.png";
import { FaUserAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const Header = () => {
    return (
        <main className="bg-[#fff9f0] top-0 z-50">
            <nav className="flex justify-between items-center ml-5 ">
                <a href="/" className="text-black flex justify-left">
                    <img src={logo} alt="livia" className="w-35 h-30" />
                </a>
                <div className="flex-grow font-[Arial, Helvetica, sans-serif] flex font-bold underline justify-end items-center">
                    <div className="flex space-x-8 text-xl">
                        <a href="#/about">
                            <FaUserAlt />                        
                        </a>
                        <a href="#/dev" >
                            <FaLaptopCode />
                        </a>
                        <a href="#/inspire" >
                            <FaLightbulb />
                        </a>
                    </div>
                </div>
                <div className="w-25 h-25"></div> 
            </nav>    
        </main>
    )
}

export default Header;