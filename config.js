(function(){
    'use strict';

    const config = require('./config.json');
    const _ = require('lodash');

    const defaultConfig = config.default;
    const stage = process.env.stage || 'dev';
    const stageConfig = config[stage];
    const mergedConfig = _.merge(defaultConfig, stageConfig);

    console.log(stageConfig);
    //add to global config
    global.appConfig = mergedConfig;


}());
