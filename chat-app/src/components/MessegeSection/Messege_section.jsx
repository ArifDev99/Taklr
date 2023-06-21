import React, { useEffect, useRef, useState } from "react";
import Chatbar from "./Chatbar";
import Chat_input from "./Chat_input";
import MessegeDisplay from "./MessegeDisplay";
import Dialog from "./Dialog";
import { ChatState } from "../../Contex/chatProvider";

export default function Messege_section({ socket }) {
  const [messages, setMessages] = useState([]);
  
  const lastMessageRef = useRef(null);
  const { selectedChat } = ChatState();
  // console.log(selectedChat);

  

  useEffect(() => {
    socket?.on("update", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  // useEffect(() => {
  //   // 👇️ scroll to bottom every time messages change
  //   lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);
  return (
    <div className="flex flex-col justify-center h-full  px-1 md:p-0 ">
      <Chatbar />
      {selectedChat ? (
        <MessegeDisplay messages={messages} lastMessageRef={lastMessageRef}  />
      ) : (
        <Dialog />
      )}
      <Chat_input socket={socket} />
    </div>
  );
}
