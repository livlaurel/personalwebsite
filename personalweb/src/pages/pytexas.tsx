import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from '../components/header';
import Footer from '../components/footer';

import pytexasLogo from '../imgs/pytexas/pytexas_wavesun.svg';
import pytexasWordmark from '../imgs/pytexas/wordmark_final.svg';
import pytexasPinkWordmark from '../imgs/pytexas/wordmark_lightpink.svg';
import pytexasPalette from '../imgs/pytexas/colorhex1.svg';

import pytexasBlackWhite from '../imgs/pytexas/black&white.svg';
import pytexasTall from '../imgs/pytexas/tallcacti.svg';
import pytexasGeometry from '../imgs/pytexas/geometry.svg';
import pytexasMosaic from '../imgs/pytexas/mosaiccactus.svg';
import pytexasPython from '../imgs/pytexas/pythoncactus.svg';
import pytexasWave from '../imgs/pytexas/wavescactus.svg';

import agaveText from '../imgs/pytexas/agave_text.svg';
import agaveNoText from '../imgs/pytexas/agave_notext.svg';
import orangeAgave from '../imgs/pytexas/orangeagave.svg';
import ideaMain from '../imgs/pytexas/ideamain.svg';

import pytexasMockups from '../imgs/pytexas/Mockups.svg';

import pytexasDarkPurple from '../imgs/pytexas/pytexas_darkpurple.svg';
import pytexasColorFinal from '../imgs/pytexas/pytexas_final11.svg';
import pytexasPink from '../imgs/pytexas/pytexas_pink.svg';
import wordmarkPurple from '../imgs/pytexas/wordmark_purple.svg';

type Item = {
    image: string;
    title: string;
    description: string;
    width?: 'full' | 'twoThirds' | 'half';
    wordmark?: boolean;
};

type Phase = {
    id: string;
    label: string;
    title: string;
    layout: 'grid' | 'centered' | 'duo';
    intro: string[];
    items: Item[];
};

