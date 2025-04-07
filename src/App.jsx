
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([]);

  const handleBookmark = (blog) =>{
    // console.log(blog)
    setBookmarked([...bookmarked, blog])
    
  }


  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex mt-10">
        <div className="left-container w-[70%] text-center">
      <Blogs handleBookmark={handleBookmark}></Blogs>

        </div>
        <div className="right-container w-[30%] text-center border-2">
          <h1>Reading time: 0</h1>
          <h1>Bookmark count: 0</h1>
          {
            bookmarked.map(marked=> <p>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
