import React, { useEffect, useState,useRef } from "react";


export default function MessegeDisplay({ messages }) {

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
    
      <div id="messege_display" className=" bg-gray-800 h-full w-full py-1 px-1 ">
        <div className=" h-full overflow-y-auto " ref={messageEl}>
        {messages.map((message) =>
          message.name === localStorage.getItem("firstName") ? (
            <div className="flex justify-end items-start mb-2 " key={message.id}>
              <div className="flex-col  px-4 py-2 ml-10 text-gray-700 bg-gray-100 rounded-xl shadow">
                <span className="block justify-end text-end text-green-600">You</span>
                <p className="block break-all">{message.text}</p>
              </div>
            </div>
          ) : (
            <div
              className="flex justify-start items-start mb-2"
              key={message.id}
            >
              <div className="flex-col  px-4 py-2 mr-10 text-gray-700 bg-teal-300 rounded-xl shadow">
                <span className="block justify-start text-start text-violet-600">
                  {message.name}
                </span>
                <span className="block break-all">{message.text}</span>
              </div>
            </div>
          )
          )}
        </div>
      </div>
    </>
  );
}
