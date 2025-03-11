import logo from "../imgs/logo.png";

const Header = () => {
    return (
        <main className="bg-[#fff9f0] top-0 z-50">
            <nav className="flex justify-between items-center p-4">
                <a href="/" className="text-black flex justify-left">
                    <img src={logo} alt="livia" className="w-35 h-25" />
                </a>
                <div className="flex-grow flex justify-center">
                    <div className="flex underline space-x-4">
                        <a href="/about" className="text-black">About</a>
                        <a href="/projects" className="text-black">Projects</a>
                        <a href="/inspire" className="text-black">Inspire</a>
                    </div>
                </div>
                <div className="w-35 h-25"></div>
            </nav>    
        </main>
    )
}

export default Header;