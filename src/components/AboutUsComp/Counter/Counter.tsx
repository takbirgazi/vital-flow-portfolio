"use client"
import CountUp from "react-countup";

const Counter = () => {
    return (
        <div className="py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row items-center justify-around gap-4 w-full lg:w-1/2">
                    <div>
                        <h2 className="text-7xl text-primaryBg font-medium text-center md:text-left"><CountUp end={98} />%</h2>
                        <p className="text-gray-500 text-lg font-semibold text-center md:text-left">Satisfaction rate</p>
                    </div>
                    <span className="lg:block hidden h-2 w-2 bg-black rounded-full"></span>
                    <div>
                        <h2 className="text-7xl text-primaryBg font-medium text-center md:text-left"><CountUp end={30} />+</h2>
                        <p className="text-gray-500 text-lg font-semibold text-center md:text-left">Years of experience</p>
                    </div>
                    <span className="lg:block hidden h-2 w-2 bg-black rounded-full"></span>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around gap-4 w-full lg:w-1/2">
                    <div>
                        <h2 className="text-7xl text-primaryBg font-medium text-center md:text-left"><CountUp separator="" end={1000} /></h2>
                        <p className="text-gray-500 text-lg font-semibold text-center md:text-left">Patients Treated</p>
                    </div>
                    <span className="lg:block hidden h-2 w-2 bg-black rounded-full"></span>
                    <div>
                        <h2 className="text-7xl text-primaryBg font-medium text-center md:text-left"><CountUp end={80} />+</h2>
                        <p className="text-gray-500 text-lg font-semibold text-center md:text-left">Expert Doctors</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;