import config from "./config/index.ts";
import express from './app.ts'

express.listen(config.port, () => {
    console.log(`server started on port ${config.port}`)
})
