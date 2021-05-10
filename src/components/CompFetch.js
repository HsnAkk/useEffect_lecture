import React, {useState, useEffect} from 'react'
import axios from 'axios';


function CompFetch() {

    const [postID, setPostID] = useState(1)
    const [post, setPost] = useState({})


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
        .then(res => setPost(res.data))

    }, [postID])

    return (
        <div>
            <input type="text" onChange={(e) => setPostID(e.target.value) } />
            <p>{post.id } : {post.body}</p>
            
        </div>
    )
}

export default CompFetch
