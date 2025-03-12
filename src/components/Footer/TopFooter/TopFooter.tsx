import { FaStar } from "react-icons/fa";


const TopFooter = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between py-10">
                <div className="w-full lg:w-1/3">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 bg-white rounded-full"></span>
                        <p className="font-semibold text-white">Contact</p>
                    </div>
                    <h2 className="py-5 text-3xl lg:text-4xl leading-13 text-white font-semibold">Contact us for more information & get started</h2>
                    <div className="flex gap-0.5">
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                        <FaStar className="text-[#fec01d] text-xl" />
                    </div>
                </div>
                <div className="w-full lg:w-2/3">
                    <form action="">
                        <div className="flex gap-4 flex-col lg:flex-row">
                            <input className="w-full lg:w-1/2 px-2 py-4 border border-b-white border-t-transparent border-l-transparent border-r-transparent focus:border-white outline-0 text-white font-semibold placeholder:text-white" type="text" placeholder="Full Name" />
                            <input className="w-full lg:w-1/2 px-2 py-4 border border-b-white border-t-transparent border-l-transparent border-r-transparent focus:border-white outline-0 text-white font-semibold placeholder:text-white" type="text" placeholder="Email Address" />
                        </div>
                        <div className="flex gap-4 flex-col lg:flex-row py-4 lg:py-8">
                            <input className="w-full lg:w-1/2 px-2 py-4 border border-b-white border-t-transparent border-l-transparent border-r-transparent focus:border-white outline-0 text-white font-semibold placeholder:text-white" type="text" placeholder="Phone Number" />
                            <input className="w-full lg:w-1/2 px-2 py-4 border border-b-white border-t-transparent border-l-transparent border-r-transparent focus:border-white outline-0 text-white font-semibold placeholder:text-white" type="date" style={{ colorScheme: 'dark' }} />
                        </div>
                        <div className=" pb-4 lg:pb-8">
                            <textarea className="w-full px-2 py-4 border border-b-white border-t-transparent border-l-transparent border-r-transparent focus:border-white outline-0 text-white font-semibold placeholder:text-white" rows={5} placeholder="Message or additional details"></textarea>
                        </div>
                        <div className="flex justify-start items-center">
                            <input type="submit" className="px-8 py-3 rounded-4xl bg-white text-primaryBg font-semibold" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TopFooter;