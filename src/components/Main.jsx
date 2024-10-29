import React from "react"
import Articles from "./Articles"


export default function Main(props){
    return (
        <main>
            <div className="cover-section">
                <div className="cover-item">
                    <h1 className="cover-text">See What's <br/>up with<br/>FUNAI Updates</h1>
                </div>
            </div>
            <Articles page={props.page} setPost={props.setPost}/>
        </main>
    )
}