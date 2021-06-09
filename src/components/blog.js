import React, {useState, useEffect} from 'react'
import BlogContainer from './blogContainer'
//Blog Page

const Blog = ()=>{
    const rss2json = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40muscarello-thomas"
    const [myBlog, setMyBlog] = useState([]);

    useEffect(()=>{
        fetch(rss2json)
            .then(res=>res.json())
            .then(data =>{
                setMyBlog(data)
                console.log(data)
            })
    }, [rss2json]);

    return(
         <div id='blog'>
            This is the Blog page
            <BlogContainer/>
            <BlogContainer/>
            <BlogContainer/> 
            </div>
        )
    
}

export default Blog