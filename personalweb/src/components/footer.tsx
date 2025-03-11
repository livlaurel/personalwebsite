import { FaGithub } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <main className="bg-[#fff9f0]">
            <div className="flex justify-left mb-5 ml-5">
                <a href="https://github.com/livlaurel" className="mr-4">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.instagram.com/liviaa.png/" className="mr-4">
                    <TiSocialInstagram size={24}/>
                </a>    
                <a href="https://www.linkedin.com/in/olivialaurel/" className="mr-4">
                    <FaLinkedin size={24}/>
                </a>    
            </div>    
        </main>
    )
}

export default Footer;