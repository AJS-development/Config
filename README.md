[![NPM] (https://img.shields.io/badge/Module-Npm-blue.svg)] (https://www.npmjs.com/package/SmartConfig)
[![Donate] (https://img.shields.io/badge/Donate-Paypal-brightgreen.svg)] (paypal.me/andrews54757)
[![Build Status](https://travis-ci.org/AJS-development/Config.svg?branch=master)](https://travis-ci.org/AJS-development/Config)


# Config
Smart Config parser


## Usage
```
var configs = {
 hello: "Jstring", // Joined string (joining spaces EG: "hello I am andrew" -> "hello I am andrew")
 my: "Ostring", // Object string (spaces create new object EG: "hello I am andrew" -> object ["hello","I","am","andrew"]) 
 name: "string", // string (no spaces. EG: "hello i am andrew" -> "hello")
 is: "Oint", // Joined numbers (EG: "1 2 3 4 5" -> Object[1,2,3,4,5])
 andrew: "Int" // Int (EG: "1,2,3,4,5" -> 1)
}
var default = {
hello: "blah blah blah with spaces",
my: ["I","am","an","object"],
name: "Iamastring",
is: [1,2,3,4,5],
andrew: 1
}
const ConfigLoader = require('SmartConfigs')
const configLoader = new ConfigLoader(configs,default) // default is optional
```


To parse


`configLoader.parse(string)` with FS `configLoader.parse(fs.readFileSync("./myconfigfile","utf8"))`


To stringify


`configLoader.stringify(configstostringify)` with FS `fs.writeFileSync("./myconfigfile",configLoader.stringify(configstostringify))`


## Documentation



