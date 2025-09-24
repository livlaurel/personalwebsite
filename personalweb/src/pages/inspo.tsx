import { useMemo } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const images = import.meta.glob('/src/imgs/inspo/*.jpeg', { eager: true });

const imagePaths = Object.values(images)
    .map((mod) => (mod as { default: string }).default)
    .filter((src) => typeof src === 'string');

const getRandomImages = (count: number) => {
    const shuffled = [...imagePaths].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
};

const Inspire = () => {
    const randomImages = useMemo(() => getRandomImages(12), []);

    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='underline font-bold text-3xl'>My Inspirations for Life</h1>
                    <p className='mt-5 mb-2 text-base font-mono tracking-1'>
                        A collection of colors, people, places, and moments that spark creativity, bring joy, and keep me motivated.
                    </p>

                    <button className='text-sm mb-3 font-style: italic' onClick={() => window.location.reload()}>
                        click here to refresh for more inspiration
                    </button>
                </div>
                <div className="flex flex-col space-y-6 ml-5 mr-5 h-[435px] overflow-y-auto">
                    <div className="grid grid-cols-4 gap-4">
                        {randomImages.map((src, index) => (
                            <img key={index} src={src} alt={`Inspiration ${index + 1}`} className="w-full h-auto rounded-md" />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Inspire;