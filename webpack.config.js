//npm install webpack webpack-cli
// 100% client code have to need old javascript
//npm install corss-env를 설치해야 MODE가 작동함
//npm install autoprefixer
//npm install css-loader postcss-loader sass-loader
//npm install node-sass

const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const MODE = process.env.WEBPACK_ENV
const ENTRTY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); //파일 resolve
const OUTPUT_DIR = path.join(__dirname, "static") // DIR join

const config = {
    entry: ENTRTY_FILE,
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: ExtractCSS.extract([
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugin() {
                                return [autoprefixer({
                                    browsers: "cover 99.5%"
                                })];
                            }
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ])
            }
        ]
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js"
    },
    plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;