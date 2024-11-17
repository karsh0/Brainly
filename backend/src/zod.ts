import { z } from "zod";

export const userSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6, "Password must contain minimun 6 character")
})

export const contentSchema = z.object({
    link: z.string(),
    type: z.string()
})