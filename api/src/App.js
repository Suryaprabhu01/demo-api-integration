import {useState,useEffect} from 'react'
import Header from './Header'


function App () {
 const[posts,setPosts] =  useState(null);
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(data => data.json())
  .then(data => {
   setPosts();

  })
  },[]);
  return (
    <div className='App'>
      <Header />
      <div className='container'> 
      {posts ? (
        <ul>
       {posts.map((post) => {
        return (
        <li>
          <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  
         </li>
         
         )
        })}
      </ul>
      ):  (
      <h3>Loading. . .</h3>
      )}
</div>
    </div>
  );
}

export default App;



