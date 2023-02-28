const cron = require('node-cron');
const CronJob = require('cron').CronJob;

const logger = require("./src/logger")

const ping_cron = require('./src/schedules/ping')
const pong_cron = require('./src/schedules/pong')
const http_cron = require('./src/schedules/http-call');
const shell_cron = require('./src/schedules/shell');

log = logger.getLogger()
log.info("Starting Crons")

// Estimate Age API
new CronJob(
    "0 * * * * *", 
    http_cron, 
    null, true, 
    "America/Sao_Paulo"
)

// Ping Example
new CronJob(
    "* * * * * *", 
    ping_cron, 
    null, true, 
    "America/Sao_Paulo"
)

// Pong
new CronJob(
    "* * * * * *", 
    pong_cron, 
    null, true, 
    "America/Sao_Paulo"
)

// Shell Example
new CronJob(
    "* * * * * *", 
    shell_cron, 
    null, true, 
    "America/Sao_Paulo"
)

