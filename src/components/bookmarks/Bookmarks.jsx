import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingtime}) => {
    return (
        <div className="w-1/3  md:bg-gray-300 md:p-5">
             <div>
             <h2 className="bg-yellow-400 md:text-2xl font-bold">Reading Time: {readingtime} mins</h2>
             </div>
            <h2 className="text-3xl mt-5 md:mt-0 md:text-center font-bold">Bookmarks Blogs :{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;