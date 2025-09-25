import Header from '../components/header';
import Footer from '../components/footer';
import pic1 from '../imgs/pic1.jpg';
import about from '../imgs/about.png';

const About = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-4">
                <div className='flex flex-row items-start'>
                    <div className='flex flex-col space-y-6 text-xl flex-1 ml-10 mr-30 max-w-3xl'>
                        <img src={about} alt="about" className="w-100 h-25" />
                        <p>Hi I’m Olivia!</p>
                        <p>I'm Computer Science student and I have a passion for web design and frontend development.</p>
                        <p>Outside of studies, I love to draw, play video games, and bake. I'm currently playing through Hollow Knight and my favorite thing to bake is brown butter cookies.</p>
                        <p>I built this website as a way to document my journey in software development, share projects, and show my growth as a developer. </p>
                        <p>Feel free to explore and reach out if you’d like to connect!</p>
                        <p>📍 Based in Texas | 💻 Frontend Dev & Designer</p>
                    </div>
                    <div className="ml-10">
                        <img src={pic1} alt="pic1" className="rounded-md w-90 h-115 box box-content box-shadow-green border-3 border-[#778965] bg-[#9caf88] flex flex-col items-center" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About;
