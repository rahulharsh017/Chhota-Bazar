import mongoose from "mongoose";

export default async  () =>{
    try {
        const DB_OPTIONS = {
            dbName: process.env.DB_NAME,
        }

        await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
        console.log("Connected to database");
        
    } catch (error) {
        console.error("Error connecting to database", error);
        
    }
}