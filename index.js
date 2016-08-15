"use strict"
const parser = require('./parser.js')
const stringify = require ('./stringify.js')

module.exports = class ConfigLoader {
constructor(configs) {
this.configs = configs
}
parse(string) {
  return parser(string)
  
}
stringify(config) {
  
  return stringify(config)
}
stringifyConcat(config,add) {
  
  
}




}



