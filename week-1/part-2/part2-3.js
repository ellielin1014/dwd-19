var fs = require('fs');
var INPUT = 'part2-3_Dark_Matter.txt';
var OUTPUT = 'part2-3_Dark_Matter.html';
var input = fs.readFileSync (INPUT, "utf-8");
var lines = input.split("\n");


fs.writeFileSync(OUTPUT, "<html><head></head><body><h1>" + lines[0] + "</h1><p>" + lines[1] + "</p><img src = " + lines[2] + "></body></html>", function(err){
  console.log("part2-3_Dark_Matter.txt is transformed to part2-3_Dark_Matter.html");
})

// fs.writeFileSync(OUTPUT, "<html><head></head><body></html>")
//
// for (var i = 0; i < lines.legth; i++) {
//   fs.appendFileSync(OUTPUT, "<h1>" + lines[i] + "</h1>");
// }

// for (var i = 0; i < lines.legth; i++) {
//   console.log("New file is created as art2-3_Dark_Matter.html");
//   fs.writeFileSync(OUTPUT, "<html><head></head><body><h1>" + lines[i] + "</h1></body></html>");

//fs.readFile(INPUT,function(error,dara){
//   var html = ""<html><head></head> + data + "</h1></body></html>"
//   fs.writeFile(OUTPUT, html,function(error2){
//     console.log('line 27');
//     if(error2){
//       console.log(error2);
//     }
//   });
// });
//
// console.log('line 34');
// }
