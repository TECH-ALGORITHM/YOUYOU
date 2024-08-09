import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    //mongodb gives object as reference and we can save it in a variable
    const connectionInstance = await mongoose.connect(
      //"mongodb+srv://ambuj321:ambuj321@cluster0.u0g8a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      "mongodb://localhost:27017/youyou"
    );
    console.log(`mongodb connected ${connectionInstance.connection.host}`); //shows which host to connected
  } catch (error) {
    console.error("ERROR: ", error);
    process.exit(1); //exit from the current ongoing process
  }
};
export default connectDB;
