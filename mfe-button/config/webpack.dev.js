const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    output: {
        publicPath: "http://localhost:8091/",
    },
    devServer: {
        port: 8091,
        historyApiFallback: true
    },
};

module.exports = merge(commonConfig, devConfig);
