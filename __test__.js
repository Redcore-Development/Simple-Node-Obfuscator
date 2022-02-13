const Compile = require("./compiler");
const path = require("path");

const options = {
    compact: true,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: false,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1
}

Compile("src/**/**/**/*.js", "dist", "src", options);