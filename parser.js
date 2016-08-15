"use strict"

module.exports = function(string,configs) {
  var results = [];
var split = string.split("\n")
split.forEach((con)=>{
  if (con.charAt(0) == "#") return;
var c = con.split(" ")
var config = c[0]
if (!configs[config]) return;

if (configs[config] == "Jstring") {
if (!c[1]) return
  var name = c.slice(1, c.length).join(' ');
  results[config] == name
} else if (configs[config] == "Ostring") {
  if (!c[1]) return
var r = [];
  for (var j in c) {
    if (j == 0) continue
    r[j - 1] = c[j]
    
  }
  results[config] = r;
} else if (configs[config] == "string") {
  if (!c[1]) return
  results[config] = c[1].toString()
} else if (configs[config] == "int") {
  if (!c[1]) return results[config] = 0
  results[config] = parseInt(c[1])
  
  
} else if (configs[config] == "Oint") {
  if (!c[1]) return results[config] = [0]
  var r = [];
  for (var j in c) {
    if (j == 0) continue
    r[j - 1] = parseInt(c[j])
    
  }
  results[config] = r;
  
}
  
  
})
return results;
}
