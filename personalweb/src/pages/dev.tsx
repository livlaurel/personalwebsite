import Header from '../components/header';
import Footer from '../components/footer';
import calmkeys from '../imgs/calm_keys_logo.png';
import purrr from '../imgs/Purrrsonality.png';
import logo from '../imgs/logo.svg';
import booth from '../imgs/booth.png'
import sprint from "../imgs/Sprint.svg"
const svgs = import.meta.glob('../imgs/svgs/*.svg', { eager: true });

const svgIcons = Object.fromEntries(
  Object.entries(svgs).map(([key, value]) => {
    const name = key.split('/').pop()?.replace('.svg', '');
    return [name, (value as { default: string }).default];
  })
);

console.log(svgIcons.css); 


const Dev = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-4">
                <div className='flex flex-col lg:flex-row items-start'>
                    <div className='flex flex-col space-y-6 flex-1 ml-10 max-w-3xl'>
                        <div className="fade-in fade-in-1 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-[#394a28]">Create</div>
                        <div className="fade-in fade-in-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-[#394a28]">Design</div>
                        <div className="fade-in fade-in-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-[#394a28]">Code</div>
                        <p className='text-sm sm:text-base font-mono tracking-tighter'>Here’s where I keep all my current projects! I’ve put a lot of love into them, and I hope you enjoy checking them out as much as I enjoyed making them. Have fun exploring! </p>
                        <p className='text-sm italic font-mono font-semibold tracking-tighter text-[#394a28]'>scroll for more...</p>
                    </div>
                    <div className="flex flex-col space-y-6 ml-10 h-[500px] overflow-y-auto">
                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <a href='https://github.com/livlaurel/Sprint'>
                                    <img src={sprint} alt='calmkeys' className='w-50 h-50 rounded-full' />
                                    </a>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex flex-col justify-right ml-20'>
                                    <p className='text-base font-mono tracking-tighter m-3 mt-5'>Sprint is a project management app built for software teams. With a clean and intuitive workspace, it's perfect for tracking issues and managing sprints</p>
                                    <div className='flex justify-center'>
                                        <a href='#/sprint'>
                                            <p className='text-xs sm:text-sm font-mono text-[#e17878] font-bold tracking-tighter underline'>Learn More</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-10'>
                                    <div className='flex flex-col ml-20 m-5 mt-8'> 
                                        <h3 className='text-2xl font-bold mb-2'>Created Using:</h3>
                                        <ul className="grid grid-cols-4 gap-4 justify-items-center text-lg font-mono tracking-tighter">
                                            <li className='flex items-center  justify-center'>
                                                <img src={svgIcons.react} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4  justify-center'>
                                                <img src={svgIcons.typescript} alt="React" className='w-10 h-10 mr-2' /> 
                                            </li>
                                            <li className='flex items-center mb-4  justify-center'>
                                                <img src={svgIcons.nextdotjs} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4  justify-center'>
                                                <img src={svgIcons.github} alt="GitHub" className='w-10 h-10' />
                                            </li>
                                            <li className='flex items-center mb-4  justify-center'>
                                                <img src={svgIcons.git} alt="GitHub" className='w-10 h-10' /> 
                                            </li>
                                            <li>
                                                <img src={svgIcons.firebase} alt="Python" className='w-10 h-10' />
                                            </li>
                                            <li>
                                                <img src={svgIcons.python} alt="Python" className='w-10 h-10' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <a href='https://livlaurel.github.io/CalmKeys/'>
                                    <img src={calmkeys} alt='calmkeys' className='w-50 h-50 rounded-full' />
                                    </a>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex flex-col justify-right ml-20'>
                                    <p className='text-base font-mono tracking-tighter m-5 mt-10'>CalmKeys is an endless typing game designed to help users practice their typing skills at their own pace.</p>
                                    <div className='flex justify-center'>
                                        <a href='#/calmkeys'>
                                            <p className='text-xs sm:text-sm font-mono text-[#e17878] font-bold tracking-tighter underline'>Learn More</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-10'>
                                    <div className='flex flex-col ml-20 m-5 mt-8'> 
                                        <h3 className='text-2xl font-bold mb-2'>Created Using:</h3>
                                        <ul className='flex flex-wrap mr-7 justify-center text-lg font-mono tracking-tighter'>
                                            <li className='flex items-center w-1/3 justify-center'>
                                                <img src={svgIcons.react} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4 w-1/3 justify-center'>
                                                <img src={svgIcons.typescript} alt="React" className='w-10 h-10 mr-2' /> 
                                            </li>
                                            <li className='flex items-center mb-4 w-1/3 justify-center'>
                                                <img src={svgIcons.tailwindcss} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4 w-1/2 justify-center'>
                                                <img src={svgIcons.github} alt="GitHub" className='w-10 h-10' />
                                            </li>
                                            <li className='flex items-center mb-4 w-1/2 justify-center'>
                                                <img src={svgIcons.git} alt="GitHub" className='w-10 h-10' /> 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <a href='https://github.com/livlaurel/Booth-Buddy'>
                                    <img src={booth} alt='boothbuddy' className='w-50 h-50 rounded-full' />
                                    </a>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex flex-col justify-right ml-20'>
                                    <p className='text-base font-mono tracking-tighter m-5 mt-10'>Booth Buddy is a web-based photo booth that lets users capture and customize digital photo strips! </p>
                                    <div className='flex justify-center'>
                                        <a href='#/boothbuddy'>
                                            <p className='text-xs sm:text-sm font-mono text-[#e17878] font-bold tracking-tighter underline'>Learn More</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-10'>
                                    <div className='flex flex-col ml-20 m-5 mt-8'> 
                                        <h3 className='text-2xl font-bold mb-2'>Created Using:</h3>
                                        <ul className="grid grid-cols-4 gap-4 justify-items-center text-lg font-mono tracking-tighter">
                                            <li className='flex items-center  justify-center'>
                                                <img src={svgIcons.react} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4  justify-center'>
                                                <img src={svgIcons.typescript} alt="React" className='w-10 h-10 mr-2' /> 
                                            </li>
                                            <li className='flex items-center mb-4  justify-center'>
                                                <img src={svgIcons.tailwindcss} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4  justify-center'>
                                                <img src={svgIcons.github} alt="GitHub" className='w-10 h-10' />
                                            </li>
                                            <li className='flex items-center mb-4  justify-center'>
                                                <img src={svgIcons.git} alt="GitHub" className='w-10 h-10' /> 
                                            </li>
                                            <li>
                                                <img src={svgIcons.flask} alt="Python" className='w-10 h-10' />
                                            </li>
                                            <li>
                                                <img src={svgIcons.firebase} alt="Python" className='w-10 h-10' />
                                            </li>
                                            <li>
                                                <img src={svgIcons.python} alt="Python" className='w-10 h-10' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                           
                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                <a href='https://www.purrrsonality.com/'>
                                    <img src={purrr} alt='purrr' className='w-45 h-45 rounded-full' />
                                </a>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex flex-col justify-right ml-20'>
                                    <p className='text-base font-mono tracking-tighter m-5 mt-10'>Purrrsonality is a fun personality game that tells you what kind of cat you are! Meow ദ്ദി/ᐠ｡‸｡ᐟ\</p>
                                    <div className='flex justify-center'>
                                        <a href='#/purrrsonality'>
                                            <p className='text-xs sm:text-sm font-mono text-[#e17878] font-bold tracking-tighter underline'>Learn More</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex justify-right ml-10'>
                                    <div className='flex flex-col ml-20 m-5 mt-8'> 
                                            <h3 className='text-2xl font-bold mb-2'>Created Using:</h3>
                                            <ul className='flex flex-wrap mr-7 justify-center text-lg font-mono tracking-tighter'>
                                            <li className='flex items-center w-1/3 justify-center'>
                                                <img src={svgIcons.react} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4 w-1/3 justify-center'>
                                                <img src={svgIcons.typescript} alt="React" className='w-10 h-10 mr-2' /> 
                                            </li>
                                            <li className='flex items-center mb-4 w-1/3 justify-center'>
                                                <img src={svgIcons.css} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4 w-1/2 justify-center'>
                                                <img src={svgIcons.github} alt="GitHub" className='w-10 h-10' />
                                            </li>
                                            <li className='flex items-center mb-4 w-1/2 justify-center'>
                                                <img src={svgIcons.git} alt="GitHub" className='w-10 h-10' /> 
                                            </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="box box-content rounded-md p-4 w-250 bg-[#9caf88]">
                            <div className='flex'>
                                <div className='rounded-full bg-[#fff9f0] w-50 h-50 flex justify-center items-center'>
                                    <img src={logo} alt='web' className='w-70 h-70 mt-5 rounded-full' />
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 flex flex-col justify-right ml-20'>
                                    <p className='text-base font-mono tracking-tighter m-5 mb-2 mt-6'>This is my personal website where I showcase my projects, share inspiration, and give you a glimpse into who I am, all while keeping things creative and fun!</p>
                                    <div className='flex justify-center'>
                                        <a href='#/website'>
                                            <p className='text-xs sm:text-sm font-mono text-[#e17878] font-bold tracking-tighter underline'>Learn More</p>
                                        </a>
                                    </div>
                                </div>
                                <div className='box box-content rounded-sm bg-[#fff9f0] w-80 h-50 justify-right ml-10'>
                                    <div className='flex flex-col ml-20 m-5 mt-8'> 
                                            <h3 className='text-2xl font-bold mb-2'>Created Using:</h3>
                                            <ul className='flex flex-wrap mr-7 justify-center text-lg font-mono tracking-tighter'>
                                            <li className='flex items-center w-1/3 justify-center'>
                                                <img src={svgIcons.react} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4 w-1/3 justify-center'>
                                                <img src={svgIcons.typescript} alt="React" className='w-10 h-10 mr-2' /> 
                                            </li>
                                            <li className='flex items-center mb-4 w-1/3 justify-center'>
                                                <img src={svgIcons.tailwindcss} alt="React" className='w-10 h-10 mr-2' />
                                            </li>
                                            <li className='flex items-center mb-4 w-1/2 justify-center'>
                                                <img src={svgIcons.github} alt="GitHub" className='w-10 h-10' />
                                            </li>
                                            <li className='flex items-center mb-4 w-1/2 justify-center'>
                                                <img src={svgIcons.git} alt="GitHub" className='w-10 h-10' /> 
                                            </li>
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
