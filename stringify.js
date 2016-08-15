module.exports = function(config,configs) {
  results = "";
config.forEach((con,conind)=>{
var type = configs[conind]
results += conind;
if (type == "Ostring" || type == "Oint") {
  
  con.forEach((c)=>{
      results += " " + c
    
  })
  
  
} else if (type == "string" || type == "Jstring" || type == "int") {
  
  results += " " + con;
  
  
}
results += "\n";


});


return results;

}
