import Image from "next/image";

interface FeaturesType {
    featuresCard: {
        id: number,
        iconUrl: string,
        title: string,
        desc: string,
    }
}

const FeaturesCard: React.FC<FeaturesType> = ({ featuresCard }) => {
    return (
        <div className="p-4 bg-white border cursor-pointer">
            <div className="flex justify-center items-center">
                <figure className="bg-[#edf4ff] p-4 rounded-full">
                    <Image className="h-10 w-10" src={featuresCard.iconUrl} alt="Icon" height={200} width={200} />
                </figure>
            </div>
            <div className="pt-5">
                <h4 className="font-bold text-lg text-center">{featuresCard.title}</h4>
            </div>
            <div className="py-3">
                <p className="font-bold text-center text-gray-500 max-w-72 mx-auto">{featuresCard.desc}</p>
            </div>
        </div>
    );
};

export default FeaturesCard;