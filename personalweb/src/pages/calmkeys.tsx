import Header from '../components/header';
import Footer from '../components/footer';
import calmkeys from '../imgs/calmkeys.png';
import ckhome2 from '../imgs/ckplan/ckhome2.jpeg';

const CalmKeys = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow">
              <div className='flex flex-col h-[500px] overflow-y-auto'>
                <div className='flex flex-col justify-start items-center'>
                    <img src={calmkeys} alt='calmkeys' className='w-90 h-40' />
                    <p className='font-mono font-medium tracking-tighter'>A Relaxing Typing Game for Focused Practice</p>
                </div>


                <div className="flex flex-col justify-start items-left ml-20 mr-20 mt-15">
                    <h2 className="text-5xl font-stretch-expanded font-medium mb-5">Overview</h2>
                    <div className="flex flex-row gap-6 items-start">
                        <p className="mb-15 text-xl/10 w-1/2">
                            CalmKeys is an endless typing game I created to help users focus on improving their typing skills at their own pace. Inspired by MonkeyType, I wanted a space where I could slow down and practice typing without the pressure of a timer or high scores. The goal was to create a calm, minimalist environment that encourages typing accuracy over speed.
                        </p>
                        <div className="flex items-center justify-center bg-[#9caf88] border-3 border-[#7f966c] w-3/5 p-2 rounded-lg mb-15">
                            <img src={ckhome2} alt="ckhome2" className="w-full h-auto rounded-lg object-contain" />
                        </div>
                    </div>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Inspiration</h2>
                    <p className='mb-15 text-xl/10'>
                    Typing games often emphasize speed, but I wanted something different. I found myself wanting a tool to practice typing slowly and mindfully—something that didn’t focus on hitting high scores or competing against the clock. This led to the creation of CalmKeys, where the focus is all about typing accurately and comfortably at your own pace.
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5 '>What I built</h2>
                    <p className='text-xl/10'> 
                    As the solo developer, I designed the entire experience, from the minimalist interface to the typing functionality.
                    </p>
                    <p className='text-xl/10'> 
                     CalmKeys features:
                    </p>
                    <ul className='list-disc marker:text-[#ff7a7a] ml-10 mb-15 text-xl/8'>
                        <li>Endless typing practice – No timers, no scores. Just you and the words.
                        </li>
                        <li>A clean, calming design – I used Tailwind CSS to keep things simple and soothing.
                        </li>
                    </ul>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Challenges & Solutions</h2>
                    <p className='mb-5 text-xl/10'>
                    Finding the right word sources for the game was one of the biggest hurdles. I experimented with multiple APIs for random word generation, but many of them provided overly long or difficult words that made typing frustrating instead of relaxing. Additionally, I struggled to find an API that had quotes or a word list that matched the zen-like, calming experience I envisioned for CalmKeys.
                    </p>
                    <p className='mb-15 text-xl/10'>
                    To solve this, I manually curated my own word lists and quote collections, carefully selecting words and phrases that felt fitting for the project. This ensured that every word and quote displayed in the game contributes to a smooth and enjoyable typing experience.
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Results</h2>
                    <p className='text-xl/10 mb-3'>
                    A tool that helps me—and others—slow down and focus on typing more mindfully. The response has been positive, with users appreciating the peaceful vibe and the freedom to type at their own pace.
                    </p>
                    <p className='mb-3 text-base/10 font-mono tracking-tighter'>
                    "I love the simplicity of CalmKeys. It’s a great way to practice typing and I don't have to worry about a timer!" – User feedback
                    </p>
                    <p className='mb-15 text-base/10 font-mono tracking-tighter'>
                    "CalmKeys helped me improve how I type. I feel more comfortable typing at work." – User feedback
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Key Learnings</h2>
                    <ul className='list-disc marker:text-[#ff7a7a] ml-10 mb-15 text-xl/8'>
                        <li>Improved my skills with React and TypeScript.
                        </li>
                        <li>Learned how to design for simplicity while still offering a useful experience.
                        </li>
                        <li>Gained hands-on experience with Tailwind CSS to build responsive layouts quickly.
                        </li>
                    </ul>

                </div>
             </div>

            </main>
            <Footer />
        </div>
    )
}

export default CalmKeys;
