import config from "./config";
import express from './app'

express.listen(config.port, () => {
    console.log(`server started on port ${config.port}`)
})
