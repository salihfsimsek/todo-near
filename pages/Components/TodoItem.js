import React from "react";

import { callFunction } from "../../near/config";

const TodoItem = ({ todo, selectedTodo }) => {
  const handleUpdate = (todo) => {
    callFunction("update", {
      id: todo.id,
      partialTodo: {
        task: todo.task,
        done: !todo.done,
      },
    })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handleDelete = (todo) => {
    callFunction("del", { id: todo.id })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={`flex flex-row justify-between items-center border-2 border-white pl-4 my-4 h-10 rounded-md
      ${todo.done ? "bg-red-900" : ""}`}
    >
      <div className="w-8/12">
        <span>{todo.task}</span>
      </div>
      <div className="w-4/12 flex justify-end items-center ">
        <button
          onClick={() => handleUpdate(todo)}
          className="px-4 py-1 border-2 border-none rounded-md hover:bg-green-900 hover:text-white mr-4"
        >
          Done
        </button>
        <button
          onClick={() => handleDelete(todo)}
          className="px-4 py-1 border-2 border-none rounded-md hover:bg-red-900 hover:text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
