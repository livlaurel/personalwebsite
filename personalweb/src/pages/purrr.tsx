import Header from '../components/header';
import Footer from '../components/footer';
import purrr from '../imgs/purrr.png';
import fly from '../video/fly.mp4';
import game from '../video/game.mp4';

const Purrrsonality = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow bg-[#fff9f0]">
                <div className="max-w-5xl mx-auto px-6 lg:px-10">
                    <section className="py-12 border-b border-[#d8d2c7] text-center">
                        <img
                            src={purrr}
                            alt="Purrrsonality"
                            className="w-52 h-auto mb-4 mx-auto"
                        />

                        <p className="text-base text-[#5f6259] mb-3">
                            What kind of cat are you?
                        </p>

                        <div className="text-sm text-[#778965] font-mono">
                            React · TypeScript · JavaScript
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
                                <source src={fly} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            About
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            Purrrsonality is an interactive game where
                            users make decisions while preparing for and
                            taking a school exam. Their choices reveal the cat
                            breed that best matches their personality.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Features
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Dynamic Quiz
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    Decisions throughout the experience determine the final result.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Cat Results
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    Each personality leads to a different cat
                                    breed and personality match.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Interactive Story
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    The quiz follows the user through a full
                                    exam-day storyline.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold mb-1">
                                    Simple UX
                                </h3>
                                <p className="text-sm leading-6 text-[#686a62]">
                                    A straightforward interface keeps the
                                    experience focused on the game.
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
                                This project was inspired by childhood
                                personality quizzes and the distinct
                                personalities of cats. I also thought the school exam
                                setting is a familiar and relatable
                                scenario to the experience but it's something everyone approaches
                                and thinks about differently.
                            </p>

                            <div className="w-4/5 mx-auto border-5 border-[#778965] rounded-sm">
                                <video
                                    className="w-full"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={game} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Learnings
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            This project was one of my first larger React and
                            TypeScript projects and the first website I ever made public. I learned how to structure a
                            quiz backend, persist user choices, and make sure
                            answers were correctly tracked to each result.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Built With
                        </h2>

                        <div className="text-sm text-[#394a28]">
                            React · TypeScript · JavaScript
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

export default Purrrsonality;