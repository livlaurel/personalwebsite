import Header from '../components/header';
import Footer from '../components/footer';
import pic1 from '../imgs/pic1.jpeg';
import about from '../imgs/about.png';

const About = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-4">
                <div className='flex flex-row items-start'>
                    <div className='flex flex-col space-y-6 text-xl flex-1 ml-10 mr-30 max-w-3xl'>
                        <img src={about} alt="about" className="w-100 h-25" />
                        <p>Hello! I’m Olivia Laurel, a Computer Science undergrad with a passion for web design and frontend development.</p>
                        <p>When I’m not coding, you’ll probably find me drawing, playing video games, or deep-diving into UI/UX design.</p>
                        <p>I built this website as a way to document my journey in software development, share projects, and showcase my growth as a developer. Feel free to explore and reach out if you’d like to connect!</p>
                        <p>📍 Based in Texas | 💻 Frontend Dev & Designer</p>
                    </div>
                    <div className="ml-10">
                        <img src={pic1} alt="pic1" className="rounded-md w-90 h-115 box box-content box-shadow-green rounded-md border-3 border-[#778965] h-115 w-90 bg-[#9caf88] flex flex-col items-center" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About;
