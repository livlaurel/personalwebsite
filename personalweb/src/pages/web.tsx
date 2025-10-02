import Header from '../components/header';
import Footer from '../components/footer';
import logo from '../imgs/logo.png';
import v1 from '../video/v1.mp4';
import web from '../imgs/web.jpeg';

const Web = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow">
              <div className='flex flex-col h-[500px] overflow-y-auto'>
                <div className='flex flex-col justify-start items-center'>
                    <img src={logo} alt='calmkeys' className='w-70 h-50' />
                    <p className='font-mono font-medium tracking-tighter'>My little space on the internet</p>
                </div>

                <div className="flex flex-col justify-start items-left ml-20 mr-20 mt-15">
                    <h2 className="text-5xl font-stretch-expanded font-medium mb-5">Overview</h2>
                    <div className="flex flex-row gap-6 items-start">
                        <p className="mb-15 text-xl/10 w-1/2">
                            This website is my little corner of the internet—a place where I share my projects, who I am, and everything that inspires me. It’s like a digital journal of my journey as a front-end developer and designer. More than just a portfolio, it’s a space that reflects me, my growth, and the things I love.
                        </p>
                        <div className="flex items-center justify-center bg-[#9caf88] border-3 border-[#7f966c] w-3/5 p-2 rounded-lg mb-15">
                            <img src={web} alt="web" className="w-full h-auto rounded-sm object-contain" />
                        </div>
                    </div>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Inspiration</h2>
                    <p className='mb-5 text-xl/10'>
                        When designing my website, I wanted it to feel calm, cozy, and easy to navigate—a space that truly reflects me. I’ve always loved websites that feel inviting, where everything flows naturally without feeling overwhelming. A huge inspiration for me was <a href='https://www.youtube.com/maisyleigh' className='font-semibold text-[#ff7a7a]'>Maisy Leigh</a>, the creator of <a href='https://cozyleigh.studio/?srsltid=AfmBOooGAhSoH_Qdc3yMwk8VEeCWC3RH8N8_dpcyicYMM_7Ir0CbxNjI' className='font-semibold text-[#ff7a7a]'>Cozy Leigh Studios</a>. Her approach to design focuses on bringing cozy and zen feelings to a chaotic world, and that idea really stuck with me. I love how her work creates a sense of peace, almost like stepping into a cozy, familiar space. That’s exactly what I wanted for my own website—somewhere that feels personal, comforting, and thoughtfully designed.
                    </p>
                    <p className='mb-15 text-xl/10'>
                        Beyond specific designers, I also took inspiration from nature, soft color palettes, and minimalist yet expressive layouts. I spent time researching different websites, colors, and typography styles that capture a relaxed and inviting atmosphere. I wanted my website to feel simple but full of personality, with small details that make it feel warm and unique. Most importantly, I wanted it to encourage slowing down—so much of the internet feels fast and chaotic, but I wanted my site to be a little pocket of peace where visitors could take their time and enjoy the experience.
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5 '>What I Built</h2>
                    <p className='text-xl/10'> 
                        As the solo developer, I created everything from scratch—from the cozy design to the smooth functionality. I built the site using React, Vite, and Tailwind CSS, keeping the code lightweight and the experience seamless.
                    </p>
                    <p className='text-xl/10'> 
                        Features Include:
                    </p>
                    <ul className='list-disc marker:text-[#ff7a7a] ml-10 mb-15 text-xl/8'>
                        <li> <b className='font-semibold'>An About Me page</b> – A little introduction to who I am and what I do.
                        </li>
                        <li> <b className='font-semibold'>A Projects page</b> – Showcasing my work and creative journey.
                        </li>
                        <li> <b className='font-semibold'>An Inspiration page</b> – A visual collection of colors, people, and ideas that inspire me.
                        </li>
                    </ul>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-10'>Challenges & Solutions</h2>
                        <div className="flex flex-row gap-8 items-start">
                            <div className="flex items-center justify-center bg-[#9caf88] border-3 border-[#7f966c] p-2 rounded-lg mb-15">
                                    <video width="620" height="540" className='rounded-sm' autoPlay loop muted>
                                        <source src={v1} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                         </div>
                            <div className="flex-col w-170">
                            <p className='mb-5 text-xl/10'>
                                This wasn’t my first attempt. I actually built my website twice. The first version? A good try, but not quite “me.” I jumped straight into coding with no real plan, and it showed. It felt unfinished, a little bland, and honestly… kind of frustrating to work on.
                            </p>
                            <p className='mb-15 text-xl/10'>
                                So, I scrapped it. Completely. Deleted everything and started fresh. This time, I took my time with the design, using Canva to sketch things out first. I also reached out to some web developers and UX/UI designers through Boba Talk, and their advice helped me create something more thoughtful and user-friendly. Once I had a clear vision, coding became way more enjoyable, and I ended up with a site that actually feels like me.
                            </p>
                        </div>
                    </div>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Results</h2>
                    <p className='text-xl/10 mb-3'>
                    After a lot of trial and error (and one full reset), I finally have a site that I love. It’s cozy, zen, and 100% me. It’s not just a portfolio—it’s a digital space that reflects who I am as a designer and a person.
                    </p>
                    <p className='mb-2 text-base/10 font-mono tracking-tighter'>
                    "It's very you! I like it!" – User feedback
                    </p>
                    <p className='mb-15 text-base/5 font-mono tracking-tighter'>
                    "The color scheme is so pretty and the project descriptions are so interesting to read." – User feedback
                    </p>

                    <h2 className='text-5xl font-stretch-expanded font-medium mb-5'>Key Learnings</h2>
                    <ul className='list-disc marker:text-[#ff7a7a] ml-10 mb-5 text-xl/8'>
                        <li> <b className='font-semibold'>Starting over is okay.</b> Sometimes, the best way forward is a fresh start.
                        </li>
                        <li> <b className='font-semibold'>Ask for help. </b> Talking to industry pros was intimidating at first, but their insights were so helpful.
                        </li>
                        <li> <b className='font-semibold'>Design first, code second. </b> A good plan makes everything smoother.
                        </li>
                        <li> <b className='font-semibold'>Keep learning. </b> This project taught me so much about UI/UX, web dev, and finding my own style.
                        </li>
                    </ul>
                    <p className='text-xl/10 mb-3'>
                        At the end of the day, this website is more than just a project; it’s a space that makes me happy, and I hope it makes visitors feel the same way.
                    </p>
                    <button className="text-m mb-5 pt-3 pb-3 pl-1 pr-1 w-32 text-[#fbf7ed] bg-[#f8a3a3] rounded-lg hover:bg-[#e17878]"
                        onClick={() => window.history.back()} >
                            ← Back
                    </button>

                </div>
             </div>

            </main>
            <Footer />
        </div>
    )
}

export default Web;
