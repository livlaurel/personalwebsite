import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from '../components/header';
import Footer from '../components/footer';

import ishiBrand from '../imgs/ishi/ishi_brandlayout.svg';
import ishiMenu from '../imgs/ishi/menu.svg';
import ishiCards1 from '../imgs/ishi/business-card-mockup-1.png';
import ishiCards2 from '../imgs/ishi/business-card-mockup-2.png';
import ishiCoffeeHolder from '../imgs/ishi/cofee.jpg';
import ishiShoppingBag from '../imgs/ishi/togobag.jpg';
import ishiTote from '../imgs/ishi/totebag.jpg';

const images = [
    {
        image: ishiBrand,
        title: 'Brand Identity',
        number: '01',
        description: 'Logo system, typography, colors, and visual direction.',
    },
    {
        image: ishiCards1,
        title: 'Business + Loyalty Cards',
        number: '02',
        description: 'Simple cards that show the ISHI branding.',
    },
    {
        image: ishiCards2,
        title: 'Business + Loyalty Cards',
        number: '03',
        description: 'A loyalty system built into the business cards.',
    },
    {
        image: ishiMenu,
        title: 'Menu',
        number: '07',
        description: 'The daily ISHI cafe menu w/ seasonal items.',
    },
    {
        image: ishiTote,
        title: 'Tote Bag',
        number: '05',
        description: 'An idea for ISHI cafe everyday merch.',
    },
    {
        image: ishiCoffeeHolder,
        title: 'Coffee Carrier',
        number: '04',
        description: 'A branded coffee carrier designed for takeout.',
    },
    {
        image: ishiShoppingBag,
        title: 'Shopping Bag',
        number: '06',
        description: 'Branded packaging for takeaway orders and purchases.',
    },
];

