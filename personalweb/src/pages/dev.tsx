import Header from '../components/header';
import Footer from '../components/footer';
import calmkeys from '../imgs/calm_keys_logo.png';
import purrr from '../imgs/Purrrsonality.png';
import logo from '../imgs/logo.png';

const Dev = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-4">
                <div className='flex flex-row items-start'>
                    <div className='flex flex-col space-y-6 text-6xl font-bold tracking-tighter flex-1 ml-10 max-w-3xl'>
                        <div className="fade-in fade-in-1">Create</div>
                        <div className="fade-in fade-in-2">Design</div>
                        <div className="fade-in fade-in-3">Code</div>
                    </div>

                    {/* Scrollable container for the green boxes */}
                    <div className="flex flex-col space-y-6 ml-10 h-[500px] overflow-y-auto">
                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <img src={calmkeys} alt='calmkeys' className='w-50 h-50 rounded-full' />
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-20'></div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-10'></div>
                            </div>
                        </div>
                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <img src={purrr} alt='purrr' className='w-50 h-50 rounded-full' />
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-20'></div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-10'></div>
                            </div>
                        </div>
                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <img src={logo} alt='purrr' className='w-50 h-50 rounded-full' />
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-20'></div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-10'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Dev;
