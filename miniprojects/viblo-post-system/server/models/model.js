import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    topic:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
    },
    creatAt:{
        type: Date
    },
    updatedAt:{
        type: Date
    },
});

const userSchema = new mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type:String
    },
    email:{
        type: String
    },
    avatar:{
        type: String
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    isAdmin:{
        type: Boolean
    },
    creatAt:{
        type: Date
    },
    updatedAt:{
        type: Date
    }
});

const topicSchema = new mongoose.Schema({
    topicName:{
        type: String,
        required: true,
    }
});

// blogSchema.index({title:"text"});
// userSchema.index({username:"text"});

let Blog = mongoose.model('Blog', blogSchema);
let User = mongoose.model('User',userSchema);
let Topic = mongoose.model('Topic',topicSchema);

// Blog.createIndexes({title:"text"});
// User.createIndexes({username:"text"});

export default {Blog, User, Topic};