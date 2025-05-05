import {SessionData} from "express-session";
import type {Request} from "express";

export interface CustomSession extends SessionData {
    authorization?: {
        token: string
        user: {
            username: string
        }
    }
}

export interface CustomRequest extends Request {
    user?: {
        username: string
    }
}
