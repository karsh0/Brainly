
import express from "express";
import mongoose from "mongoose";
import {z} from "zod";
import bcrypt from "bcrypt" 
import jwt from "jsonwebtoken";
import { contentModel, userModel } from "./db";
import { JWT_PASSWORD } from "./config";
import { userMiddleware } from "./middleware";
import { contentSchema, userSchema } from "./zod";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

app.post("/api/v1/signup", async (req, res) => {
    // TODO: zod validation , hash the password

    try {
        const validatedData = userSchema.parse(req.body);
        const { username, password } = validatedData;
        const hashedPassword = await bcrypt.hash(password, 2);
        await userModel.create({
            username: username,
            password: hashedPassword
        }) 

        res.json({
            message: "User signed up"
        })
    } catch(e) {
        res.status(411).json({
            message: "User already exists"
        })
    }
    
})

app.post("/api/v1/signin", async (req, res) => {
    const validatedData = userSchema.parse(req.body);
    const { username, password } = validatedData;


    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
    const passwordMatch = await bcrypt.compare(password, existingUser.password)
        if(passwordMatch){
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD)

        res.json({
            token
        })
    }
    } else {
        res.status(403).json({
            message: "Incorrrect credentials"
        })
    }
})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const validatedData = contentSchema.parse(req.body);
    const { link, type } = validatedData;

    await contentModel.create({
        link,
        type,
        //@ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content added"
    })
    
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    try {
        // @ts-ignore
        const userId = req.userId;
        const content = await contentModel.find({ userId }).populate('userId', 'username');
        
        res.status(200).json({
            content
        });
    } catch (error: any) {
        res.status(500).json({
            message: 'Failed to fetch content',
        });
    }
});

app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await contentModel.deleteMany({
        contentId,
        // @ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share", (req, res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {

})

app.listen(3000);