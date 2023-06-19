import React, { useEffect, useRef, useState } from "react";
import Chat_bar from "./chat_bar";
import Chat_input from "./Chat_input";
import MessegeDisplay from "./MessegeDisplay";
import Dialog from "./Dialog";
import { ChatState } from "../../Contex/chatProvider";

export default function Messege_section({socket}) {
  const [messages, setMessages] = useState([]);
  const lastMessageRef = useRef(null);

  const {selectChat}=ChatState();

  useEffect(() => {
    socket?.on('update', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  // useEffect(() => {
  //   // 👇️ scroll to bottom every time messages change
  //   lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);
  return (
    <div className="flex-col justify-center items-center h-[70%] p-2 md:p-0 w-full">
       <Chat_bar/>
       {messages.length !==0 && !selectChat?
       <MessegeDisplay messages={messages} lastMessageRef={lastMessageRef}/>
       :<Dialog/>
       }
       <Chat_input socket={socket}/>
    </div>
  );
}
