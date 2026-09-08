import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from '../components/header';
import Footer from '../components/footer';
import poster23 from '../imgs/poster23.svg';
import eyes from '../imgs/eyes.svg';
import moon from '../imgs/moon.svg';
import sun from '../imgs/sun.svg';

const posters = [
    {
        image: poster23,
        title: '23',
        number: '01',
        description: 'For his 23rd birthday.',
    },
    {
        image: eyes,
        title: 'Eyes',
        number: '02',
        description: 'Inspired by the little details of us.',
    },
    {
        image: moon,
        title: 'Moon',
        number: '03',
        description: 'Part of a paired moon and sun series.',
    },
    {
        image: sun,
        title: 'Sun',
        number: '04',
        description: 'Part of a paired moon and sun series.',
    },
];

const ApartmentPosters = () => {
    const [selectedPoster, setSelectedPoster] = useState<(typeof posters)[number] | null>(null);

    return (
        <div className="flex flex-col min-h-screen bg-[#fff9f0]">
            <Header />

            <main className="flex-grow">
                <div className="max-w-6xl mx-auto px-6 lg:px-10">

                    <section className="py-16 md:py-20 border-b border-[#d8d2c7]">
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#778965] font-semibold mb-4">
                                Poster Series
                            </p>

                            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#394a28] mb-5">
                                Apartment Posters
                            </h1>

                            <p className="text-base md:text-base leading-7 text-[#686a62] max-w-xl">
                                Four posters designed for my boyfriend's new
                                apartment and some of my first projects in
                                Adobe Illustrator.
                            </p>
                        </div>
                    </section>

                    <section className="py-14 md:py-20">
                        <div className="flex items-end justify-between mb-10">
                            <p className="text-sm text-[#686a62]">
                                A little collection
                            </p>

                            <p className="text-xs font-mono text-[#778965]">
                                04 POSTERS
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
                            {posters.map((poster) => (
                                <button
                                    key={poster.number}
                                    onClick={() => setSelectedPoster(poster)}
                                    className="group text-left focus:outline-none"
                                >
                                    <div className="
                                        relative
                                        overflow-hidden
                                        bg-[#eee8dc]
                                        rounded-sm
                                        cursor-zoom-in
                                    ">
                                        <img
                                            src={poster.image}
                                            alt={poster.title}
                                            className="
                                                w-full
                                                h-auto
                                                block
                                                transition-transform
                                                duration-500
                                                ease-out
                                                group-hover:scale-[1.035]
                                            "
                                        />

                                        <div className="
                                            absolute inset-0
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
                                            <h2 className="
                                                text-sm
                                                font-semibold
                                                text-[#394a28]
                                            ">
                                                {poster.title}
                                            </h2>

                                            <p className="
                                                text-xs
                                                text-[#85877f]
                                                mt-1
                                            ">
                                                {poster.description}
                                            </p>
                                        </div>

                                        <span className="
                                            text-xs
                                            font-mono
                                            text-[#778965]
                                        ">
                                            {poster.number}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
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
                            Trying Something New
                        </h2>

                        <p className="
                            max-w-3xl
                            text-base
                            leading-7
                            text-[#394a28]
                        ">
                            I wanted to make something for his new apartment as an apartment warming gift while also trying something new. These were my first posters and my first time working entirely in Adobe Illustrator. This gave me a chance to experiment with typography, composition, and shape.
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
    {selectedPoster && (
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
            onClick={() => setSelectedPoster(null)}
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
                onClick={() => setSelectedPoster(null)}
                aria-label="Close poster"
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
                    src={selectedPoster.image}
                    alt={selectedPoster.title}
                    className="
                        h-[82vh]
                        w-auto
                        max-w-[88vw]
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
                        {selectedPoster.title}
                    </span>

                    <span className="text-xs font-mono opacity-50">
                        {selectedPoster.number} / 04
                    </span>
                </div>
            </motion.div>
        </motion.div>
    )}
</AnimatePresence>
        </div>
    );
};

export default ApartmentPosters;