import React, { useEffect, useState,useRef } from "react";


export default function MessegeDisplay({ messages,user }) {



  const messageEl = useRef(null);


  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  return (

    <>
    
      <div id="messege_display" className=" bg-gray-800 h-full w-full py-1 px-1 overflow-y-hidden ">
         <div className=" h-full overflow-y-auto " ref={messageEl}>
          {messages.map((m) =>
            m.sender._id === user._id ? (
            <div className="flex justify-end items-start mb-2 mr-2 " key={m._id}>
              <div className="flex-col  px-4 py-2 ml-[25%] text-gray-700 bg-gray-100 rounded-xl shadow">
                <span className="block justify-end text-sm text-end text-green-600">You</span>
                <p className="block break-all text-sm">{m.content}</p>
              </div>
            </div>
          ) : (
            <div className="flex" key={m._id}>
              <div className="flex py-2.5 items-end">

                <img
                  className=" w-8 h-8 rounded-full object-cover mx-2"
                  src={m.sender.profile_img}
                  alt="profile image"
                  srcSet=""
                />
              </div>
              <div
                className="flex justify-start items-start mb-2"
                
              >
                <div className="flex-col  px-4 py-2 mr-[25%] text-gray-700 bg-teal-300 rounded-xl shadow">
                  <span className="block justify-start text-start text-sm text-violet-600">
                    {m.sender.firstname}
                  </span>
                  <span className="block break-all text-sm">{m.content}</span>
                </div>
              </div>
            </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
