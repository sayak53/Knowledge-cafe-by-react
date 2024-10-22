import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3  md:bg-gray-300">
            <h2 className="text-3xl mt-5 md:mt-0 md:text-center">Bookmarks Blogs :{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;