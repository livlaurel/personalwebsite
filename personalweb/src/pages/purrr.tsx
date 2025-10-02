import Header from '../components/header';
import Footer from '../components/footer';
import purrr from '../imgs/purrr.png';
import fly from '../video/fly.mp4';
import game from '../video/game.mp4';
import click from '../sounds/FullSizeRender.mp3'

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
                        Purrrsonality is a playful and interactive web-based game that takes users on a journey of preparing for, taking, and completing a school exam; based on their decisions, the quiz then reveals a cat breed that best matches their approach to studying, handling stress, and managing post-exam emotions.
                        </p>
                        <div className="flex items-center justify-center bg-[#9caf88] border-3 border-[#7f966c] p-2 rounded-lg mb-15">
                            <video width="620" height="540" className='rounded-sm' autoPlay loop muted>
                                <source src={fly} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Inspiration</h2>
                    <p className='mb-5 text-xl/10'>
                        I was inspired by the many personality quizzes I used to take as a kid—I always found it fascinating how just a few questions could offer insight into someone’s personality. I chose to center the game around cats for two reasons: first, cats have incredibly distinct personalities across different breeds, making it interesting to research how certain traits align with different types of people; and second, I simply love cats. 
                    </p>
                    <p className='mb-15 text-xl/10'>
                        The decision to frame the questions around a school exam came from my own experiences in school, where I noticed how differently people approach tests—some see them as a major source of stress, while others treat them like just another day. I believe that exams bring out unique aspects of a person’s personality, from preparation styles to test-taking strategies and post-exam reactions. Since exams are something everyone can relate to, it felt like the perfect scenario to make Purrrsonality engaging, fun, and universally understandable.
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5 '>What I Built</h2>
                    <p className='text-xl/10'> 
                        As the solo developer, I designed and developed the entire experience, from the interactive quiz flow to the final personality reveal.
                    </p>
                    <p className='text-xl/10'> 
                     Purrrsonality features:
                    </p>
                    <ul className='list-disc marker:text-[#ff7a7a] ml-10 mb-15 text-xl/8'>
                        <li> <b className='font-semibold'>A dynamic quiz experience</b> – Users make decisions that shape their test-taking personality.
                        </li>
                        <li><b className='font-semibold'>Cat personality results</b> – Each user is matched with a cat breed based on their choices.
                        </li>
                        <li><b className='font-semibold'>A simple, intuitive design</b> – I focused on creating a clean and enjoyable interface to keep the experience fun and immersive.
                        </li>
                    </ul>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-10'>Challenges & Solutions</h2>
                    <div className="flex flex-row gap-8 items-start">
                        <div className="flex items-center justify-center bg-[#9caf88] border-3 border-[#7f966c] p-2 rounded-lg mb-15">
                                <video width="620" height="540" className='rounded-sm' autoPlay loop muted>
                                    <source src={game} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                        </div>
                        <div className="flex-col w-170">
                            <p className='mb-5 text-xl/10'>
                                My main challenges were with the backend and quiz code. This was my first larger project, and one of my first experiences using TypeScript, React, and creating a web app. I struggled a lot with developing the quiz functions and ensuring that each answer was remembered and correctly tallied to give users the right cat breed based on their personality.
                            </p>
                            <p className='mb-15 text-xl/10'>
                                To overcome these challenges, I watched many tutorials on TypeScript and studied quiz design and backend coding techniques for projects like this. With persistence and continuous learning, I was able to solve the issues and successfully build the quiz logic. In the end, I’m happy with how it turned out.
                            </p>
                        </div>
                    </div>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Results</h2>
                    <p className='text-xl/10 mb-3'>
                        Purrrsonality turned out to be a fun and interactive quiz that matches users with their perfect cat breed based on their exam-taking personality. It was a great learning journey in TypeScript, React, and backend development, and I’m thrilled with how it all came together!
                    </p>
                    <p className='mb-2 text-base/10 font-mono tracking-tighter'>
                    "I tried it, and it is very cute (biased, because I'm already a cat lover)." – User feedback
                    </p>
                    <p className='mb-15 text-base/5 font-mono tracking-tighter'>
                    "I thought it was a neat and well executed idea; purrrsonality is awesome." – User feedback
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Key Learnings</h2>
                    <ul className='list-disc marker:text-[#ff7a7a] ml-10 mb-15 text-xl/8'>
                        <li> Gained hands-on experience with TypeScript and React.
                        </li>
                        <li> Improved my backend coding skills for quiz functionality.
                        </li>
                        <li> Developed a better understanding of user experience and design.
                        </li>
                        <li> Overcame challenges with persistence and problem-solving.
                        </li>
                    </ul>
                    <button className="text-m mb-5 pt-3 pb-3 pl-1 pr-1 w-32 text-[#fbf7ed] bg-[#f8a3a3] rounded-lg hover:bg-[#e17878]"
                        onClick={() => {const audio = new Audio(click); audio.playbackRate = 1.5; audio.play(); window.history.back()}} >
                            ← Back
                    </button>
                </div>
             </div>

            </main>
            <Footer />
        </div>
    )
}

export default Purrr;
