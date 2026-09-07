import Header from '../components/header';
import Footer from '../components/footer';
import calmkeys from '../imgs/calmkeys.png';
import quote from '../video/ckdemo_quote.mp4';

const CalmKeys = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow bg-[#fff9f0]">
                <div className="max-w-5xl mx-auto px-6 lg:px-10">
                    <section className="py-12 border-b border-[#d8d2c7] text-center">
                        <img
                            src={calmkeys}
                            alt="CalmKeys"
                            className="w-52 h-auto mb-4 mx-auto"
                        />

                        <p className="text-base text-[#5f6259] mb-3">
                            A relaxing typing game for focused practice.
                        </p>

                        <div className="text-sm text-[#778965] font-mono">
                            React · TypeScript · Tailwind CSS
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
                                <source src={quote} type="video/mp4" />
                                Your browser does not support the video.
                            </video>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            About
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            CalmKeys is a minimalist typing game designed for
                            slow and focused practice. I was inspired by MonkeyType and 
                            wanted to create a space where users could improve
                            their typing without timers or scores.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Features
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Endless Practice
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    Practice without timers, limits, or scores.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Minimal Interface
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    A simple interface that keeps distractions
                                    out of the way.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Focused Practice
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    Designed around accuracy and comfortable/intentional typing.
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
                            CalmKeys uses soft colors and a simple layout to create a clean and distraction-free space for users to focus on typing.
                            </p>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Built With
                        </h2>

                        <div className="text-sm text-[#394a28]">
                            React · TypeScript · Tailwind CSS
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

export default CalmKeys;