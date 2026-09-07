import Header from '../components/header';
import Footer from '../components/footer';
import pytexas from '../imgs/forweb.svg';

const PyTexas = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow bg-[#fff9f0]">
                <div className="max-w-5xl mx-auto px-6 lg:px-10">

                    <section className="py-12 border-b border-[#d8d2c7] text-center">
                        <img
                            src={pytexas}
                            alt="PyTexas 2027"
                            className="w-64 h-auto mb-5 mx-auto"
                        />

                        <p className="text-base text-[#5f6259] mb-3">
                            PyTexas 2027 conference logo.
                        </p>

                        <div className="text-sm text-[#778965] font-mono">
                            Logo Design
                        </div>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10 border-b border-[#d8d2c7]">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            About
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#394a28]">
                            PyTexas is the annual regional gathering for the
                            Python community in Texas. For this project, I was
                            asked to create the logo for the 2027 conference.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 py-10">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#778965]">
                            Status
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-[#686a62]">
                            This project is currently under construction.
                            More project details and design explorations will
                            be added soon.
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

export default PyTexas;