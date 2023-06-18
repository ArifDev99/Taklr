import React from 'react'

function UserListItem( {search_User}) {
  return (
    <div className='w-full flex justify-center items-center px-3 py-2 mb-1 rounded-sm cursor-pointer border-b hover:bg-slate-400'>
        <div className=' mx-2' >
         <img className=' w-8 h-8 rounded-full object-cover' src={search_User?.profile_img} alt="profile image" srcset="" />
        </div>
        <div className='text-base text-white text-center'>{search_User.firstname}</div>
    </div>
  )
}

export default UserListItem