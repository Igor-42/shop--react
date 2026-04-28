import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const clickHandler = () => {
    if (text.trim() === "") return; // захист від пустого вводу
    setTodo([...todo, { id: Math.random(), text }]);
    setText(""); // очищаємо поле після додавання
  };

  return (
    <div className="App">
      <Header />
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введи завдання"
        />
      </div>
      <button onClick={clickHandler}>add</button>
      {todo.map((i) => (
        <div key={i.id}>{i.text}</div>
      ))}
    </div>
  );
}

export default App;
