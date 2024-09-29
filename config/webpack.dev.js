const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public", "index.html"),
            favicon: path.join(__dirname, "../public", "favicon.png"),
            buildTime: new Date().toISOString(),
        }),
        new DotEnv({
            path: path.resolve(__dirname, "../env/.env.dev"),
            allowEmptyValues: true,
            prefix: '',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
        static: {
            directory: path.join(__dirname, '../build'),
            publicPath: "/"
        }
    }
});
