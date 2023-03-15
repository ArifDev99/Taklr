import React from 'react'

export default function Sidebar() {
  return (
    <div className='flex  justify-center items-center'>
      <ul className='w-full'>
        <li className=' text-xl font-medium'><button type="button" className=" inline-flex justify-center items-center w-full px-4 py-2 border-b border-gray-200 rounded-lg hover:bg-emerald-600 p-2  focus:bg-emerald-600 ">Live Chat</button></li>
        <li className=' text-xl font-medium'><button type="button" className=" inline-flex justify-center items-center w-full px-4 py-2 border-b border-gray-200 rounded-lg hover:bg-emerald-600 p-2  focus:bg-emerald-600 ">Archived</button></li>
        <li className=' text-xl font-medium'><button type="button" className=" inline-flex justify-center items-center w-full px-4 py-2 border-b border-gray-200 rounded-lg hover:bg-emerald-600 p-2  focus:bg-emerald-600 ">Blocked</button></li>
        <li className=' text-xl font-medium'><button type="button" className=" inline-flex justify-center items-center w-full px-4 py-2 border-b border-gray-200 rounded-lg hover:bg-emerald-600 p-2  focus:bg-emerald-600 ">Global Chat</button></li>
      </ul>
    </div>
  )
}
