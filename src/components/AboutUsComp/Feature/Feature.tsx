"use client"
import AOS from 'aos';
import { useEffect } from "react";
import Image from "next/image";

const Feature = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])

    return (
        <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <figure data-aos="fade-up" className="rounded-4xl h-fit md:h-[550px] overflow-hidden">
                    <Image className="w-full h-full" src="https://framerusercontent.com/images/wDZDZB6S3fl2IFEkgVRWHt91dOg.webp?scale-down-to=1024" height={950} width={450} alt="Feature" />
                </figure>
                <figure data-aos="fade-up" className="rounded-4xl h-fit md:h-[550px] overflow-hidden">
                    <Image className="w-full h-full" src="https://framerusercontent.com/images/y3wE1xhBbSmPyLYwzYDgK4ftuY.webp?scale-down-to=1024" height={950} width={450} alt="Feature" />
                </figure>
                <figure data-aos="fade-up" className="rounded-4xl h-fit md:h-[550px] overflow-hidden">
                    <Image className="w-full h-full" src="https://framerusercontent.com/images/mXnu9TXzBMhH18k9Go9HzSjoi3E.webp?scale-down-to=1024" height={950} width={450} alt="Feature" />
                </figure>
            </div>
        </div>
    );
};

export default Feature;