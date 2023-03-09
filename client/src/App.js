import './App.css';
import Home from './pages/Home';
import { Link, Route, Routes } from "react-router-dom"
import CreatePost from './pages/CreatePost';


function App() {
  
  return (
    <div className="">
    <Link to='CreatePost'
    className='flex flex-col justify-center items-center
    text-3xl text-lime-600'> Post</Link>
    <Routes>
        <Route path="CreatePost" element={<CreatePost />} />
        <Route path="/" element={<Home />} /> 
    </Routes>   
    </div>
  );
}

export default App;
