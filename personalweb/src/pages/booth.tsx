import Header from '../components/header';
import Footer from '../components/footer';
import bcropp from '../imgs/bcropp.png';
import video from '../video/boothbuddy.mp4';

const Booth = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow bg-[#fff9f0]">
                <div className="max-w-5xl mx-auto px-6 lg:px-10">

                    <section className="py-12 border-b border-[#d8d2c7] text-center">
                        <img
                            src={bcropp}
                            alt="Booth Buddy"
                            className="w-52 h-auto mb-4 mx-auto"
                        />

                        <p className="text-base text-[#5f6259] mb-3">
                            Tiny Booth, Big Memories.
                        </p>

                        <div className="text-sm text-[#778965] font-mono">
                            React · TypeScript · Flask · Firebase · Supabase
                        </div>
                    </section>

                    <section className="py-10 border-b border-[#d8d2c7]">
                    <div className="w-4/5 mx-auto border-5 border-[#778965] rounded-sm ">
                            <video
                                className="w-full"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            About
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            Booth Buddy is a web app that lets users create
                            digital photobooth style photo strips easily from their own computer.
                            It captures four photos, applies filters, and formats them into a
                            photo strip that users can download or share.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Features
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Photo Strips
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    Capture four consecutive photos and combine
                                    them into a photo strip layout.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Photo Filters
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    Customize photos with grayscale, sepia,
                                    brightness, contrast, blur, and sharpen.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Accounts
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    Users can create accounts to save their
                                    work or use the app as a guest.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Sharing
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    Download finished photo strips and share
                                    them outside the app.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Design
                        </h2>

                        <div>
                            <p className="max-w-2xl text-base leading-7 text-[#394a28] mb-7">
                                Booth Buddy is inspired by vintage photobooths and the
                                nostalgia of physical photo strips. It was designed to make the experience
                                simple and accessible in a browser.
                            </p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Challenges
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                        One of the biggest challenges was working with the webcam API and ensuring photo capture worked smoothly across different browsers. 
                        Handling camera permissions, loading states, and errors was important for creating a seamless experience.
                        Another challenge was migrating from Firebase to Supabase, which required reworking authentication, user profiles, and photo storage while keeping the application running smoothly.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Built With
                        </h2>

                        <div className="text-sm text-[#394a28]">
                            React · TypeScript · Tailwind CSS · Flask · Python ·
                            Firebase · Supabase
                        </div>
                    </section>

                    <div className="pb-10">
                        <button
                            onClick={() => window.history.back()}
                            className="text-sm text-[#394a28] hover:text-[#e17878] transition-colors"
                        >
                            ← Back to Projects
                        </button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Booth;