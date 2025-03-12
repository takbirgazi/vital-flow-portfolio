import BlogCard from "./BlogCard/BlogCard";


const Blog = () => {
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
    ]
    return (
        <div className="py-5">
            <div className="flex flex-col justify-center items-center">
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
        </div>
    );
};

export default Blog;