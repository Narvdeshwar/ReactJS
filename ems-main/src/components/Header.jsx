import React from 'react'

function Header({data}) {
  return (
    <div className='flex items-end justify-between p-5 shadow-md w-[100%]'>
      <h1 className='text-2xl font-semibold'>Hello <span className='font-bold'>{data.employeeName}👋 !</span></h1>
      <button className='bg-red-500 px-6 py-2 rounded-xl font-semibold'>logout</button>
    </div>
  )
}

export default Header
