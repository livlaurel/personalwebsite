import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from '../components/header';
import Footer from '../components/footer';
import calmkeys from '../imgs/calm_keys_logo.png';
import purrr from '../imgs/Purrrsonality.png';
import logo from '../imgs/logo.svg';
import booth from '../imgs/booth.png';
import sprint from '../imgs/Sprint.svg';
import pytexas from '../imgs/forweb.svg';

type Project = {
    name: string;
    image: string;
    href: string;
    type: string;
};

const codeProjects: Project[] = [
    {
        name: 'Sprint',
        image: sprint,
        href: '#/sprint',
        type: 'WEB APP',
    },
    {
        name: 'CalmKeys',
        image: calmkeys,
        href: '#/calmkeys',
        type: 'WEB GAME',
    },
    {
        name: 'Booth Buddy',
        image: booth,
        href: '#/boothbuddy',
        type: 'WEB APP',
    },
    {
        name: 'Purrrsonality',
        image: purrr,
        href: '#/purrrsonality',
        type: 'WEB GAME',
    },
    {
        name: 'Personal Website',
        image: logo,
        href: '#/website',
        type: 'PORTFOLIO',
    },
];

const designProjects: Project[] = [
    {
        name: 'Personal Brand',
        image: logo,
        href: '#/website',
        type: 'BRANDING',
    },
    {
        name: 'PyTexas 2027',
        image: pytexas,
        href: '#/pytexas',
        type: 'LOGO',
    },
];

const ProjectCard = ({
    project,
    index,
    total,
}: {
    project: Project;
    index: number;
    total: number;
}) => {
    const center = (total - 1) / 2;
    const distance = index - center;
    const x = distance * 112;
    const y = -145 + Math.abs(distance) * 30;
    const rotate = distance * 6;

    return (
        <motion.a
            href={project.href}
            className="absolute left-1/2 top-0 w-[150px] -translate-x-1/2 sm:w-[175px]"
            style={{ zIndex: 70 + index }}
            initial={{
                opacity: 0,
                x: 0,
                y: 40,
                rotate: 0,
                scale: 0.55,
            }}
            animate={{
                opacity: 1,
                x,
                y,
                rotate,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                x: 0,
                y: 40,
                rotate: 0,
                scale: 0.55,
            }}
            transition={{
                duration: 0.55,
                delay: index * 0.055,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
                y: y - 10,
                rotate: rotate * 0.4,
                scale: 1.04,
                zIndex: 100,
                transition: {
                    duration: 0.2,
                },
            }}
        >
            <div className="rounded-xl border border-[#394a28]/10 bg-[#fff9f0] p-2 shadow-[0_15px_35px_rgba(57,74,40,0.14)]">
                <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-[#f1eadc]">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-contain p-4"
                    />
                </div>

                <div className="px-1 pb-1 pt-3">
                    <p className="font-mono text-xs font-semibold tracking-tight text-[#394a28]">
                        {project.name}
                    </p>

                    <p className="mt-1 font-mono text-[9px] tracking-[0.14em] text-[#394a28]/45">
                        {project.type}
                    </p>
                </div>
            </div>
        </motion.a>
    );
};

const Folder = ({
    label,
    projects,
}: {
    label: string;
    projects: Project[];
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative h-[430px]">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-[70] h-[300px] overflow-visible">
                <AnimatePresence>
                    {open &&
                        projects.map((project, index) => (
                            <div
                                key={project.name}
                                className="pointer-events-auto"
                            >
                                <ProjectCard
                                    project={project}
                                    index={index}
                                    total={projects.length}
                                />
                            </div>
                        ))}
                </AnimatePresence>
            </div>
            <motion.button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="
                    absolute
                    bottom-0
                    left-1/2
                    z-[40]
                    w-[360px]
                    -translate-x-1/2
                    cursor-pointer
                    outline-none
                    sm:w-[430px]
                "
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.995 }}
            >
                <div className="relative h-[300px] sm:h-[330px]">
                    <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 430 330"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <filter
                                id={`folder-shadow-${label}`}
                                x="-20%"
                                y="-20%"
                                width="140%"
                                height="150%"
                            >
                                <feDropShadow
                                    dx="0"
                                    dy="14"
                                    stdDeviation="14"
                                    floodColor="#394a28"
                                    floodOpacity="0.14"
                                />
                            </filter>
                        </defs>

                        <path
                            d="
                                M 24 0
                                H 135
                                C 148 0 158 4 168 13
                                L 185 29
                                H 407
                                C 420 29 430 39 430 52
                                V 306
                                C 430 319 420 330 407 330
                                H 23
                                C 10 330 0 320 0 307
                                V 24
                                C 0 11 10 0 24 0
                                Z
                            "
                            fill="#394a28"
                            filter={`url(#folder-shadow-${label})`}
                        />
                    </svg>

                    <motion.div
                        animate={{
                            y: open ? 7 : 0,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="
                            absolute
                            bottom-0
                            left-0
                            right-0
                            h-[235px]
                            rounded-[22px]
                            bg-[#9db089]
                            sm:h-[260px]
                            border-3
                            border-[#394a28]
                        "
                    >
                        <div
                            className="
                                absolute
                                inset-[8px]
                                rounded-[17px]
                                border-3
                                border-[#394a28]/20
                            "
                        />

                        <div className="absolute bottom-8 left-8 right-8 sm:bottom-10 sm:left-10 sm:right-10">
                            <div className="flex items-end justify-between">
                                <span className="font-sans text-lg tracking-[-0.06em] text-[#394a28] sm:text-4xl">
                                    {label}
                                </span>

                                <span className="font-mono text-[10px] tracking-[0.18em] text-[#394a28]/45">
                                    {String(projects.length).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="mt-4 h-px bg-[#394a28]/25" />
                        </div>
                    </motion.div>
                </div>
            </motion.button>
        </div>
    );
};

const Dev = () => {
    return (
        <div className="flex min-h-screen flex-col bg-[#fff9f0]">
            <Header />

            <main className="flex-grow px-5sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    <section className="mx-auto max-w-3xl text-center">
                        <div className="flex flex-wrap justify-center gap-x-4">
                            <h1 className="fade-in fade-in-1 text-5xl font-bold tracking-[-0.055em] text-[#394a28] sm:text-6xl lg:text-7xl">
                                Create.
                            </h1>

                            <h1 className="fade-in fade-in-2 text-5xl font-bold tracking-[-0.055em] text-[#394a28] sm:text-6xl lg:text-7xl">
                                Design.
                            </h1>

                            <h1 className="fade-in fade-in-3 text-5xl font-bold tracking-[-0.055em] text-[#394a28] sm:text-6xl lg:text-7xl">
                                Code.
                            </h1>
                        </div>

                        <p className="mx-auto mt-3 max-w-2xl font-mono text-sm leading-relaxed tracking-tight text-[#394a28]/80 sm:text-base">
                            A collection of my work in software engineering and design.
                        </p>
                    </section>

                    <section className="grid grid-cols-1 mb-4 gap-0 md:grid-cols-2 ">
                        <Folder
                            label="Design Projects"
                            projects={designProjects}
                        />

                        <Folder
                            label="SWE Projects"
                            projects={codeProjects}
                        />
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Dev;
