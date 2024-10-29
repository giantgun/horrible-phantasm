import React from "react"
import Post from "./Post"
import {onSnapshot} from "firebase/firestore"
import { notesCollection } from "../firebase"

export default function Articles(props){
    const [notes, setNotes] = React.useState([])

    React.useEffect(() => {
      const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
          // Sync up our local notes array with the snapshot data
          const notesArr = snapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
          }))
          setNotes(notesArr)
        })
        return unsubscribe
    }, [])

    const postNotes = notes.map(note => <Post
        setPost={props.setPost}
        key={note.id}
        id={note.id}
        body={note.body}
        img={note.img}
    />)
  
    return (
        <div className={props.page === "articles"? "Articles": "articles"}>
                {postNotes}
            </div>
    )
}