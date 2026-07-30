import Header from '../components/header';
import Footer from '../components/footer';
import pic1 from '../imgs/pic1.jpg';
import about from '../imgs/about.png';

const About = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-4">
                <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                    <div className='flex flex-col space-y-6 text-lg lg:text-xl flex-1 lg:ml-10 lg:mr-30 max-w-3xl'>
                        <img src={about} alt="about" className="w-full lg:w-100 h-auto" />
                        <p>Hi I’m <span className="font-bold text-[#e17878]">Olivia</span>!</p>
                        <p className='ml-3 text-base lg:text-lg'>I'm a software engineer and I have a passion for <span className="text-[#778965] font-semibold">frontend/fullstack engineering </span> and <span className="text-[#778965] font-semibold">UX/UI.</span></p>
                        <p className='ml-3 text-base lg:text-lg'>I love making logos, play video games, and baking. I'm currently playing stardew valley/tomodachi and my favorite thing to bake is <a href='https://drive.google.com/file/d/1HNvBg0IX_yG7jqlOhc_twzikbHFyxxtt/view?usp=sharing' className="font-semibold text-[#778965]">brown butter chocolate chip cookies.</a> <span className="text-xs"> &lt;-click 4 recipe</span></p>
                        <p className='ml-3 text-base lg:text-lg'>I built this portfolio to showcase the projects I've created, document my journey as an engineer, and share the things I'm learning along the way. </p>
                        <p className='ml-3 text-base lg:text-lg'>Feel free to explore and reach out if you’d like to connect!</p>
                        <p>📍 Based in Texas | 💻 Frontend Dev & Designer</p>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-10">
                        <img src={pic1} alt="pic1" className="rounded-md w-full lg:w-90 h-auto box-shadow-green border-3 border-[#778965] bg-[#9caf88]" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About;
