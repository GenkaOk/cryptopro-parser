module.exports = {
    mode: 'production',
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist/",
        library: 'cryptoProParser',
        filename: 'cp_parser.min.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ["/node_modules/"],
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
        ],
    },

}