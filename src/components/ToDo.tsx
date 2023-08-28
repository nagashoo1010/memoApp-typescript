import React, { useState } from "react";

export const ToDo = () => {
  const [todo, setTodo] = useState("");
  return (
    <>
      <h2>Todo</h2>
      <p>{todo}</p>
      <input type="text" onChange={(e) => setTodo(e.target.value)} />
    </>
  );
};
