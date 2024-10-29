import React from "react"

export default function Nav(props){
    return (
        <nav>
            <header>
                <h1>AE-FUNAI Updates</h1>
            </header>
            <div>
                <ul className="nav-link">
                    <li onClick={props.setHome}>Home</li>
                    <li onClick={props.setArticles}>Articles</li>
                </ul>
            </div>
        </nav>
    )
}