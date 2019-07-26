const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");


const connectDB = async() => {
   try{
     await 
     mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/reactreadinglist");
         
    console.log ("MongoDB Connected...");
     
     } catch(err) {
         console.error(err.message);
        process.exit(1);

    };
 }

      module.exports = connectDB;