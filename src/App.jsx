import React from 'react'
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import BlogPost from "./components/BlogPost"
import {onSnapshot} from "firebase/firestore"
import { notesCollection } from "./firebase"
import Articles from "./components/Articles"

function App() {
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

  const [page, setPage] = React.useState('main')

  function setHome(){
    setPage("main")
  }

  function setArticles(){
    setPage("articles")
  }

  const [currentNoteId, setCurrentNoteId] = React.useState("")
    
  const currentNote = notes.find(note => note.id === currentNoteId)

  function setPost(id){
    setPage("post")
    setCurrentNoteId(id)
  }

  function pageDecider(){
    if (page === "main"){
      return <Main page={page}  setPost={setPost}/>
    }else if (page === "articles"){
      return <Articles  page={page} setPost={setPost}/>
    }else if (page === "post" ){
      return <BlogPost blog={currentNote} />
    }
  }

  console.log(notes)
  return (
    <>
      <Nav 
        setHome={setHome}
        setArticles={setArticles}
      />
      {pageDecider()}
      <Footer />
      
    </>
  );
}

export default App;
