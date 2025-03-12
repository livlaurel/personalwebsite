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
                    <div className='flex flex-col space-y-6 flex-1 ml-10 max-w-3xl'>
                        <div className="fade-in fade-in-1 text-6xl font-bold tracking-tighter">Create</div>
                        <div className="fade-in fade-in-2 text-6xl font-bold tracking-tighter">Design</div>
                        <div className="fade-in fade-in-3 text-6xl font-bold tracking-tighter">Code</div>
                        <p className='text-base font-mono tracking-tighter'>Here’s where I keep all my current projects! I’ve put a lot of love into them, and I hope you enjoy checking them out as much as I enjoyed making them. Have fun exploring! </p>
                    </div>
            
                    <div className="flex flex-col space-y-6 ml-10 h-[500px] overflow-y-auto">
                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <img src={calmkeys} alt='calmkeys' className='w-50 h-50 rounded-full' />
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-20'>
                                    <p className='text-base font-mono tracking-tighter m-5 mt-10'>CalmKeys is an endless typing game designed to help users practice their typing skills at their own pace.</p>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-10'>
                                    <div className='flex flex-col ml-20 m-5 mt-8'> 
                                        <h3 className='text-2xl font-bold mb-2'>Created Using:</h3>
                                        <ul className='list-disc text-lg font-mono tracking-tighter'>
                                            <li>React</li>
                                            <li>TypeScript</li>
                                            <li>Tailwind</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <img src={purrr} alt='purrr' className='w-50 h-50 rounded-full' />
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-20'>
                                    <p className='text-base font-mono tracking-tighter m-5 mt-10'>Purrrsonality is a fun personality game that tells you what kind of cat you are! Meow ദ്ദി/ᐠ｡‸｡ᐟ\</p>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-10'>
                                    <div className='flex flex-col ml-20 m-5 mt-8'> 
                                        <h3 className='text-2xl font-bold mb-2'>Created Using:</h3>
                                        <ul className='list-disc text-lg font-mono tracking-tighter'>
                                            <li>React</li>
                                            <li>TypeScript</li>
                                            <li>CSS</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <img src={logo} alt='purrr' className='w-50 h-50 rounded-full' />
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-20'>
                                    <p className='text-base font-mono tracking-tighter m-5 mt-8'>This is my personal website where I showcase my projects, share inspiration, and give you a glimpse into who I am, all while keeping things creative and fun!</p>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 justify-right ml-10'>
                                   <div className='flex flex-col ml-20 m-5 mt-8'> 
                                    <h3 className='text-2xl font-bold mb-2'>Created Using:</h3>
                                    <ul className='list-disc text-lg font-mono tracking-tighter'>
                                        <li>React</li>
                                        <li>TypeScript</li>
                                        <li>Tailwind</li>
                                    </ul>
                                    </div>
                                </div>
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
