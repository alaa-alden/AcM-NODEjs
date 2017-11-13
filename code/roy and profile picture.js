function main(input) {
      var lines=input.split('\n');
      var l =parseInt(lines[0]);
      var n=parseInt(lines[1]);
      for (var i=2;i<lines.length;i++)
      {
          var w=parseInt(lines[i].split(' ')[0]);
          var h=parseInt(lines[i].split(' ')[1]);
          if(Math.min(w,h)<l)
            process.stdout.write("UPLOAD ANOTHER\n");
          else if(w==h)
                process.stdout.write("ACCEPTED\n");
               else
                process.stdout.write("CROP IT\n");

      }
}


// process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {

    stdin_input += input;
});

process.stdin.on("end", function () {
  //console.log("welcome");
   main(stdin_input);
});
