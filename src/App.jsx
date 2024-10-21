import './App.css'
import Blogs from './components/blogs/Blogs'
import profile from './assets/images/profile.png'
function App() {

  return (
    <>
      <div className='flex w-11/12 mx-auto justify-between items-center p-3'>
        <h1 className='font-bold text-4xl'> Knowlege Cafe</h1>
        <img src={profile} alt="" />
      </div>
      <Blogs></Blogs>
    </>
  )
}

export default App
