import React from "react"
import ReactMarkdown from 'react-markdown'

export default function Post(props){
    return (
        <article className="blog-post" onClick={() => props.setPost(props.id)}>
            <img className="post--image" src={`${props.img}`}/>
            <div className="post-text">
                <ReactMarkdown>{props.body}</ReactMarkdown>
            </div>
        </article>
    )
}