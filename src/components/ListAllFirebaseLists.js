"use client";
import { useState, useEffect } from "react";

export default function ListForm() {
  const [contentLists, setContentLists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllRegisters();
  }, []);

  function getAllRegisters() {
    fetch("/api/firebase/lists")
      .then((response) => response.json())
      .then((data) => {
        setContentLists(data);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setContentLists([]);
      });
  }

  return (
    <>
      <h3>Previous lists saved</h3>
      {error ? (
        <p>There was an error: {error}</p>
      ) : (
        <ul>
          {Object.values(contentLists).map((list) => (
            <li key={list.id}>{list.text}</li>
          ))}
        </ul>
      )}
    </>
  );
}
