"use client"
import AOS from 'aos';
import { useEffect } from "react";
import Image from "next/image";

interface WorkType {
    workCard: {
        id: number,
        imageUrl: string,
        title: string,
        desc: string,
    }
}

const WorksCard: React.FC<WorkType> = ({ workCard }) => {
    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])

    return (
        <div data-aos="zoom-in-up" className="cursor-pointer">
            <div>
                <div className="flex py-5">
                    <p className="bg-primaryBg rounded-full h-7 w-7 text-white font-semibold flex justify-center items-center">
                        <span className="p-2 ">0{workCard.id}</span>
                    </p>
                </div>
                <h2 className="text-xl lg:text-2xl font-semibold text-gray-800">{workCard.title}</h2>
            </div>
            <div className={`${(workCard.id % 2 == 0) ? "lg:flex-col-reverse flex-col" : "flex-col"} flex gap-4 py-4`}>
                <p className="font-bold text-gray-500 w-10/12">{workCard.desc}</p>
                <figure className="h-60">
                    <Image className="w-full h-full object-cover rounded-3xl" src={workCard.imageUrl} alt={workCard.title} height={200} width={350} />
                </figure>
            </div>
        </div>
    );
};

export default WorksCard;