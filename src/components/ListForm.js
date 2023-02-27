"use client";
import { useState } from "react";

export default function ListForm() {
  const [content, setContent] = useState('');
  const [ topic, setTopic ] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleContentChange = (event) => {
    setTopic(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    /*fetch('/api/dummyjson')
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
        })*/

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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="topic">Tema de la lista</label>
      <input type="text" id="topic" defaultValue="" onChange={handleContentChange} />
      {content === '' && (
        <input type="submit" value={isLoading ? "Esperando..." : "Crear lista"} disabled={isLoading}/>
      )}
      {content !== '' && (
        <>
          <input type="submit" value="Repetir" onClick={handleSubmit} />
          <input type="submit" value="Empezar" onClick={() => {setContent(""); setTopic('')}}/>
          <textarea rows="20" defaultValue={content}></textarea>
        </>
      )}
    </form>
  );
}
