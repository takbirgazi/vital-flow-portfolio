import Image from "next/image";

interface ValueType {
    valueData: {
        id: number,
        iconUrl: string,
        title: string,
        desc: string
    }
}

const ValuesCard: React.FC<ValueType> = ({ valueData }) => {
    return (
        <div data-aos="fade-up" className="p-7 bg-primaryBg rounded-3xl">
            <figure className="h-12 w-12" >
                <Image className="bg-white p-2.5 rounded-xl" src={valueData.iconUrl} height={100} width={100} alt="Icon" />
            </figure>
            <div className="pt-10">
                <h2 className="font-semibold text-white text-3xl pb-3">{valueData.title}</h2>
                <p className="font-medium text-white">{valueData.desc}</p>
            </div>
        </div>
    );
};

export default ValuesCard;