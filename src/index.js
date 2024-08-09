//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./env" });

connectDB()
  .then()
  .catch(() => {});

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("error: ", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log("CONNECTED TO PORT : ", `${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR: ", ERROR);
//     throw err;
//   }
// })();
