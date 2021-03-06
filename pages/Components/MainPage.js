import React, { useState, useEffect } from "react";

import Input from "../Tools/Input";
import SendButton from "../Tools/SendButton";
import TodoItem from "./TodoItem";

import { viewFunction, callFunction } from "../../near/config";

const MainPage = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const saveTodo = () => {
    setLoading(true);
    //request configuration will add
    callFunction("create", { task: todoInput })
      .then(() => {
        viewFunction("get", { offset: 0 }).then((result) => {
          setTodos(result);
        });
        setTodoInput("");
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    // setTodos([...todos, {  }]);
  };

  useEffect(() => {
    viewFunction("get", { offset: 0 })
      .then((result) => setTodos([...result]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-full flex justify-center">
      <div className="container h-full flex justify-center items-center">
        <div className="h-full w-1/2 py-5">
          <div id="main-page-input-area" className="flex justify-center">
            <Input value={todoInput} onChange={setTodoInput} />
            <SendButton loading={loading} onClick={saveTodo} />
          </div>
          <div>
            {todos.map((todo) => (
              <TodoItem
                key={todo?.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
