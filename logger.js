const winston = require('winston');
const moment = require('moment');
  //config = require('../../config/config').config,
  //getNamespace = require('cls-hooked').getNamespace;

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console({
          level: appConfig.loglevel,
          formatter: (options) => {
          //const ns = getNamespace('application');
  
          //const requestId = ns ? ns.get('requestId') : '';
          const logLevel = options.level.toUpperCase();
          const time = moment();
          const message = options.message || '';
  
          return JSON.stringify({
            timestamp: time.toISOString(),
            logLevel,
            message,
            //requestId,
            service: 'Microservice B'
          });
        }
      })
    ]
  });

module.exports = logger;