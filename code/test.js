process.stdin.resume();
//start process
var input ="";
process.stdin.on(
  'data',(input1) => {
    input+=input1;
  }
);

//end process:
process.stdin.on("end",()=>{
  main(input);
})
function main(inputs){
  process.stdout.write(`welcome in node js ${inputs}`);
}
