import React, { useEffect, useRef, useState } from "react";
import Chatbar from "./Chatbar";
import Chat_input from "./Chat_input";
import MessegeDisplay from "./MessegeDisplay";
import Dialog from "./Dialog";
import { ChatState } from "../../Contex/chatProvider";

export default function Messege_section({ socket, fetchAgain, setFetchAgain}) {
  const [allMessages, setallMessages] = useState([]);
  
  const lastMessageRef = useRef(null);
  const {user, selectedChat } = ChatState();
  // console.log(selectedChat);

  

  // useEffect(() => {
  //   socket?.on("update", (data) => setMessages([...messages, data]));
  // }, [socket, messages]);

  // useEffect(() => {
  //   // 👇️ scroll to bottom every time messages change
  //   lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);

  const fetchAllMessages=async ()=>{
    // console.log("FetchAll Message Called");
    // console.log(selectedChat);
    if (!user || !user.accessToken) {
      // Handle the case when user.accessToken is null or undefined
      console.log('Access token not available');
      return;
    }
    try {
      // console.log("From Try");
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      };

      let data=await fetch(`http://localhost:4000/api/v1/message/${selectedChat._id}`,config).then((res)=>res.json());
      console.log(data);
      setallMessages(data);
      setFetchAgain(!fetchAgain);
      
    } catch (error) {
      alert("Cant fetch the Messages");
    }
  }

  useEffect(()=>{
    fetchAllMessages();

  },[selectedChat,user])
  return (
    <div className="flex flex-col justify-center h-full  px-1 md:p-0 ">
      <Chatbar fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
      {selectedChat ? (
        <MessegeDisplay messages={allMessages} user={user} lastMessageRef={lastMessageRef}  />
      ) : (
        <Dialog />
      )}
      <Chat_input socket={socket} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </div>
  );
}