const phases: Phase[] = [
    {
        id: 'first-ideas',
        label: 'Phase 01',
        title: 'Initial Concepts',
        layout: 'grid',
        intro: [
            'Being asked to create the PyTexas 2027 logo was such an exciting opportunity! This was my first graphic design job and my first time learning Adobe Illustrator, so I got to learn the tools while exploring different ideas.',
            'I started broad. Trying different ways to interpret the prickly pear cactus: simplified, geometric, badge-style, and Python-inspired. These are the original concepts, none are perefect but here because they helped shaped everything later on.',
        ],
        items: [
            {
                image: pytexasGeometry,
                title: 'Minimal Mark',
                description: 'A simpler idea focused on the symbol/wordmark.',
            },
            {
                image: pytexasPython,
                title: 'Python-Inspired',
                description: 'An idea combining the cactus with the Python logo.',
            },
            {
                image: pytexasTall,
                title: 'Cactus Badge',
                description: 'A badge-style direction combining the conference name with the cactus.',
            },
            {
                image: pytexasMosaic,
                title: 'Geometric Cactus',
                description: 'An idea built from triangles and color.',
            },
            {
                image: pytexasBlackWhite,
                title: 'Black and White',
                description: 'An exploration of contrast and a simplified cactus mark.',
            },
            {
                image: pytexasWave,
                title: 'Wave Cactus',
                description: 'The first appearance of the flowing lines that stuck around.',
            },
        ],
    },
    {
        id: 'second-wave',
        label: 'Phase 02',
        title: 'Exploring Directions',
        layout: 'grid',
        intro: [
            'After sharing my initial concepts with the PyTexas team, we decided to explore the wave cactus direction further. The team liked the abstract concept but wanted the cactus and sun to be more recognizable. Based on their feedback, I experimented with the cactus silhouette, adjusted the placement of the sun, and explored additional plant elements.',
        ],
        items: [
            {
                image: agaveText,
                title: 'Agave with Text',
                description: 'The agave mark paired with the conference name in the cactus.',
            },
            {
                image: agaveNoText,
                title: 'Agave + Cactus',
                description: 'The logo on its own to check how well it reads without text.',
            },
            {
                image: orangeAgave,
                title: 'Orange Agave + Smaller Sun',
                description: 'A warmer color of the agave direction and a smaller sun.',
            },
        ],
    },
    {
        id: 'narrowing-down',
        label: 'Phase 03',
        title: 'Refining the Concept',
        layout: 'duo',
        intro: [
            'With feedback from both rounds of iterations, I went on to create different variations of the wave cactus concept and experimented with different sun ideas and wordmark designs. I brought these ideas together into three main directions.',
        ],
        items: [
            {
                image: ideaMain,
                title: 'Main Concept',
                description: 'The strongest idea from the first two rounds.',
            },
            {
                image: pytexasMockups,
                title: 'Three Ideas, Three Wordmarks',
                description: 'The three main concepts, wordmarks, and HEX colors side by side.',
            },
        ],
    },
    {
        id: 'color-exploration',
        label: 'Phase 04',
        title: 'Color Exploration',
        layout: 'centered',
        intro: [
            'Once we chose a final design, we wanted to explore a few more color variations. I tested different shades of purple and pink on both the logo and wordmark. I also revisited the original logo and experimented with adding more color since we had more room to work with. Throughout this stage, I kept printing in mind because the logo needed to work on conference shirts as well as digital banners.',
        ],
        items: [
            {
                image: pytexasDarkPurple,
                title: 'Purple Ver.',
                description: 'The final logo in a purple variation.',
            },
            {
                image: pytexasPink,
                title: 'Pink Ver.',
                description: 'The final logo in a pink variation.',
            },
            {
                image: pytexasColorFinal,
                title: 'Color Direction',
                description: 'The color combination that moved forward.',
            },
            {
                image: wordmarkPurple,
                title: 'Purple Wordmark',
                description: 'The wordmark tested in the purple palette.',
                wordmark: true,
            },
            {
                image: pytexasPinkWordmark,
                title: 'Pink Wordmark',
                description: 'The wordmark in the pink palette.',
                wordmark: true,
            },
        ],
    },
    {
        id: 'final',
        label: 'Phase 05',
        title: 'The Final Identity',
        layout: 'duo',
        intro: [
            'The final identity for PyTexas 2027, including the primary logo, alternate wordmark, and color palette. Designed to work across both digital and print applications.',
        ],
        items: [
            {
                image: pytexasLogo,
                title: 'PyTexas 2027 Logo',
                description: 'Prickly pear cactus, flowing lines, and a warm Texas sun.',
                width: 'half',
            },
            {
                image: pytexasWordmark,
                title: 'Primary Wordmark',
                description: 'The final PyTexas 2027 wordmark.',
                wordmark: true,
            },
            {
                image: pytexasPinkWordmark,
                title: 'Alternate Wordmark',
                description: 'An alternate pink color.',
                wordmark: true,
            },
            {
                image: pytexasPalette,
                title: 'Color Palette',
                description: 'The selected brand colors and HEX values.',
                width: 'full',
            },
        ],
    },
];

type NumberedItem = Item & { number: string };

let counter = 0;
const numberedPhases = phases.map((phase) => ({
    ...phase,
    items: phase.items.map<NumberedItem>((item) => ({
        ...item,
        number: String(++counter).padStart(2, '0'),
    })),
}));

const allImages: NumberedItem[] = numberedPhases.flatMap((p) => p.items);
const TOTAL = String(allImages.length).padStart(2, '0');

const ImageCard = ({
    item,
    onSelect,
    className = '',
}: {
    item: NumberedItem;
    onSelect: (item: NumberedItem) => void;
    className?: string;
}) => (
    <button
        type="button"
        onClick={() => onSelect(item)}
        className={`group text-left focus:outline-none ${className}`}
    >
        <div className="relative overflow-hidden bg-[#eee8dc] rounded-sm cursor-zoom-in">
            <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.04] transition-colors duration-300" />

            <div className="absolute bottom-5 right-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="bg-[#fff9f0]/95 text-[#394a28] px-4 py-2 rounded-full text-xs font-medium shadow-sm">
                    Click to view ↗
                </div>
            </div>
        </div>

        <div className="flex items-start justify-between pt-4 px-1">
            <div>
                <h3 className="text-sm font-semibold text-[#394a28]">
                    {item.title}
                </h3>

                <p className="text-xs text-[#85877f] mt-1">
                    {item.description}
                </p>
            </div>

            <span className="text-xs font-mono text-[#778965]">
                {item.number}
            </span>
        </div>
    </button>
);

