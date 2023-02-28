const axios = require("axios")
const logger = require("../logger")

module.exports = () => {
    url = "https://api.agify.io"

    log = logger.getLogger()
    log.info(`Request for API: ${url}`)

    axios.get(url, {
        params: {
            name: "matheus"
        },
        headers: {
            "content-type": "application/json"
        }
    })
        .then(success => {
            log.info("Request success")
            console.log(success.data)
        })
        .catch(err => {
            log.error(err)
        })
}