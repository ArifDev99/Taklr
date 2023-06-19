const express=require("express");
const dotenv=require("dotenv")

const app=express();
const userRoutes=require("./Routes/userRoutes")
const chatRoutes=require("./Routes/chatRoutes")
const http=require("http").Server(app);
const cors = require('cors');
const connectDB = require("./config/db2");


dotenv.config();
connectDB();



app.use(cors())

// Accept JSON
app.use(express.json());

// Acceept body
app.use(express.urlencoded({extended:true}))

// const server=http.createServer(app);
// const io=new Server(server);
 

const io= require('socket.io')(http, {
    cors: {
        origin: "http://127.0.0.1:5173"
    }
});

io.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("send_message",function(data){
      io.sockets.emit("update",data);
      console.log(data)
    })

    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });

    socket.off("setup", () => {
      console.log("USER DISCONNECTED");
      socket.leave(userData._id);
    });
});


app.use("/api/v1/user",userRoutes);

app.use("/api/v1/chat",chatRoutes);


// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello world',
//     });
//   });
  



http.listen(4000,function(){
    console.log("server running at Port 4000");
})