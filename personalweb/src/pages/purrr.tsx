import Header from '../components/header';
import Footer from '../components/footer';
import purrr from '../imgs/purrr.png';

const Purrr = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow">
              <div className='flex flex-col h-[500px] overflow-y-auto'>
                <div className='flex flex-col justify-start items-center'>
                    <img src={purrr} alt='calmkeys' className='w-85 h-50' />
                    <p className='font-mono font-medium tracking-tighter'>Curiosity didn’t just get the cat, it found their purrrsonality!</p>
                </div>


                <div className="flex flex-col justify-start items-left ml-20 mr-20 mt-15">
                    <h2 className="text-5xl font-stretch-expanded font-medium mb-5">Overview</h2>
                    <div className="flex flex-row gap-6 items-start">
                        <p className="mb-15 text-xl/10 w-1/2">
    
                        </p>
                        <div className="flex items-center justify-center bg-[#9caf88] border-3 border-[#7f966c] w-3/5 p-2 rounded-lg mb-15">
                        </div>
                    </div>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Inspiration</h2>
                    <p className='mb-15 text-xl/10'>
                    
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5 '>What I Built</h2>
                    <p className='text-xl/10'> 
                    
                    </p>
                    <p className='text-xl/10'> 
                     Purrrsonality features:
                    </p>
                    <ul className='list-disc marker:text-[#ff7a7a] ml-10 mb-15 text-xl/8'>
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Challenges & Solutions</h2>
                    <p className='mb-5 text-xl/10'>
                   
                    </p>
                    <p className='mb-15 text-xl/10'>
                    
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Results</h2>
                    <p className='text-xl/10 mb-3'>
                   
                    </p>
                    <p className='mb-2 text-base/10 font-mono tracking-tighter'>
                    "I tried it, and it is very cute (biased, because I'm already a cat lover)." – User feedback
                    </p>
                    <p className='mb-15 text-base/5 font-mono tracking-tighter'>
                    "Super cute! I loved the storyline!" – User feedback
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Key Learnings</h2>
                    <ul className='list-disc marker:text-[#ff7a7a] ml-10 mb-15 text-xl/8'>
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>

                </div>
             </div>

            </main>
            <Footer />
        </div>
    )
}

export default Purrr;
