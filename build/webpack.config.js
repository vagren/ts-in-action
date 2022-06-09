const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

// console.log("🚀 ~ file: webpack.config.js ~ line 7 ~ process.env.NODE_ENV", process.env.NODE_ENV, process.env)

module.exports = (env, argv) => {
    // console.log("🚀 ~ file: webpack.config.js ~ line 13 ~ env, argv", env, argv)
    let config = argv.mode === 'development' ? devConfig : prodConfig;
    let packConfig = merge(baseConfig, config);
    console.log("🚀 ~ file: webpack.config.js ~ line 12 ~ packConfig", packConfig)
    return packConfig
};