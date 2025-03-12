import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface TestimonialType {
    testimonialCard: {
        id: number,
        imageUrl: string,
        name: string,
        desc: string,
        reviewStar: number
    }
}

const TestimonialCard: React.FC<TestimonialType> = ({ testimonialCard }) => {

    return (
        <div className="p-4 rounded-3xl bg-[#f5faff]">
            <div className="flex gap-4 items-center">
                <figure className="h-12 w-12 rounded-full">
                    <Image className="w-full h-full" src={testimonialCard.imageUrl} alt={testimonialCard.name} height={100} width={100} />
                </figure>
                <h2 className="text-gray-800 font-semibold text-xl">{testimonialCard.name}</h2>
            </div>
            <p className="font-bold text-gray-500 max-w-72 py-5">{testimonialCard.desc}</p>
            <div className="pb-5">
                <div className="flex gap-0.5">
                    <FaStar className="text-[#fec01d] text-xl" />
                    <FaStar className="text-[#fec01d] text-xl" />
                    <FaStar className="text-[#fec01d] text-xl" />
                    <FaStar className="text-[#fec01d] text-xl" />
                    <FaStar className="text-[#fec01d] text-xl" />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;