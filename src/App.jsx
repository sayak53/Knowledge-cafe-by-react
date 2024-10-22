import './App.css'
import Blogs from './components/blogs/Blogs'
import profile from './assets/images/profile.png'
import Bookmarks from './components/bookmarks/Bookmarks'
function App() {

  return (
    <>
      <body className='w-11/12 mx-auto'>
      <div className='flex w-11/12 mx-auto justify-between items-center p-3 border-b-2'>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-4xl'> Knowlege Cafe</h1>
        <img className='mt-4' src={profile} alt = "" />
      </div>

      <div className='md:flex w-11/12 mx-auto'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
      </body>
    </>
  )
}

export default App
