import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import pic1 from '../imgs/inspo/1.jpeg';
import pic2 from '../imgs/inspo/2.jpeg';
import pic3 from '../imgs/inspo/3.jpeg';
import pic4 from '../imgs/inspo/4.jpeg';
import pic5 from '../imgs/inspo/5.jpeg';
import pic6 from '../imgs/inspo/6.jpeg';

const images = [
    { src: pic1, alt: 'Inspiration 1' },
    { src: pic2, alt: 'Inspiration 2' },
    { src: pic3, alt: 'Inspiration 3' },
    { src: pic4, alt: 'Inspiration 4' },
    { src: pic5, alt: 'Inspiration 5' },
    { src: pic6, alt: 'Inspiration 6' },
];

const Inspire = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <main className="bg-[#fff9f0] flex-grow p-4">
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='underline font-bold text-3xl'>My Inspirations for Life</h1>
                    <p className='mt-5 mb-5 text-base font-mono tracking-1'>A collection of colors, people, places, and moments that spark creativity, bring joy, and keep me motivated.</p>
                </div>
                <div className="flex flex-col space-y-6 ml-10 h-[500px] overflow-y-auto">
                    <div className="grid grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <img key={index} src={image.src} alt={image.alt} className="w-full h-auto rounded-md" />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Inspire;
