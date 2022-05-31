let path = require("path");
let MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.argv[process.argv.length - 1] !== "production";

console.log(isDev);

let conf = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js",
        publicPath: "/dist/",
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "."),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
                options: {
                    sourceMap: true,
                },
            },
            {
                test: /^((?!\.module).)*\.(s*)css$/,
                use: [
                    !isDev ? MiniCssExtractPlugin.loader : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.module\.(s*)css$/,
                use: [
                    !isDev ? MiniCssExtractPlugin.loader : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[local]__[sha1:hash:hex:7]",
                            },
                            url: true,
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css",
        }),
    ],
};

module.exports = (env, options) => {
    let isProd = options.mode === "production";
    conf.devtool = isProd ? false : "eval-cheap-module-source-map";
    return conf;
};
