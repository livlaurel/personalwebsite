import Header from '../components/header';
import Footer from '../components/footer';
import pic1 from '../imgs/pic1.jpg';
import { MapPin, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

const About = () => {
    return (
        <div className="flex min-h-screen flex-col bg-[#fff9f0]">
            <Header />

            <main className="flex flex-1 items-center px-6 py-5 lg:px-12">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="pt-2 lg:pt-4"
                        >
                        <h1 className="mb-5 text-3xl font-semibold lg:text-5xl">
                            Hi, I'm{' '}
                            <span className="inline-flex text-[#e17878]">
                                {'Olivia'.split('').map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        whileHover={{
                                            y: -8,
                                            transition: {
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 10,
                                            },
                                        }}
                                        className="inline-block cursor-default"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                            !
                        </h1>

                            <div className="max-w-2xl space-y-4 text-base leading-relaxed lg:text-lg">
                                <p>
                                    I'm a software engineer and I love{' '}
                                    <span className="font-semibold text-[#778965]">
                                        frontend/fullstack engineering
                                    </span>{' '}
                                    and{' '}
                                    <span className="font-semibold text-[#778965]">
                                        UX/UI.
                                    </span>
                                </p>

                                <p>
                                    I love playing games, reading, & baking. I'm currently
                                    playing Stardew Valley/BOTW, reading{' '}
                                    <span className="font-medium">
                                        The Bluest Eye
                                    </span>{' '}
                                    by Toni Morrison, and my favorite thing to bake is{' '}
                                    <a
                                        href="https://drive.google.com/file/d/1HNvBg0IX_yG7jqlOhc_twzikbHFyxxtt/view?usp=sharing"
                                        className="font-semibold text-[#778965] underline decoration-2 underline-offset-2"
                                    >
                                        chocolate chip cookies
                                    </a>
                                    .
                                </p>

                                <p>
                                    I built this portfolio to show the projects I've
                                    created and document my journey as an engineer/designer.
                                </p>

                                <p>
                                    Feel free to explore and reach out if you'd like to
                                    connect!
                                </p>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 rounded-full border-2 border-[#778965] bg-[#fff9f0] px-4 py-2 text-sm text-[#9caf88]">
                                    <MapPin
                                        size={17}
                                        className="text-[#e17878]"
                                    />
                                    Based in Texas
                                </div>

                                <div className="flex items-center gap-2 rounded-full border-2 border-[#778965] bg-[#fff9f0] px-4 py-2 text-sm text-[#9caf88]">
                                    <Monitor
                                        size={17}
                                        className="text-[#e17878]"
                                    />
                                    Frontend Dev & Designer
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeOut',
                            }}
                            className="flex flex-col items-center lg:pt-0"
                        >
                            <motion.div
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="w-full max-w-[320px] lg:max-w-[350px]"
                            >
                                <div className="rounded-md border-3 border-[#778965] bg-[#9caf88] p-2 box-shadow-green">
                                    <img
                                        src={pic1}
                                        alt="Olivia"
                                        className="w-full rounded-sm"
                                    />
                                </div>

                                <p className="mt-3 text-center text-sm text-[#778965]">
                                    thanks for stopping by ♡
                                </p>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;