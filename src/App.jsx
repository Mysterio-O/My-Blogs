
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookmarked] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog) => {
    // console.log(blog)
    setBookmarked([...bookmarked, blog])

  }

  const handleReadingCount = (blog) => {
    const reading_time = blog.reading_time;
    const newReadingTime = readingTime + reading_time;
    setReadingTime(newReadingTime);
    const id = blog.id;
    handleMarkAsRead(id);

  }

  const handleMarkAsRead = (id) => {
    const newBookmark = bookmarked.filter((mark) => mark.id !== id);
    setBookmarked(newBookmark);
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex mt-10">
        <div className="left-container w-[70%] text-center">
          <Blogs handleBookmark={handleBookmark} handleReadingCount={handleReadingCount}></Blogs>

        </div>
        <div className="right-container w-[30%] text-center border-2">
          <h1>Reading time: {readingTime}</h1>
          <h1>Bookmark count: {bookmarked.length}</h1>
          {
            bookmarked.map(marked => <p key={marked.id} className='bg-sky-300 p-2 m-2 rounded'>{marked.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
