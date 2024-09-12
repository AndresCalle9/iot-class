import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import "./ToDoStyles.css";

export const ToDo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [notes, setNotes] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setNotes(data);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <h1>ToDo page</h1>
      <div className="cards-container">
        {!notes
          ? "Cargando..."
          : notes.map((note, idx) => {
              return (
                <Card
                  key={note.id}
                  title={note.title}
                  completed={note.completed}
                  userId={note.userId}
                ></Card>
              );
            })}
      </div>
    </>
  );
};
