import React from 'react'

const Header = () => {
  return (
    <div className='h-16 w-screen border-b-2 border-red-100 flex items-center justify-center'>
        <div className='container flex items-center justify-between'>
        <span className='text-xl cursor-default select-none'>Todo App</span>
        <span className='text-xl cursor-default select-none'>Near Protocol</span>
        </div>
    </div>
  )
}

export default Header