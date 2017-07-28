import fs from 'fs';
import winston from 'winston';
import 'winston-daily-rotate-file';

var tsFormat = new Date().toISOString();
var logDir = process.env.LOGGING_DIR || 'logs';

// Create logs directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logger = new (winston.Logger)({
    transports: [
        new winston.transports.Console({
            timestamp: tsFormat,
            colorize: true,
            level: 'info'
        }),
        new winston.transports.DailyRotateFile({
            timestamp: tsFormat,
            datePattern: 'yyyy-MM-dd',
            prepend: true,
            filename: logDir + '/-debug.log',
            level: 'info'
        })
    ]
});

export default logger;