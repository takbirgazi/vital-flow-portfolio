import Team from "@/components/AboutUsComp/Team/Team";
import CustomButton from "@/components/SharedComponent/CustomButton/CustomButton";

const page = () => {
    return (
        <div className="pt-20 container mx-auto px-4">
            <div className="flex flex-col justify-center items-center mb-5">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">About us</p>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold text-center max-w-[550px] py-5">A modern dental care home for families</h2>
                <CustomButton link="/" title="Get Started" />
            </div>
            <Team />

        </div>
    );
};

export default page;