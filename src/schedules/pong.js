'use strict'

const logger = require("../logger")


module.exports = () => {
    log = logger.getLogger()
    log.info(`pong`)

}