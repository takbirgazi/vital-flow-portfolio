import BlogCard from "@/components/HomeComp/Blog/BlogCard/BlogCard";
import TestimonialCard from "@/components/HomeComp/Testimonials/TestimonialCard/TestimonialCard";

const page = () => {
    const blogData = [
        {
            id: 1,
            imageUrl: "https://framerusercontent.com/images/u2V0kvYmCKhMOsHxZZQ9QDUTg.jpg?scale-down-to=512",
            title: "The Benefits of Regular Exercise: A Pathway to Health",
            publishDate: "Sep 4, 2024",
            readingTime: "5 Min"
        },
        {
            id: 2,
            imageUrl: "https://framerusercontent.com/images/cChHTJcFYUgDxRRXXGbCfXOE8Y.jpg?scale-down-to=512",
            title: "Managing Stress for Better Health: Strategies for a Calmer Life",
            publishDate: "Sep 5, 2024",
            readingTime: "5 Min"
        },
        {
            id: 3,
            imageUrl: "https://framerusercontent.com/images/u2V0kvYmCKhMOsHxZZQ9QDUTg.jpg?scale-down-to=512",
            title: "The Impact of Sleep on Your Health: Why Rest Matters",
            publishDate: "Sep 16, 2024",
            readingTime: "5 Min"
        },
        {
            id: 4,
            imageUrl: "https://framerusercontent.com/images/ahAD3KDJtlx7guKpOcV5H01t0.jpg?scale-down-to=512",
            title: "The Power of a Balanced Diet",
            publishDate: "Sep 17, 2024",
            readingTime: "5 Min"
        },
        {
            id: 5,
            imageUrl: "https://framerusercontent.com/images/xuXyfmPsIEYZQRvanFsWvDwsMGU.jpg?scale-down-to=512",
            title: "The Role of Mental Health in Overall Wellness",
            publishDate: "Sep 28, 2024",
            readingTime: "5 Min"
        },
        {
            id: 6,
            imageUrl: "https://framerusercontent.com/images/0SPDnukSSyv122G2KiPm0xUFIk.jpg?scale-down-to=512",
            title: "The Importance of Preventive Healthcare",
            publishDate: "Sep 26, 2024",
            readingTime: "5 Min"
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
        <div className="pt-32 container mx-auto pb-10 px-4">
            <div className="flex flex-col justify-center items-center mb-5">
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 bg-primaryBg rounded-full"></span>
                    <p className="font-semibold text-gray-800">Blog</p>
                </div>
                <h2 className="text-xl lg:text-4xl font-bold text-center max-w-[550px] py-5">Insights and tips for better healthcare decisions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
                {
                    blogData.map(blog => <BlogCard key={blog.id} blogCard={blog} />)
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