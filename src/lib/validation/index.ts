import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'Too short' }),
    username: z.string().min(2, {message: 'Too short' }),
    email: z.string().email(),
    password: z.string().min(8, {message: 'Too short, Must be loger than 8 charaters' })
  })

  // p errors just change the message to display if the requirement isnt met

  export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: 'Too short, Must be longer than 8 charaters' })
  })

  export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
  })