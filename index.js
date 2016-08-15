"use strict"
const parser = require('./parser.js')
const stringify = require ('./stringify.js')

module.exports = class ConfigLoader {
constructor(configs) {
this.configs = configs
}
parse(string) {
  return parser(string,this.configs)
  
}
stringify(config) {
  
  return stringify(config)
}
stringifyNonoverride(config,add) {
  
  
}




}



