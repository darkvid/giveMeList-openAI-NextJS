"use client";
import { useState } from "react";
import { db } from "@/lib/firebase";
import { ref, set, onValue } from "firebase/database";

export default function ListForm() {
  const [content, setContent] = useState('');
  const [ topic, setTopic ] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleContentChange = (event) => {
    setTopic(event.target.value);
  }

  function getAllRegisters() {
    const listRef = ref(db);
    onValue(listRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }

  function getFirebaseRealTimeRegister() {
    const listRef = ref(db, "45");
    onValue(listRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }

  //a function to save a list in real time database of firebase
  function saveList() {
    set(ref(db, "33"), {
      text: 'Vengo de la app',
    });
  }

  function fetchDummyJson(){
    fetch('/api/dummyjson')
        .then(response => {
          console.log(response.body);
          if (response.ok){
            return response.text();
          }
          throw new Error(response.statusText);
        })
        .then((data) => {
          setContent(JSON.parse(data).content)
        })
        .catch (error => {
          setContent("");
          alert(error);
        }).finally(() => {
          setIsLoading(false);
        });
  }

  function fetchOpenAi(){
    fetch ("/api/openai/completions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic
      }) 
    })
    .then ((response) => response.json())
    .then ((json) => setContent(json.text))
    .catch (error => {
      setContent("");
      alert(error);
    })
    .finally (() => {
      setIsLoading(false);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    fetchDummyJson();
    //fetchOpenAi()
    getAllRegisters();
    //saveList();
    //getFirebaseRealTimeRegister();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="topic">Topic</label>
      <input type="text" id="topic" defaultValue="" onChange={handleContentChange} />
      {content === '' && (
        <input type="submit" value={isLoading ? "Waiting..." : "Build list"} disabled={isLoading}/>
      )}
      {content !== '' && (
        <>
          <input type="submit" value={isLoading ? "Waiting..." : "Repeat"} disabled={isLoading} onClick={handleSubmit} />
          <input type="submit" value="Clear all" onClick={() => {setContent(""); setTopic("")}}/>
          <textarea rows="20" value={content}></textarea>
        </>
      )}
    </form>
  );
}
