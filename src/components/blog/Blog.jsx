
const Blog = ({blog}) => {
    
    const{cover_title,author_img,cover_image,reading_time,author,posted_date,hashtags} = blog

    return (
        <div>
          <img className="w-[400px]" src={author_img} alt="" />
          <div className="flex justify-between items-center">
            <div className="flex">
               <img className="w-[50px] h-[50px] rounded-full" src={cover_image} alt="" />
               <div className="ml-6">
                 <h3 className="text-2xl font-bold">{author}</h3>
                 <p className="text-base text-gray-600">Posted on {posted_date}</p>
               </div>
            </div>
            <div>
               <span>{reading_time} mins read</span>
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