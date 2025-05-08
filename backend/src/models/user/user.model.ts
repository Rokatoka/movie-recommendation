import mongoose from "mongoose";
import type {User} from "./user.type.ts";

const Schema = mongoose.Schema

const UserSchema = new Schema<User>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true,
    }
})

const UserModel = mongoose.model('users', UserSchema)

export default UserModel
