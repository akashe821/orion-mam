/**
 * Created by akashs on 5/31/2016.
 */
var winston = require('winston');


winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {timestamp: true, level: 'warn', colorize: true});
winston.add(winston.transports.File, {filename: 'winston-logs.log', maxsize: 1024 * 1024 * 10 });
winston.level = 'debug';

module.exports = winston;