const Ishi = () => {
    const [selectedImage, setSelectedImage] = useState<
        (typeof images)[number] | null
    >(null);

    return (
        <div className="flex flex-col min-h-screen bg-[#fff9f0]">
            <Header />

            <main className="flex-grow">
                <div className="max-w-6xl mx-auto px-6 lg:px-10">
                    <section className="py-16 md:py-15 border-b border-[#d8d2c7]">
                        <div className="max-w-2xl">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#778965] font-semibold mb-4">
                                Cafe Brand Identity
                            </p>

                            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#394a28] mb-5">
                                ISHI
                            </h1>

                            <p className="text-base leading-7 text-[#686a62] max-w-xl">
                                石 (いし / ishi) : stone/rock | 意思 (いし / ishi) : intention
                            </p>
                            <p className="text-base leading-7 text-[#686a62] max-w-xl">
                                A cafe inspired by balancing rocks and balancing your life.
                            </p>
                        </div>
                    </section>

                    <section className="py-14 md:py-20">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <p className="text-sm text-[#686a62]">
                                    The visual identity
                                </p>
                            </div>

                            <p className="text-xs font-mono text-[#778965]">
                                01 / 07
                            </p>
                        </div>

                        <button
                            onClick={() => setSelectedImage(images[0])}
                            className="group w-full text-left focus:outline-none"
                        >
                            <div className="
                                relative
                                overflow-hidden
                                bg-[#eee8dc]
                                rounded-sm
                                cursor-zoom-in
                            ">
                                <img
                                    src={ishiBrand}
                                    alt="ISHI brand identity"
                                    className="
                                        w-[50%]
                                        h-auto
                                        mx-auto
                                        block
                                        transition-transform
                                        duration-500
                                        ease-out
                                        group-hover:scale-[1.015]
                                    "
                                />

                                <div className="
                                    absolute
                                    inset-0
                                    bg-black/0
                                    group-hover:bg-black/[0.04]
                                    transition-colors
                                    duration-300
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
                        </button>

                        <div className="pt-5 px-1">
                            <h2 className="text-sm font-semibold text-[#394a28]">
                                Brand Identity
                            </h2>

                            <p className="text-xs text-[#85877f] mt-1">
                                Logo system, logotype, brandmark, submark,
                                typography, colors, and HEX codes.
                            </p>
                        </div>
                    </section>
                    <section className="
                        border-t
                        border-[#d8d2c7]
                        py-14 md:py-16
                        grid
                        grid-cols-1
                        md:grid-cols-[180px_1fr]
                        gap-8
                    ">
                        <div>
                            <p className="
                                text-xs
                                uppercase
                                tracking-wider
                                text-[#778965]
                                font-semibold
                            ">
                                Branding Process
                            </p>
                        </div>

                        <div className="max-w-3xl space-y-6">
                            <p className="
                                text-base
                                leading-7
                                text-[#394a28]
                            ">
                                I was inspired by rock balancing and the idea that, similarly to how the stones have to be carefully balanced, we are balancing different parts of our lives. Work, family, social life, hobbies, etc all take up time/space and finding balance is different for everyone.
                                I wanted to design a cafe around this idea because I see cafes as places where people can find their own balance. They can be a place to organize your life and get work done, take a break with a cup of coffee, read a book, enjoy the atmosphere, or just slow down. There's no right way to spend your time there.
                            </p>

                            <p className="
                                text-base
                                leading-7
                                text-[#394a28]
                            ">
                                When I learned about the word ishi, it felt like the perfect choice for the brand name. In Japanese, ishi can mean stone or rock (石) or it can also mean intention or determination (意思). I think this double meaning fits the main idea behind the cafe really well. It’s about creating a space where you can be intentional with how you spend your time and find your own balance whether that means working hard or just taking things slow.
                            </p>
                        </div>
                    </section>

                    <section className="py-14 md:py-20 border-t border-[#d8d2c7]">
                        <div className="flex items-end justify-between mb-10">
                            <p className="text-sm text-[#686a62]">
                                Bringing the brand to life
                            </p>

                            <p className="text-xs font-mono text-[#778965]">
                                06 APPLICATIONS
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">

                            {[images[1], images[2]].map((item) => (
                                <button
                                    key={item.number}
                                    onClick={() => setSelectedImage(item)}
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
                                            src={item.image}
                                            alt={item.title}
                                            className="
                                                w-full
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
                                            group-hover:bg-black/[0.04]
                                            transition-colors
                                            duration-300
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
                                                {item.title}
                                            </h2>

                                            <p className="
                                                text-xs
                                                text-[#85877f]
                                                mt-1
                                            ">
                                                {item.description}
                                            </p>
                                        </div>

                                        <span className="
                                            text-xs
                                            font-mono
                                            text-[#778965]
                                        ">
                                            {item.number}
                                        </span>
                                    </div>
                                </button>
                            ))}

                        </div>

                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-2
                            gap-10
                            items-start
                        ">

                            {[images[5], images[4],images[6], images[3]].map((item) => (
                                <button
                                    key={item.number}
                                    onClick={() => setSelectedImage(item)}
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
                                            src={item.image}
                                            alt={item.title}
                                            className="
                                                w-full
                                                h-auto
                                                block
                                                transition-transform
                                                duration-500
                                                ease-out
                                                group-hover:scale-[1.02]
                                            "
                                        />

                                        <div className="
                                            absolute
                                            inset-0
                                            bg-black/0
                                            group-hover:bg-black/[0.04]
                                            transition-colors
                                            duration-300
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
                                                {item.title}
                                            </h2>

                                            <p className="
                                                text-xs
                                                text-[#85877f]
                                                mt-1
                                            ">
                                                {item.description}
                                            </p>
                                        </div>

                                        <span className="
                                            text-xs
                                            font-mono
                                            text-[#778965]
                                        ">
                                            {item.number}
                                        </span>
                                    </div>
                                </button>
                            ))}

                        </div>
                    </section>
                    <section className="
                        border-t
                        border-[#d8d2c7]
                        py-14 md:py-16
                        grid
                        grid-cols-1
                        md:grid-cols-[180px_1fr]
                        gap-8
                    ">
                        <div>
                            <p className="
                                text-xs
                                uppercase
                                tracking-wider
                                text-[#778965]
                                font-semibold
                            ">
                                Design Process
                            </p>
                        </div>

                        <div className="max-w-3xl space-y-6">
                            <p className="
                                text-base
                                leading-7
                                text-[#394a28]
                            ">
                                Once I had the main idea down, I wanted the visual identity to feel organic just like the rocks that inspired it. I stuck with a natural color palette to give the brand a warm and grounded feeling while keeping the shapes rounded and the lines soft instead of using anything too sharp.
                            </p>

                            <p className="
                                text-base
                                leading-7
                                text-[#394a28]
                            ">
                                I also wanted the rocks to be a consistent part of the design. The main brand mark is made from stacked rocks and the top rock is used throughout the designs kind of like a little pebble path. Since Japanese inspiration was also a big part of the concept, I included the kanji character (石) for stone in the submark and incorporated Japanese-inspired flavors into the menu.
                            </p>

                            <p className="
                                text-base
                                leading-7
                                text-[#394a28]
                            ">
                                This is my first full brand identity for a company outside of my own personal branding and I’ve learned so much even during the short time I’ve been working on it. There’s so much creativity and effort that goes into building a brand and I’ve had so much fun figuring it all out. I’d love to keep building ISHI out with more merch mockups and possibly design the UX/UI for the website.
                            </p>
                        </div>
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
                            Adobe Illustrator · Figma
                        </p>
                    </section>

                    <div className="pb-8">
                        <p className="text-xs text-[#85877f]">
                            © 2026 Olivia Laurel. ISHI is a personal branding concept. All rights reserved.
                        </p>
                    </div>

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
                {selectedImage && (
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
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        onClick={() => setSelectedImage(null)}
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
                                duration: 0.3,
                                delay: 0.1,
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            aria-label="Close image"
                        >
                        </motion.button>
                        <motion.div
                            key={selectedImage.number}
                            className="
                                relative
                                flex
                                items-center
                                justify-center
                                w-full
                                h-full
                            "
                            initial={{
                                opacity: 0,
                                scale: 0.92,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.92,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="
                                    max-h-[82vh]
                                    max-w-[90vw]
                                    w-auto
                                    h-auto
                                    object-contain
                                    rounded-sm
                                    shadow-[0_25px_60px_rgba(57,74,40,0.22)]
                                "
                                onClick={(e) => e.stopPropagation()}
                            />
                            <div className="
                                absolute
                                bottom-3
                                left-1/2
                                -translate-x-1/2
                                flex
                                items-center
                                gap-4
                                text-[#394a28]
                                whitespace-nowrap
                            ">
                                <span className="text-xs font-medium">
                                    {selectedImage.title}
                                </span>

                                <span className="text-xs font-mono opacity-50">
                                    {selectedImage.number} / 07
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Ishi;