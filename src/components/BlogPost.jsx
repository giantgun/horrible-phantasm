import React from "react"
import ReactMarkdown from 'react-markdown'

export default function BlogPost(props){
    return (
        <article className="blog-article">
            <img className="post--image" src={`${props.blog.img}`}/>
            <ReactMarkdown>{props.blog.body}</ReactMarkdown>
        </article>
    )
}