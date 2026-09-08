import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from '../components/header';
import Footer from '../components/footer';
import pytexas from '../imgs/forweb.svg';

const PyTexas = () => {
    const [showLogo, setShowLogo] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-[#fff9f0]">
            <Header />

            <main className="flex-grow">
                <div className="max-w-6xl mx-auto px-6 lg:px-10">

                    <section className="py-16 md:py-20 border-b border-[#d8d2c7]">
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#778965] font-semibold mb-4">
                                Logo Design
                            </p>

                            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#394a28] mb-5">
                                PyTexas 2027
                            </h1>

                            <p className="text-base md:text-base leading-7 text-[#686a62] max-w-xl">
                                A conference logo designed for the 2027 PyTexas
                                community gathering.
                            </p>
                        </div>
                    </section>

                    <section className="py-14 md:py-20">
                        <div className="flex items-end justify-between mb-10">
                            <p className="text-sm text-[#686a62]">
                                Logo exploration
                            </p>

                            <p className="text-xs font-mono text-[#778965]">
                                01 LOGO
                            </p>
                        </div>

                        <button
                            onClick={() => setShowLogo(true)}
                            className="group w-full text-left focus:outline-none"
                        >
                    <div className="
                        relative
                        overflow-hidden
                        bg-[#eee8dc]
                        rounded-sm
                        cursor-zoom-in
                        flex
                        items-center
                        justify-center
                        h-[300px]
                    ">
                        <img
                            src={pytexas}
                            alt="PyTexas 2027 conference logo"
                            className="
                                w-[30%]
                                max-w-md
                                h-auto
                                block
                                transition-transform
                                duration-500
                                ease-out
                                group-hover:scale-[1.025]
                            "
                        />

                        <div className="
                            absolute
                            inset-0
                            bg-black/0
                            group-hover:bg-black/[0.05]
                            transition-colors
                            duration-300
                            pointer-events-none
                        " />

                        <div className="
                            absolute
                            bottom-5
                            right-5
                            opacity-0
                            translate-y-2
                            group-hover:opacity-100
                            group-hover:translate-y-0
                            transition-all
                            duration-300
                            pointer-events-none
                        ">
                            <div className="
                                bg-[#fff9f0]/95
                                text-[#394a28]
                                px-4
                                py-2
                                rounded-full
                                text-xs
                                font-medium
                                shadow-sm
                            ">
                                Click to view ↗
                            </div>
                        </div>
                    </div>

                            <div className="
                                flex
                                items-start
                                justify-between
                                pt-4
                                px-1
                            ">
                                <div>
                                    <h2 className="text-sm font-semibold text-[#394a28]">
                                        PyTexas 2027
                                    </h2>

                                    <p className="text-xs text-[#85877f] mt-1">
                                        Conference Logo
                                    </p>
                                </div>

                                <span className="text-xs font-mono text-[#778965]">
                                    01
                                </span>
                            </div>
                        </button>
                    </section>

                    <section className="
                        border-t
                        border-[#d8d2c7]
                        py-12
                        grid
                        grid-cols-1
                        md:grid-cols-[160px_1fr]
                        gap-6
                    ">
                        <h2 className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wider
                            text-[#778965]
                        ">
                            About
                        </h2>

                        <p className="
                            max-w-2xl
                            text-base
                            leading-7
                            text-[#394a28]
                        ">
                            PyTexas is the annual regional gathering for the
                            Python community in Texas. For this project, I was
                            asked to create the logo for the 2027 conference.
                        </p>
                    </section>

                    <section className="
                        border-t
                        border-[#d8d2c7]
                        py-12
                        grid
                        grid-cols-1
                        md:grid-cols-[160px_1fr]
                        gap-6
                    ">
                        <h2 className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-wider
                            text-[#778965]
                        ">
                            Status
                        </h2>

                        <p className="
                            max-w-2xl
                            text-base
                            leading-7
                            text-[#686a62]
                        ">
                            This project is currently under construction.
                            More project details and design explorations will
                            be added soon.
                        </p>
                    </section>

                    <section className="
                        border-t
                        border-[#d8d2c7]
                        py-10
                        flex
                        flex-col
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                        gap-3
                    ">
                        <p className="
                            text-xs
                            uppercase
                            tracking-wider
                            text-[#778965]
                            font-semibold
                        ">
                            Made With
                        </p>

                        <p className="text-sm text-[#394a28]">
                            Adobe Illustrator
                        </p>
                    </section>

                    <div className="pb-12">
                        <button
                            onClick={() => window.history.back()}
                            className="
                                text-sm
                                text-[#394a28]
                                hover:text-[#e17878]
                                transition-colors
                            "
                        >
                            ← Back to Projects
                        </button>
                    </div>
                </div>
            </main>

            <Footer />

            <AnimatePresence>
                {showLogo && (
                    <motion.div
                        className="
                            fixed
                            inset-0
                            z-50
                            flex
                            items-center
                            justify-center
                            p-6
                            bg-[#fff9f0]/60
                            backdrop-blur-xl
                        "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        onClick={() => setShowLogo(false)}
                    >
                        <motion.button
                            className="
                                absolute
                                top-6
                                right-6
                                z-50
                                w-10
                                h-10
                                rounded-full
                                bg-white/80
                                text-[#394a28]
                                text-xl
                                flex
                                items-center
                                justify-center
                                shadow-sm
                            "
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{
                                duration: 0.35,
                                delay: 0.1,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            onClick={() => setShowLogo(false)}
                            aria-label="Close logo"
                        >
                            ×
                        </motion.button>

                        <motion.div
                            className="
                                relative
                                flex
                                items-center
                                justify-center
                            "
                            initial={{
                                opacity: 0,
                                scale: 0.82,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.82,
                            }}
                            transition={{
                                duration: 0.55,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={pytexas}
                                alt="PyTexas 2027 conference logo"
                                className="
                                    w-[75vw]
                                    max-w-xl
                                    h-auto
                                    object-contain
                                    rounded-sm
                                    shadow-[0_25px_60px_rgba(57,74,40,0.22)]
                                "
                            />

                            <div className="
                                absolute
                                -bottom-8
                                left-0
                                right-0
                                flex
                                justify-between
                                text-[#394a28]
                            ">
                                <span className="text-xs font-medium">
                                    PyTexas 2027
                                </span>

                                <span className="text-xs font-mono opacity-50">
                                    01 / 01
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default PyTexas;