import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);
    useEffect(() =>{
      axios.get("http://localhost:3001/posts").then((response )=>{
      setListOfPosts(response.data);
      })
      },[])
  return (
    <div className='  mx-auto' > 
    <div className='flex-col md:flex justify-between items-center  ' >
    {listOfPosts.map((post,key) =>{
      return<div
       className='text-center justify-between flex-initial  p-10 
       cursor-pointer shadow-xl hover:shadow-orange-300 ' >
      <div className='text-center justify-center text-2xl flex rounded-lg  bg-yellow-200' >{post.title}</div>
      <div  className='text-lg bg-white p-4 '>{post.postText}</div>
      <div className='text-sm bg-lime-200 rounded-md' >{post.username}</div>
      </div>
    })}
    </div>
    
    </div>
  )
}

export default Home