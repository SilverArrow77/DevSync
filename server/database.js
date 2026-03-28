import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGOD_URI);
        console.log("Connected to MongoDb");
    }
    catch(error){
        console.log(error);
    }
};
await connectToMongoDB();
export default connectToMongoDB;