const cardClass = (layout: Phase['layout'], item: Item) => {
    const { width, wordmark } = item;
    const widthCap =
        width === 'twoThirds'
            ? 'md:max-w-[66%]'
            : width === 'half'
              ? 'md:max-w-[50%]'
              : '';

    if (layout === 'centered') {
        if (wordmark) return 'w-full sm:w-[calc((100%-2rem)/2)]';
        return 'w-full sm:w-[calc((100%-1.5rem)/2)] md:w-[calc((100%-3rem)/3)]';
    }

    const span = layout === 'duo' ? 'md:col-span-2' : 'sm:col-span-2 md:col-span-3';
    return width ? `${span} w-full mx-auto ${widthCap}` : '';
};

const gridClass = (layout: Phase['layout']) =>
    layout === 'centered'
        ? 'flex flex-wrap justify-center gap-6 items-start'
        : layout === 'duo'
          ? 'grid grid-cols-1 md:grid-cols-2 gap-8 items-start'
          : 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start';

const requirements = [
    {
        number: '01',
        title: 'Logo',
        description: 'A primary logo for the PyTexas 2027 conference',
    },
    {
        number: '02',
        title: 'Theme',
        description: 'The theme was the prickly pear cactus.',
    },
    {
        number: '03',
        title: 'Color Palette',
        description: 'Aim for 2–4 colors, with 5 as an absolute max only if necessary, since T-shirt printing is the biggest cost. The primary HEX colors are also used to style the website.',
    },
    {
        number: '04',
        title: 'Banner',
        description: 'A banner using the logo, which can be more elaborate, for Twitter, LinkedIn, and Pretix.',
    },
];

