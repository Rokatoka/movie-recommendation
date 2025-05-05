import type {Response, Request} from "express";
import * as bcrypt from 'bcrypt'
import UserModel from "../models/user/user.model";
import config from "../config";
import type {CustomSession} from "../types";

const jsonwebtoken = require('jsonwebtoken')
const SALT_ROUNDS = 10

export async function loginUser(req: Request, res: Response) {
    const {username, password} = req.body

    if (!username || !password) {
        res.status(400).json({message: 'Invalid login or password'})
        return
    }

    const loginUser = await UserModel.find({username})

    if (loginUser.length > 0) {
        bcrypt.compare(password, loginUser[0].password, (err, result) => {
            if (result) {
                const accessToken = jsonwebtoken.sign({username}, config.jwtSecret);

                (req.session as CustomSession).authorization = {
                    token: accessToken,
                    user: {
                        username
                    }
                }
                res.status(200).json({message: 'Successfully logged in'})
            } else {
                res.status(400).json({message: 'Incorrect password'})
                return
            }
        })
    } else {
        res.status(400).json({message: 'No user found'})
        return
    }

}

export function registerUser(req: Request, res: Response) {
    const {username, fullName, password} = req.body

    if (!username || !fullName || !password) {
        res.status(400).json({message: 'Missing required fields'})
        return
    }

    bcrypt.hash(password, SALT_ROUNDS).then(async (result) => {
        const user = new UserModel({
            username,
            fullName,
            password: result
        })
        await user.save()

        res.status(200).json({message: 'User successfully registered'})
    })
}
