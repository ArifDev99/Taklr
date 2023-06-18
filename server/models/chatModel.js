// ChatName
// isgroupchat
// user
// latestMessage
// GropAdmin

const mongoose=require('mongoose');


const chatModel=mongoose.Schema({
    chatName:{type:String,trim:true},
    isGroupChat:{type:Boolean,default:false},
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ],
    latestMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },
    gropAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

},
{timestamps:true,}
);

const chat=mongoose.model("Chat",chatModel);
module.exports=chat;