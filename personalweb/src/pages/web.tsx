import Header from '../components/header';
import Footer from '../components/footer';
import logo from '../imgs/logo.svg';
import newweb from '../video/newweb.mp4'

const Web = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow bg-[#fff9f0]">
                <div className="max-w-5xl mx-auto px-6 lg:px-10">
                    <section className="py-12 border-b border-[#d8d2c7] text-center">
                        <img
                            src={logo}
                            alt="Personal website"
                            className="w-52 h-auto mb-4 mx-auto"
                        />

                        <p className="text-base text-[#5f6259] mb-3">
                            My little space on the internet.
                        </p>

                        <div className="text-sm text-[#778965] font-mono">
                            React · Vite · Tailwind CSS
                        </div>
                    </section>

                    <section className="py-10 border-b border-[#d8d2c7]">
                        <div className="w-4/5 mx-auto border-5 border-[#778965] rounded-sm">
                            <video
                                className="w-full"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src={newweb} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            About
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            My personal website is a digital space for my
                            projects and interests. I wanted it
                            to feel more like a small corner of the internet that shows who I really am rather 
                            than a typical portfolio that only shows project work.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Inspiration
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            I wanted a calm and cozy experience with easy
                            navigation and minimalist layouts and fun animations that felt like me but a website.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Features
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    About
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    A personal introduction and space to learn
                                    more about me.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Projects
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    A collection of software, design, and
                                    personal projects.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Inspiration
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    A space for the things, ideas, and visuals
                                    that inspire me.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Responsive Design
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    Designed to feel natural across different
                                    screen sizes.
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
                                The first version of the site did not feel like
                                me, so I scrapped it and started over. This
                                time, I sketched the layout before coding and
                                gathered feedback from developers and UX/UI
                                designers.
                            </p>
                            <p className="max-w-2xl text-base leading-7 text-[#394a28] mb-7">
                                As for the overall design, a big part of my inspiration comes from the japandi interior design style and color paletes.
                                I love how warm and comforting the color paletes and style feels so I used that plus my own interests in minimalism and animation to create the websites UX/UI.
                            </p>

                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Learnings
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            This project taught me that starting over is okay,
                            asking for feedback makes the design stronger,
                            and designing before coding can make the entire
                            development process easier.
                        </p>
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

export default Web;