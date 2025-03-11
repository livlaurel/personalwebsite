import Header from '../components/header';
import Footer from '../components/footer';
import pfp from '../imgs/pfp.png';
import inspo from '../imgs/inspo.png';
import dev from '../imgs/dev.png';

const Home = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-7">
                <section className="container mx-auto">
                    <h1 className="text-4xl font-bold text-center">Meet Olivia Laurel...</h1>
                    <div className='flex justify-between items-center m-10'>
                        <a href='/about' className="box box-content rounded-md border-3 p-4 h-80 w-70 bg-[#9caf88] flex flex-col justify-between items-center box-shadow hover-float">
                            <img src={pfp} alt="pfp" className="w-60 h-65" />
                            <h3 className="text-2xl font-bold underline mt-4">About Me</h3>
                        </a>
                        <a href='/dev' className="box box-content rounded-md border-3 p-4 h-80 w-70 bg-[#9caf88] flex flex-col justify-between items-center box-shadow hover-float">
                            <img src={dev} alt="dev" className="w-60 h-65" />
                            <h3 className="text-2xl font-bold underline mt-4">Projects</h3>
                        </a>
                        <a href='/inspire' className="box box-content rounded-md border-3 p-4 h-80 w-70 bg-[#9caf88] flex flex-col justify-between items-center box-shadow hover-float">
                            <img src={inspo} alt="inspo" className="w-60 h-65" />
                            <h3 className="text-2xl font-bold underline mt-4">Inspiration</h3>
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home;