const PyTexas = () => {
    const [selectedImage, setSelectedImage] = useState<NumberedItem | null>(null);

    useEffect(() => {
        if (!selectedImage) return;

        const onKeyDown = (event: KeyboardEvent) => {
            const index = allImages.findIndex(
                (img) => img.number === selectedImage.number
            );

            if (event.key === 'Escape') {
                setSelectedImage(null);
            } else if (event.key === 'ArrowRight') {
                setSelectedImage(allImages[(index + 1) % allImages.length]);
            } else if (event.key === 'ArrowLeft') {
                setSelectedImage(
                    allImages[(index - 1 + allImages.length) % allImages.length]
                );
            }
        };

        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [selectedImage]);

    return (
        <div className="flex flex-col min-h-screen bg-[#fff9f0]">
            <Header />

            <main className="flex-grow">
                <div className="max-w-6xl mx-auto px-6 lg:px-10">
                    <section className="py-16 md:py-15 border-b border-[#d8d2c7]">
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#778965] font-semibold mb-4">
                                Conference Logo Design
                            </p>

                            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#394a28] mb-5">
                                PyTexas 2027
                            </h1>

                            <p className="text-base leading-7 text-[#686a62] max-w-2xl">
                                A logo designed for the 2027 PyTexas conference, inspired by the prickly pear cactus.
                            </p>
                        </div>

                        <nav
                            aria-label="Project timeline"
                            className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4"
                        >
                            {numberedPhases.map((phase, index) => {
                                const isLast = index === numberedPhases.length - 1;

                                return (
                                <button
                                    key={phase.id}
                                    type="button"
                                    onClick={() =>
                                        document
                                            .getElementById(phase.id)
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start',
                                            })
                                    }
                                    className="group text-left focus:outline-none"
                                >
                                    <div
                                        className="relative h-px w-48 mb-3 bg-[#778965] group-hover:bg-[#e17878] transition-colors"
                                    >
                                        {isLast ? (
                                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#778965] group-hover:bg-[#e17878] transition-colors" />
                                        ) : (
                                            <span className="absolute right-px top-1/2 -translate-y-1/2 rotate-45 w-2 h-2 border-t border-r border-[#778965] group-hover:border-[#e17878] transition-colors" />
                                        )}
                                    </div>
                                    <span className="block text-xs font-mono text-[#778965]">
                                        {phase.label}
                                    </span>
                                    <span className="block text-sm font-semibold text-[#394a28] mt-1 group-hover:text-[#e17878] transition-colors">
                                        {phase.title}
                                    </span>
                                </button>
                                );
                            })}
                        </nav>
                    </section>

                    <section className="border-b border-[#d8d2c7] py-10 md:py-12 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-[#778965] font-semibold">
                                Project Brief
                            </p>
                        </div>

                        <div>
                            <h2 className="text-base font-semibold text-[#394a28] mb-2">
                                The Requirements
                            </h2>

                            <p className="text-sm leading-6 text-[#686a62] max-w-2xl mb-6">
                                The PyTexas team needed a logo for the 2027 conference that would work across print and digital, from T-shirts to social media banners and the conference website.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
                                {requirements.map((item) => (
                                    <div key={item.number}>
                                        <p className="text-xs font-mono text-[#778965]">
                                            {item.number}
                                        </p>
                                        <h3 className="text-sm font-semibold text-[#394a28] mt-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-xs leading-5 text-[#85877f] mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {numberedPhases.map((phase, phaseIndex) => (
                        <section
                            key={phase.id}
                            id={phase.id}
                            className={`scroll-mt-8 py-14 md:py-20 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 ${
                                phaseIndex > 0 ? 'border-t border-[#d8d2c7]' : ''
                            }`}
                        >
                            <div>
                                <div className="md:sticky md:top-8">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#778965]" />
                                        <p className="text-xs font-mono text-[#778965]">
                                            {phase.label}
                                        </p>
                                    </div>

                                    <h2 className="text-xl font-semibold tracking-tight text-[#394a28]">
                                        {phase.title}
                                    </h2>

                                    <p className="text-xs font-mono text-[#85877f] mt-2">
                                        {phase.items[0].number}
                                        {phase.items.length > 1
                                            ? `–${phase.items[phase.items.length - 1].number}`
                                            : ''}{' '}
                                        / {TOTAL}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="max-w-3xl space-y-6 mb-10">
                                    {phase.intro.map((paragraph, i) => (
                                        <p
                                            key={i}
                                            className="text-base leading-7 text-[#394a28]"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                <div className={gridClass(phase.layout)}>
                                    {phase.items.map((item) => (
                                        <ImageCard
                                            key={item.number}
                                            item={item}
                                            onSelect={setSelectedImage}
                                            className={cardClass(phase.layout, item)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}

                    <section className="border-t border-[#d8d2c7] py-14 md:py-16 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-[#778965] font-semibold">
                                Reflection
                            </p>
                        </div>

                        <div className="max-w-3xl space-y-6">
                            <p className="text-base leading-7 text-[#394a28]">
                            This project taught me how much goes into creating a logo, from exploring different ideas to making small changes that bring everything together. Since this was my first time using Illustrator, I learned a lot throughout the process. I also got more comfortable trying new directions, taking feedback, and figuring out what worked best instead of sticking with my first idea.
                            </p>
                        </div>
                    </section>

                    <section className="border-t border-[#d8d2c7] py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <p className="text-xs uppercase tracking-wider text-[#778965] font-semibold">
                            Made With
                        </p>

                        <p className="text-sm text-[#394a28]">
                            Adobe Illustrator
                        </p>
                    </section>

                    <div className="pb-8">
                        <p className="text-xs text-[#85877f]">
                            © 2026 Olivia Laurel. PyTexas 2027 branding project.
                        </p>
                    </div>

                    <div className="pb-12">
                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="text-sm text-[#394a28] hover:text-[#e17878] transition-colors"
                        >
                            ← Back to Projects
                        </button>
                    </div>
                </div>
            </main>

            <Footer />

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-[#fff9f0]/60 backdrop-blur-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            type="button"
                            className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/80 text-[#394a28] text-xl flex items-center justify-center shadow-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            aria-label="Close image"
                        >
                            ×
                        </motion.button>

                        <motion.div
                            key={selectedImage.number}
                            className="relative flex items-center justify-center w-full h-full"
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="max-h-[82vh] max-w-[90vw] w-auto h-auto object-contain rounded-sm shadow-[0_25px_60px_rgba(57,74,40,0.22)]"
                                onClick={(e) => e.stopPropagation()}
                            />

                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[#394a28] whitespace-nowrap">
                                <span className="text-xs font-medium">
                                    {selectedImage.title}
                                </span>

                                <span className="text-xs font-mono opacity-50">
                                    {selectedImage.number} / {TOTAL}
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
