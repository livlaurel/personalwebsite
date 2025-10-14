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
                        <p>Hi I’m Olivia!</p>
                        <p className='ml-3 text-base lg:text-lg'>I'm a Computer Science student and I have a passion for web design and frontend development.</p>
                        <p className='ml-3 text-base lg:text-lg'>Outside of studies, I love to draw, play video games, and bake. I'm currently playing through Hollow Knight and my favorite thing to bake is brown butter cookies.</p>
                        <p className='ml-3 text-base lg:text-lg'>I built this website as a way to document my journey in software development, share projects, and show my growth as a developer. </p>
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
