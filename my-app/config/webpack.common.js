const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    entry: {
        'index1': './src/index1.js',
        'index2': './src/index2.js',
    },
    output: {
        filename: "[name].[contenthash].js"
    },
    resolve: {
        extensions: [".js"],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                        ],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "myApp",
            remotes: {
                mfeButton: "mfeButton@http://localhost:8091/remoteEntry.js"
            }
        })
    ]
};
