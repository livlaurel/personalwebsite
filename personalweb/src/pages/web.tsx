import Header from '../components/header';
import Footer from '../components/footer';
import logo from '../imgs/logo.png';

const Web = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow">
              <div className='flex flex-col h-[500px] overflow-y-auto'>
                <div className='flex flex-col justify-start items-center'>
                    <img src={logo} alt='calmkeys' className='w-70 h-40' />
                    <p className='font-mono font-medium tracking-tighter'>My little space on the internet</p>
                </div>
             </div>

            </main>
            <Footer />
        </div>
    )
}

export default Web;
