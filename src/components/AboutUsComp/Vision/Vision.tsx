import CustomButton from '@/components/SharedComponent/CustomButton/CustomButton';
import Image from 'next/image';
import { FaCheck } from "react-icons/fa6";


const Vision = () => {
    const visionList = [
        "Innovating for better healthcare futures",
        "Leading with patient-focused care solutions",
        "Building healthier and stronger communities",
        "Transforming lives through medical excellence"
    ]
    return (
        <div className="flex gap-8 justify-between flex-col lg:flex-row my-10 pt-5">
            <div data-aos="fade-up" className="w-full lg:w-1/2">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">Our Vision</p>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold max-w-[450px] py-5">Passionate about creating healthier, happier lives</h2>
                <div className='py-4'>
                    {
                        visionList.map((data, ind) => <div key={ind} className='flex gap-2 items-center py-2'>
                            <span className='bg-primaryBg text-white rounded-full p-1'><FaCheck className='text-xs' /></span>
                            <p className="font-semibold text-gray-800">{data}</p>
                        </div>)
                    }
                </div>
                <div className="py-8">
                    <CustomButton link="/" title="Book a call" />
                </div>
            </div>
            <div data-aos="fade-up" className="w-full lg:w-1/2">
                <figure className="rounded-3xl overflow-hidden">
                    <Image className="w-full h-full" src="https://framerusercontent.com/images/kMSL8gkwRIHhMhuyeNv76GzQY.jpg?scale-down-to=512" alt="Second Image" height={650} width={650} />
                </figure>
            </div>
        </div>
    );
};

export default Vision;