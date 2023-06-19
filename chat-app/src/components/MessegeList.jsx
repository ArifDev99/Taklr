import React, { useEffect, useState } from "react";
import { ChatState } from "../Contex/chatProvider";
import { getSenderImg, getSenderName } from "./utils/chatLogis";
export default function MessegeList() {
  const [loggedUser, setLoggedUser] = useState();
  const [allChats, setAllChats] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { user, chats, setChats,selectedChat,setSelectedChat } = ChatState();

  const fecthChats = async () => {
    let data = await fetch("http://localhost:4000/api/v1/chat", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    }).then((res) => res.json());
    setAllChats(data);
    setChats(data);
    console.log(data);
  };
  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fecthChats();
  }, [user]);
  console.log(loggedUser);
  return (
    <div className="flex flex-col justify-center items-center mx-1">
      <div className="flex justify-between items-center pl-2 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-t-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        My Chats
        <button
          type="button"
          className="py-2 px-4 flex justify-center items-center bg-gray-800 hover:bg-neutral-500 focus:bg-neutral-900  text-white  transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none  rounded-lg "
        >
          Create Gropu Chat
          {isLoading && (
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="ml-2 animate-spin"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
            </svg>
          )}
          {!isLoading && (
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-col p-2 w-full h-full overflow-y-hidden ">
        {chats ? (
          <div className="overflow-y-scroll flex flex-col gap-1 cursor-pointer">
            {chats.map((chat) => (
              <div
                className={`flex items-center gap-3 py-2 px-3 text-sm rounded-lg border border-slate-900 bg-gray-600 hover:bg-gray-700 focus:bg-slate-800 ${selectedChat === chat ? "bg-slate-800" : "bg-gray-600" }`}
                key={chat._id}
                onClick={() => setSelectedChat(chat)}
              >
                <img
                  className=" w-8 h-8 rounded-full object-cover"
                  src={
                    chat.isGroupChat
                      ? " "
                      : getSenderImg(loggedUser, chat.users)
                  }
                  alt="profile image"
                  srcset=""
                />
                {chat.isGroupChat
                  ? chat.chatName
                  : getSenderName(loggedUser, chat.users)}
                {/* <span>
                    {chat.latestMessage && (
                      <p>
                        {chat.latestMessage.content.length>}
                      </p>
                    )}
                  </span> */}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
