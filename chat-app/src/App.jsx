import "./App.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
 
} from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
// import { io } from "socket.io-client";

// import { Cookies } from "react-cookie";
import Authchecker from "./Authchecker";

// const socket = io("http://localhost:4000");

// socket.on("connect", function()  {
//   console.log(socket.id)
//   // myUser=prompt("Enter Name")
//   // socket.emit("createuser",myUser);
// });




// const cookies = new Cookies();

// const cookie=cookies.get('accessToken')
// console.log(cookie);


const islogin=Authchecker();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<Hero/>}/> */}
      <Route
       
        index
        element={ islogin ? <Hero /> : <Navigate replace to={"/signup"} />}
      />
      <Route path="/signin" index element={<Signin />} />
      <Route path="/signup" index element={<Signup />} />
    </Route>
  )
);


function App() {
  
  // const [loggedIn, setloggedIn] = useState(false);

  //  useEffect(() => {
  //    setloggedIn(Authchecker());
   
  // }, [loggedIn]);
   


  return (
    <RouterProvider router={router} />
  );
}

export default App;
