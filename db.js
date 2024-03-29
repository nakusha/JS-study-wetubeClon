/** Mongo DB Adaptor
 npm install mongoose 
 npm install dotenv
 */

 // connecting db 
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, 
    {
        useNewUrlParser:true,
        useFindAndModify:false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`Error on Db Connection:${error}`)

db.once("open", handleOpen);
db.on("error", handleError);