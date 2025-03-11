import logo from "../imgs/logo.png";

const Header = () => {
    return (
        <main className="bg-[#fff9f0] top-0 z-50">
            <nav className="flex justify-between items-center p-4">
                <a href="/" className="text-black flex justify-left">
                    <img src={logo} alt="livia" className="w-35 h-30" />
                </a>
                <div className="flex-grow font-[Arial, Helvetica, sans-serif] flex font-bold underline justify-center items-center">
                    <div className="flex space-x-60">
                        <a href="/about" className="text-black">About Me</a>
                        <a href="/dev" className="text-black">Projects</a>
                        <a href="/inspire" className="text-black">Inspiration</a>
                    </div>
                </div>
                <div className="w-25 h-25"></div> 
            </nav>    
        </main>
    )
}

export default Header;