import React from 'react'

const TodoItem = ({todo, selectedTodo}) => {
  return (
    <div className='flex flex-row justify-between items-center border-2 border-white my-4 h-10 px-5 rounded-md'>
        <div className='w-10/12'>
            <span>{todo.task}</span>
        </div>
        <div className='w-2/12 flex justify-between items-center'>
            <span>Upt</span>
            <span>Del</span>
        </div>
    </div>
  )
}

export default TodoItem