import React, { useEffect ,useState} from "react";



export default function MessegeList() {
  const [alluser,setAlluser]=useState(null)
  const user=async()=>{

    let req= await fetch('http://localhost:4000/api/v1/get-all-user').then((res)=>res.json())
    setAlluser(req)
  }
  useEffect( () => {
    user();
  }, [])

  
  return (
    <div className="flex justify-center items-center mx-1">
      <div className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {alluser? alluser.map((user)=>(<a
          href="#"
          aria-current="true"
          key={user.id}
          className="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600"
        >
          {user.firstname}
        </a>)):("")}
      </div>
    </div>
  );
}
