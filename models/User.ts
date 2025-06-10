import mongoose from "mongoose";


const UserShema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: String,
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", UserShema);