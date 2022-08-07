import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import blogRouter from './routers/blog.js'
import userRouter from './routers/user.js'
import topicRouter from './routers/topic.js'
import loginRouter from './routers/login.js';
import registerRouter from './routers/register.js';
import authenticateRouter from './routers/authenticate.js';

const app = express();
const port = 9999;

// mongoose.connect("mongodb+srv://xuanduongxd:xdadmin@cluster0.3lqdc.mongodb.net/DBAPI?retryWrites=true&w=majority", {
//   maxPoolSize:50,
//   wtimeoutMS:2500,
//   useNewUrlParser:true
//   })
//   .then(() => {
//     console.log('Database connected successfully!');
//   })
//   .catch((err) => {
//     console.log('Error connecting with error code:', err);
// });


mongoose.connect("mongodb+srv://duongnx:duongnx1234@xuanduong.zaz8r.mongodb.net/Viblo?retryWrites=true&w=majority",{
    maxPoolSize:50,
    wtimeoutMS:2500,
    useNewUrlParser:true
    })
    .then(() => {
      console.log('Database connected successfully!');
    })
    .catch((err) => {
      console.log('Error connecting with error code:', err.message);
  });

app.use(bodyParser.json());
app.use(cors("http://localhost:3000"));
app.use(morgan("common"));

app.use('/blogs', blogRouter);
app.use('/users', userRouter);
app.use('/user', authenticateRouter);
app.use('/topics', topicRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

// app.use(errorHandler);


app.listen(port,()=>{
    console.log(`Server run on http://localhost:${port}`);
})



