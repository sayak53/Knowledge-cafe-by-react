
const Blog = ({blog}) => {
    
    const{cover_title,author_img} = blog

    return (
        <div>
            <img className="w-[400px]" src={author_img} alt="" />
          <h2 className="text-4xl">{cover_title}</h2>
        </div>
    );
};

export default Blog;