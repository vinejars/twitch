import React from 'react'
import { PostType } from './callFunctions/posts'

interface GalleryProps{
    posts: PostType[],
    setPosts: (post: PostType) => void
}

const ImageGallery: React.FunctionComponent<GalleryProps> = props => {
    return(
 <div>
 {props.posts.map((post: PostType) =>(
   <div key={post.id}>
   <img src={post.imageUrl}/>
   <p>{post.text}</p>
   </div>
 ))}
 </div>
    )

}

export default ImageGallery