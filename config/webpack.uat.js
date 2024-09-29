const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    cache: {
        type: "filesystem",
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        })],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendors",
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "../public", "index.html"),
            favicon: path.join(__dirname, "../public", "favicon.png"),
            buildTime: new Date().toISOString(),
            minify: true,
            hash: true,
        }),
        new DotEnv({
            path: path.resolve(__dirname, "../env/.env.uat"),
            allowEmptyValues: true,
            prefix: '',
        }),
    ],
});
