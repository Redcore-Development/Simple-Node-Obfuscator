# **_Simple-Node-Obfuscator_**

## What it is:

A simple wrapper around the javascript-obfuscator npm pacakge that will include and produce complete code file structre.

## What it is not:

Some kind of magical obfuscator package built from scratch. 
The main goal for this module is to provide the same file structre for your obfuscated code.

```
source -> src/server/server.js
compiled -> dist/server/server.js

This also works for multiple file layers such as src/**/**/**/**/*.js.
```

## Example:

```js
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
  stringArrayThreshold: 1,
};

Compile("files/**/**/**/*.js", "dist", "files", options);
```

## Function:

```
Compile(src, dst, mainDirectory, options) => void

src -> Source directory for the JavaScript files > "src/**/**/*.js"
dst -> Destination directory for the JavaScript files > "dist"
mainDirectory -> Name of the main directory for the JavaScript files > default "src"
options -> These Options are for javascript-obfuscator npm package, you can find all the options available here: https://www.npmjs.com/package/javascript-obfuscator

```

## Output:

Example of a simple Express app.

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Hello, World!");
});

app.listen(3000, () => "Express running on port 3000");
```

Produces the following.

```js
const _0x34e9bb = _0x4cd0;
(function (_0x14af18, _0x500824) {
  const _0x5d622a = _0x4cd0;
  const _0xd00fac = _0x14af18();
  while (!![]) {
    try {
      const _0xc4164e =
        (parseInt(_0x5d622a(0x15e)) / (-0x1be0 + 0x11c9 + 0xa18)) *
          (-parseInt(_0x5d622a(0x154)) /
            (-0x19c7 * -0x1 + 0x61 * 0x5f + -0x76 * 0x86)) +
        parseInt(_0x5d622a(0x155)) / (-0x1779 + 0x909 * -0x3 + 0x3297) +
        (parseInt(_0x5d622a(0x15f)) / (0x2ac + 0x1 * 0x239b + -0x2643)) *
          (parseInt(_0x5d622a(0x158)) / (-0x26df + -0x22cd + 0xa87 * 0x7)) +
        parseInt(_0x5d622a(0x15b)) / (0x2 * -0x12b4 + 0x26ee + -0x180) +
        parseInt(_0x5d622a(0x159)) / (-0x42 * 0x5c + 0x1104 + 0x6bb) +
        -parseInt(_0x5d622a(0x152)) / (-0x1312 + -0x1d65 + 0x307f) +
        -parseInt(_0x5d622a(0x153)) / (0xbf * 0x3 + -0x1f1 + -0x1 * 0x43);
      if (_0xc4164e === _0x500824) {
        break;
      } else {
        _0xd00fac["push"](_0xd00fac["shift"]());
      }
    } catch (_0x1f6d57) {
      _0xd00fac["push"](_0xd00fac["shift"]());
    }
  }
})(_0x15a5, -0x1 * 0xd895 + -0x1969e + 0x415c6 * 0x1);
const express = require(_0x34e9bb(0x156));
const app = express();
function _0x4cd0(_0x375b4b, _0x2acc50) {
  const _0x3c0f71 = _0x15a5();
  _0x4cd0 = function (_0x38a293, _0x151924) {
    _0x38a293 = _0x38a293 - (-0x246 + 0x5 * 0x745 + -0x1 * 0x20c3);
    let _0x13ccd5 = _0x3c0f71[_0x38a293];
    return _0x13ccd5;
  };
  return _0x4cd0(_0x375b4b, _0x2acc50);
}
app[_0x34e9bb(0x161)]("/", (_0x4c51f1, _0xaf0f17) => {
  const _0x19e953 = _0x34e9bb;
  const _0x1ca2cb = { zrIfe: _0x19e953(0x163) + _0x19e953(0x15d) };
  return _0xaf0f17[_0x19e953(0x150)](-0xf63 + 0x23b + 0xdf0)[_0x19e953(0x15c)](
    _0x1ca2cb[_0x19e953(0x160)]
  );
});
function _0x15a5() {
  const _0x76ce7 = [
    "status",
    "Express\x20ru",
    "108016Biqgrx",
    "2627928UIHoST",
    "34sMNBXn",
    "107835BTATUw",
    "express",
    "ort\x203000",
    "10vGFrjx",
    "1228017DllHoi",
    "nning\x20on\x20p",
    "1116510nmShCj",
    "send",
    "ld!",
    "4694cRZKlq",
    "192020fWdnfB",
    "zrIfe",
    "get",
    "listen",
    "Hello,\x20Wor",
  ];
  _0x15a5 = function () {
    return _0x76ce7;
  };
  return _0x15a5();
}
app[_0x34e9bb(0x162)](
  -0x4 * 0x99e + 0x25e + -0x2fd2 * -0x1,
  () => _0x34e9bb(0x151) + _0x34e9bb(0x15a) + _0x34e9bb(0x157)
);
```

## Credits:

Credits go to the javascript-obfuscator team for producing such an amazing tool.

## Author:

Name: Sylvester Stephenson

Email: sylvester@redcore.co.za
