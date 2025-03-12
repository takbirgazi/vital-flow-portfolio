import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";

interface BlogType {
    blogCard: {
        id: number,
        imageUrl: string,
        title: string,
        publishDate: string,
        readingTime: string
    }
}

const BlogCard: React.FC<BlogType> = ({ blogCard }) => {

    return (
        <div className="group flex flex-col justify-between">
            <div>
                <figure className="w-full h-80 overflow-hidden rounded-2xl">
                    <Image className="w-full h-full group-hover:scale-110 object-cover transition-all duration-700" height={750} width={950} src={blogCard.imageUrl} alt={blogCard.title} />
                </figure>
            </div>
            <h2 className="py-5 text-3xl font-semibold text-gray-800">{blogCard.title}</h2>
            <div className="border-t border-gray-200 py-5 flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-primaryBg" />
                    <p className="font-medium text-gray-500">{blogCard.publishDate}</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaRegClock className="text-primaryBg" />
                    <p className="font-medium text-gray-500">{blogCard.readingTime} Read</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;