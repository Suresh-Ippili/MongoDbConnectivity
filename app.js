import express from "express";
// import mongoose, { connect } from "mongoose";
import connectDb from "./connectDb.js";
import web from './routes/web.js';
import bodyParser from "body-parser";
var app = express();


const port = 3000;
// app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use("/", web);

const DatabaseUrl="mongodb://127.0.0.1:27017/studenDb";

// mongoose.connect(DatabaseUrl)
// .then(console.log("connected"))
// .catch(error=> console.log("some error came " + error));

connectDb(DatabaseUrl);
app.listen(port, (req,res)=>
{
    console.log("server started at port no " + port);
})