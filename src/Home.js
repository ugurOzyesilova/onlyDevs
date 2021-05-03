import React, {useState, useEffect} from 'react'
import Header from './Header'
import PostSender from './PostSender'
import Post from './Post'
import db from "./firebase"



function Home() {

    const [posts, setPosts] = useState([]);
    


    useEffect (() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (  
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data() }))) 
            
        ))
    }, [])


    return (
        <div className="home">
           <Header/> 
           <PostSender/>
        
           {posts.map((post) => (
               <Post
                   key = {post.id}
                   profilePic={post.data.profilePic}
                   timestamp={post.data.timestamp}
                   content={post.data.content}
                   username={post.data.username}
                   
               />
           ))}
 
        </div>
    )
}

export default Home
/*
 <Post
  profilePic= "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401"
  timestamp = "22.07.2073"
  content = "I blackmailed to send this post, i mean really... btw Facebook has way much better UI than this, i do not have time for this.. also please do not waste your time with React, Vue is best !!"
  username = "Mark Zuckerberg"

/>
*/