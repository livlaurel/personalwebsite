import Header from '../components/header';
import Footer from '../components/footer';
import bcropp from '../imgs/bcropp.png';
import video from '../video/boothbuddy.mp4'

const Booth = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow">
              <div className='flex flex-col h-[500px] overflow-y-auto'>
                <div className='flex flex-col justify-start items-center'>
                    <img src={bcropp} alt='bcropped' className='w-70 h-40' />
                    <p className='font-mono font-medium tracking-tighter'>Tiny Booth, Big Memories.</p>
                </div>


                <div className="flex flex-col justify-start items-left ml-20 mr-20 mt-15">
                    <h2 className="text-4xl font-stretch-expanded font-bubble font-medium mb-5">Overview</h2>
                    <div className="flex flex-row gap-6 items-start">
                        <p className="mb-15 text-lg w-1/2">
                            Booth Buddy is a web app that lets users create digital photobooth-style photo strips directly from their webcam! <br></br> It captures four consecutive photos, automatically formats them into a classic strip layout, and allows users to apply filters like grayscale, sepia, brightness, contrast, blur, and sharpen. Users can download or share their strips, create accounts to save their work, or use guest mode for limited access. (Webcam covered in video for privacy)
                        </p>
                        <div className="flex items-center justify-center bg-[#9caf88] border-3 border-[#7f966c] w-3/5 p-2 rounded-lg mb-15">
                            <video width="620" height="540" className='rounded-sm' autoPlay loop muted>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <h2 className='text-4xl font-stretch-expanded font-bubble font-medium mb-5'>Inspiration</h2>
                    <p className='mb-15 text-lg'>
                        My team and I were inspired by vintage photobooths and the nostalgia that comes with them. There’s something special about getting a physical strip of photos and capturing a moment in a simple way. Since photobooths are rare to find and often expensive to use, we wanted to recreate that experience in a way that is more accessible and fun. Our goal was to bring that same classic feeling to the browser so anyone can use it anytime.
                    </p>

                    <h2 className='text-4xl font-stretch-expanded font-bubble font-medium mb-5'>Tech Stack</h2>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-2 max-w-2xl mb-10'>
                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Frontend</h3>
                            <ul className='list-disc list-inside space-y-1'>
                            <li>React + TypeScript (Vite)</li>
                            <li>Tailwind CSS</li>
                            <li>React Router</li>
                            <li>React Hooks for state</li>
                            <li>React Icons</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Backend</h3>
                            <ul className='list-disc list-inside space-y-1'>
                            <li>Flask (Python)</li>
                            <li>REST API</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Database & Auth</h3>
                            <ul className='list-disc list-inside space-y-1'>
                            <li>Firebase (Auth + Storage)</li>
                            <li>Supabase (Profile Storage)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className='text-2xl font-semibold mb-3'>Tooling & Workflow</h3>
                            <ul className='list-disc list-inside space-y-1'>
                            <li>TypeScript (type checking)</li>
                            <li>ESLint (linting)</li>
                            <li>Git + GitHub (version control)</li>
                            </ul>
                        </div>
                    </div>

                    <h2 className='text-4xl font-stretch-expanded font-bubble font-medium mb-5 '>System Structure & State Diagrams</h2>
                    <p className="mb-10 text-lg">
                        Booth Buddy is a full stack web application built with React and TypeScript on the frontend and Flask on the backend. Users can capture four webcam photos, apply filters, and generate a vertically composed photo strip that is processed server side using Pillow and returned for preview and download. Firebase handles authentication and session management, while Supabase manages photo storage and associates images with user profiles. The frontend uses React Router for routing and hooks for local state, while the backend exposes REST endpoints for filtering and strip composition, with CORS configured for secure communication. If you would like to explore the architecture and system design decisions in more detail, you can read the full technical deep dive with these links: <br></br> <a href='https://drive.google.com/file/d/16HEVqM0YLJTTQw3J1hRpQ-RHdledY3vK/view?usp=drive_link' className="font-semibold text-[#778965]">System Structure</a> <br></br> <a href='https://drive.google.com/file/d/11I90qY9MjTh011gHrtZ7u5OwOlEZc33I/view?usp=drive_link' className="font-semibold text-[#778965]">SRC Doc</a>
                    </p>

                    <h2 className='text-4xl font-stretch-expanded font-bubble font-medium mb-5'>Challenges & Solutions</h2>
                    <p className='mb-5 text-xl/10'>
                    One of the biggest challenges was working with the webcam API and ensuring the photo capture process worked smoothly across different browsers. Handling camera permissions, loading states, and errors was important for creating a seamless user experience.
                    </p>
                    <p className='mb-15 text-xl/10'>
                    Another challenge was integrating our databases correctly. During development, we migrated from Firebase to Supabase, which required carefully managing data migration, authentication, and storage while ensuring the application continued to function smoothly throughout the transition.
                    </p>

                    <h2 className='text-4xl font-stretch-expanded font-bubble font-medium mb-5'>Results</h2>
                    <p className='text-xl/10 mb-3'>
                    BoothBuddy successfully delivers a fun, browser-based photo booth experience that lets users capture, customize, and download personalized photo strips in just a few clicks. User testing showed that the interface was easy to navigate and that the customization features made the experience more engaging and enjoyable.
                    </p>


                    <button className="text-m mb-5 pt-3 pb-3 pl-1 pr-1 w-32 text-[#fbf7ed] bg-[#f8a3a3] rounded-lg hover:bg-[#e17878]"
                        onClick={() => { window.history.back()}} >
                            ← Back
                    </button>
                </div>
             </div>

            </main>
            <Footer />
        </div>
    )
}

export default Booth;
