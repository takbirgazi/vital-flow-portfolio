import ServiceCard from "@/components/HomeComp/Services/ServiceCard/ServiceCard";
import TestimonialCard from "@/components/HomeComp/Testimonials/TestimonialCard/TestimonialCard";

const page = () => {
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
    ];
    const testimonialData = [
        {
            id: 1,
            imageUrl: "https://framerusercontent.com/images/2D6XtXtVf2ZPpchW6wNLcqq9Zc.webp",
            name: "Emily Johnson",
            desc: "Their service was outstanding. They ensured I was comfortable and informed every step of the way.",
            reviewStar: 5,
        },
        {
            id: 2,
            imageUrl: "https://framerusercontent.com/images/OSg5NrirhnZIfnqszjqlMPbQsg.svg",
            name: "Michael Roberts",
            desc: "The support I received was excellent. They truly cared about my needs and exceeded my expectations.",
            reviewStar: 5,
        },
        {
            id: 3,
            imageUrl: "https://framerusercontent.com/images/2m6Vf3e8eE5i2wfOrSvAT78ctmI.webp",
            name: "Achieve your vision",
            desc: "Experience seamless results as we bring your perfect vision to life with precision and care.",
            reviewStar: 5,
        },
        {
            id: 4,
            imageUrl: "https://framerusercontent.com/images/0ko6NgdhqGj0qbhzn4Aq5k20K8.webp",
            name: "Olivia Harris",
            desc: "They were attentive and thorough. Their professionalism and kindness made the entire process seamless.",
            reviewStar: 5,
        },
        {
            id: 5,
            imageUrl: "https://framerusercontent.com/images/ISS0EEHdkUjhAYoYmhKS3GAD0yE.webp",
            name: "James Anderson",
            desc: "My experience was remarkable. They delivered exactly what they promised with care and dedication.",
            reviewStar: 5,
        },
        {
            id: 6,
            imageUrl: "https://framerusercontent.com/images/2aBRvSse0zJnzpuCOdsM4CUcy0.webp",
            name: "Daniel Thompson",
            desc: "Their team was exceptional. They listened to my concerns and made sure all my needs were addressed.",
            reviewStar: 5,
        }
    ]

    return (
        <div className="pt-32 container mx-auto max-w-[1200px] pb-10 px-4">
            <div className="flex flex-col justify-center items-center mb-5">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">Services</p>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold text-center max-w-[550px] py-5">Personalized solutions for better oral health</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                {
                    serviceData.map(service => <ServiceCard key={service.id} serviceCard={service} />)
                }
            </div>
            <div className="flex flex-col justify-center items-center my-5 mt-12">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">Testimonials</p>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold text-center max-w-[550px] py-5">What our satisfied and happy clients have to say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
                {
                    testimonialData.map(testimonial => <TestimonialCard key={testimonial.id} testimonialCard={testimonial} />)
                }
            </div>
        </div>
    );
};

export default page;