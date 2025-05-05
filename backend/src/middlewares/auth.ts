import type {NextFunction, Request, Response} from "express";
import config from "../config";
import {SessionData} from "express-session";
import type {CustomSession, CustomRequest} from "../types";

const jsonwebtoken = require('jsonwebtoken')

export function authMiddleware(req: CustomRequest, res: Response, next: NextFunction) {
    const token = (req.session as CustomSession).authorization?.token

    if (!token) {
        res.status(401).json({message: 'Unauthorized user'})
        return
    }

    console.log(token)

    jsonwebtoken.verify(token, config.jwtSecret, (err: unknown, user: {username: string}) => {
        if (err)
            res.status(403).json({message: 'Error accessing user'})

        console.log(user)

        req.user = user
        next()
    })
}
