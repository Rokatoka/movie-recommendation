import {Router} from "express";
import {registerUser, loginUser} from "../controllers/auth.ts";

const authRouter = Router()

authRouter.post('/auth/login', loginUser)
authRouter.post('/auth/register', registerUser)

export default authRouter
