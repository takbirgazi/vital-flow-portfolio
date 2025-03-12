"use client"
import AOS from 'aos';
import { useEffect } from "react";
import ValuesCard from './ValuesCard/ValuesCard';

const Values = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])

    const valueData = [
        {
            id: 1,
            iconUrl: "https://framerusercontent.com/images/jMCLDWllHJJkpBUB0c26pUduM.svg",
            title: "Compassion",
            desc: "We prioritize empathy and understanding, ensuring every patient feels valued, respected, and cared for in their healthcare journey."
        },
        {
            id: 2,
            iconUrl: "https://framerusercontent.com/images/a1i7K7fbtNmbzwcRqLGqELa3g.svg",
            title: "Excellence",
            desc: "We are committed to delivering the highest standards of quality in every aspect of our services, striving for continuous improvement."
        },
        {
            id: 3,
            iconUrl: "https://framerusercontent.com/images/zwhueEuXaf8IKsxAEauWSac.svg",
            title: "Integrity",
            desc: "We uphold honesty and transparency in all interactions, building trust with patients, families, and the community through ethical practices."
        },
    ]
    return (
        <div className='bg-[#f5faff] px-4 py-8 mb-10'>
            <div className="container mx-auto px-4">
                <div data-aos="fade-up" className="flex flex-col justify-center items-center mb-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                        <p className="font-semibold text-gray-800">Our Values</p>
                    </div>
                    <h2 className="text-xl lg:text-4xl font-bold text-center max-w-[550px] py-5">Core principles guiding our healthcare mission</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                    {
                        valueData.map(data => <ValuesCard key={data.id} valueData={data} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Values;