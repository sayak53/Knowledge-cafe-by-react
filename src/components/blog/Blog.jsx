import { CiBookmark } from "react-icons/ci";
const Blog = ({blog}) => {
    
    const{cover_title,author_img,cover_image,reading_time,author,posted_date,hashtags} = blog

    return (
        <div className="space-y-7">
          <img className="w-[800px] md:w-[90%]" src={author_img} alt="" />
          <div className="flex justify-between items-center">
            <div className="md:flex">
               <img className="w-[50px] h-[50px] rounded-full ml-6" src={cover_image} alt="" />
               <div className="ml-6">
                 <h3 className="text-1xl font-bold md:text-2xl">{author}</h3>
                 <p className="text-base text-gray-600">Posted on {posted_date}</p>
               </div>
            </div>
            <div className=" ml-6 md:mr-[100px]">
               <span>{reading_time} mins read</span>
               <button className="text-2xl"><CiBookmark></CiBookmark></button>
            </div>
          </div>
          <h2 className="text-4xl">{cover_title}</h2>
          {
             hashtags.map((hash,idx) => <span key={idx}><a className="text-violet-900" href="#"> {hash} </a></span>)
          }
        </div>
    );
};

export default Blog;