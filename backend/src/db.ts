import mongoose, { Schema } from "mongoose"
import { any, string } from "zod"

mongoose.connect('mongodb+srv://admin:sdWrBsXuYHdxK3sb@cluster0.plktz.mongodb.net/Brainly')

const userSchema = new Schema({
    username: {type:String, unique:true},
    password: {type:String, required:true}
})

export const userModel = mongoose.model("User", userSchema)

const contentSchema = new Schema({
    link: String,
    type: String,
    title: String,
    content: String,
    tags: [{type: String, ref: "Tag"}],
    userId: {type: Schema.ObjectId, ref:"User", required: true}
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: Schema.ObjectId, ref:"User", required: true, unique:true}
})

export const LinkModel = mongoose.model("Links", LinkSchema)
export const contentModel = mongoose.model("Content", contentSchema)