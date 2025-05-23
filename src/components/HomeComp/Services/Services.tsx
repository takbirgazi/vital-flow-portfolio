import ServiceCard from "./ServiceCard/ServiceCard";


const Services = () => {
    const serviceData = [
        {
            id: 1,
            iconUrl: "https://framerusercontent.com/images/oa7iWbia3J9oxRWSoVclVtaRMs.svg",
            title: "Pediatrics",
            desc: "Monitor your childs growth and development closely to ensure their health at every stage.",
        },
        {
            id: 2,
            iconUrl: "https://framerusercontent.com/images/jy8eke3PWbN8PfS6jV95dMNfHj0.svg",
            title: "Pediatrics",
            desc: "Monitor your childs growth and development closely to ensure their health at every stage.",
        },
        {
            id: 3,
            iconUrl: "https://framerusercontent.com/images/HjsPNjeDCeunFWXFQMfzlFLlNhc.svg",
            title: "Pediatrics",
            desc: "Monitor your childs growth and development closely to ensure their health at every stage.",
        },
        {
            id: 4,
            iconUrl: "https://framerusercontent.com/images/MCHkDGRtYnj3fV49WkwPbD55atY.svg",
            title: "Pediatrics",
            desc: "Monitor your childs growth and development closely to ensure their health at every stage.",
        },
        {
            id: 5,
            iconUrl: "https://framerusercontent.com/images/7tlEW4hN6b9zLYAn3jS6Bk3eoM.svg",
            title: "Pediatrics",
            desc: "Monitor your childs growth and development closely to ensure their health at every stage.",
        },
        {
            id: 6,
            iconUrl: "https://framerusercontent.com/images/003idK9DG46rhUcdAJ0dfH4p0Y.svg",
            title: "Pediatrics",
            desc: "Monitor your childs growth and development closely to ensure their health at every stage.",
        },
    ]
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">Services</p>
                </div>
                <h2 className="text-4xl font-semibold text-center max-w-[450px] py-5">Personalized solutions for better oral health</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    serviceData.map(service => <ServiceCard key={service.id} serviceCard={service} />)
                }
            </div>
        </div>
    );
};

export default Services;