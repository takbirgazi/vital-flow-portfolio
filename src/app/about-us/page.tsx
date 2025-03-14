import Counter from "@/components/AboutUsComp/Counter/Counter";
import Feature from "@/components/AboutUsComp/Feature/Feature";
import Mission from "@/components/AboutUsComp/Mission/Mission";
import Team from "@/components/AboutUsComp/Team/Team";
import Values from "@/components/AboutUsComp/Values/Values";
import Vision from "@/components/AboutUsComp/Vision/Vision";
import CustomButton from "@/components/SharedComponent/CustomButton/CustomButton";

const page = () => {
    return (
        <div className="pt-32 pb-5">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="flex flex-col justify-center items-center mb-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                        <p className="font-semibold text-gray-800">About us</p>
                    </div>
                    <h2 className="text-xl lg:text-4xl font-bold text-center max-w-[550px] py-5">A modern dental care home for families</h2>
                    <CustomButton link="/" title="Get Started" />
                </div>
                <Feature />
                <Counter />
                <Mission />
                <Vision />
            </div>
            <Values />
            <div className="container mx-auto px-4">
                <Team />
            </div>
        </div>
    );
};

export default page;