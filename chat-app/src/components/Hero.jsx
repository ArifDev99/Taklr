import React, { useEffect } from 'react'
import MessegeDisplay from './MessegeSection/MessegeDisplay'
import MessegeList from './MessegeList'
import Profile from './Profile'
import Sidebar from './Sidebar'
import { io } from "socket.io-client";
import Messege_section from './MessegeSection/Messege_section'




export default function Hero() {
  const socket = io("http://localhost:4000");
  
  useEffect(() => {
    socket.on("connect", function()  {
      console.log(socket.id)
      // myUser=prompt("Enter Name")
      // socket.emit("createuser",myUser);
    });
  }, [])
  
  return (
    <>
    <div >
        <div className='flex justify-center h-[calc(100vh-4rem)] overflow-hidden sm:h-full' >
            <div className='sidebar  w-1/5 md:hidden '>
              <Sidebar/>
            </div>
            <div className='messges-section w-4/5 bg-neutral-700  overflow-hidden sm:w-full sm:flex-col md:w-full' >
                {/* Messege Section */}
              <div className="w-full h-screen flex py-2">
                <div className='w-1/5 h-screen md:w-full sm:hidden'><MessegeList/></div>
                <div className='w-3/5 h-screen md:w-full sm:px-4'><Messege_section socket={socket} /></div>
                <div className='w-1/5 h-screen md:w-full md:hidden'><Profile/></div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
