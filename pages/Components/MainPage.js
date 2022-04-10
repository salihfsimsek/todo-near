import React, { useState } from "react";
import Input from "../Tools/Input";
import SendButton from "../Tools/SendButton";
import TodoItem from "./TodoItem";

const MainPage = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState({})

  const saveTodo = () => {
    //request configuration will add

    setTodos([...todos, {task: todoInput}]);
    setTodoInput("");
  }

  return (
    <div className="h-full flex justify-center">
      <div className="container h-full flex justify-center items-center">
        <div className="h-full w-1/2 py-5">
          <div id="main-page-input-area" className="flex justify-center">
            <Input value={todoInput} onChange={setTodoInput} />
            <SendButton onClick={saveTodo}/>
          </div>
          <div>
            {todos.map(todo => (
              <TodoItem key={todo?.id} todo={todo} selectedTodo={selectedTodo}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
