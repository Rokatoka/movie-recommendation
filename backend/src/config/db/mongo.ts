import mongoose from "mongoose";
import config from "../index.ts";

export function connectToMongoDB() {
    mongoose.connect(config.mongoURI, {dbName: 'movies'}).then(() => {
        console.log('connected to mongodb')
    })
}

