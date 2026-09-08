import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Spark = {
    id: number;
    x: number;
    y: number;
};

const ClickSpark = () => {
    const [sparks, setSparks] = useState<Spark[]>([]);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest('a')) {
                return;
            }
        
            const id = Date.now() + Math.random();
        
            setSparks((prev) => [
                ...prev,
                {
                    id,
                    x: e.clientX,
                    y: e.clientY,
                },
            ]);
        
            setTimeout(() => {
                setSparks((prev) =>
                    prev.filter((spark) => spark.id !== id)
                );
            }, 350);
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <AnimatePresence>
            {sparks.map((spark) => (
                <div
                    key={spark.id}
                    className="pointer-events-none fixed z-[9999]"
                    style={{
                        left: spark.x,
                        top: spark.y,
                    }}
                >

                    <motion.span
                        initial={{
                            opacity: 0,
                            x: 0,
                            y: 0,
                            rotate: -25,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            x: -5,
                            y: -14,
                            rotate: -25,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            x: -7,
                            y: -19,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-[-1px] top-[-4px] h-3 w-[2px] rounded-full bg-[#778965]"
                    />

                    <motion.span
                        initial={{
                            opacity: 0,
                            x: 0,
                            y: 0,
                            rotate: 5,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            x: 2,
                            y: -17,
                            rotate: 5,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            x: 3,
                            y: -22,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-[-1px] top-[-4px] h-4 w-[2px] rounded-full bg-[#778965]"
                    />

                    <motion.span
                        initial={{
                            opacity: 0,
                            x: 0,
                            y: 0,
                            rotate: 35,
                            scale: 0.5,
                        }}
                        animate={{
                            opacity: 1,
                            x: 9,
                            y: -12,
                            rotate: 35,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            x: 13,
                            y: -17,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-[-1px] top-[-4px] h-3 w-[2px] rounded-full bg-[#778965]"
                    />
                </div>
            ))}
        </AnimatePresence>
    );
};

export default ClickSpark;