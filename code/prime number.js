
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
  var prime=[];
  prime[0]=prime[1]=false;
  const number=parseInt(input.split());
  for (var i=2;i<=number;i++){
      prime[i]=true;
  }

  // start process :
 for ( i=2;i<=number;i++){
    if (prime[i]===false)continue;
    for (var j=i+i;j<=number;j+=i)
        prime[j]=false;
      }
      for( i=2;i<=number;i++){
          if (prime[i]===true)
            process.stdout.write(i+" ");
      }
      process.stdout.write("\n")
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
function BulidPrime() {

}

// Write your code here
