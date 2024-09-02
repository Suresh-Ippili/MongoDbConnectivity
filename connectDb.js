import mongoose from "mongoose";

const connectDb =  async (DatabaseUrl)=>
{
    try{
        await mongoose.connect(DatabaseUrl)
        console.log("connected")
    }
    catch(error)
    {
        console.log("some error came "+ error)
    }

}

export default connectDb;