var path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.(s*)css$/,
                use: [miniCss.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new miniCss({
            filename: "style.css",
        }),
    ],
};
