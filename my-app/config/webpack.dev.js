const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
    mode: "development",
    output: {
        publicPath: "http://localhost:8090/",
    },
    devServer: {
        port: 8090,
        historyApiFallback: true
    },
};

module.exports = merge(commonConfig, devConfig);
