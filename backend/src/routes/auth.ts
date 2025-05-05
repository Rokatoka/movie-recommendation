import {Router} from "express";
import {registerUser, loginUser} from "../controllers/auth";

const authRouter = Router()

authRouter.post('/auth/login', loginUser)
authRouter.post('/auth/register', registerUser)

export default authRouter
