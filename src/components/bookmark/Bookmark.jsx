
const Bookmark = ({bookmark}) => {
    const{cover_title} = bookmark
    return (
        <div className="bg-slate-200 p-4 my-4 rounded-xl w-[350px] md:w-full">
          <h3 className="text-2xl">{cover_title}</h3>
        </div>
    );
};

export default Bookmark;