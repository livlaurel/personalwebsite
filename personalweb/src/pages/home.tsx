import Header from '../components/header';
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
                        <div className="box box-content rounded-md border-3 p-4 h-80 w-70 bg-[#9caf88]  flex justify-center items-center box-shadow">
                            <img src={pfp} alt="pfp" className="w-60 h-65" />
                        </div>
                        <div className="box box-content rounded-md border-3 p-4 h-80 w-70 bg-[#9caf88]  flex justify-center items-center box-shadow">
                            <img src={dev} alt="inspo" className="w-60 h-65" />
                        </div>
                        <div className="box box-content rounded-md border-3 p-4 h-80 w-70 bg-[#9caf88] flex justify-center items-center box-shadow">
                            <img src={inspo} alt="dev" className="w-60 h-65" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home;