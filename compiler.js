const glob = require("glob");
const path = require("path");
const fs = require("fs");
const fse = require("fs-extra");
const JavaScriptObfuscator = require("javascript-obfuscator");

function Compile(src, dst, mainDirectory = "src", options) {
    const obfuscationResult = (code) => JavaScriptObfuscator.obfuscate(
        code,
        options ? options : {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: false,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
    );

    glob(src, dst, (err, files) => {
        let listOfJsFiles = [];
        if (err) console.error(err);
        for (let i = 0; i < files.length; i++) {
            listOfJsFiles.push(files[i]);
        }
        console.log(listOfJsFiles);
        for (let i = 0; i < listOfJsFiles.length; i++) {
            const stream = fs.readFileSync(listOfJsFiles[i], "utf8");
            const obfuscatedCode = obfuscationResult(stream);
            fse.outputFileSync(listOfJsFiles[i].replace(mainDirectory, dst), obfuscatedCode.getObfuscatedCode(), err => {
                if (err) console.error(err);
            });
        }
    });
}

module.exports = Compile;