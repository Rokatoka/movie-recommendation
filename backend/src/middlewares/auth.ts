import type {NextFunction, Request, Response} from "express";
import config from "../config/index.ts";
import type {CustomSession, CustomRequest} from "../types/index.ts";
import * as jsonwebtoken from 'jsonwebtoken'

export function authMiddleware(req: CustomRequest, res: Response, next: NextFunction) {
    const token = (req.session as CustomSession).authorization?.token

    if (!token) {
        res.status(401).json({message: 'Unauthorized user'})
        return
    }

    console.log(token)

    jsonwebtoken.verify(token, config.jwtSecret, (err, user) => {
        if (err)
            res.status(403).json({message: 'Error accessing user'})

        console.log(user)

        req.user = user as {username: string}
        next()
    })
}
