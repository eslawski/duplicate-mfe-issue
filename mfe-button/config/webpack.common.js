const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    entry: ["./src/index.js"],
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
            name: "mfeButton",
            filename: "remoteEntry.js",
            exposes: {
                "./MfeButton": "./src/bootstrap",
            },

            // The presence of this `shared` config causes the "share scope" issue to arise
            shared: [
                "faker"
            ]
        })
    ]
};
