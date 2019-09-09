//npm install webpack webpack-cli
// 100% client code have to need old javascript
const path = require("path");

const ENTRTY_FILE = path.resolve(__dirname, "assets", "js", "main.js"); //파일 resolve
const OUTPUT_DIR = path.join(__dirname, "static") // DIR join

const config = {
    entry: ENTRTY_FILE,
    output: {
        path: OUTPUT_DIR,
        filename: "[name].[format]"
    }
};

module.exports = config;