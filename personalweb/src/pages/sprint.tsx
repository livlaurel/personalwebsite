import Header from '../components/header';
import Footer from '../components/footer';
import sprint from '../imgs/Sprint.svg';

const Sprint = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow bg-[#fff9f0]">
                <div className="max-w-5xl mx-auto px-6 lg:px-10">

                    <section className="py-12 border-b border-[#d8d2c7] text-center">
                        <a href="https://github.com/livlaurel/Sprint" target="_blank" rel="noopener noreferrer">
                            <img
                                src={sprint}
                                alt="Sprint"
                                className="w-52 h-auto mb-4 mx-auto"
                            />
                        </a>
                        <p className="text-base text-[#5f6259] mb-3">
                            Plan Together. Ship Faster.
                        </p>

                        <div className="text-sm text-[#778965] font-mono">
                            Project Management · Software Teams
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            About
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            Sprint is a project management app designed for
                            software teams. Inspired by tools like Jira and
                            Notion, it provides a workspace for tracking
                            issues, managing sprints, and collaborating with
                            a team.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Design
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            Sprint focuses on keeping project information
                            organized and easy to access without adding
                            unnecessary complexity to the workflow.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Status
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#686a62]">
                            This project is currently under construction.
                            More details and product visuals will be added
                            soon.
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

export default Sprint;