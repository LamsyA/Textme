import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() =>{
    axios.get("http://localhost:3001/posts").then((response )=>{
    setListOfPosts(response.data);
    })
    },[])
  return (
    <div className="App">
    {listOfPosts.map((post,key) =>{
      return<div >
      <div >{post.title}</div>
      <div >{post.postText}</div>
      <div >{post.username}</div>
      </div>
    })}
    </div>
  );
}

export default App;
