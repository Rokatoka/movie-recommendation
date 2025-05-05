import * as dotenv from 'dotenv'

dotenv.config()

interface Config {
    port: number
    nodeEnv: string
    mongoURI: string
    jwtSecret: string
    sessionSecret: string
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    mongoURI: process.env.MONGO_URI || '',
    jwtSecret: process.env.JWT_SECRET || 'my_secret_key',
    sessionSecret: process.env.SESSION_SECRET || 'my_secret_session',
}

export default config
